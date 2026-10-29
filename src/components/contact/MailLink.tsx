import { ArrowUpRight } from "@/components/ui/Icons";
import styles from "./Contact.module.css";

/** The big email address. It breaks before the @ on narrow screens (<wbr>), and the domain wears the gradient. */
export function MailLink({ email }: { email: string }) {
  const [name, domain] = email.split("@");

  return (
    <a className={styles.mail} href={`mailto:${email}`} aria-label={`Email ${email}`}>
      <span className={styles.mailText}>
        {name}
        <wbr />
        <span className="jk-grad">@{domain}</span>
      </span>
      <span className={styles.mailGo} aria-hidden="true">
        <ArrowUpRight width={22} height={22} />
      </span>
    </a>
  );
}
