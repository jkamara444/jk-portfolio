interface FilterOption<Key extends string> {
  key: Key;
  label: string;
  /** How many things this filter shows. */
  count: number;
}

interface FilterPillsProps<Key extends string> {
  options: readonly FilterOption<Key>[];
  value: Key;
  onChange: (key: Key) => void;
  /** Spoken name for the group of buttons. */
  label: string;
  className?: string;
}

/** A row of toggle pills where exactly one filter is on. */
export function FilterPills<Key extends string>({
  options,
  value,
  onChange,
  label,
  className,
}: FilterPillsProps<Key>) {
  return (
    <div className={className} role="group" aria-label={label}>
      {options.map((option) => (
        <button
          type="button"
          key={option.key}
          className="jk-pill"
          aria-pressed={option.key === value}
          onClick={() => onChange(option.key)}
        >
          {option.label}
          <i>{option.count}</i>
        </button>
      ))}
    </div>
  );
}
