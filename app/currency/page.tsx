"use client";

import CurrencyMain from "@/components/currency-main";
import CurrencyRates from "@/components/currency-rates";
import { ScrollArea } from "@/components/ui/scroll-area";
import useCurrency from "@/hooks/useCurrency";
import React from "react";

const Currency = () => {
  const {
    base,
    baseValue,
    targetValue,
    onTargetChange,
    onBaseValueChange,
    onTargetValueChange,
    target,
    onBaseChange,
    ratesData,
    loading,
  } = useCurrency();
  return (
    <ScrollArea className="h-full w-full">
      <div className="padding-x padding-y relative mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-[1200px] flex-col gap-4">
        <CurrencyMain
          base={base}
          baseValue={baseValue}
          target={target}
          targetValue={targetValue}
          onBaseChange={onBaseChange}
          onTargetChange={onTargetChange}
          onBaseValueChange={onBaseValueChange}
          onTargetValueChange={onTargetValueChange}
          ratesData={ratesData}
          loading={loading}
        />
        <CurrencyRates ratesData={ratesData} loading={loading} />
      </div>
    </ScrollArea>
  );
};

export default Currency;
