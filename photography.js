(() => {
    const data = window.PORTFOLIO_PHOTO_DATA;
    const contentTarget = document.querySelector("#photography-content");
    const lightbox = document.querySelector("#photo-lightbox");

    if (!data || !contentTarget || !lightbox) return;

    const lightboxImage = lightbox.querySelector("#photo-lightbox-image");
    const lightboxTitle = lightbox.querySelector("#photo-lightbox-title");
    const lightboxDescription = lightbox.querySelector("#photo-lightbox-description");
    const lightboxMeta = lightbox.querySelector("#photo-lightbox-meta");
    const lightboxCounter = lightbox.querySelector("#photo-lightbox-counter");
    const previousButton = lightbox.querySelector("[data-photo-prev]");
    const nextButton = lightbox.querySelector("[data-photo-next]");

    let language = "es";
    let activeCategory = "all";
    let visiblePhotos = [];
    let activeIndex = 0;

    const escapeHtml = (value = "") => String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    const getLanguage = () => {
        const saved = localStorage.getItem("portfolio-language");
        if (saved === "en" || saved === "es") return saved;
        return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
    };

    const getPageData = () => data[language] || data.es;

    const getFilteredPhotos = () => {
        const photos = getPageData().photos;
        return activeCategory === "all"
            ? photos
            : photos.filter((photo) => photo.category === activeCategory);
    };

    const renderCard = (photo, index, pageData) => {
        const category = pageData.categoryLabels[photo.category] || photo.category;
        const aspect = ["portrait", "square", "landscape"].includes(photo.aspect)
            ? photo.aspect
            : "landscape";

        return `
            <button class="photo-card photo-card--${aspect}" type="button" data-photo-index="${index}" aria-label="${escapeHtml(photo.title)}">
                <span class="photo-card__media">
                    <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}" loading="lazy">
                </span>
                <span class="photo-card__overlay">
                    <span>
                        <strong>${escapeHtml(photo.title)}</strong>
                        <small>${escapeHtml(category)} · ${escapeHtml(photo.year)}</small>
                    </span>
                    <span class="photo-card__expand" aria-hidden="true">↗</span>
                </span>
            </button>
        `;
    };

    const renderGallery = () => {
        const pageData = getPageData();
        visiblePhotos = getFilteredPhotos();
        const gallery = document.querySelector("#photo-grid");
        if (!gallery) return;

        gallery.innerHTML = visiblePhotos
            .map((photo, index) => renderCard(photo, index, pageData))
            .join("");
    };

    const renderPage = (nextLanguage = getLanguage()) => {
        language = nextLanguage;
        const pageData = getPageData();
        const categories = Object.entries(pageData.categoryLabels);

        document.title = `${pageData.title} — Inés Parellada`;
        activeCategory = Object.prototype.hasOwnProperty.call(pageData.categoryLabels, activeCategory)
            ? activeCategory
            : "all";

        contentTarget.innerHTML = `
            <header class="photo-page-hero" id="home">
                <div class="page-width">
                    <p class="section-kicker">${escapeHtml(pageData.kicker)}</p>
                    <h1>${escapeHtml(pageData.title)}</h1>
                    <p>${escapeHtml(pageData.intro)}</p>
                </div>
            </header>

            <section class="photo-gallery-section section-spacing" aria-label="${escapeHtml(pageData.title)}">
                <div class="page-width">
                    <div class="photo-filters" role="group" aria-label="${escapeHtml(pageData.title)}">
                        <button type="button" data-photo-filter="all" class="${activeCategory === "all" ? "is-active" : ""}">${escapeHtml(pageData.allLabel)}</button>
                        ${categories.map(([key, label]) => `
                            <button type="button" data-photo-filter="${escapeHtml(key)}" class="${activeCategory === key ? "is-active" : ""}">${escapeHtml(label)}</button>
                        `).join("")}
                    </div>

                    <div class="photo-grid" id="photo-grid"></div>
                </div>
            </section>
        `;

        renderGallery();
    };

    const updateLightbox = () => {
        const photo = visiblePhotos[activeIndex];
        if (!photo) return;
        const pageData = getPageData();
        const category = pageData.categoryLabels[photo.category] || photo.category;

        lightboxImage.src = photo.src;
        lightboxImage.alt = photo.alt;
        lightboxTitle.textContent = photo.title;
        lightboxDescription.textContent = photo.description;
        lightboxMeta.textContent = [category, photo.location, photo.year].filter(Boolean).join(" · ");
        lightboxCounter.textContent = `${activeIndex + 1} / ${visiblePhotos.length}`;

        const hasMultiple = visiblePhotos.length > 1;
        previousButton.hidden = !hasMultiple;
        nextButton.hidden = !hasMultiple;
    };

    const openLightbox = (index) => {
        activeIndex = Number(index) || 0;
        updateLightbox();
        document.body.classList.add("photo-lightbox-open");
        lightbox.showModal();
    };

    const closeLightbox = () => {
        if (!lightbox.open) return;
        lightbox.close();
        document.body.classList.remove("photo-lightbox-open");
        lightboxImage.src = "";
    };

    const changePhoto = (direction) => {
        if (!visiblePhotos.length) return;
        activeIndex = (activeIndex + direction + visiblePhotos.length) % visiblePhotos.length;
        updateLightbox();
    };

    document.addEventListener("click", (event) => {
        const filterButton = event.target.closest("[data-photo-filter]");
        if (filterButton) {
            activeCategory = filterButton.dataset.photoFilter || "all";
            document.querySelectorAll("[data-photo-filter]").forEach((button) => {
                button.classList.toggle("is-active", button === filterButton);
            });
            renderGallery();
        }

        const photoButton = event.target.closest("[data-photo-index]");
        if (photoButton) openLightbox(photoButton.dataset.photoIndex);

        if (event.target.closest("[data-close-photo-lightbox]")) closeLightbox();
        if (event.target.closest("[data-photo-prev]")) changePhoto(-1);
        if (event.target.closest("[data-photo-next]")) changePhoto(1);
        if (event.target === lightbox) closeLightbox();
    });

    lightbox.addEventListener("cancel", (event) => {
        event.preventDefault();
        closeLightbox();
    });

    document.addEventListener("keydown", (event) => {
        if (!lightbox.open) return;
        if (event.key === "ArrowLeft") changePhoto(-1);
        if (event.key === "ArrowRight") changePhoto(1);
    });

    document.addEventListener("portfolio:languagechange", (event) => {
        closeLightbox();
        renderPage(event.detail?.language || getLanguage());
    });

    renderPage();
})();
