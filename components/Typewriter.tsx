"use client";

import { useEffect, useState } from "react";
import TypewriterEffect from "typewriter-effect";
import { useReducedMotion } from "motion/react";

export default function Typewriter({ strings }: { strings: string[] }) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (reduce || !mounted) return <span>{strings[0]}</span>;

  return (
    <div role="text" aria-label={strings.join(", ")}>
      <TypewriterEffect
        options={{
          strings,
          autoStart: true,
          loop: true,
          delay: 55,
          deleteSpeed: 30,
          cursor: "▍",
        }}
      />
    </div>
  );
}
