import React from "react";
import axios from "axios";
import {
  CurrencyErrorType,
  CurrencyExchangeDataType,
} from "@/types/currency-types";

const API_KEY = process.env.NEXT_PUBLIC_EXCHANGERATE_APPID;
const BASE_URL = `https://openexchangerates.org/api/latest.json`;

const convertRatesToBase = ({
  rates,
  baseCurrency,
}: {
  rates: CurrencyExchangeDataType;
  baseCurrency: string;
}): CurrencyExchangeDataType => {
  const baseRate = rates[baseCurrency];
  const ratesInBase: CurrencyExchangeDataType = {};

  for (const currency in rates) {
    ratesInBase[currency] = rates[currency] / baseRate;
  }

  return ratesInBase;
};

const useCurrency = () => {
  const [ratesData, setRatesData] = React.useState<CurrencyExchangeDataType>(
    {},
  );
  const [base, setBase] = React.useState<string>("INR");
  const [target, setTarget] = React.useState<string>("USD");
  const [amount, setAmount] = React.useState<number>(1);
  const [rate, setRate] = React.useState<number>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<CurrencyErrorType | null>(null);
  const [baseChange, setBaseChange] = React.useState(true);

  React.useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      setError(null);

      try {
        console.log("Fetching Rates");
        const response = await axios(BASE_URL, {
          params: {
            app_id: API_KEY,
            symbols: "INR,USD,AUD,CAD,EUR,CNY,GBP,JPY,SGD",
          },
        });

        const ratesInBase = convertRatesToBase({
          rates: response.data.rates,
          baseCurrency: base,
        });

        setRatesData(ratesInBase);
        setLoading(false);
      } catch (error: any) {
        setError(error.response.data);
        setLoading(false);
      }
    };

    // fetchRates();
  }, [base]);

  let baseValue, targetValue;
  if (baseChange) {
    targetValue = (amount * ratesData[target]).toFixed(3);
    baseValue = amount;
  } else {
    baseValue = (amount / ratesData[target]).toFixed(3);
    targetValue = amount;
  }

  const onBaseChange = (value: string) => {
    setBase(value);
  };

  const onTargetChange = (value: string) => {
    setTarget(value);
  };

  const onBaseValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value, 10));
    setBaseChange(true);
  };

  const onTargetValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value, 10));
    setBaseChange(false);
  };

  return {
    ratesData,
    loading,
    error,
    base,
    setBase,
    baseValue,
    targetValue,
    onTargetChange,
    onBaseValueChange,
    onTargetValueChange,
    target,
    onBaseChange,
  };
};

export default useCurrency;
