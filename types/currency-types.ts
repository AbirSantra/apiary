export interface CurrencyExchangeDataType {
  [currency: string]: number;
}

export interface CurrencyRateType {
  currency: string;
  rate: number;
}

export interface CurrencyErrorType {
  error: boolean;
  status: number;
  message: string;
  description: string;
}
