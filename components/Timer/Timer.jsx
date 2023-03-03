import { useState, useEffect } from 'react';

export default function Timer() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const ref = setInterval(() => {
      setCounter((c) => c + 1);
    }, 100);
    return () => {
      clearInterval(ref);
    }
  }, []);
  return (
    <div>
      <p>(This page is interactive while data is loading: {counter})</p>
    </div>
  );
}