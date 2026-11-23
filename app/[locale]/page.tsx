import {
  extraLinks,
  links,
  profile,
  type HubLink,
  type MiniLink,
} from "@/data/links";
import Icon from "@/components/Icon";
import LocalTime from "@/components/LocalTime";
import Tile from "@/components/Tile";
import Typewriter from "@/components/Typewriter";
import LanguageSwitch from "@/components/LanguageSwitch";
import styles from "@/components/hub.module.css";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHeader = await getTranslations("Header");
  const tProfile = await getTranslations("Profile");
  const tLinks = await getTranslations("Links");
  const tFooter = await getTranslations("Footer");

  const year = new Date().getFullYear();

  const roles = tProfile.raw("roles") as string[];

  const translatedLinks = links.map((l) => ({
    ...l,
    label: tLinks(`${l.id}.label`),
    description: tLinks(`${l.id}.description`),
  }));

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.topbar}>
          <div className={styles.brandGroup}>
            <span className={styles.brand}>
              <span className={styles.monogram} aria-hidden>
                <img
                  src="/icons/icon.png"
                  alt="Saga Spacehub"
                  className={styles.monogramImg}
                />
              </span>
              {tHeader("brand")} / {year}
            </span>
            <LanguageSwitch />
          </div>

          <span className={styles.status}>
            <span className={styles.dot} aria-hidden />
            <span>{tProfile("availability")}</span>
            <span className={styles.statusDivider} aria-hidden>
              ·
            </span>
            <LocalTime
              timeZone={profile.timeZone}
              place={tProfile("location")}
            />
          </span>
        </header>

        <section className={styles.profile} aria-label="Introduction">
          <div className={styles.avatar} aria-hidden>
            <img src="/images/avatar.jpeg" alt="avatar" />
          </div>
          <div className={styles.intro}>
            <h1 className={styles.name} title={profile.fullName}>
              {tProfile("greeting", { name: profile.displayName })}
            </h1>
            <div className={styles.role}>
              <Typewriter strings={roles} />
            </div>
            <p className={styles.tagline}>{tProfile("tagline")}</p>
          </div>
        </section>

        <nav className={styles.grid} aria-label="Main links">
          {translatedLinks.map((link: HubLink, i: number) => (
            <Tile key={link.id} link={link} index={i} />
          ))}
        </nav>

        <footer className={styles.footer}>
          <span className={styles.credit}>
            {tFooter("credit", { name: profile.fullName })}
          </span>
          <span className={styles.miniLinks}>
            {extraLinks.map((l) => (
              <a
                key={l.id}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                className={styles.miniLink}
              >
                <Icon name={l.icon} size={16} />
              </a>
            ))}
            <span style={{ marginLeft: 8 }}>© {year}</span>
          </span>
        </footer>
      </div>
    </main>
  );
}
