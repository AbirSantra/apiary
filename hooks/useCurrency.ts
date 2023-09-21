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

const useCurrency = ({ base }: { base: string }) => {
  const [ratesData, setRatesData] = React.useState<CurrencyExchangeDataType>(
    {},
  );
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<CurrencyErrorType | null>(null);

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

    fetchRates();
  }, [base]);

  return { ratesData, loading, error };
};

export default useCurrency;
