"use client";

import CurrencyMain from "@/components/currency-main";
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
  } = useCurrency();
  return (
    <ScrollArea className="h-full w-full">
      <div className="padding-x padding-y relative mx-auto h-[calc(100dvh-4rem)] w-full max-w-[1200px]">
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
        />
        <div>Side</div>
      </div>
    </ScrollArea>
  );
};

export default Currency;
