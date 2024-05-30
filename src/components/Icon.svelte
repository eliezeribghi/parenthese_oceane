<script>
    export let myAccommodation;

    let accommodationData = myAccommodation && myAccommodation.length > 0 ? myAccommodation[0] : null;
    const { svgPaths } = accommodationData;

    const iconTextMap = {
        1: { property: "capacity" },
        2: { property: "rooms" },
        3: { property: "bathrooms" },
        4: { property: "beds" },
        5: { property: "squareMeter" }
    };
</script>

<section class="sectionIcon" aria-label="Icônes de logement">
    <div class="icon-section" role="region">
        {#each svgPaths as { id, path, title, text }}
            <div class="icon-wrapper">
                <img class="icons" src={path} alt={title || "Icon"} aria-hidden="true" />
                <div class="textIcon">
                    <span class="numberIcon" aria-label="{accommodationData ? (accommodationData[iconTextMap[id].property] ?? '') + ' ' + text : ''}">
                        {accommodationData ? (accommodationData[iconTextMap[id].property] ?? "") : ""} {text}
                    </span>
                </div>
            </div>
        {/each}
    </div>
</section>
