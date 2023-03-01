import { useState, useCallback } from 'react';
import { useData } from 'telefunc/react-streaming';

export const useQuery = (fn) => {
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

export const useMutation = (fn) => {
  const [isMutating, setIsMutating] = useState(false);
  const [err, setErr] = useState(null);
  const mutate = useCallback(async (params) => {
    try {
      setIsMutating(true);
      setErr(null);
      await fn(params);
    } catch (err) {
      setErr(err)
      throw err;
    } finally {
      setIsMutating(false);
    }
  }, [fn])
  return {
    mutate,
    isMutating,
    err,
  }
}