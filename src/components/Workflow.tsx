"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Wallet, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: 1,
    icon: ShoppingCart,
    title: "Choose Your Plan",
    description:
      "Browse our VPS plans and select the one that fits your needs. No complicated forms.",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    step: 2,
    icon: Wallet,
    title: "Pay via UddoktaPay",
    description:
      "Complete checkout with bKash, Nagad, Rocket, or any card. Payment is verified instantly.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    icon: Mail,
    title: "cPanel Credentials Emailed",
    description:
      "Your cPanel login, server IP, and nameservers are emailed to you within seconds. You're live!",
    gradient: "from-emerald-500 to-teal-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

export default function Workflow() {
  return (
    <section id="workflow" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-indigo-400 mb-3 tracking-wider uppercase">
            How It Works
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Live in 3 Simple Steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400 text-lg">
            From checkout to a fully provisioned server — fully automated, fully
            instant.
          </p>
        </motion.div>

        {/* Steps timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative grid gap-8 md:grid-cols-3"
        >
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute top-12 left-[16.66%] right-[16.66%] hidden h-px bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-emerald-500/40 md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              variants={stepVariants}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number badge */}
              <div
                className={cn(
                  "relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/80 backdrop-blur-md transition-colors hover:border-zinc-700"
                )}
              >
                {/* Subtle glow behind icon */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-10",
                    step.gradient
                  )}
                />
                <step.icon size={32} className="relative z-10 text-white" />
              </div>

              {/* Step label */}
              <span
                className={cn(
                  "mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white",
                  step.gradient
                )}
              >
                {step.step}
              </span>

              <h3 className="mb-2 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
                {step.description}
              </p>

              {/* Arrow between steps (mobile) */}
              {i < steps.length - 1 && (
                <div className="mt-6 text-zinc-700 md:hidden">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
