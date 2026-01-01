document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
    <header>
      <div class="nav-wrapper">
        <div class="nav-left">
          <a href="index.html" aria-label="HADES Home">HADES</a>
          <a href="mission.html">The Mission</a>
          <a href="framework.html">HADES Framework</a>
          <a href="research.html">Research Approach</a>
          <a href="founders.html">Founders & Governance</a>
          <a href="collaborate.html">Collaborate</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="nav-right" aria-label="Display options">
          <button type="button" id="textSizeToggle" aria-pressed="false">
            Text size: Normal
          </button>
        </div>
      </div>
    </header>
  `;

  const footerHTML = `
    <footer>
      HADES — Human-Assisted Diagnostic Evaluation System<br/>
      <span class="small-text">
        Crimson Obsidian Industries — Legit Shit Incorporated (LSI)
      </span>
    </footer>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML);

  const toggleButton = document.getElementById("textSizeToggle");

  if (toggleButton) {
    // If you want persistence across reloads, uncomment the localStorage block
    /*
    const storedPref = localStorage.getItem("hadesTextSize");
    if (storedPref === "large") {
      document.body.classList.add("large-text");
      toggleButton.textContent = "Text size: Large";
      toggleButton.setAttribute("aria-pressed", "true");
    }
    */

    toggleButton.addEventListener("click", () => {
      const isLarge = document.body.classList.toggle("large-text");
      if (isLarge) {
        toggleButton.textContent = "Text size: Large";
        toggleButton.setAttribute("aria-pressed", "true");
        // localStorage.setItem("hadesTextSize", "large");
      } else {
        toggleButton.textContent = "Text size: Normal";
        toggleButton.setAttribute("aria-pressed", "false");
        // localStorage.setItem("hadesTextSize", "normal");
      }
    });
  }
});