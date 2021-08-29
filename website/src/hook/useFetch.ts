import React from 'react';

type UseFetchResult<F> = {
  error?: any;
  response?: F | null;
};

export function useFetch<T>(url: string, options?: RequestInit): UseFetchResult<T> {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error };
}
