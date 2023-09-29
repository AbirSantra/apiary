import {
  currencyList,
  symbolCurrencyMap,
} from "@/constants/symbol-currency-map";
import { CurrencyExchangeDataType } from "@/types/currency-types";
import React from "react";

const CurrencyRates = ({
  ratesData,
  loading,
}: {
  ratesData: CurrencyExchangeDataType;
  loading: boolean;
}) => {
  return (
    <div className="flex h-full w-full flex-col gap-8 rounded-lg bg-white p-6">
      <p className="text-sm font-semibold uppercase text-indigo-500">
        Other Rates
      </p>
      <div className="grid h-full w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {!loading &&
          currencyList.map((currency, index) => (
            <CurrencyCard
              symbol={currency}
              rate={ratesData[currency]}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

const CurrencyCard = ({
  symbol,
  rate = 0,
}: {
  symbol: string;
  rate: number;
}) => {
  return (
    <div className="flex h-full w-full items-center justify-between rounded-md bg-slate-50 p-4 text-xs">
      <div className="flex flex-col">
        <p className="text-lg font-bold">{symbol}</p>
        <p className="text-slate-500">
          {symbolCurrencyMap[symbol as keyof typeof symbolCurrencyMap]}
        </p>
      </div>
      <p className="text-2xl font-light text-indigo-500">{rate.toFixed(3)}</p>
    </div>
  );
};

export default CurrencyRates;
