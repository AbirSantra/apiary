"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  currencyList,
  symbolCurrencyMap,
} from "@/constants/symbol-currency-map";
import { Input } from "./ui/input";
import { CurrencyExchangeDataType } from "@/types/currency-types";

const CurrencyMain = ({
  base,
  baseValue,
  target,
  targetValue,
  onBaseChange,
  onTargetChange,
  onBaseValueChange,
  onTargetValueChange,
  ratesData,
  loading,
}: {
  base: string;
  baseValue: string | number;
  target: string;
  targetValue: string | number;
  onBaseChange: (value: string) => void;
  onTargetChange: (value: string) => void;
  onBaseValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTargetValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ratesData: CurrencyExchangeDataType;
  loading: boolean;
}) => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-lg bg-white p-6 dark:bg-slate-800">
      <p className="text-sm font-semibold uppercase text-indigo-500">
        Currency Converter
      </p>
      <div className="mt-4 flex h-full w-full flex-col  items-center justify-center gap-8 sm:gap-16 md:flex-row">
        <div className="flex w-full flex-col gap-2">
          <p className="ml-1 text-xs font-semibold uppercase text-slate-500">
            FROM
          </p>
          <Select value={base} defaultValue={base} onValueChange={onBaseChange}>
            <SelectTrigger className="flex h-fit items-center gap-4 text-base font-medium text-slate-400 focus:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-slate-700 dark:bg-slate-800">
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end">
              {currencyList.map((symbol) => (
                <SelectItem value={symbol} key={symbol}>
                  {symbol} -{" "}
                  {symbolCurrencyMap[symbol as keyof typeof symbolCurrencyMap]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="number"
            placeholder="0.00"
            className="focus-visible:ring-offset- h-fit border-none py-1 text-5xl font-light outline-none focus:outline-0 focus-visible:ring-0 dark:bg-slate-800 sm:text-6xl"
            value={baseValue}
            onChange={onBaseValueChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <p className="ml-1 text-xs font-semibold uppercase text-slate-500">
            TO
          </p>
          <Select
            value={target}
            defaultValue={target}
            onValueChange={onTargetChange}
          >
            <SelectTrigger className="flex h-fit items-center gap-4 text-base font-medium text-slate-400 focus:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-slate-700 dark:bg-slate-800">
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end">
              {currencyList.map((symbol) => (
                <SelectItem value={symbol} key={symbol}>
                  {symbol} -{" "}
                  {symbolCurrencyMap[symbol as keyof typeof symbolCurrencyMap]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="number"
            placeholder="0.00"
            className="focus-visible:ring-offset- h-fit border-none py-1 text-5xl font-light focus:outline-0 focus-visible:ring-0 dark:bg-slate-800 sm:text-6xl"
            value={targetValue}
            onChange={onTargetValueChange}
          />
        </div>
      </div>
      <div className="my-4 flex flex-col justify-center gap-4">
        <p className="text-sm font-medium uppercase text-slate-400">
          Current Rate:{" "}
          <span className="text-sm text-indigo-500">
            {ratesData[target]?.toFixed(3)}
          </span>
        </p>
        <p className="text-2xl font-light text-slate-400">
          {baseValue} {base} equals {targetValue} {target}
        </p>
      </div>
    </div>
  );
};

export default CurrencyMain;
