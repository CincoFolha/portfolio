
const projects = [
  {
    emoji: "",
    title: "",
    description: "",
    tech: [],
    demoLink: "#",
    codeLink: "#"
  }
];

function renderProjects(projects, containerId) {
  const container = document.getElementById(containerId);
  const fragment = document.createDocumentFragment();

  projects.forEach(project => {
    const article = document.createElement("article");
    article.classList.add("project-card");

    const image = document.createElement("div");
    image.classList.add("project-image");
    image.textContent = project.emoji;

    const content = document.createElement("div");
    content.classList.add("project-content");
  
    const title = document.createElement("h3");
    title.classList.add("project-title");
    title.textContent = project.title;
  
    const description = document.createElement("p");
    description.textContent = project.description;

    const tech = document.createElement("div");
    tech.classList.add("project-tech");
    project.tech.forEach(techName => {
      const span = document.createElement("span");
      span.classList.add("tech-tag");
      span.textContent = techName;
      tech.appendChild(span);
    });

    const links = document.createElement("div");
    links.classList.add("project-links");

    const linkDemo = document.createElement("a");
    linkDemo.classList.add("project-link");
    linkDemo.textContent = "Ver Demo";

    const linkCode = document.createElement("a");
    linkCode.classList.add("project-link");
    linkCode.textContent = "Código";

    links.appendChild(linkDemo);
    links.appendChild(linkCode);

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(tech);
    content.appendChild(links);

    article.appendChild(image);
    article.appendChild(content);

    fragment.appendChild(article);
  });


  container.append(fragment)
}

renderProjects(projects, "projects-container");
