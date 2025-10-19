
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
  const container = getContainer(containerId);
  if (!container) return;

  const fragment = document.createDocumentFragment();

  Object.entries(data).forEach(([category, skills]) => {
    const categoryElement = createSkillCategory(category, skills);
    fragment.appendChild(categoryElement);
  });

  container.appendChild(fragment);
}

