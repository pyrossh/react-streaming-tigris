import { useState, useCallback } from 'react';

const useMutation = (fn) => {
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

export default useMutation;