import { useEffect, useRef } from "react";

export default function useDebounce(fn: any, delay: number) {
  const timeoutRef = useRef(0);

  function debouncedFn(...args: any) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return debouncedFn;
}
