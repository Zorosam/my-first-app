function addSource() {
  const url = document.getElementById("url").value;
  if (!url) return;

  let sources = JSON.parse(localStorage.getItem("sources")) || [];
  sources.push(url);
  localStorage.setItem("sources", JSON.stringify(sources));
  location.reload();
}

const list = document.getElementById("list");
const sources = JSON.parse(localStorage.getItem("sources")) || [];

sources.forEach(src => {
  const li = document.createElement("li");
  li.textContent = src;
  list.appendChild(li);
});
