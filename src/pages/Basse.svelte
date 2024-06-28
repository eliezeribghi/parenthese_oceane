<script>



    import equipmentOutdoorItems from "../dataImport/equipementOutdoor";
    import equipements from "../dataImport/equipments";
    import "../style/utils/_mixins.scss";
    import Icon from "../components/Icon.svelte";
    import Carousel from "../components/Carousel.svelte";
    import { images } from "../dataImport/dataBasse/imgBasse";
    import {
        myAccommodation,
        tarifs,
        combinedData,
    } from "../dataImport/dataBasse/informationBasse";

    const [{ svgPaths }] = myAccommodation;
    const cottage = combinedData.find((item) => item.title === "Gîte 2 pièces");
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
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            scrollToSection(event);
        }
    }
</script>

<section class="sectionPageCottage" aria-labelledby="cottageHeading">
    <header>
        <div class="containerHeader">
            <img
                class="imgHeader"
                src="./assets/imgBasse/basse1.webp"
                alt="represent le gite haute"
                loading="lazy"
            />
            <div class="texteImgHeader">{name}</div>
        </div>
    </header>

    <nav class="navigationLinks" aria-label="Sections du gîte">
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
            >ÉQUIPEMENT</a
        >
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

<section class="sectionMain" aria-labelledby="cottageDescHeading">
    <div class="description">
        <div class="squareDescription">
            <h1 class="descriptionTitleMobile" id="cottageDescHeading">
                {title}
            </h1>

            <section class="carouselDesktop">
                <Carousel {images} />
            </section>

            <section
                id="cottageDescription"
                class="iconDesktop"
                role="presentation"
            >
                <Icon {myAccommodation} />
                <h2 class="title_texte desktopText">{name}</h2>
                <p class="container-text desktopText">
                    {@html description}
                </p>
            </section>

            <div class="wrapperSection">
                <h2 class="mobilText">{name}</h2>
                <p class="container-text mobilText">
                    {@html description}
                </p>

                <section id="equipmentOutdoor" class="equipements-section">
                    <div class="equipements">
                        <h2 class="equipementH2">Équipements inclus</h2>
                        <ul>
                            {#each equipements as equipement (equipement.nom)}
                                <li class="equipement-item">
                                    <img
                                        class="equipements-img"
                                        src={equipement.image}
                                        alt={equipement.alt}
                                    />
                                    <span>{equipement.nom}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </section>

                <section id="roomComposition" class="Compositions-section">
                    <div
                        class="room-composition"
                        aria-labelledby="roomCompositionHeading"
                    >
                        <h2 class="roomH2">Composition des chambres</h2>
                        <ul class="chambre">
                            {#each roomComposition as room}
                                <li>
                                    {#if room.match(/\(([^)]+)\)/)}
                                        {@html room.replace(
                                            /\(([^)]+)\)/,
                                            '<span class="bed-size">($1)</span>',
                                        )}
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
    aria-labelledby="equipOutdoorHeading"
>
    <div class="outdoor-equipment">
        <h2 class="outdoorH2" id="equipOutdoorHeading">Équipement extérieur</h2>
        <ul class="equipement-list">
            {#each equipmentOutdoorItems as { id, name, imageSrc }}
                <li class={getClassName(id)}>
                    <img src={imageSrc} alt={name} />
                    {name}
                </li>
            {/each}
        </ul>
    </div>
</section>

<section id="service" class="sectionService" aria-labelledby="serviceHeading">
    <div class="squareService">
        <h2 class="serviceTitle" id="serviceHeading">Services</h2>
        <ul class="serviceList">
            <li aria-label="Animaux gratuits">Animaux acceptés</li>
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
        {#each tarifs as { label, amount, isBold, additionalInfo }}
            <p class="tariffItem">
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
