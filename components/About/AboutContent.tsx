import React from "react";
import AnimatedText from "../ui/AnimatedText";
import { DynaPuff } from "next/font/google";
import Image from "next/image";
import MagneticLink from "@/components/ui/MagneticLink";
import ProfileImage from "@/public/images/profile.jpg";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { HiOutlineArrowRight } from "react-icons/hi";

const dynaPuff = DynaPuff({ subsets: ["latin"] });

export function AboutContent() {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 88 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 82 },
    { name: "Python", level: 75 },
    { name: "TailwindCSS", level: 90 },
    { name: "Git", level: 85 },
  ];

  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Software Engineer",
      company: "Company Name",
      description:
        "Leading development of modern web applications using React and Next.js",
    },
    {
      year: "2021 - 2023",
      title: "Full Stack Developer",
      company: "Previous Company",
      description: "Developed and maintained full-stack applications",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <AnimatedText
          text="About Me"
          className={`${dynaPuff.className} text-4xl md:text-5xl font-bold mb-8 text-[#101010] dark:text-[#94A9C9]`}
          initialClass="text-animate-fast"
        />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="relative">
            <p className="text-gray-600 dark:text-[#66768f] leading-relaxed">
              Hey there! I'm a passionate Software Engineer and Content Creator
              based in [Your Location]. I love building beautiful, responsive,
              and user-friendly web applications while sharing my journey and
              knowledge with others.
            </p>
            <div className="absolute -left-4 top-0 w-1 h-full bg-[#ffe400] rounded-full"></div>
          </div>

          <p className="text-gray-600 dark:text-[#66768f] leading-relaxed">
            When I'm not coding, you can find me creating content, exploring new
            technologies, or contributing to open-source projects. I believe in
            continuous learning and sharing knowledge with the developer
            community.
          </p>

          <div className="flex gap-4">
            <MagneticLink
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffe400] dark:bg-[#ffe400] 
              text-[#101010] rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Get in Touch <HiOutlineArrowRight className="text-lg" />
            </MagneticLink>

            <MagneticLink
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#ffe400] 
              text-[#101010] dark:text-[#94A9C9] rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Resume <FiDownload />
            </MagneticLink>
          </div>

          <div className="pt-8">
            <h3
              className={`${dynaPuff.className} text-2xl font-semibold mb-6 text-[#101010] dark:text-[#94A9C9]`}
            >
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative pl-6 border-l-2 border-[#ffe400] dark:border-[#ffe400]"
                >
                  <span className="text-sm text-gray-500 dark:text-[#66768f]">
                    {exp.year}
                  </span>
                  <h4 className="text-lg font-semibold text-[#101010] dark:text-[#94A9C9]">
                    {exp.title}
                  </h4>
                  <p className="text-gray-600 dark:text-[#66768f]">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-[#66768f]">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="relative group">
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <Image
                src={ProfileImage}
                alt="Profile"
                width={500}
                height={600}
                className="object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div
              className="absolute inset-0 bg-[#ffe400] dark:bg-[#ffe400] opacity-20 rounded-2xl 
              transform rotate-3 group-hover:rotate-6 transition-transform duration-300"
            ></div>
          </div>

          <div className="pt-6">
            <h3
              className={`${dynaPuff.className} text-2xl font-semibold mb-6 text-[#101010] dark:text-[#94A9C9]`}
            >
              Tech Stack
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-[#94A9C9]">
                      {skill.name}
                    </span>
                    <span className="text-[#ffe400]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-[#131C31] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 * index }}
                      className="h-full bg-[#ffe400] rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
