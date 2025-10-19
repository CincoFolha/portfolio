
function createProjectImage(emoji) {
  return createElement("div", "project-image", emoji);
}

function createTechTags(technologies) {
  const techContainer = createElement("div", "project-tech");

  technologies.forEach(techName => {
    const tag = createElement("span", "tech-tag", techName);
    techContainer.appendChild(tag);
  });

  return techContainer;
}

function createProjectLinks(demoLink, codeLink) {
  const linksContainer = createElement("div", "project-links");
  const demo = createElement("a", "project-link", "Ver Demo");
  demo.href = demoLink;
  demo.target = "_blank";
  demo.rel = "noopener noreferrer";

  const code = createElement("a", "project-link", "Código");
  code.href = codeLink;
  code.target = "_blank";
  code.rel = "noopener noreferrer";

  linksContainer.append(demo, code);
  return linksContainer;
}

function createProjectContent(project) {
  const content = createElement("div", "project-content");
  const title = createElement("h3", "project-title", project.title);
  const description = createElement("p", null, project.description);
  const tech = createTechTags(project.tech);
  const links = createProjectLinks(project.demoLink, project.codeLink);

  content.append(title, description, tech, links);
  return content;
}

function createProjectCard(project) {
  const card = createElement("article", "project-card");
  const image = createProjectImage(project.emoji);
  const content = createProjectContent(project);

  card.append(image, content);
  return card;
}

function renderProjects(projects, containerId) {
  const container = getContainer(containerId);
  if (!container) return;

  const fragment = document.createDocumentFragment();

  projects.forEach(project => {
    const projectCard = createProjectCard(project);
    fragment.appendChild(projectCard);
  });


  container.appendChild(fragment)
}
