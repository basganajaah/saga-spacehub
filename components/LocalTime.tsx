"use client";

import { useEffect, useState } from "react";
import styles from "./hub.module.css";

export default function LocalTime({
  timeZone = "Asia/Jakarta",
  place,
}: {
  timeZone?: string;
  place: string;
}) {
  const [wib, setWib] = useState("");
  const [utc, setUtc] = useState("");

  useEffect(() => {
    const fmtWIB = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    });
    const fmtUTC = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    });
    const tick = () => {
      const now = new Date();
      setWib(fmtWIB.format(now));
      setUtc(fmtUTC.format(now));
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!wib) return <span>{place}</span>;

  return (
    <>
      <span>{wib} WIB</span>
      <span className={styles.statusDivider} aria-hidden>
        ·
      </span>
      <span>{utc} UTC</span>
      <span className={styles.statusDivider} aria-hidden>
        ·
      </span>
      <span>{place}</span>
    </>
  );
}
