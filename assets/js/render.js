
const skillsData = {
  Frontend: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3"],
  Backend: ["Node.js", "Python", "SQL", "NoSQL"],
  DevOps: ["Docker", "Git", "Linux", "AWS", "CI/CD"]
};

function renderSkillSection(data, containerId) {
  const container = document.getElementById(containerId);
  const fragment = document.createDocumentFragment();

  Object.entries(data).forEach(([category, skills]) => {
    const article = document.createElement("article");
    article.classList.add("skill-category");

    const title = document.createElement("h3");
    title.classList.add("skill-category-title");
    title.textContent = category;

    const ul = document.createElement("ul");
    ul.classList.add("skill-list");

    skills.forEach(skill => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.classList.add("skill-tag");
      span.textContent = skill;
      li.appendChild(span);
      ul.appendChild(li);
    });

    article.appendChild(title);
    article.appendChild(ul);
    fragment.appendChild(article);
  });

  container.appendChild(fragment);
}

renderSkillSection(skillsData, "skills-container")
