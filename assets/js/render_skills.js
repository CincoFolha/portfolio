
const skillsData = {
  Frontend: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3"],
  Backend: ["Node.js", "Python", "SQL", "NoSQL"],
  DevOps: ["Gradle", "Docker", "Git", "Linux", "AWS"]
};

function createElement(tag, className, content = null) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (content) element.textContent = content;
  return element;
}

function createSkillItem(skillName) {
  const li = createElement("li", null);
  const span = createElement("span", "skill-tag", skillName);
  li.appendChild(span);
  return li;
}

function createSkillList(skills) {
  const list = createElement("ul", "skill-list");
  
  skills.forEach(skill => {
    const item = createSkillItem(skill);
    list.appendChild(item);
  });
  
  return list;
}

function createSkillCategory(categoryName, skills) {
  const article = createElement("article", "skill-category");
  const title = createElement("h3", "skill-category-title", categoryName);
  const list = createSkillList(skills);

  article.append(title, list);
  return article;
}

function renderSkillSection(data, containerId) {
  const container = document.getElementById(containerId);
  const fragment = document.createDocumentFragment();

  Object.entries(data).forEach(([category, skills]) => {
    const categoryElement = createSkillCategory(category, skills);
    fragment.appendChild(categoryElement);
  });

  container.appendChild(fragment);
}

renderSkillSection(skillsData, "skills-container")
