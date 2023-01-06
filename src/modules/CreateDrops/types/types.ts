export interface IFlowPage {
  name: string;
  description: string;
  component: React.ReactNode; // forms, summary. etc
}

export interface SummaryItem {
  name: string;
  value: string | number;
}

export interface PaymentItem {
  name: string;
  total: number;
  isDiscount?: boolean;
  discountText?: string;
  helperText?: string;
}

export interface PaymentData {
  costsData: PaymentItem[];
  totalCost: number;
  confirmationText: string;
}
