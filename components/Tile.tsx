"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState, type CSSProperties } from "react";
import type { HubLink } from "@/data/links";
import Icon from "./Icon";
import SlotText from "./SlotText";
import styles from "./hub.module.css";

export default function Tile({
  link,
  index,
}: {
  link: HubLink;
  index: number;
}) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [slot, setSlot] = useState(0);

  const style = {
    "--span-d": link.span.desktop,
    "--span-m": link.span.mobile,
  } as React.CSSProperties as import("motion/react").MotionStyle;

  const replay = () => {
    setHovered(true);
    setSlot((n) => n + 1);
  };

  return (
    <motion.a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      aria-label={`${link.label}${link.description ? ` — ${link.description}` : ""}`}
      className={`${styles.tile} ${styles[`tone_${link.tone}`]}`}
      style={style}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduce ? undefined : { y: -3, scale: 1.01, transition: { duration: 0.15, ease: "easeOut" } }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      onHoverStart={replay}
      onHoverEnd={() => setHovered(false)}
      onFocus={replay}
      onBlur={() => setHovered(false)}
    >
      <motion.span
        className={styles.tileIcon}
        animate={
          reduce
            ? undefined
            : { rotate: hovered ? -8 : 0, scale: hovered ? 1.1 : 1 }
        }
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      >
        <Icon name={link.icon} />
      </motion.span>

      <span className={styles.tileBody}>
        <span className={styles.tileTitle}>
          <SlotText text={link.label} trigger={slot} />
        </span>
        {link.description && (
          <span className={styles.tileDesc}>{link.description}</span>
        )}
      </span>

      <motion.span
        className={styles.tileArrow}
        aria-hidden
        animate={
          reduce ? undefined : { x: hovered ? 3 : 0, y: hovered ? -3 : 0 }
        }
      >
        <ArrowUpRight size={16} />
      </motion.span>
    </motion.a>
  );
}
