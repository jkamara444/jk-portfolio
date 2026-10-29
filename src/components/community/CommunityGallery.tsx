"use client";

import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FilterPills } from "@/components/ui/FilterPills";
import {
  communityFilters,
  communityItems,
  type CommunityFilterKey,
  type CommunityItem,
} from "@/data/community";
import { site } from "@/data/site";
import { FlipCard } from "./FlipCard";
import { placeCards } from "./layout";
import styles from "./Community.module.css";

function matches(item: CommunityItem, filter: CommunityFilterKey) {
  return filter === "all" || item.kind === filter;
}

/** Filter pills above a masonry of flip cards. */
export function CommunityGallery() {
  const [filter, setFilter] = useState<CommunityFilterKey>("all");

  const options = useMemo(
    () =>
      communityFilters.map(({ key, label }) => ({
        key,
        label,
        count: communityItems.filter((item) => matches(item, key)).length,
      })),
    [],
  );

  const cards = placeCards(
    communityItems.filter((item) => matches(item, filter)),
    communityItems,
  );

  return (
    <>
      <div className={styles.bar}>
        <FilterPills
          className={styles.pills}
          label="Filter"
          options={options}
          value={filter}
          onChange={setFilter}
        />
        <ButtonLink variant="ghost" href={site.linkedin} arrow>
          Full list on LinkedIn
        </ButtonLink>
      </div>

      <div className={styles.grid}>
        {cards.map((card) => (
          <FlipCard key={card.item.id} card={card} />
        ))}
      </div>
    </>
  );
}
