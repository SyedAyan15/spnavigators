"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Compass, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Score = { sc: number; rc: number };
type Option = { label: string; score: Score };

const questions: { q: string; hint?: string; options: Option[] }[] = [
  {
    q: "What feels hardest right now?",
    options: [
      { label: "Understanding my NDIS plan and how to use my funding", score: { sc: 2, rc: 0 } },
      { label: "Finding, choosing and organising the right providers", score: { sc: 2, rc: 0 } },
      { label: "Managing day-to-day life alongside my mental health", score: { sc: 0, rc: 2 } },
      { label: "Feeling stuck, or not knowing where to start with my goals", score: { sc: 0, rc: 2 } },
    ],
  },
  {
    q: "Do you live with a psychosocial disability?",
    hint: "A psychosocial disability can arise from a mental health condition, such as schizophrenia, bipolar disorder, severe depression, anxiety or PTSD.",
    options: [
      { label: "Yes", score: { sc: 0, rc: 2 } },
      { label: "No", score: { sc: 1, rc: 0 } },
      { label: "I’m not sure", score: { sc: 1, rc: 1 } },
    ],
  },
  {
    q: "What kind of help sounds most useful?",
    options: [
      { label: "Someone to coordinate my supports and handle the moving parts", score: { sc: 2, rc: 0 } },
      { label: "A coach to build skills, routines and confidence alongside me", score: { sc: 0, rc: 2 } },
      { label: "Honestly, a bit of both", score: { sc: 2, rc: 2 } },
    ],
  },
];

const results = {
  sc: {
    title: "NDIS Support Coordination",
    href: "/support-coordination",
    color: "bg-teal",
    text: "A Support Coordinator can help you understand your plan, find and connect with providers, set up service agreements and keep your supports working together, while building your confidence to do more of it yourself over time.",
  },
  rc: {
    title: "Psychosocial Recovery Coaching",
    href: "/psychosocial-recovery-coaching",
    color: "bg-gold",
    text: "A Psychosocial Recovery Coach works one-on-one with you to set goals, build everyday skills and routines, and connect with the mental health and community supports that help you live the life you want.",
  },
  both: {
    title: "A combination of both",
    href: "/how-it-works",
    color: "bg-sage",
    text: "Some participants have funding for both Support Coordination and Recovery Coaching. When the roles are clearly defined, they complement each other well. We’ll help you work out what your plan allows and avoid any doubling up.",
  },
};

export function SupportFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const finished = step >= questions.length;

  const total = answers.reduce<Score>(
    (acc, a, qi) => {
      const s = questions[qi].options[a].score;
      return { sc: acc.sc + s.sc, rc: acc.rc + s.rc };
    },
    { sc: 0, rc: 0 },
  );
  const key: keyof typeof results =
    Math.abs(total.sc - total.rc) <= 1 && total.sc >= 3 && total.rc >= 3 ? "both" : total.sc > total.rc ? "sc" : "rc";
  const result = results[key];

  const choose = (idx: number) => {
    setAnswers((a) => [...a.slice(0, step), idx]);
    setStep((s) => s + 1);
  };
  const reset = () => {
    setAnswers([]);
    setStep(0);
  };

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-6 shadow-[0_40px_100px_-40px_rgba(14,42,77,0.45)] ring-1 ring-navy/5 sm:p-10">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2 text-sm font-bold text-teal">
          <Compass className="h-5 w-5" aria-hidden /> Support finder
        </span>
        <span className="text-sm text-muted" aria-live="polite">
          {finished ? "Your suggestion" : `Question ${step + 1} of ${questions.length}`}
        </span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-sand">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-teal via-sage to-gold"
          animate={{ width: `${(Math.min(step, questions.length) / questions.length) * 100}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>

      <div className="relative mt-8 min-h-[22rem]">
        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-display text-2xl font-semibold text-navy sm:text-3xl">{questions[step].q}</h3>
              {questions[step].hint && <p className="mt-3 text-sm leading-relaxed text-muted">{questions[step].hint}</p>}
              <div className="mt-6 grid gap-3">
                {questions[step].options.map((o, idx) => (
                  <motion.button
                    key={o.label}
                    type="button"
                    onClick={() => choose(idx)}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group flex items-center justify-between gap-4 rounded-2xl border-2 px-5 py-4 text-left font-semibold transition ${
                      answers[step] === idx ? "border-teal bg-teal/5 text-teal" : "border-sand text-navy hover:border-teal/50 hover:bg-cream"
                    }`}
                  >
                    {o.label}
                    <ArrowRight className="h-5 w-5 shrink-0 text-gold opacity-0 transition group-hover:opacity-100" aria-hidden />
                  </motion.button>
                ))}
              </div>
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-navy"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden /> Back
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
              aria-live="polite"
            >
              <p className="text-sm font-bold tracking-[0.16em] text-muted uppercase">You might benefit from</p>
              <div className="mt-3 flex items-center gap-4">
                <motion.span
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className={`grid h-14 w-14 place-items-center rounded-2xl text-white ${result.color}`}
                >
                  <Compass className="h-7 w-7" aria-hidden />
                </motion.span>
                <h3 className="font-display text-2xl font-semibold text-navy sm:text-3xl">{result.title}</h3>
              </div>
              <p className="mt-5 leading-relaxed text-muted">{result.text}</p>
              <p className="mt-4 rounded-2xl bg-cream p-4 text-sm leading-relaxed text-muted">
                This is a guide only. Both supports need to be funded in your NDIS plan. Not sure what your plan includes?
                We can go through it with you at no cost during a free chat.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={result.href}
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 font-bold text-white transition hover:bg-teal"
                >
                  Learn more <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-bold text-navy transition hover:bg-gold-light"
                >
                  Book a free chat
                </Link>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 font-semibold text-muted hover:text-navy"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden /> Start again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
