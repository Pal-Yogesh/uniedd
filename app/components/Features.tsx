"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "🎸",
    title: "Structured Lessons",
    description:
      "Progress through carefully designed modules from beginner chords to advanced techniques.",
  },
  {
    icon: "🎵",
    title: "Interactive Practice",
    description:
      "Real-time feedback on your playing with built-in tools to track tempo and accuracy.",
  },
  {
    icon: "🎧",
    title: "Expert Instructors",
    description:
      "Learn from professional musicians who break down complex concepts into simple steps.",
  },
  {
    icon: "📖",
    title: "Music Theory",
    description:
      "Understand the 'why' behind the music with integrated theory lessons alongside practice.",
  },
  {
    icon: "🤝",
    title: "Community",
    description:
      "Connect with fellow learners, share progress, and get inspired by others on the same path.",
  },
  {
    icon: "📱",
    title: "Learn Anywhere",
    description:
      "Access your lessons on any device. Practice at home, on the go, or wherever inspiration strikes.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-32 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-20">
          <p className="text-sm tracking-widest uppercase text-[var(--muted)] mb-4">
            Why Choose Us
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] bg-clip-text text-transparent">master guitar</span>
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--brand-blue)]/30 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform">
                {feature.icon}
              </span>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
