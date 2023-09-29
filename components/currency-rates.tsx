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
    <div className="flex h-full w-full flex-col gap-8 rounded-lg bg-white p-6 dark:bg-slate-800">
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
        {loading &&
          currencyList.map((currency, index) => (
            <CurrencyCardSkeleton key={index} />
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
    <div className="flex h-full w-full items-center justify-between rounded-md bg-slate-50 p-4 text-xs dark:border dark:border-slate-700 dark:bg-slate-800">
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

const CurrencyCardSkeleton = () => {
  return (
    <div className="flex h-full w-full animate-pulse items-center justify-between rounded-md p-4 text-xs dark:border dark:border-slate-700">
      <div className="flex h-full w-full flex-col gap-1">
        <p className="h-6 w-12 rounded-lg bg-slate-200 text-base font-bold"></p>
        <p className="h-4 w-2/4 rounded-md bg-slate-200"></p>
      </div>
      <p className="h-6 w-16 rounded-lg bg-slate-200 text-base font-bold text-indigo-500"></p>
    </div>
  );
};

export default CurrencyRates;
