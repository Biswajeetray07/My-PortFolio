const { FRONTEND_SKILL, BACKEND_SKILL, AI_ML_SKILL, DEVOPS_SKILL, LANGUAGES } = require('./constants/index.ts');

const allSkills = {
  FRONTEND_SKILL,
  BACKEND_SKILL,
  AI_ML_SKILL,
  DEVOPS_SKILL,
  LANGUAGES
};

const skillCounts = {};

Object.entries(allSkills).forEach(([category, skills]) => {
  if (!skills) return; 
  skills.forEach(skill => {
    if (!skillCounts[skill.skill_name]) {
      skillCounts[skill.skill_name] = [];
    }
    skillCounts[skill.skill_name].push(category);
  });
});

Object.entries(skillCounts).forEach(([skill, categories]) => {
  if (categories.length > 1) {
    console.log(`Duplicate found: ${skill} in [${categories.join(', ')}]`);
  }
});
