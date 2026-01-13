let sources = JSON.parse(localStorage.getItem("sources")) || [];

function saveSources() {
  localStorage.setItem("sources", JSON.stringify(sources));
}

function renderSources() {
  const list = document.getElementById("sourceList");
  list.innerHTML = "";

  sources.forEach((src, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${src} <button onclick="removeSource(${i})">❌</button>`;
    list.appendChild(li);
  });
}

function addSource() {
  const url = document.getElementById("sourceUrl").value;
  if (!url) return;

  sources.push(url);
  saveSources();
  renderSources();
  document.getElementById("sourceUrl").value = "";
}

function removeSource(i) {
  sources.splice(i, 1);
  saveSources();
  renderSources();
}

renderSources();
