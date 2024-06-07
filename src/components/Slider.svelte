<script>
  import { onMount, afterUpdate, onDestroy } from "svelte";
  import images from "../dataImport/+server";
  import '../style/components/slider.scss'

  let currentImageIndex = 0;
  let containerWidth = 0;

  // Fonction pour passer à l'image suivante
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  // Fonction pour calculer la largeur du conteneur en fonction du nombre d'images
  function calculateContainerWidth() {
    containerWidth = images.length * window.innerWidth;
  }

  // Déclenche le changement d'image toutes les 5 secondes
  let interval;
  onMount(() => {
    calculateContainerWidth();
    interval = setInterval(() => {
      nextImage();
    }, 5000);
  });

  // Nettoie l'intervalle et les écouteurs d'événements au démontage du composant
  onDestroy(() => {
    clearInterval(interval);
  });

  // Met à jour la largeur du conteneur après chaque mise à jour
  afterUpdate(() => {
    calculateContainerWidth();
  });
</script>

<style>
  /* Ajoutez ici les styles CSS nécessaires pour votre carousel */
</style>

<section class="carousel-container" aria-label="Carousel">
  <div class="text-container top-text">
    <h1 id="carousel-heading" aria-label="Bienvenue à Saint Vincent sur Jard, Carousel">
      BIENVENUE <br /> A <br /> SAINT VINCENT SUR JARD
    </h1>
    <div class="logo-container">
      <img class="logo-slide" src="./assets/logo.webp" alt="Logo" loading="lazy" aria-roledescription="logo carousel parenthese oceane gite vendée"/>
    </div>
  </div>

  <div class="carousel-wrapper" role="region" aria-labelledby="carousel-heading">
    <h2 id="carousel-heading" class="visually-hidden">Image Slider</h2>
    <div class="image-carousel" 
         style={`transform: translateX(${-currentImageIndex * window.innerWidth}px); width: ${containerWidth}px`} 
         role="group" 
         aria-roledescription="carousel">
  
      {#each images as { src, alt, title }, index}
        <img
          class="carousel-image"
          src={src}
          title={title}
          srcset={`${src} 600w, ${src} 1200w, ${src} 2000w`}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
          alt={`Image ${index + 1}: ${alt}`}
          role="presentation"
          aria-roledescription="carousel image des gites location vendée de "
          aria-hidden={index !== currentImageIndex}
          aria-labelledby="carousel-heading"
          tabindex="-1"
        />
      {/each}
    </div>
  </div>
</section>
