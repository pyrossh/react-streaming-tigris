import { useState, useCallback } from 'react';
import { useData } from 'telefunc/react-streaming';

const useQuery = (fn) => {
  const [data, setData] = useState(useData(fn));
  const [isRefetching, setIsRefetching] = useState(false);
  const [err, setErr] = useState(null);
  const refetch = useCallback(async () => {
    try {
      setIsRefetching(true);
      setErr(null);
      setData(await fn());
    } catch (err) {
      setErr(err);
      throw err;
    } finally {
      setIsRefetching(false);
    }
  }, [fn])
  return {
    data,
    isRefetching,
    err,
    refetch,
  }
}

export default useQuery;