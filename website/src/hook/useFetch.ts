import { useState, useEffect } from 'react';

type UseFetchResult<F> = {
  error?: any;
  response?: F | null;
};

export function useFetch<T>(url: string, options?: RequestInit): UseFetchResult<T> {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        if (mounted) {
          setResponse(json);
        }
      } catch (error) {
        if (mounted) {
          setError(error);
        }
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  return { response, error };
}
