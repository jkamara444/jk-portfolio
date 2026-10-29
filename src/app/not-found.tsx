import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import styles from "./not-found.module.css";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <PageShell>
      <main className="jk-main">
        <span className="jk-eyebrow">404</span>
        <h1 className="jk-h1">That page isn’t here</h1>
        <p className="jk-desc">It may have moved, or the link may have a typo.</p>
        <div className={`cta ${styles.actions}`}>
          <ButtonLink href="/" variant="solid">
            Back to the home page
          </ButtonLink>
          <ButtonLink href="/projects" variant="text">
            See projects
          </ButtonLink>
        </div>
      </main>
    </PageShell>
  );
}
