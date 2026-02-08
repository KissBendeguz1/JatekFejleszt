sectors = [
  { name: "Tech & IT", q: "Érdekel a kódolás világa?", game: "it_game" },
  { name: "Gépészet & Jármű", q: "Szeretsz bütykölni?", game: "mech_game" },
  {
    name: "Építészet & Design",
    q: "Alkotnál valami maradandót?",
    game: "arch_game",
  },
  {
    name: "Gasztro & Turizmus",
    q: "Mesterien sütsz-főzöl?",
    game: "food_game",
  },
  {
    name: "Egészség & Szociális",
    q: "Segítenél másokon?",
    game: "health_game",
  },
  { name: "Gazdaság & Ügyvitel", q: "Jó vagy számokban?", game: "econ_game" },
  { name: "Szépség & Stílus", q: "Van stílusérzéked?", game: "style_game" },
  { name: "Zöld & Mezőgazdaság", q: "Vonz a természet?", game: "agro_game" },
  { name: "Rendészet & Honvédelem", q: "Fontos a fegyelem?", game: "law_game" },
  {
    name: "Vegyipar & Kreatív-Tech",
    q: "Kísérleteznél anyagokkal?",
    game: "chem_game",
  },
];

function loadMenu(array) {
  
  menu = document.getElementById("menu");
  array.forEach((element) => {
    card = document.createElement("div");
    link = document.createElement("a");
    link.setAttribute("href", `${element.game}.html`);
    card.innerHTML = `   
                <h1>${element.name}</h1>
                <p>${element.q}</p>`;

    card.classList.add("card");

    link.appendChild(card);
    menu.appendChild(link);
  });
}

loadMenu(sectors);
