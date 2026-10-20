"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

// The server snapshot keeps the prerendered shell static; the client reads the real clock.
export function Year() {
  const year = useSyncExternalStore(
    noop,
    () => new Date().getFullYear(),
    () => 2026,
  );
  return <span>{year}</span>;
}
