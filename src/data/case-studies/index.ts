import type { CaseStudySlug } from "@/data/projects";
import { aiGateway } from "./ai-gateway";
import { evBattery } from "./ev-battery";
import { flockThesis } from "./flock-thesis";
import { grapevne } from "./grapevne";
import { handbook } from "./handbook";
import { necropolitics } from "./necropolitics";
import { pedagogy } from "./pedagogy";
import { portfolio } from "./portfolio";
import type { CaseStudy } from "./types";

/** Every case study, by the slug that appears in its URL. */
export const caseStudies: Record<CaseStudySlug, CaseStudy> = {
  handbook,
  grapevne,
  "ai-gateway": aiGateway,
  "ev-battery": evBattery,
  necropolitics,
  "flock-thesis": flockThesis,
  portfolio,
  pedagogy,
};
