/**
 * The Australian Aboriginal Flag, designed by Harold Thomas. Copyright is held by the
 * Commonwealth, which allows it to be freely reproduced. Proportions 1:2, sun diameter = half the height.
 */
export function AboriginalFlag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 100" className={className} role="img" aria-label="Australian Aboriginal Flag">
      <rect width="200" height="50" fill="#000000" />
      <rect y="50" width="200" height="50" fill="#e03c31" />
      <circle cx="100" cy="50" r="25" fill="#ffc72c" />
    </svg>
  );
}
