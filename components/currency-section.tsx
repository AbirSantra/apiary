"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import useCurrency from "@/hooks/useCurrency";
import { symbolCurrencyMap } from "@/constants/symbol-currency-map";
import { currencyList } from "@/constants/symbol-currency-map";
import { CurrencyExchangeDataType } from "@/types/currency-types";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CurrencySection = () => {
  const [symbol, setSymbol] = React.useState<string>("INR");
  const { ratesData, loading, error, base, setBase } = useCurrency();
  // console.log("Rates: ", ratesData);
  // console.log("Currency Error: ", error);

  const onBaseChange = (value: string) => {
    setBase(value);
  };

  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-lg bg-white p-6 dark:bg-slate-800">
      <div className="flex w-full items-center justify-between">
        <p className="text-sm font-semibold uppercase text-indigo-500">
          Exchange Rates
        </p>
        <Select value={base} defaultValue={base} onValueChange={onBaseChange}>
          <SelectTrigger className="flex h-fit w-fit items-center gap-2 border-none  p-0 text-xs font-medium text-slate-400 focus:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-800">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="INR">INR</SelectItem>
            <SelectItem value="AUD">AUD</SelectItem>
            <SelectItem value="CAD">CAD</SelectItem>
            <SelectItem value="CNY">CNY</SelectItem>
            <SelectItem value="EUR">EUR</SelectItem>
            <SelectItem value="GBP">GBP</SelectItem>
            <SelectItem value="JPY">JPY</SelectItem>
            <SelectItem value="SGD">SGD</SelectItem>
            <SelectItem value="USD">USD</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex h-full w-full flex-col justify-between divide-y">
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
      <Button className="bg-indigo-500 hover:bg-indigo-700" asChild>
        <Link
          href="/currency"
          className="flex h-fit w-fit items-center justify-center gap-1 self-end  text-xs text-white"
        >
          <span>Convert Rates</span>
          <ArrowRight size={14} />
        </Link>
      </Button>
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
    <div className="flex h-full w-full items-center justify-between text-xs">
      <div className="flex flex-col">
        <p className="text-sm font-bold">{symbol}</p>
        <p className="text-slate-500">
          {symbolCurrencyMap[symbol as keyof typeof symbolCurrencyMap]}
        </p>
      </div>
      <p className="text-base font-bold text-indigo-500">{rate.toFixed(3)}</p>
    </div>
  );
};

const CurrencyCardSkeleton = () => {
  return (
    <div className="flex h-full w-full animate-pulse items-center justify-between text-xs">
      <div className="flex w-full flex-col gap-1">
        <p className="h-6 w-12 rounded-lg bg-slate-200 text-base font-bold"></p>
        <p className="h-4 w-2/4 rounded-md bg-slate-200"></p>
      </div>
      <p className="h-6 w-16 rounded-lg bg-slate-200 text-base font-bold text-indigo-500"></p>
    </div>
  );
};

export default CurrencySection;
