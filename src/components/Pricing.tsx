"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: 5,
    description: "Perfect for personal projects and small sites.",
    specs: [
      "1 Core CPU",
      "2 GB RAM",
      "20 GB NVMe SSD",
      "1 TB Bandwidth",
      "cPanel Access",
      "Free SSL Certificate",
    ],
    cta: "Get Starter",
    href: "http://whmcs.novahost.com/index.php?rp=/store/shared-hosting/starter-hosting",
    featured: false,
  },
  {
    name: "Pro",
    price: 12,
    description: "Ideal for growing businesses and traffic-heavy apps.",
    specs: [
      "2 Core CPU",
      "4 GB RAM",
      "50 GB NVMe SSD",
      "3 TB Bandwidth",
      "cPanel + WHM Access",
      "Free SSL Certificate",
      "Priority Support",
    ],
    cta: "Get Pro",
    href: "http://whmcs.novahost.com/index.php?rp=/store/shared-hosting/pro",
    featured: true,
  },
  {
    name: "Enterprise",
    price: 25,
    description: "Maximum power for mission-critical workloads.",
    specs: [
      "4 Core CPU",
      "8 GB RAM",
      "100 GB NVMe SSD",
      "Unlimited Bandwidth",
      "cPanel + WHM Access",
      "Free SSL Certificate",
      "Priority Support",
      "Dedicated IP",
    ],
    cta: "Get Enterprise",
    href: "http://whmcs.novahost.com/index.php?rp=/store/shared-hosting/enterprise-hosting",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

export default function Pricing() {
  return (
    <section id="pricing" className="relative pt-24 pb-32 px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-indigo-400 mb-3 tracking-wider uppercase">
            Simple Pricing
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Choose Your Plan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400 text-lg">
            Transparent pricing. No hidden fees. Scale whenever you&apos;re
            ready.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={cn(
                "relative rounded-2xl border p-8 backdrop-blur-md transition-colors duration-300 flex flex-col",
                plan.featured
                  ? "border-indigo-500/40 bg-zinc-900/70"
                  : "border-zinc-800/80 bg-zinc-900/50 hover:border-zinc-700/80"
              )}
            >
              {/* Featured badge & glow */}
              {plan.featured && (
                <>
                  <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent opacity-60" />
                  <div className="relative mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-medium text-indigo-300">
                    <Star size={12} className="fill-indigo-400" />
                    Most Popular
                  </div>
                </>
              )}

              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-zinc-500">/mo</span>
                </div>

                {/* Specs */}
                <ul className="mt-8 flex flex-col gap-3 flex-1">
                  {plan.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <Check
                        size={16}
                        className={cn(
                          "shrink-0",
                          plan.featured
                            ? "text-indigo-400"
                            : "text-zinc-600"
                        )}
                      />
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.href}
                  target="_self"
                  className={cn(
                    "group mt-8 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all",
                    plan.featured
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 hover:brightness-110"
                      : "border border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
                  )}
                >
                  {plan.cta}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}