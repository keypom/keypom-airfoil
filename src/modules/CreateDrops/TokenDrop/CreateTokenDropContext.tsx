import React, { createContext, PropsWithChildren, useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { PaymentData, PaymentItem, SummaryItem } from '../types/types';

import { WALLET_TOKENS } from './data';

const CreateTokenDropContext = createContext(null);

// Matches with optional protocol and URL with one dot
const urlRegex = /(?:(?:https?:\/\/)?[\w.-]*\.[\w]{2,3})/;

const schema = z.object({
  dropName: z.string().min(1, 'Drop name required'),
  selectedFromWallet: z.object({
    symbol: z.string(),
    amount: z.string(),
  }),
  selectedToWallets: z.array(z.string().min(1)).min(1, 'At least one wallet is required'),
  totalLinks: z
    .number({ invalid_type_error: 'Number of links required' })
    .positive()
    .min(1, 'Required'),
  amountPerLink: z.number({ invalid_type_error: 'Amount required' }).gt(0),
  redirectLink: z
    .union([z.string().regex(urlRegex, 'Please enter a valid url'), z.string().length(0)])
    .optional(),
});

type Schema = z.infer<typeof schema>;

// TODO: this is only a mock implementation of the backend api
const createLinks = async () => {
  await new Promise((res) => setTimeout(res, 2000));
  return {
    success: true,
  };
};

/**
 *
 * Context for managing form state
 */
export const CreateTokenDropProvider = ({ children }: PropsWithChildren) => {
  const { trigger, data } = useSWRMutation('/api/drops/tokens', createLinks);
  const methods = useForm<Schema>({
    mode: 'onChange',
    defaultValues: {
      dropName: '',
      selectedFromWallet: { symbol: WALLET_TOKENS[0].symbol, amount: WALLET_TOKENS[0].amount },
      selectedToWallets: [],
      totalLinks: undefined,
      amountPerLink: undefined,
      redirectLink: '',
    },
    resolver: zodResolver(schema),
  });

  const getSummaryData = (): SummaryItem[] => {
    const { getValues } = methods;
    const [dropName, totalLinks, amountPerLink, redirectLink, selectedFromWallet] = getValues([
      'dropName',
      'totalLinks',
      'amountPerLink',
      'redirectLink',
      'selectedFromWallet',
    ]);

    return [
      {
        name: 'Token Drop name',
        value: dropName,
      },
      {
        name: 'Amount per link',
        value: `${amountPerLink} ${selectedFromWallet.symbol}`,
      },
      {
        name: 'Number of links',
        value: totalLinks,
      },
      {
        name: 'Redirect link',
        value: redirectLink,
      },
    ];
  };

  const getPaymentData = (): PaymentData => {
    const { totalLinks, amountPerLink } = methods.getValues();

    // TODO: assuming this comes from backend
    const totalLinkCost = totalLinks * amountPerLink;
    const NEARNetworkFee = 50.15;
    const totalCost = totalLinkCost + NEARNetworkFee;
    const costsData: PaymentItem[] = [
      {
        name: 'Link cost',
        total: totalLinkCost,
        helperText: `${totalLinks} x ${amountPerLink}`,
      },
      {
        name: 'NEAR network fees',
        total: NEARNetworkFee,
      },
      {
        name: 'Keypom fee',
        total: 0,
        isDiscount: true,
        discountText: 'Early bird discount',
      },
    ];

    const confirmationText = `Creating ${totalLinks} for ${totalCost} NEAR`;

    return { costsData, totalCost, confirmationText };
  };

  const handleDropConfirmation = () => {
    // TODO: send transaction/request to backend
    trigger();
  };

  const createLinksSWR = {
    data,
    handleDropConfirmation,
  };

  return (
    <CreateTokenDropContext.Provider
      value={{ getSummaryData, getPaymentData, handleDropConfirmation, createLinksSWR }}
    >
      <FormProvider {...methods}>{children}</FormProvider>
    </CreateTokenDropContext.Provider>
  );
};

export const useCreateTokenDropContext = () => useContext(CreateTokenDropContext);
