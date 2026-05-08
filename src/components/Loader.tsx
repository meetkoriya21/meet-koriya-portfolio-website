import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 animate-ping rounded-2xl bg-gradient-brand opacity-40" />
          <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand shadow-glow">
            <span className="font-display text-2xl font-bold text-primary-foreground">M</span>
          </div>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">Loading portfolio</div>
      </div>
    </div>
  );
}
