import type { StaticImageData } from "next/image";
import { images } from "@/assets/images";

export type CommunityKind = "award" | "scholarship" | "community";

export interface CommunityPhoto {
  image: StaticImageData;
  /** CSS object-position: keeps the interesting part of the picture inside the card. */
  position: string;
  /** Show the whole picture instead of cropping it to fill the card. */
  contain?: boolean;
}

export interface CommunityItem {
  id: string;
  kind: CommunityKind;
  /** Small label above the title. Defaults to the kind ("Award", "Scholarship", "Community"). */
  label?: string;
  title: string;
  org: string;
  year?: string;
  /**
   * With a photo, the card opens on the picture and turns over to the text.
   * Without one it opens on the text and turns over to an "Add a photo" placeholder.
   */
  photo?: CommunityPhoto;
  /** Card height in pixels. Varying the heights is what makes the gallery look hand-pinned. */
  height: number;
  /** Text-only cards: paper-coloured front instead of an outlined one. */
  featured?: boolean;
}

export const kindLabels: Record<CommunityKind, string> = {
  award: "Award",
  scholarship: "Scholarship",
  community: "Community",
};

export type CommunityFilterKey = "all" | CommunityKind;

export const communityFilters: readonly { key: CommunityFilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "award", label: "Awards" },
  { key: "scholarship", label: "Scholarships" },
  { key: "community", label: "Fellowships & communities" },
];

export const communityItems: readonly CommunityItem[] = [
  {
    id: "anitab",
    kind: "scholarship",
    title: "AnitaB.org Scholarship",
    org: "Recipient",
    year: "2025",
    photo: { image: images.communityAnitab, position: "58% 50%" },
    height: 380,
  },
  {
    id: "jpm-ai-spotlight",
    kind: "award",
    title: "J.P. Morgan AI Intern Spotlight",
    org: "J.P. Morgan Chase",
    year: "2026",
    photo: { image: images.communityJpm, position: "50% 62%" },
    height: 340,
    featured: true,
  },
  {
    id: "ray-greenly",
    kind: "scholarship",
    title: "Ray Greenly Scholar",
    org: "NRF Foundation Student Program",
    year: "2025",
    photo: { image: images.communityNrf, position: "50% 45%" },
    height: 420,
  },
  {
    id: "seo-scholar",
    kind: "community",
    label: "Program",
    title: "SEO Scholar",
    org: "Scholar",
    photo: { image: images.communitySeo, position: "50% 55%" },
    height: 300,
  },
  {
    id: "dasie",
    kind: "community",
    label: "Program",
    title: "Data Analytics for Science Immersion",
    org: "Scholar, Carnegie Mellon University",
    year: "2025",
    photo: { image: images.communityDasie, position: "50% 45%" },
    height: 270,
  },
  {
    id: "takeoff",
    kind: "community",
    label: "Fellowship",
    title: "Takeoff Fellow",
    org: "Fellow",
    photo: { image: images.communityTakeoff3, position: "50% 50%" },
    height: 240,
  },
  {
    id: "lubw",
    kind: "community",
    label: "Community",
    title: "League of United Black Women",
    org: "Outreach Chair",
    photo: { image: images.communityLeague, position: "50% 38%" },
    height: 250,
  },
  {
    id: "mlt",
    kind: "community",
    label: "Fellowship",
    title: "MLT Career Prep",
    org: "Fellow",
    photo: { image: images.communityMlt, position: "20% 50%" },
    height: 330,
  },
  {
    id: "crowdstrike",
    kind: "scholarship",
    title: "CrowdStrike NextGen Scholarship",
    org: "Recipient",
    photo: { image: images.communityCrowdstrike, position: "50% 50%", contain: true },
    height: 250,
  },
  {
    id: "station1",
    kind: "community",
    label: "Program",
    title: "Station1 Frontier Scholar",
    org: "Scholar",
    photo: { image: images.communityStation1, position: "50% 45%" },
    height: 400,
  },
  {
    id: "business-today",
    kind: "community",
    label: "Community",
    title: "Business Today Conference",
    org: "Conference",
    year: "2025",
    photo: { image: images.communityBt, position: "50% 50%" },
    height: 230,
  },
  {
    id: "kessler",
    kind: "community",
    label: "Program",
    title: "Kessler Scholar",
    org: "Scholar",
    photo: { image: images.communityKessler, position: "50% 50%" },
    height: 205,
  },
  {
    id: "csc",
    kind: "community",
    label: "Community",
    title: "Brown Center for Students of Color",
    org: "Multiethnic Dinner",
    photo: { image: images.communityCsc, position: "50% 50%" },
    height: 250,
  },
  {
    id: "bpm",
    kind: "community",
    label: "Community",
    title: "Brown Product Management",
    org: "Associate, clients incl. Uber and Perplexity AI",
    photo: { image: images.communityBpm, position: "50% 40%" },
    height: 220,
  },
];
