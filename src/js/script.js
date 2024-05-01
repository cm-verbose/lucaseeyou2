class Main {
  constructor() {
    this.ini();
  }

  ini() {
    this.setupGithubLinks();
  }

  /** @description Sets up link for repositories and live previews*/
  setupGithubLinks() {
    const githubRepoLinks = document.querySelectorAll("[data-github-repo]");
    for (const linkElement of githubRepoLinks) {
      const linkhref = linkElement.getAttribute("data-github-repo");
      if (!linkhref) continue;
      linkElement.addEventListener("click", () => {
        window.open(linkhref);
      });
    }

    const demoLinks = document.querySelectorAll("[data-ressource-location]");
    for (const linkElement of demoLinks) {
      const linkhref = linkElement.getAttribute("data-ressource-location");
      if (!linkhref) continue;
      linkElement.addEventListener("click", () => {
        window.open(linkhref);
      });
    }
  }
}

new Main();
