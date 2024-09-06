"use client";

import * as React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function WelcomePage() {
  const interRef = React.useRef<HTMLDivElement>(null);
  const prevX = React.useRef(0);
  const prevY = React.useRef(0);

  return (
    <main className={styles["gradient-bg"]}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className={styles["gradients-container"]}>
        <div className={styles["g1"]} />
        <div className={styles["g2"]} />
        <div className={styles["g3"]} />
        <div className={styles["g4"]} />

        <div
          className={styles["interactive"]}
          ref={interRef}
          onMouseMove={(e) => {
            if (!interRef.current) return;

            prevX.current += (e.clientX - prevX.current) / 20;
            prevY.current += (e.clientY - prevY.current) / 20;

            interRef.current.style.transform = `translate(${prevX.current}px, ${prevY.current}px)`;
          }}
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles["title"]}>Welcome to My Blog</h1>
        <p className={styles["description"]}>Welcome page of my blog</p>
      </div>
    </main>
  );
}
