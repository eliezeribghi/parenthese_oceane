export function scrollToSection(event) {
    event.preventDefault();
    const sectionId = event.currentTarget.dataset.section;
    console.log("Section ID:", sectionId); 
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

export function handleKeyDown(event) {
    if (event.key === "Enter") {
        const sectionId = event.currentTarget.dataset.section;
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
}
