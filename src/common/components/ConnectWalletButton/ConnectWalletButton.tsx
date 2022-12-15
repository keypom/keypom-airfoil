import { Button, ButtonProps } from "@chakra-ui/react";

interface ConnectWalletButtonProps extends ButtonProps {}

export const ConnectWalletButton = ({ ...props }: ConnectWalletButtonProps) => {
  return (
    <Button
      fontSize={{ sm: "sm", md: "md" }}
      px={{ sm: "2", md: "6" }}
      variant="primary"
      {...props}
    >
      Connect Wallet
    </Button>
  );
};