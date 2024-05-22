<script>
    import { onMount, onDestroy } from "svelte";

    export let images;

    let currentIndex = 0;
    let imageUrl1 = images[currentIndex].src;


    let showButtons = false;

    const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageUrl1 = images[currentIndex].src;
      
    }, 5000);

    onMount(() => {
        return () => clearInterval(interval);
    });

    onDestroy(() => {
        clearInterval(interval);
    });

    function toggleButtons(value) {
        showButtons = value;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imageUrl1 = images[currentIndex].src;
        
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        imageUrl1 = images[currentIndex].src;
      
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
        <div class="image-container" >
                <button
                    class={`prev-button ${showButtons ? 'active' : ''}`}
                    on:click={() => prevImage()}
                    aria-label="Image Précédente"
                >
                </button>
            <img
            class="imageMiniCarousel"
            src={imageUrl1}
            alt="Description de l'image"
            aria-label="Première Image"
            title="Titre de l'image"
        />
        

                <button
                    class={`next-button ${showButtons ? 'active' : ''}`}
                    on:click={() => nextImage()}
                    aria-label="Image Suivante"
                >
                </button>
        </div>
    </div>
</section>
