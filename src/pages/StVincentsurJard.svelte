<script>

import { places } from "../dataImport/dataLieu/lieu.js";
// Supprimez l'import de 'places'

// Déclarez une variable locale pour stocker les données
let placesData = [];

function setPlaces(data) {
  placesData = data; // Mettez à jour les données locales
}

function cacheData(data) {
  // Stockez les données en cache ici
  // Par exemple, vous pouvez les stocker dans localStorage ou sessionStorage
  localStorage.setItem('placesData', JSON.stringify(data));
}

let showModal = false;
let modalContent = {
  id: "",
  title: "",
  description: "",
  interest: "",
  practicalInfo: "",
  url: "",
  src: "",
  alt: "",
  name: "",
};

function fetchData() {
  fetch('../dataImport/dataLieu/lieu.json') 
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      return response.json();
    })
    .then(data => {
      console.log('Données des lieux récupérées :', data);
      setPlaces(data); // Met à jour les données des lieux
      cacheData(data);
    })
    .catch(error => {
      console.error('Erreur :', error);
    });
}

window.addEventListener('load', () => {
  fetchData();
});




let showAdditionalContent = false;

function toggleText() {
  showAdditionalContent = !showAdditionalContent;
}

function handleScroll() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const elements = document.querySelectorAll(".scroll-animation");

  elements.forEach((element) => {
    // Vérifie si l'élément est de type HTMLElement
    if (element instanceof HTMLElement) {
      const elementPosition = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const startToShow = elementPosition - windowHeight + 10;

      if (scrollPosition > startToShow) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    }
  });
}


function handleScrollAppear() {
  const boutonScroll = document.getElementById('boutonScroll');
  if (boutonScroll) {
    boutonScroll.style.display = (window.scrollY === 0) ? 'block' : 'none';
  }
}


function scrollToFirstSection() {
  const section = document.querySelector('.sectionTexteLieu');
  const boutonScroll = document.getElementById('boutonScroll');
  if (section instanceof HTMLElement && boutonScroll instanceof HTMLElement) {
    // Vérifie si 'section' et 'boutonScroll' sont bien des éléments HTMLElement
    const sectionOffsetTop = section.offsetTop; // Assurez-vous que TypeScript reconnaît 'offsetTop'
    if (!isNaN(sectionOffsetTop)) {
      window.scrollTo({
        top: sectionOffsetTop,
        behavior: 'smooth'
      });
      boutonScroll.style.display = 'none';
    }
  }
}


const openModal = (content) => {
  modalContent = { ...content }; // Utilisation de la déstructuration pour éviter les mutations directes
  showModal = true;
};

const closeModal = () => {
  showModal = false;
};

let dialogDetails = {};
let dialogVisible = false;

const confirmRedirect = (url, name) => {
  dialogDetails = { url, name }; // Utilisation de la déstructuration pour éviter les mutations directes
  dialogVisible = true;
};

const proceedToSite = () => {
  window.open(dialogDetails.url, "_blank");
  dialogVisible = false;
};

const cancelRedirect = () => {
  dialogVisible = false;
};

let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      handleScrollAppear();
      ticking = false;
    });
    ticking = true;
  }
});


</script>

<!-- description -->

<section aria-labelledby="pageTitle" class="descriptionHeader">
  <div role="heading" aria-level="1">
    <h1>
      <strong class="titreDescription" aria-label="Nom du lieu">Saint-Vincent-sur-Jard</strong>
    </h1>
  </div>
  

  <article class="main-content">
    <p>
      Niché sur les côtes venteuses de l'Atlantique, Saint-Vincent-sur-Jard est
      un petit bijou de la Vendée, offrant un mélange envoûtant de charme
      historique, de paysages naturels préservés et de détente balnéaire.
    </p>
    <!-- Bouton pour afficher/masquer le texte supplémentaire -->
    {#if !showAdditionalContent}
      <button class="readMore" on:click={toggleText}>Afficher plus</button>
    {/if}
    <!-- Contenu supplémentaire masqué par défaut -->
    {#if showAdditionalContent}
      <p>
        Ce village côtier, baigné de la lumière douce du soleil, séduit les
        visiteurs par son atmosphère paisible et son riche patrimoine. Du
        célèbre jardin de Georges Clémenceau aux sentiers sauvages de randonnée,
        chaque coin de Saint-Vincent-sur-Jard révèle une facette unique de son
        histoire et de sa beauté naturelle.
        
      </p>
      <!-- Bouton pour masquer le texte supplémentaire -->
      <button class="readMore" on:click={toggleText}>&times;</button>
    {/if}
      
  </article>
  <article class="main-content-desktop">
    <p>
      Niché sur les côtes venteuses de l'Atlantique, Saint-Vincent-sur-Jard est
      un petit bijou de la Vendée, offrant un mélange envoûtant de charme
      historique, de paysages naturels préservés et de détente balnéaire. <br>
   
        Ce village côtier, baigné de la lumière douce du soleil, séduit les
        visiteurs par son atmosphère paisible et son riche patrimoine. <br> Du
        célèbre jardin de Georges Clémenceau aux sentiers sauvages de randonnée,
        chaque coin de Saint-Vincent-sur-Jard révèle une facette unique de son
        histoire et de sa beauté naturelle.
        
      </p>
      <img class="logoVendee" src="./assets/logo-vendee.webp" alt="Logo de la Vendée">

  </article>


</section>

<!-- Bouton de défilement vers la première section -->
<button id="boutonScroll" aria-label="Revenir en haut de la page" on:click={scrollToFirstSection} >
  <span></span>
</button>


<section class="sectionTexteLieu"></section>
<!-- Lieux -->
<section class="sectionTexteLieu">
  <div role="heading" aria-level="2" class="titlt-lieu">
    <h2>Explorez des lieux </h2>
  </div>
  
  {#each places as place (place.id)}
    <div class="tourist-site scroll-animation" aria-label={place.title} role="region">
      <div class="site-image">
        <img loading="lazy" src={place.src} alt={place.alt} title={place.name} />
      </div>
      <div class="site-description">
        <h2>{place.title}</h2>
        <p>{place.description.substring(0, 100)}...</p>
        <!-- Ajout de la gestion des événements clavier pour l'accessibilité -->
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a
          class="linkPlace"
          href="javascript:void(0)"
          on:click|stopPropagation={() => openModal(place)}
          on:keydown={(event) => {
            if (event.key === 'Enter') {
              openModal(place);
            }
          }}
          tabindex="0"
          aria-label="En savoir plus sur {place.title}" 
          role="button" 
        >
          En savoir plus
        </a>
      </div>
    </div>
  {/each}
</section>


<!-- Modal -->
<section>
  {#if showModal}
  
  <div class="modalLieu" role="dialog" aria-modal="true">
    
    <div class="modalContent">
      <span class="close-button" role="button" tabindex="0" on:click={closeModal} on:keydown={(event) => { if (event.key === 'Enter' || event.key === 'Escape') { closeModal(); } }}>&times;</span>
      
      <figure class="modalContent_figure">
        <img 
          class="modalContent_figure-image"
          loading="lazy"
          src={modalContent.src}
          alt={modalContent.alt}
          title={modalContent.name}
        />
        <figcaption  class="modalContent_figure-title">{modalContent.title}</figcaption>
      </figure>

      <div class="modalContent_wrapperDescription">
        <div class="modalContent_wrapperDescription-item">
          <h3 class="modalContent_wrapperDescription-item--title"> <strong>Description</strong></h3>
          <p class="modalContent_wrapperDescription-item--content">{modalContent.description}</p>
        </div>
        
        <div class="modalContent_wrapperDescription-item">
          <h3 class="modalContent_wrapperDescription-item--title"><strong>Intérêt touristique</strong></h3>
          <p class="modalContent_wrapperDescription-item--content">{modalContent.interest}</p>
        </div>

        <div class="modalContent_wrapperDescription-item">
          <h3 class="modalContent_wrapperDescription-item--title"><strong>Informations pratiques</strong></h3>
          <p class="modalContent_wrapperDescription-item--content">{modalContent.practicalInfo}</p>
        </div>
      </div>

      <!-- <h3><strong> Lien vers site</strong></h3> -->
      <a
        href={modalContent.url}
        on:click|preventDefault={() => confirmRedirect(modalContent.url, modalContent.name)}
        class="modalContent-more"
      >
       En savoir plus
      </a>

    </div>
  </div>
  {/if}
  
  
</section>
<!-- Boîte de dialogue personnalisée -->
{#if dialogVisible}
  <div class="customDialog">
    <p>
      Vous allez être redirigé vers un autre site. Voulez-vous
      continuer ?
    </p>
    <div class="buttonContainer">
    <button class="confirmButton" on:click={proceedToSite}>Oui</button>
    <button class="cancelButton" on:click={cancelRedirect}>Non</button>
    </div>
  </div>
{/if}




