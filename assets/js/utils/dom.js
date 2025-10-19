
function createElement(tag, className, content = null) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (content) element.textContent = content;
  return element;
}

function getContainer(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error('Container com id "${containerId}" não encontrado');
    return null;
  }
  return container;
}
