import { useState, useEffect } from "react";

export function useAge(birthDateIso: string): string {
  const [age, setAge] = useState("");

  useEffect(() => {
    const birth = new Date(birthDateIso);
    const frame = requestAnimationFrame(function tick() {
      const ms = Date.now() - birth.getTime();
      setAge((ms / (365.25 * 24 * 60 * 60 * 1000)).toFixed(9));
      requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(frame);
  }, [birthDateIso]);

  return age;
}
