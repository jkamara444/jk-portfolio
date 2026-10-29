import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

interface SmartLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
}

/** True for links that leave this site or hand off to another app (mail, phone). */
export function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

/**
 * One link component for every kind of destination: internal paths use next/link,
 * web URLs open in a new tab with a safe `rel`, and mailto: / # links stay plain anchors.
 */
export function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  if (isExternalHref(href)) {
    const opensNewTab = href.startsWith("http");
    return (
      <a
        href={href}
        {...(opensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
