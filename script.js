const list = document.getElementById("manga-list");
const sources = JSON.parse(localStorage.getItem("sources")) || [];

list.innerHTML = "";

// If no sources
if (sources.length === 0) {
  list.innerHTML = "<p>No sources added. Go to 📡 Manage Sources.</p>";
}

// Load manga from each source
sources.forEach(url => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      data.manga.forEach(manga => {
        const div = document.createElement("div");
        div.style.padding = "12px";
        div.style.margin = "10px 0";
        div.style.border = "1px solid #000";
        div.style.cursor = "pointer";

        div.innerText = manga.title;

        div.onclick = () => {
          localStorage.setItem("selectedManga", JSON.stringify(manga));
          window.location.href = "reader.html";
        };

        list.appendChild(div);
      });
    })
    .catch(err => {
      console.log("Failed to load source:", err);
    });
});
