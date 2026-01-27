"use client";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  AI_ML_SKILL,
  DEVOPS_SKILL,
  LANGUAGES,
} from "@/constants";

const Skills = () => {
  const allSkills = [
    ...FRONTEND_SKILL,
    ...BACKEND_SKILL,
    ...AI_ML_SKILL,
    ...DEVOPS_SKILL,
    ...LANGUAGES,
  ];

  // Inverted Pyramid Slices: 10, 9, 8, 6, 3 (Adjusted for total count)
  // Total items is roughly 36 + 1 (Figma) = 37.
  // Let's do: 10, 9, 8, 6, 4
  const skillRows = [
    allSkills.slice(0, 10),
    allSkills.slice(10, 19),
    allSkills.slice(19, 27),
    allSkills.slice(27, 33),
    allSkills.slice(33, 37),
  ];

  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-10"
    >
      <SkillText />

      {skillRows.map((row, rowIndex) => (
        <div
          key={`skill-row-${rowIndex}`}
          className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center"
        >
          {row.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.image}
              name={image.skill_name}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      ))}

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Skills;
