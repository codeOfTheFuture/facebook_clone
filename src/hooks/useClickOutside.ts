import { useEffect, useRef } from "react";

function useEventListener(eventType: any, callback: any, element = window) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e: any) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}

export default function useClickOutside(ref: any, cb: any) {
  useEventListener(
    "click",
    (e: any) => {
      if (ref.current === null || ref.current.contains(e.target)) return;
      cb(e);
    },
    window
  );
}
