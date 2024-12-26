// Toggle sections visibility
document.querySelectorAll("h2").forEach(sectionHeader => {
    sectionHeader.addEventListener("click", () => {
        const content = sectionHeader.nextElementSibling;
        content.style.display = content.style.display === "none" ? "block" : "none";
    });
});

// Highlight navigation links on hover
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#FFD700";
    });

    link.addEventListener("mouseout", () => {
        link.style.color = "#4CAF50";
    });
});
