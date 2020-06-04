import { useState, useEffect } from "react";
import axios from "axios";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((data) => {
        setIsLoading(false);
        setFetchedData(data);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, dependencies);

  return [isLoading, fetchedData];
};
