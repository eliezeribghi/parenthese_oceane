<!-- App.svelte -->
<script>
    import { link } from "svelte-spa-router";
    import { commerces, restaurantsBars } from "../dataImport/dataProximite";
</script>

<div class="container-map">
    <div class="custom-header">
        <h1>Itinéraire vers notre gîte.</h1>
    </div>

    <div class="custom-main">
        <div class="instructions">
            <h1>Principales distances</h1>
            <ul>
                <li><img src="./assets/imgLieuProximite/sunbathing-svgrepo-com.svg" alt=""  srcset="">1 km des plages</li>
                <li><img src="./assets/imgLieuProximite/surf-svgrepo-com.svg" alt="" srcset="">30mn des Sables d’Olonne</li>
                <li><img src="./assets/imgLieuProximite/emu-svgrepo-com.svg" alt="" srcset=""> 30mn de la Roche sur Yon</li>
                <li><img src="./assets/imgLieuProximite/lighthouse-svgrepo-com.svg" alt="" srcset=""> 60mn de la Rochelle</li>
                <li><img src="./assets/imgLieuProximite/stadium-svgrepo-com.svg" alt="" srcset=""> 80mn du Puy du Fou</li>
            </ul>
        </div>
        <div></div>
        <img class="iframe" src="./src/assets/plan_page_info.jpg" alt="" />
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
            <h2 id="proximityHeading">Commerces et Restaurants</h2>
            <div class="flex-containerProximite">
                <div
                    class="section_commerce"
                    role="region"
                    aria-labelledby="commerceHeading"
                >
                    <h2 id="commerceHeading">COMMERCES</h2>

                    <ul>
                        {#each commerces as commerce}
                        <div class=" liste_commerces">
                            <li>{commerce.name} - Tel. : {commerce.tel}</li>
                            {#if commerce.address}
                                <li>
                                    <span>Adresse :</span>
                                    {commerce.address}
                                    {#if commerce.site}
                                        <span> | Site : </span>
                                        <a href={commerce.site} target="_blank"
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
                    <h2 id="restaurantHeading">RESTAURANTS & BARS</h2>
                    <ul>
                        {#each restaurantsBars as restaurant}
                            <div class=" liste_restaurants">
                                <li>
                                    {restaurant.name} - Tel. : {restaurant.tel}
                                </li>
                                {#if restaurant.address && restaurant.site}
                                    <li>
                                        Adresse : {restaurant.address} | Site :
                                        <a
                                            href={restaurant.site}
                                            target="_blank"
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
