import { Control, Controller } from 'react-hook-form';

import { TextInput } from '@/common/components/TextInput';

import { ClaimTicketFormFieldTypes } from '../ClaimTicketForm';

interface EmailFieldProps {
  control: Control<ClaimTicketFormFieldTypes, any>;
}

const FIELD_NAME = 'email';

export const EmailField = ({ control }: EmailFieldProps) => {
  return (
    <Controller
      control={control}
      name={FIELD_NAME}
      render={({ field, fieldState: { error } }) => (
        <TextInput
          errorMessage={error?.message}
          isInvalid={!!error?.message}
          label="Email"
          placeholder="johndoe@mail.com"
          {...field}
        />
      )}
    />
  );
};
