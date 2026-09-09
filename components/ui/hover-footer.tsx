"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 120"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("select-none uppercase overflow-visible", className)}
    >
      <defs>
        <linearGradient id="stylishGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#27272a" />
          <stop offset="50%" stopColor="#09090b" />
          <stop offset="100%" stopColor="#27272a" />
        </linearGradient>
        <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.15" />
        </filter>
      </defs>

      <motion.g
        animate={{ y: [-4, 4, -4] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="95"
          fontWeight="900"
          style={{ letterSpacing: "0.08em" }}
          fill="url(#stylishGradient)"
          filter="url(#subtleShadow)"
          className="font-serif"
        >
          {text}
        </text>
      </motion.g>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #FFFFFF 50%, #f0fdf4 100%)",
      }}
    />
  );
};
