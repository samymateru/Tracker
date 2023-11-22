import { useRef, useEffect } from "react";
export const useEffectAsync = (effect, deps) => {
    
    const ref = useRef();
    useEffect(() => {
      effect()
        .then((result) => ref.current = result);
        
      return () => {
        const result = ref.current;
        if (result) {
          result();
        }
      };
    }, [...deps]);
  };