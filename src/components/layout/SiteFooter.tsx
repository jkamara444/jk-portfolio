import { Monogram } from "@/components/ui/Monogram";
import { site } from "@/data/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.identity}>
        <span className={styles.mark}>
          <Monogram />
        </span>
        <nav className={styles.links} aria-label="Footer">
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={site.resumeHref}>Resume</a>
        </nav>
      </div>
      <span>{site.copyright}</span>
    </footer>
  );
}
