import { Button, Flex, Input } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { IconBox } from '@/common/components/IconBox';
import { LinkIcon } from '@/common/components/Icons';
import { FormControl } from '@/common/components/FormControl';
import { Checkboxes } from '@/common/components/Checkboxes';
import { WalletBalanceInput } from '@/common/components/WalletBalanceInput';

import { TOKEN_BALANCES, WALLET_OPTIONS } from './data';

export const CreateTokenDropForm = () => {
  const {
    setValue,
    handleSubmit,
    control,
    watch,
    formState: { errors, isDirty },
  } = useFormContext();

  const [selectedFromWallet, amountPerLink, totalLinks] = watch([
    'selectedFromWallet',
    'amountPerLink',
    'totalLinks',
  ]);

  const totalCost = useMemo(() => {
    if (totalLinks && amountPerLink) {
      return totalLinks * amountPerLink;
    }
    return 0;
  }, [amountPerLink, totalLinks]);

  const handleWalletChange = (walletSymbol: string) => {
    const { symbol, amount } = TOKEN_BALANCES.find((wallet) => wallet.symbol === walletSymbol);
    setValue('selectedFromWallet', { symbol, amount });
  };

  const handleSubmitClick = (data) => console.log(data); // temporary workaround

  console.log(errors);

  return (
    <IconBox icon={<LinkIcon />} maxW={{ base: '21.5rem', md: '36rem' }} mx="auto">
      <form onSubmit={handleSubmit(handleSubmitClick)}>
        <Controller
          control={control}
          name="dropName"
          render={({ field, fieldState: { error } }) => {
            return (
              <FormControl
                errorText={error?.message}
                helperText="Will be shown on the claim page"
                label="Token Drop name"
              >
                <Input placeholder="Star Invasion Beta Invites" type="text" {...field} />
              </FormControl>
            );
          }}
        />

        <Controller
          control={control}
          name="totalLinks"
          render={({ field, fieldState: { error } }) => (
            <FormControl errorText={error?.message} label="Number of links">
              <Input
                placeholder="1 - 10,000"
                type="number"
                {...field}
                onChange={(e) => field.onChange(+e.target.value)}
              />
            </FormControl>
          )}
        />

        <Controller
          control={control}
          name="amountPerLink"
          render={({ field, fieldState: { error } }) => (
            <FormControl errorText={error?.message} label="Amount per link">
              <WalletBalanceInput {...field} onChange={(e) => field.onChange(+e.target.value)}>
                <WalletBalanceInput.TokenMenu
                  selectedWallet={selectedFromWallet}
                  tokens={TOKEN_BALANCES}
                  onChange={handleWalletChange}
                />
                <WalletBalanceInput.CostDisplay
                  balanceAmount={selectedFromWallet.amount}
                  symbol={selectedFromWallet.symbol}
                  totalCost={totalCost}
                />
              </WalletBalanceInput>
            </FormControl>
          )}
        />

        <Controller
          control={control}
          name="selectedToWallets"
          render={({ fieldState: { error } }) => {
            console.log(error);
            return (
              <FormControl
                errorText={error?.message}
                helperText="Choose which wallet to set people up with."
                label="Wallets"
              >
                <Checkboxes
                  defaultValues={['near_wallet']}
                  items={WALLET_OPTIONS}
                  onChange={(value) => {
                    setValue('selectedToWallets', value);
                    console.log(value);
                  }}
                />
              </FormControl>
            );
          }}
        />

        <Controller
          control={control}
          name="redirectLink"
          render={({ field, fieldState: { error } }) => (
            <FormControl
              errorText={error?.message}
              helperText="Where should the user be sent after signing up?"
              label="Redirect link (optional)"
            >
              <Input placeholder="Enter a link" type="text" {...field} />
            </FormControl>
          )}
        />
        <Flex justifyContent="flex-end">
          <Button disabled={!isDirty || Object.keys(errors).length > 0} mt="10" type="submit">
            Continue to summary
          </Button>
        </Flex>
      </form>
    </IconBox>
  );
};
