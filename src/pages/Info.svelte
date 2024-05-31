<!-- App.svelte -->
<script>
    import { link } from "svelte-spa-router";
    import { commerces, restaurantsBars } from "../dataImport/dataProximite";

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
</script>

<div class="container-map">
    <div class="custom-header">
        <h1>Itinéraire vers notre gîte.</h1>
    </div>

    <div class="custom-main">
        <div class="instructions">
            <h2>Principales distances</h2>
            <ul>
                <li>
                    <img
                        src="./assets/imgLieuProximite/sunbathing-svgrepo-com.svg"
                        alt=""
                        srcset=""
                    /><span>1 km </span> des plages
                </li>
                <li>
                    <img
                        src="./assets/imgLieuProximite/surf-svgrepo-com.svg"
                        alt=""
                        srcset=""
                    /><span>30mn </span> des Sables d’Olonne
                </li>
                <li>
                    <img
                        src="./assets/imgLieuProximite/emu-svgrepo-com.svg"
                        alt=""
                        srcset=""
                    /><span>30mn </span> de la Roche sur Yon
                </li>
                <li>
                    <img
                        src="./assets/imgLieuProximite/lighthouse-svgrepo-com.svg"
                        alt=""
                        srcset=""
                    /><span>60mn</span> de la Rochelle
                </li>
                <li>
                    <img
                        src="./assets/imgLieuProximite/stadium-svgrepo-com.svg"
                        alt=""
                        srcset=""
                    /><span>80mn</span> du Puy du Fou
                </li>
            </ul>
        </div>
        <div></div>
        <img class="iframe" src="./assets/plan_page_info.jpg" alt="" />
        <!-- <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.6202475107857!2d-1.5500814055858558!3d46.41658455917107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480413710883840b%3A0xdc2e3f19f1cd9e15!2sGites%20Parenth%C3%A8se%20oc%C3%A9ane!5e0!3m2!1sfr!2sfr!4v1716994249499!5m2!1sfr!2sfr"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen="1"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe> -->

        <!-- Votre composant Svelte -->
    </div>
    <section class="lieuxDeProximite" aria-label="Lieux de proximité">
        <div
            class="containerProximite"
            role="region"
            aria-labelledby="proximityHeading"
        >
            <h2 id="proximityHeading">COMMERCES & RESTAURANTS</h2>
            <div class="flex-containerProximite">
                <div
                    class="section_commerce"
                    role="region"
                    aria-labelledby="commerceHeading"
                >
                    <h2 id="commerceHeading">Commerces</h2>

                    <ul>
                        {#each commerces as commerce}
                            <div class=" liste_commerces">
                                <li>
                                    <strong>
                                        {commerce.name}
                                    </strong> <br /> - Tel. :
                                    <a
                                        href="tel:{commerce.tel}"
                                        class="phone-number">{commerce.tel}</a
                                    >
                                </li>
                                {#if commerce.address}
                                    <li>
                                        <span>Adresse :</span>
                                        <address>
                                            {commerce.address}
                                        </address>
                                        {#if commerce.site}
                                            <span> | Site : </span>
                                            <a
                                                href={commerce.site}
                                                on:click|preventDefault={() =>
                                                    confirmRedirect(
                                                        commerce.site,
                                                        commerce.name,
                                                    )}
                                                class="modalContent-more"
                                                >En savoir plus</a
                                            >
                                        {/if}
                                    </li>
                                {/if}
                            </div>
                        {/each}
                    </ul>
                </div>
                <div
                    class="section_restauration"
                    role="region"
                    aria-labelledby="restaurantHeading"
                >
                    <h2 id="restaurantHeading">Restaurants & Bars</h2>
                    <ul>
                        {#each restaurantsBars as restaurant}
                            <div class=" liste_restaurants">
                                <li>
                                    <strong> {restaurant.name}</strong> <br /> -
                                    Tel. :
                                    <a
                                        href="tel:{restaurant.tel}"
                                        class="phone-number">{restaurant.tel}</a
                                    >
                                </li>
                                {#if restaurant.address && restaurant.site}
                                    <li>
                                        Adresse :
                                        <address>{restaurant.address}</address>
                                        | Site :
                                        <a
                                            href={restaurant.site}
                                            on:click|preventDefault={() =>
                                                confirmRedirect(
                                                    restaurant.site,
                                                    restaurant.name,
                                                )}
                                            class="modalContent-more"
                                        >
                                            En savoir plus
                                        </a>
                                    </li>
                                {/if}
                            </div>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <div class="text_footer">
        <p>
            Nous sommes impatients de vous accueillir dans notre gîte à
            Saint-Vincent-sur-Jard ! Si vous avez besoin de plus d'informations
            ou d'assistance pour trouver notre emplacement, n'hésitez pas à nous <a
                href="/contact"
                use:link
                aria-label="nous contacter via le lien"
                tabindex="0"
            >
                contacter.
            </a>
        </p>
    </div>
</div>
<!-- Boîte de dialogue personnalisée -->
{#if dialogVisible}
    <div class="customDialog">
        <p>
            Vous allez être redirigé vers un autre site. Voulez-vous continuer ?
        </p>
        <div class="buttonContainer">
            <button class="confirmButton" on:click={proceedToSite}>Oui</button>
            <button class="cancelButton" on:click={cancelRedirect}>Non</button>
        </div>
    </div>
{/if}
