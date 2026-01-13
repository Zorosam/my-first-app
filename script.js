fetch("sample-source.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("manga-list");

    data.manga.forEach(manga => {
      const div = document.createElement("div");
      div.className = "manga-card";
      div.innerText = manga.title;

      div.onclick = () => {
        localStorage.setItem("selectedManga", JSON.stringify(manga));
        window.location.href = "reader.html";
      };

      list.appendChild(div);
    });
  });
