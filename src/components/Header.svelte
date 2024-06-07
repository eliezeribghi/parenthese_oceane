<script>
  import { onMount, tick } from "svelte";
  import { Burger } from "@svelteuidev/core";
  import Modal from "./Modal.svelte";
  import { link, location } from "svelte-spa-router";

  import Button from "./Button.svelte";

  let opened = false;
  let isDesktop = false;
  let isNavOverlay = false;

  const exceptLinkDisplayNav = ['/contact', '/info', '/StVincentsurJard'];

  let navLinks = [
    { label: "ACCUEIL", path: "/" },
    { label: "MARÉE HAUTE", path: "/haute" },
    { label: "ÉTALE", path: "/etale" },
    { label: "MARÉE BASSE", path: "/basse" },
    { label: "CONTACTEZ-NOUS", path: "/contact" },
    { label: "INFO", path: "/info" },
    { label: "St Vincent sur Jard", path: "/StVincentsurJard" },
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
    isDesktop = window.innerWidth <= 1025;
    opened = isDesktop && false;
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

  function handleNavLinkClick(labelPath) {
    const isDesktop = window.innerWidth >= 1025;

    if (!isDesktop) {
      opened = false;
    }

    if (exceptLinkDisplayNav.includes(labelPath)){
      isNavOverlay = true
    }else{
      isNavOverlay = false;
    }
  }

  let handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleMenuClick();
    }
  };

  let isScrolling = false;

  const handleScroll = () => {
    isScrolling = window.scrollY > 0;

    return isScrolling;
  }


  onMount(() => {
    if (exceptLinkDisplayNav.includes($location)){
      isNavOverlay = true
    }else{
      isNavOverlay = false;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  });

</script>

<Modal />
<!-- ${isNavOverlay ? 'bonjour cest true': ''} -->
<section class="menuWrapper" role="navigation" aria-label="Main navigation">
  <div class={`menuHeader ${isScrolling ? 'active' : ''} ${isNavOverlay ? 'linknotactive': ''} ${opened ? 'opened' : ''}`}>
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
        aria-label="Ouvrir le menu"
        {opened}
      />
    </div>

    {#if !isDesktop || opened}
      <ul>
        {#each navLinks as { label, path }}
          <li class="menulink">
            <a
              href={path}
              on:click={() => handleNavLinkClick(path)}
              use:link
              tabindex={opened ? 0 : -1}>{label}</a
            >
          </li>
        {/each}
      </ul>
    {/if}


   <a href="/" tabindex={opened ? -1 : 0} class="anchor-logo">
    <img
    class={`logoHome ${opened && window.innerWidth < 1025 ? "hide-logo" : ""}`}
    src="./assets/logo.webp"
    alt="Logo de l'association Parenthése Océane"
  />
  
  
</a>


    <Button />
  </div>
</section>
