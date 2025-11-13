export function loadHeaderFooter() {
  const header = document.getElementById('main-header');
  const footer = document.getElementById('main-footer');

  fetch('../partials/header.html')
    .then(res => res.text())
    .then(data => header.innerHTML = data);

  fetch('../partials/footer.html')
    .then(res => res.text())
    .then(data => footer.innerHTML = data);
}

export function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

export async function convertToJson(response) {
  try {
    return await response.json();
  } catch (err) {
    console.error('Failed to parse JSON', err);
  }
}
