<script  >
  import Router, { location } from "svelte-spa-router";
  import routes from "./routes";
 

  // Components
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";

  // On vérifie la page sur laquelle on est pour appliquer
  // une classe sur notre body et changer notre background
  // au besoin

  // ! - À décommenter après installation de 'spa-svelte-router'
  // ! - et importation de { location } de 'svelte-spa-router'

  import { beforeUpdate, onMount } from "svelte";


// Appeler la fonction scrollToTop lorsque le composant est monté
onMount(() => {
  scrollToTop();
});

  beforeUpdate(() => {
    $location === "/"
      ? document.body.classList.add("homepage")
      : document.body.classList.remove("homepage");
  });

  // Fonction pour remonter en haut de la page
  function scrollToTop() {
    window.scrollTo({
      top: 0, //Navigation vers le haut jusqu'à une position de 0 pixels 
      behavior: 'smooth' // Option pour un défilement fluide
    });
  }

  onMount(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-2LLWS7B585";
    document.head.appendChild(script);
  });
</script>

<svelte:head>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-2LLWS7B585');
  </script>
</svelte:head>


<Header />

<Router {routes} />

<Footer />
