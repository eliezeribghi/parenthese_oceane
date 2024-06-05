<script>
    import { onMount, onDestroy } from "svelte";

    export let images = [];

    let currentIndex = 0;
    let imageUrl = images[currentIndex].src;
    let altText = images[currentIndex].alt;
    let titleText = images[currentIndex].title;
    let showButtons = false;
    let scrollContainer;

    // Intervalle pour faire défiler les images automatiquement toutes les 5 secondes
    const interval = setInterval(() => {
        nextImage();
    }, 5000);

    // Initialisation des événements et de l'intervalle
    onMount(() => {
        document.addEventListener('keydown', handleKeydown); // Ajoute l'écouteur pour les événements de clavier
        return () => {
            clearInterval(interval); // Nettoie l'intervalle lorsqu'on quitte le composant
            document.removeEventListener('keydown', handleKeydown); // Enlève l'écouteur des événements de clavier
        };
    });

    onDestroy(() => {
        clearInterval(interval); // Nettoie l'intervalle lorsqu'on détruit le composant
        document.removeEventListener('keydown', handleKeydown); // Enlève l'écouteur des événements de clavier
    });

    // Fonction pour mettre à jour l'image affichée
    function updateImage() {
        imageUrl = images[currentIndex].src;
        altText = images[currentIndex].alt;
        titleText = images[currentIndex].title;
    }

    // Passe à l'image suivante
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }

    // Passe à l'image précédente
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    }

    // Gère le défilement avec la souris
    function onScroll() {
        const scrollLeft = scrollContainer.scrollLeft;
        const imageWidth = scrollContainer.scrollWidth / images.length;
        currentIndex = Math.round(scrollLeft / imageWidth);
        updateImage();
    }

    // Passe à une image spécifique
    function goToImage(index) {
        currentIndex = index;
        scrollContainer.scrollLeft = index * (scrollContainer.scrollWidth / images.length);
        updateImage();
    }

    // Gère les événements de clavier
    function handleKeydown(event) {
        if (event.key === 'ArrowRight') {
            nextImage();
        } else if (event.key === 'ArrowLeft') {
            prevImage();
        }
    }

    // Gère le survol pour afficher ou masquer les boutons de navigation
    function toggleButtons(value) {
        showButtons = value;
    }
</script>

<section class="miniCarousel">
    <div
        class="carousel"
        role="button"
        aria-label="Carousel"
        aria-roledescription="Carousel avec deux images"
        aria-pressed="false"
        tabindex="0"
        on:mouseenter={() => toggleButtons(true)}
        on:mouseleave={() => toggleButtons(false)}
    >
        <div class="image-container" bind:this={scrollContainer} on:scroll={onScroll}>
            {#each images as image, index}
                <img
                    class="imageMiniCarousel"
                    src={image.src}
                    alt={image.alt}
                    aria-label="Première Image"
                    title={image.title}
                    style="display: {currentIndex === index ? 'block' : 'none'};"
                />
            {/each}
        </div>
        <button
            class={`prev-button ${showButtons ? 'active' : ''}`}
            on:click={prevImage}
            aria-label="Image Précédente"
        >
        </button>
        <button
            class={`next-button ${showButtons ? 'active' : ''}`}
            on:click={nextImage} 
            aria-label="Image Suivante"
        >
        </button>
        <div class="indicators">
            {#each images as _, index}
              <button
                class={`indicator ${currentIndex === index ? 'active' : ''}`}
                on:click={() => goToImage(index)}
                aria-label={`Image ${index + 1}`}
              >
                <!-- Ajoutez ici une icône ou du texte pour représenter l'indicateur -->
              </button>
            {/each}
          </div>
          
    </div>
</section>

