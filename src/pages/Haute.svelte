<script>
    import equipementsItems from "../dataImport/equipments.js";
    import equipmentOutdoorItems from "../dataImport/equipementOutdoor.js";
    import "../style/utils/_mixins.scss";
    import Icon from "../components/Icon.svelte";
    import Carousel from "../components/Carousel.svelte";
    import { images } from "../dataImport/dataHaute/imgHaute";

    import {
        myAccommodation,
        tarifs,
        combinedData,
    } from "../dataImport/dataHaute/informationDataHaute";

    const [{ svgPaths }] = myAccommodation;

    const cottage = combinedData.find((item) => item.title === "Gite 2 pièces");
    console.log(cottage);

    let { name, title, description, roomComposition } = cottage;

    function getClassName(id) {
        return `iconEquipement ${
            id === 1
                ? "barbecue"
                : id === 2
                  ? "private-parking"
                  : id === 3
                    ? "shared-garden"
                    : id === 4
                      ? "lounger-chair"
                      : id === 5
                        ? "patio-furniture"
                        : id === 6
                          ? "private-terrace"
                          : ""
        }`;
    }

    function scrollToSection(event) {
        event.preventDefault();
        const sectionId = event.currentTarget.dataset.section;
        console.log("Section ID:", sectionId);
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            const sectionId = event.currentTarget.dataset.section;
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }

    // Filtrer les équipements pour exclure celui avec le nom "Wifi"
    const filteredEquipements = equipementsItems.filter(item => item.nom !== "Wifi");
</script>

<section
    class="sectionPageCottage"
  
    aria-labelledby="cottageHeading"
>
    <header>
        <div class="containerHeader">
            <img
                class="imgHeader"
                src="./assets/imgHaute/haute.webp"
                alt=""
                loading="lazy"
            />
            <div class="texteImgHeader">{name}</div>
        </div>
    </header>

    <nav
        class="navigationLinks"
       
        aria-label="Sections du gîte"
    >
        <a
            href="#cottageDescription"
   
            tabindex="0"
            data-section="cottageDescription"
            on:click={scrollToSection}
            on:keydown={handleKeyDown}
            aria-label="Aller à la section Description du gîte">DESCRIPTION</a
        >

        <a
            href="#equipmentOutdoor"
       
            tabindex="0"
            data-section="equipmentOutdoor"
            on:click={scrollToSection}
            on:keydown={handleKeyDown}
            aria-label="Aller à la section Équipement extérieur du gîte"
            >ÉQUIPEMENT
        </a>

        <a
            href="#service"
   
            tabindex="0"
            data-section="service"
            on:click={scrollToSection}
            on:keydown={handleKeyDown}
            aria-label="Aller à la section Services du gîte">SERVICES</a
        >

        <a
            href="#tarif"
        
            tabindex="0"
            data-section="tarif"
            on:click={scrollToSection}
            on:keydown={handleKeyDown}
            aria-label="Aller à la section Tarifs du gîte">TARIFS</a
        >

    </nav>

 
</section>

<!-- Les autres sections sont également adaptées de manière similaire -->

<section
   
    class="sectionMain"
    aria-labelledby="cottageDescHeading"
>
    <div class="description">
        <div class="squareDescription">
            <h1 class="descriptionTitleMobile" id="cottageDescHeading">
                {title}
            </h1>

            <section class="carouselDesktop">
                <Carousel {images} />
            </section>

            <section  id="cottageDescription" class="iconDesktop" role="presentation">
                <Icon {myAccommodation} />
                <h2 class="title_texte desktopText"> {name} </h2> 
                <p  class="container-text desktopText">
                    <!-- DESKTOP -->
                    {@html description}
                </p>
            </section>

            <div class="wrapperSection" >  
                <h2 class="mobilText"> {name} </h2> 
                <p class="container-text mobilText">
             
                    {@html description}
                </p>
<span id="equipmentOutdoor"  ></span>
                <section    class="equipements-section">
                    <div class="equipements">
                        <h2 class="EquipementH2">Équipements inclus</h2>
                        <ul>
                            {#each equipementsItems as equipement (equipement.nom)}
                            {#if (equipement.nom !== "Wifi" && equipement.nom !== "Lave-vaisselle" ) }
                                <li class="equipement-item">
                                    <img src={equipement.image} alt={equipement.alt} />
                                    {equipement.nom}
                                </li>
        {/if}
                            {/each}
                        </ul>
                    </div>
                </section>

                <section id="roomCompositionHeading"   class="Compositions-section">
                    <div
                        class="room-composition"
                        aria-labelledby="roomCompositionHeading"
                    >
                        <h2 class="roomH2">
                            Composition des chambres
                        </h2>

                        <ul class="chambre">
                            {#each roomComposition as room}
                                <li>
                                    {#if room.match(/\(([^)]+)\)/)}
                                        {@html room.replace(/\(([^)]+)\)/, '<span class="bed-size">($1)</span>')}
                                    {:else}
                                        {room}
                                    {/if}
                                </li>
                            {/each}
                        </ul>
                        
                    </div>
                </section>
            </div>
        </div>
    </div>
</section>

<section
    id="equipmentOutdoor"
    class="equipment"
    aria-labelledby="equipeOutdoorHeading"
>
    <div class="outdoor-equipment">
        <h2
            class="outdoorH2"
            id="equipOutdoorHeading"
            aria-label="Équipement extérieur"
        >
            Équipement extérieur
        </h2>

        <ul class="equipement-list">
            {#each equipmentOutdoorItems as { id, name, imageSrc }}
                <li class={getClassName(id)}>
                    <img src={imageSrc} alt={name} srcset="" />{name}
                </li>
            {/each}
        </ul>
    </div>
</section>

<section id="service" class="sectionService" aria-labelledby="serviceHeading">
    <div class="squareService">
        <h2 class="serviceTitle" id="serviceHeading">Services</h2>
        <ul class="serviceList">
            <li aria-label="Animaux gratuits">Animaux gratuits</li>
            <li aria-label="Linge de maison fourni">Linge de maison fourni</li>
            <li aria-label="Lits faits à l'arrivée">Lits faits à l'arrivée</li>
            <li aria-label="Ménage fin de séjour en option*">
                Ménage fin de séjour en option*
            </li>
        </ul>
    </div>
</section>

<section id="tarif" class="rates" aria-labelledby="tarifHeading">
    <h2 class="ratesTitle" id="tarifHeading">Tarifs</h2>
    <div class="tariffDetails">
        {#each tarifs as { label, amount, isBold, additionalInfo }, key (key)}
            <p class="tariffItem" >
                {#if isBold}
                    {label} <span class="tariffAmount">{amount}</span>
                {:else}
                    {label}
                {/if}
                {#if additionalInfo}
                    <span class="additionalInfo">{additionalInfo}</span>
                {/if}
            </p>
        {/each}
    </div>
</section>
