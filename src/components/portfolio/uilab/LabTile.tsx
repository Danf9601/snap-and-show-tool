import type { ReactNode } from "react";

export function LabTile({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="card-surface glow-hover h-full p-5 md:p-6">
      <h3 className="text-xl">{title}</h3>
      <p className="text-text-secondary mt-2 mb-5 text-sm">{description}</p>
      {children}
    </div>
  );
}
