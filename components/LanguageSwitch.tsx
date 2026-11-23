"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import styles from "./hub.module.css";

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = (nextLocale: "en" | "id") => {
    if (nextLocale !== locale) {
      router.replace(pathname, { locale: nextLocale });
    }
  };

  return (
    <div className={styles.langSwitch} role="group" aria-label="Language selection">
      <button
        type="button"
        className={`${styles.langBtn} ${locale === "en" ? styles.langActive : ""}`}
        onClick={() => toggle("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <span className={styles.langDivider} aria-hidden>
        |
      </span>
      <button
        type="button"
        className={`${styles.langBtn} ${locale === "id" ? styles.langActive : ""}`}
        onClick={() => toggle("id")}
        aria-pressed={locale === "id"}
      >
        ID
      </button>
    </div>
  );
}
