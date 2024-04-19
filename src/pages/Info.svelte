<!-- App.svelte -->
<script>
  import { link } from "svelte-spa-router";
</script>

<div class="container-map">
    <div class="custom-header">
        <h1>Itinéraire vers notre gîte</h1>
    </div>

    <div class="custom-main">
        <div class="instructions">
            <h2 >Comment venir depuis les principales villes :</h2>
            <ul>
                <li>
                    <strong>Depuis Paris :</strong> Prenez l'autoroute A11 en direction
                    de Nantes...
                </li>
                <li>
                    <strong>Depuis Nantes :</strong> Prenez l'A83 en direction de
                    La Roche-sur-Yon...
                </li>
                <li>
                    <strong>Depuis Bordeaux :</strong> Prenez l'A10 en direction
                    de Poitiers...
                </li>
            </ul>
        </div>

        <!-- Votre composant Svelte -->
        <iframe
            src="https://www.google.com/maps/d/embed?mid=1f3EkxUy4VLsVmHgcalpX69A2EFahOGA&ehbc=2E312F&noprof=1"
            width="100%"
            height="380"
            title="Google map"
        ></iframe>
    </div>
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
            contacter. </a>
        </p>
    </div>
</div>
