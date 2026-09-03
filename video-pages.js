(() => {
    const data = window.PORTFOLIO_VIDEO_DATA;
    const categoryKey = document.body.dataset.videoCategory;
    const isOverview = document.body.dataset.page === "video-overview";
    const contentTarget = document.querySelector("#video-page-content");

    if (!data || !contentTarget) return;

    const labels = {
        es: {
            kicker: "Portfolio de vídeo",
            projects: "Proyectos",
            synopsis: "Sinopsis",
            role: "Rol",
            date: "Fecha",
            duration: "Duración",
            progress: "En progreso",
            complete: "Finalizado",
            photoPending: "Fotografía pendiente",
            overviewTitle: "Producciones",
            overviewIntro: "Explora los proyectos por categoría.",
            openCategory: "Ver proyectos",
            watchVideo: "Ver vídeo",
            previousPhoto: "Foto anterior",
            nextPhoto: "Foto siguiente",
            goToPhoto: "Ir a la foto"
        },
        en: {
            kicker: "Video portfolio",
            projects: "Projects",
            synopsis: "Synopsis",
            role: "Role",
            date: "Date",
            duration: "Duration",
            progress: "In progress",
            complete: "Completed",
            photoPending: "Photo pending",
            overviewTitle: "Productions",
            overviewIntro: "Explore projects by category.",
            openCategory: "View projects",
            watchVideo: "Watch video",
            previousPhoto: "Previous photo",
            nextPhoto: "Next photo",
            goToPhoto: "Go to photo"
        }
    };

    const categoryUrls = {
        ficcion: "ficcion.html",
        ayudantia: "ayudantia.html",
        documental: "documental.html",
        "trailer-teaser": "trailer-teaser.html",
        videoclip: "videoclip.html",
        otros: "otros.html"
    };

    const categoryOrder = [
        "ficcion",
        "ayudantia",
        "documental",
        "trailer-teaser",
        "videoclip",
        "otros"
    ];

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

    const getProjectImages = (project) => {
        if (Array.isArray(project.posters)) {
            return project.posters.filter(Boolean).slice(0, 3);
        }

        if (project.poster) return [project.poster];
        return [];
    };

    const renderProjectImage = (project, index, language) => {
        const ui = labels[language];
        const images = getProjectImages(project);

        if (images.length) {
            const slides = images.map((image, imageIndex) => `
                <img
                    class="video-project__image video-project__slide${imageIndex === 0 ? " is-active" : ""}"
                    src="${escapeHtml(image)}"
                    alt="${escapeHtml(project.title)}${images.length > 1 ? ` — ${imageIndex + 1}` : ""}"
                    loading="lazy"
                    data-carousel-slide="${imageIndex}"
                >
            `).join("");

            const controls = images.length > 1 ? `
                <button class="video-project__carousel-arrow video-project__carousel-arrow--prev" type="button" data-carousel-action="prev" aria-label="${escapeHtml(ui.previousPhoto)}">←</button>
                <button class="video-project__carousel-arrow video-project__carousel-arrow--next" type="button" data-carousel-action="next" aria-label="${escapeHtml(ui.nextPhoto)}">→</button>
                <div class="video-project__carousel-dots" aria-label="${escapeHtml(project.title)}">
                    ${images.map((_, imageIndex) => `
                        <button
                            class="video-project__carousel-dot${imageIndex === 0 ? " is-active" : ""}"
                            type="button"
                            data-carousel-dot="${imageIndex}"
                            aria-label="${escapeHtml(ui.goToPhoto)} ${imageIndex + 1}"
                            aria-pressed="${imageIndex === 0 ? "true" : "false"}"
                        ></button>
                    `).join("")}
                </div>
            ` : "";

            return `
                <div class="video-project__carousel" data-carousel data-carousel-index="0">
                    ${slides}
                    ${controls}
                </div>
            `;
        }

        return `
            <div class="video-project__placeholder" aria-label="${escapeHtml(ui.photoPending)}">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <small>${escapeHtml(ui.photoPending)}</small>
            </div>
        `;
    };

    const renderProject = (project, index, language) => {
        const ui = labels[language];
        const statusLabel = project.status === "complete" ? ui.complete : ui.progress;
        const statusClass = project.status === "complete" ? "is-complete" : "is-progress";

        const videoUrl = project.video || project.youtube || "";
        const videoLink = videoUrl
            ? `<a class="video-project__watch-link" href="${escapeHtml(videoUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(ui.watchVideo)} ↗</a>`
            : "";

        return `
            <article class="video-project${index % 2 ? " video-project--reverse" : ""}">
                <div class="video-project__media-column">
                    <div class="video-project__media">
                        ${renderProjectImage(project, index, language)}
                    </div>
                    ${videoLink}
                </div>

                <div class="video-project__content">
                    <div class="video-project__title-row">
                        <h2>${escapeHtml(project.title)}</h2>
                        <span class="project-status ${statusClass}">${escapeHtml(statusLabel)}</span>
                    </div>

                    <div class="video-project__synopsis">
                        <span>${escapeHtml(ui.synopsis)}</span>
                        <p>${escapeHtml(project.synopsis)}</p>
                    </div>

                    <dl class="video-project__meta">
                        <div>
                            <dt>${escapeHtml(ui.role)}</dt>
                            <dd>${escapeHtml(project.role)}</dd>
                        </div>
                        <div>
                            <dt>${escapeHtml(ui.date)}</dt>
                            <dd>${escapeHtml(project.date)}</dd>
                        </div>
                        <div>
                            <dt>${escapeHtml(ui.duration)}</dt>
                            <dd>${escapeHtml(project.duration)}</dd>
                        </div>
                    </dl>
                </div>
            </article>
        `;
    };

    const renderCategory = (language) => {
        const category = data[language]?.categories?.[categoryKey] || data.es.categories[categoryKey];
        const ui = labels[language];
        if (!category) return;

        document.title = `${category.title} — Inés Parellada`;
        contentTarget.innerHTML = `
            <header class="video-page-hero" id="home">
                <div class="page-width">
                    <p class="section-kicker">${escapeHtml(ui.kicker)}</p>
                    <h1>${escapeHtml(category.title)}</h1>
                    <p>${escapeHtml(category.intro)}</p>
                </div>
            </header>

            <section class="video-catalog section-spacing" aria-label="${escapeHtml(ui.projects)}">
                <div class="page-width video-project-list">
                    ${category.projects.map((project, index) => renderProject(project, index, language)).join("")}
                </div>
            </section>
        `;
    };

    const renderOverview = (language) => {
        const categories = data[language]?.categories || data.es.categories;
        const ui = labels[language];
        document.title = `${ui.overviewTitle} — Inés Parellada`;

        contentTarget.innerHTML = `
            <header class="video-page-hero video-page-hero--overview" id="home">
                <div class="page-width">
                    <p class="section-kicker">${escapeHtml(ui.kicker)}</p>
                    <h1>${escapeHtml(ui.overviewTitle)}</h1>
                    <p>${escapeHtml(ui.overviewIntro)}</p>
                </div>
            </header>

            <section class="video-category-section section-spacing">
                <div class="page-width video-category-grid">
                    ${categoryOrder.map((key, index) => {
                        const category = categories[key];
                        if (!category) return "";

                        return `
                            <a class="video-category-card" data-number="${String(index + 1).padStart(2, "0")}" href="${categoryUrls[key]}">
                                <span class="video-category-card__number">${String(index + 1).padStart(2, "0")}</span>
                                <div>
                                    <h2>${escapeHtml(category.title)}</h2>
                                    <p>${escapeHtml(category.intro)}</p>
                                </div>
                                <span class="video-category-card__link">${escapeHtml(ui.openCategory)} ↗</span>
                            </a>
                        `;
                    }).join("")}
                </div>
            </section>
        `;
    };

    const setCarouselIndex = (carousel, nextIndex) => {
        const slides = [...carousel.querySelectorAll("[data-carousel-slide]")];
        const dots = [...carousel.querySelectorAll("[data-carousel-dot]")];
        if (!slides.length) return;

        const normalizedIndex = (nextIndex + slides.length) % slides.length;
        carousel.dataset.carouselIndex = String(normalizedIndex);

        slides.forEach((slide, index) => {
            slide.classList.toggle("is-active", index === normalizedIndex);
        });

        dots.forEach((dot, index) => {
            const isActive = index === normalizedIndex;
            dot.classList.toggle("is-active", isActive);
            dot.setAttribute("aria-pressed", String(isActive));
        });
    };

    contentTarget.addEventListener("click", (event) => {
        const actionButton = event.target.closest("[data-carousel-action]");
        const dotButton = event.target.closest("[data-carousel-dot]");
        const control = actionButton || dotButton;
        if (!control) return;

        const carousel = control.closest("[data-carousel]");
        if (!carousel) return;

        const currentIndex = Number(carousel.dataset.carouselIndex || 0);

        if (dotButton) {
            setCarouselIndex(carousel, Number(dotButton.dataset.carouselDot));
            return;
        }

        const direction = actionButton.dataset.carouselAction === "next" ? 1 : -1;
        setCarouselIndex(carousel, currentIndex + direction);
    });

    const render = (language = getLanguage()) => {
        if (isOverview) renderOverview(language);
        else renderCategory(language);
    };

    document.addEventListener("portfolio:languagechange", (event) => {
        render(event.detail?.language || getLanguage());
    });

    render();
})();
