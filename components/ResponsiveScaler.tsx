"use client";

import { useEffect, useRef, useState } from "react";

// Width your entire layout is designed for (Hero, Carousel, NeuralGraph
// all assume this canvas). Change if your desktop design width is different.
const DESKTOP_WIDTH = 1440;

// Below this viewport width, we switch to scaled mode.
// Above it, everything renders 1:1 exactly as designed.
const BREAKPOINT = 1440;

// Don't let it shrink into unreadable territory even on very small phones.
const MIN_SCALE = 0.32;

export default function ResponsiveScaler({ children }: { children: React.ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [wrapperHeight, setWrapperHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;

      if (vw >= BREAKPOINT) {
        setScale(1);
        setWrapperHeight("auto");
        return;
      }

      const rawScale = vw / DESKTOP_WIDTH;
      // const s = Math.max(rawScale, MIN_SCALE);
      setScale(rawScale);

      if (innerRef.current) {
        setWrapperHeight(innerRef.current.scrollHeight * rawScale);
      }
    }

    update();
    window.addEventListener("resize", update);

    // Re-measure after fonts/images finish loading and shift layout height.
    const t1 = setTimeout(update, 300);
    const t2 = setTimeout(update, 1000);
    window.addEventListener("load", update);

    // Watch for content height changes (e.g. carousel animations, graph mount)
    const ro = new ResizeObserver(() => update());
    if (innerRef.current) ro.observe(innerRef.current);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("load", update);
      clearTimeout(t1);
      clearTimeout(t2);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        height: wrapperHeight,
      }}
    >
      <div
  ref={innerRef}
  style={{
    width: DESKTOP_WIDTH,
    transform: `scale(${scale})`,
    transformOrigin: "top left",
    marginLeft: scale === 1 ? "auto" : 0,
    marginRight: scale === 1 ? "auto" : 0,
  }}
>
        {children}
      </div>
    </div>
  );
}