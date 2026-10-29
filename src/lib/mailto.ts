import { site } from "@/data/site";

/** A mailto: link to Jasmine with a ready-made subject (and optionally a message). */
export function mailtoHref(subject: string, body?: string) {
  const query = [`subject=${encodeURIComponent(subject)}`];
  if (body) query.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${site.email}?${query.join("&")}`;
}
