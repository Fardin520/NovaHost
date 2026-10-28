"use client";

import { motion } from "framer-motion";
import { Zap, CreditCard, HardDrive, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Zap,
    title: "Instant Automation",
    description:
      "WHM/cPanel auto-provisioned the moment your payment is verified. No tickets, no waiting — your server is ready in seconds.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: CreditCard,
    title: "UddoktaPay Integration",
    description:
      "Native support for bKash, Nagad, Rocket, and international cards. Seamless checkout with automatic order processing.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: HardDrive,
    title: "Enterprise NVMe Storage",
    description:
      "Ultra-fast read/write throughput with enterprise-grade NVMe SSDs. Your sites and apps load at blazing speed.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: ShieldCheck,
    title: "99.9% SLA Uptime",
    description:
      "Automated health checks, process isolation, and proactive monitoring ensure your services stay online around the clock.",
    gradient: "from-purple-500 to-pink-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-indigo-400 mb-3 tracking-wider uppercase">
            Why NovaHost
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Built for Speed & Reliability
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400 text-lg">
            Every feature is engineered to get you online faster with zero
            friction.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-md p-8 transition-all duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/70"
            >
              {/* Hover glow effect */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div
                  className={cn(
                    "absolute -inset-px rounded-2xl bg-gradient-to-br opacity-[0.08]",
                    feature.gradient
                  )}
                />
              </div>

              <div className="relative z-10">
                <div
                  className={cn(
                    "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white",
                    feature.gradient
                  )}
                >
                  <feature.icon size={22} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
