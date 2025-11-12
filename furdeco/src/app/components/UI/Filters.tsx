"use client";
export const Filters = ({ visibility = true }: { visibility: Boolean }) => {
  if (!visibility) return null;
  return <div>Im a filter</div>;
};
