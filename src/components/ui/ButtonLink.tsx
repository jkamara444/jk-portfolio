import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";
import { ArrowUpRight } from "./Icons";
import { SmartLink } from "./SmartLink";

type Variant = "solid" | "ghost" | "text";

const VARIANT_CLASS: Record<Variant, string> = {
  solid: "btn",
  ghost: "btn-ghost",
  text: "lnk",
};

interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  /** solid = filled pill, ghost = outlined pill, text = underlined link. */
  variant?: Variant;
  /** Shows the up-right arrow after the label. */
  arrow?: boolean;
  children: ReactNode;
}

/** The site's call-to-action link, in three styles. */
export function ButtonLink({
  href,
  variant = "solid",
  arrow = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <SmartLink href={href} className={cx(VARIANT_CLASS[variant], className)} {...rest}>
      {children}
      {arrow && <ArrowUpRight />}
    </SmartLink>
  );
}
