"use client";

import { motion, useReducedMotion } from "motion/react";
import { useMemo } from "react";

const POOL = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

type Props = {
  text: string;
  /** Change this value to replay the slot animation (e.g. on hover). */
  trigger?: number;
  className?: string;
};

/**
 * Slot-machine style text: each character rolls through a short strip of
 * random letters and lands on the real one. Built on `motion` only.
 */
export default function SlotText({ text, trigger = 0, className }: Props) {
  const reduce = useReducedMotion();

  const strips = useMemo(
    () =>
      Array.from(text).map((ch, i) => {
        if (ch === " ") return [" "];
        const filler = Array.from(
          { length: 3 + (i % 3) },
          (_, k) => POOL[(i * 7 + k * 13 + trigger * 5) % POOL.length],
        );
        return [...filler, ch];
      }),
    [text, trigger],
  );

  if (reduce) return <span className={className}>{text}</span>;

  return (
    <span className={className} aria-label={text}>
      {strips.map((strip, i) => (
        <span
          key={`${i}-${trigger}`}
          aria-hidden
          style={{
            position: "relative",
            display: "inline-block",
            height: "1.2em",
            lineHeight: "1.2em",
            overflow: "hidden",
            verticalAlign: "top",
          }}
        >
          {/* Invisible copy of the final character: it alone sets the box width,
              so narrow letters don't inherit the width of wide filler letters. */}
          <span style={{ visibility: "hidden" }}>
            {strip[strip.length - 1] === " " ? " " : strip[strip.length - 1]}
          </span>
          <motion.span
            style={{ display: "block", position: "absolute", left: 0, top: 0 }}
            initial={{ y: 0 }}
            animate={{ y: `-${(strip.length - 1) * 1.2}em` }}
            transition={{ duration: 0.45 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            {strip.map((c, k) => (
              <span key={k} style={{ display: "block", height: "1.2em" }}>
                {c === " " ? " " : c}
              </span>
            ))}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
