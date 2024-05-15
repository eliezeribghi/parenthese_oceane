<script>
import { onMount, tick } from "svelte";
  import { Burger } from "@svelteuidev/core";
  import Modal from "./Modal.svelte";
  import { link } from "svelte-spa-router";

  import Button from "./Button.svelte";

  let opened = false;
  let navLinks = [
    { label: "ACCUEIL", path: "/" },
    { label: "MARÉE HAUTE", path: "/haute" },
    { label: "ÉTALE", path: "/etale" },
    { label: "MARÉE BASSE", path: "/basse" },
    { label: "CONTACTEZ-NOUS", path: "/contact" },
    { label: "INFO", path: "/info" },
    { label: "StVincentsurJard", path: "/StVincentsurJard" },
  ];
  // Attendre que le composant Burger soit monté
  onMount(() => {
  const cleanup = async () => {
    await tick();
    window.removeEventListener("resize", checkScreenWidth);
    document.removeEventListener("click", handleDocumentClick);
  };

  checkScreenWidth();
  window.addEventListener("resize", checkScreenWidth);
  document.addEventListener("click", handleDocumentClick);
  const burgerElement = document.querySelector(".burgerMenu");
  if (burgerElement) {
    burgerElement.setAttribute("tabindex", "0");
  }

  return cleanup;
});



  function checkScreenWidth() {
    opened = window.innerWidth >= 1025;
  }

  function handleDocumentClick(event) {
    const isDesktop = window.innerWidth >= 1025;
    if (!isDesktop && !event.target.closest(".menuHeader")) {
      opened = false;
    }
  }

  function handleMenuClick() {
    opened = !opened;
  }

  function handleNavLinkClick() {
    const isDesktop = window.innerWidth >= 1025;
    if (!isDesktop) {
      opened = false;
    }
  }

  let handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleMenuClick();
    }
  };
</script>

<Modal />

<section class="menuWrapper" role="navigation" aria-label="Main navigation">
  <div class="menuHeader">
    <div
      class={`menu-toggle ${opened ? 'opened' : ''}`}
      tabindex="0"
      on:click={handleMenuClick}
      on:keydown={handleKeyDown}
      aria-label="Toggle navigation"
      role="button"
    >
      <Burger
        class="burgerMenu"
        style="background-color:$primary-light;"
        {opened}
      />
    </div>

    {#if opened}
      <ul>
        {#each navLinks as { label, path }}
          <li class="menulink">
            <a
              href={path}
              on:click={handleNavLinkClick}
              use:link
              tabindex={opened ? 0 : -1}>{label}</a
            >
          </li>
        {/each}
      </ul>
    {/if}

    <a href="/" tabindex={opened ? -1 : 0}>
      <img
        class={`logoHome ${opened ? "hide-logo" : ""}`}
        src="./assets/logo.png"
        alt="Logo de l'association StVincent"
      />
    </a>
    
    <Button />
  </div>
</section>
