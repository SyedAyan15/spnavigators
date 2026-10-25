"use client";

import { motion } from "framer-motion";

const circles = [
  { cx: 150, cy: 140, fill: "#d4661c", label: "LAC", sub: "NDIA partner", lx: 105, ly: 105 },
  { cx: 250, cy: 140, fill: "#0d6a6e", label: "Support", sub: "Coordinator", lx: 295, ly: 105 },
  { cx: 200, cy: 225, fill: "#f2a12a", label: "Plan", sub: "Manager", lx: 200, ly: 290 },
];

/** Three overlapping roles, with the participant where they meet. */
export function SupportVenn() {
  return (
    <svg viewBox="0 0 400 360" className="mx-auto h-auto w-full max-w-md" role="img" aria-label="Diagram: an LAC, a Support Coordinator and a Plan Manager each play a different role, and all three work around you">
      {circles.map((c, i) => (
        <motion.circle
          key={c.label}
          cx={c.cx}
          cy={c.cy}
          r="105"
          fill={c.fill}
          fillOpacity="0.22"
          stroke={c.fill}
          strokeWidth="3"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.25, type: "spring", bounce: 0.35, duration: 1 }}
          style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
        />
      ))}
      {circles.map((c, i) => (
        <motion.g
          key={`${c.label}-t`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 + i * 0.2 }}
        >
          <text x={c.lx} y={c.ly} textAnchor="middle" className="fill-navy font-display" fontSize="20" fontWeight="700">
            {c.label}
          </text>
          <text x={c.lx} y={c.ly + 18} textAnchor="middle" className="fill-muted" fontSize="13" fontWeight="600">
            {c.sub}
          </text>
        </motion.g>
      ))}
      <motion.g
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, type: "spring", bounce: 0.5 }}
        style={{ transformOrigin: "200px 172px" }}
      >
        <circle cx="200" cy="172" r="30" fill="#0d3157" />
        <text x="200" y="178" textAnchor="middle" fill="#f8c96a" fontSize="16" fontWeight="700" className="font-display">
          You
        </text>
      </motion.g>
    </svg>
  );
}
