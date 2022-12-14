import { Button, VStack } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { useClaimForm } from '../ClaimFormContext';

import { NameField } from './fields/NameField';
import { EmailField } from './fields/EmailField';

export interface ClaimTicketFormFieldTypes {
  name: string;
  email: string;
}

interface ClaimTicketFormProps {}

export const ClaimTicketForm = ({}: ClaimTicketFormProps) => {
  const { getClaimFormData } = useClaimForm();
  const { handleSubmit, control } = useFormContext<ClaimTicketFormFieldTypes>();

  const handleSubmitClick = () => {
    return console.log(getClaimFormData());
  };

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit(handleSubmitClick)}>
      <VStack mb="8" spacing="4" w="full">
        <NameField control={control} />
        <EmailField control={control} />
      </VStack>
      <Button type="submit" w="full">
        Next
      </Button>
    </form>
  );
};
