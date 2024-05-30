<script>
    import rentals from "../dataImport/cards";
    
    function redirectToLink(link) {
      window.location.href = link;
    }
  </script>
  
  <section class="section3">

    <h1 class="title_card">
      <span>Découvrez Nos Gîtes</span>
      <span>Entre Mer & Nature</span>
    </h1>
    
    <div class="gites-rental">
      {#each rentals as { name, location, details, imageUrl, link, title }}
        <div class="imageGites-wrapper">
            <div class="imageGites">
            <img class="rental-image" src={imageUrl} alt={title + " image"} />
            <div class="rental-card">
              <h2 class="textCardH2">{name}</h2>

              <div class="rental-card_wrapperText">
                <p class="textCard">{location}</p>
                <p class="textCard">{details}</p>
              </div>

              <a class="textCard linkCard" href={link} on:click|preventDefault={() => redirectToLink(link)}>En savoir plus </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
  