<!-- App.svelte -->
<script>
  import { link } from "svelte-spa-router";
</script>

<div class="container-map">
    <div class="custom-header">
        <h1>Itinéraire vers notre gîte.</h1>
    </div>

    <div class="custom-main">
        <div class="instructions">
            <h2>Comment venir depuis les principales villes :</h2>
            <ul>
                <li>
                    <details>
                        <summary><strong>Depuis Paris :</strong> Prenez l'autoroute A11 en direction de Nantes...</summary>
                        Continuez sur l'A11, puis prenez l'autoroute A87 en direction de La Roche-sur-Yon. Suivez l'A87 et prenez la sortie 32-La Roche-sur-Yon. Continuez sur la D160 en direction de La Tranche-sur-Mer. À La Tranche-sur-Mer, prenez la D747 en direction de Jard-sur-Mer. Suivez la D747, puis tournez à gauche sur la D21 en direction de Saint-Vincent-sur-Jard. Continuez sur la D21 jusqu'à arriver à votre destination.
                    </details>
                </li>
                <li>
                    <details>
                        <summary><strong>Depuis Marseille :</strong> Prenez l'autoroute A7 en direction de Lyon...</summary>
                        Continuez sur l'A7, puis prenez l'autoroute A9 en direction de Montpellier. Suivez l'A9, puis prenez l'autoroute A75 en direction de Clermont-Ferrand. Continuez sur l'A75, puis prenez l'autoroute A71 en direction de Orléans. De là, prenez l'autoroute A10 en direction de Paris, puis suivez les instructions depuis Paris ci-dessus.
                    </details>
                </li>
                <li>
                    <details>
                        <summary><strong>Depuis Lyon :</strong> Prenez l'autoroute A6 en direction de Paris...</summary>
                        Continuez sur l'A6, puis prenez l'autoroute A10 en direction de Orléans. De là, suivez les instructions depuis Paris ci-dessus.
                    </details>
                </li>
                <li>
                    <details>
                        <summary><strong>Depuis Toulouse :</strong> Prenez l'autoroute A62 en direction de Bordeaux...</summary>
                        Continuez sur l'A62, puis prenez l'autoroute A10 en direction de Poitiers. Suivez l'A10, puis prenez l'autoroute A83 en direction de Nantes. De là, prenez l'autoroute A87 en direction de La Roche-sur-Yon et suivez les instructions depuis Paris ci-dessus.
                    </details>
                </li>
            </ul>
        </div>
        
  <iframe class="map"
            src="https://www.google.com/maps/d/embed?mid=1f3EkxUy4VLsVmHgcalpX69A2EFahOGA&ehbc=2E312F&noprof=1"
            width=":::;800"
            
            height="400"
            title="Google map"
        ></iframe>


        <!-- Votre composant Svelte -->
        
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
