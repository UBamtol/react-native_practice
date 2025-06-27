import { useEffect } from 'react';

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setData(null);

      const result = await fetchFunction();
      setData(result);
    } catch (error) {
      //@ts-ignore
      setError(error instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setLoading(false);
    }
  };
  const reset = () => {
    setData(null);
    setLoading(false);
    setError(null);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, []);

  return { data, error, loading, refeth: fetchData, reset };
};
