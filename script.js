const list = document.getElementById("manga-list");
const sources = JSON.parse(localStorage.getItem("sources")) || [];

list.innerHTML = "";

if (sources.length === 0) {
  list.innerHTML = "<p>No sources added. Go to Manage Sources.</p>";
}

sources.forEach(url => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      data.manga.forEach(manga => {
        const div = document.createElement("div");
        div.style.padding = "10px";
        div.style.margin = "10px 0";
        div.style.border = "1px solid #ccc";
        div.innerText = manga.title;

        div.onclick = () => {
          localStorage.setItem("selectedManga", JSON.stringify(manga));
          window.location.href = "reader.html";
        };

        list.appendChild(div);
      });
    })
    .catch(() => {
      list.innerHTML += "<p>Failed to load a source.</p>";
    });
});
