(() => {
    const translations = {
        es: {
            meta: {
                title: "Inés Parellada — Film Editor",
                description: "Portfolio de Inés Parellada, film editor."
            },
            nav: {
                home: "Inicio",
                about: "Sobre mí",
                video: "Vídeo",
                contact: "Contacto",
                openMenu: "Abrir o cerrar el menú",
                mainLabel: "Navegación principal",
                languageLabel: "Selector de idioma",
                categories: {
                    fiction: "Ficción",
                    documentary: "Documental",
                    trailer: "Tráiler y teaser",
                    other: "Otros",
                    musicVideo: "Videoclip",
                    assistant: "Ayudantía"
                }
            },
            hero: {
                eyebrow: "Montaje cinematográfico",
                explore: "Explorar",
                exploreLabel: "Bajar a los últimos proyectos",
                videoFallback: "Tu navegador no puede reproducir este vídeo."
            },
            projects: {
                kicker: "Selección de trabajos",
                title: "Últimos proyectos",
                intro: "Una selección de proyectos de ficción, documental, otros formatos y contenido musical.",
                viewAll: "Ver todas las producciones",
                items: {
                    soho: {
                        category: "Ficción",
                        meta: "2026 · Montaje",
                        alt: "Fotograma del proyecto DruDru"
                    },
                    merce: {
                        category: "Ayudantía",
                        meta: "2026 · Ayudante de montaje",
                        alt: "Fotograma de Curling Club Vallvidrera"
                    },
                    nike: {
                        category: "Ficción",
                        meta: "2026 · Montaje",
                        alt: "Imagen Bosque"
                    }
                }
            },
            about: {
                kicker: "Perfil",
                title: "About me",
                bio: "Soy montadora cinematográfica formada en la ESCAC (Escola Superior de Cinema i Audiovisuals de Catalunya), donde cursé el Foundation Year, el Grado en Cinematografía y el Máster en Montaje, profundizando en las herramientas narrativas y expresivas de la edición. Trabajo habitualmente con Avid Media Composer, DaVinci Resolve, Premiere Pro, Final Cut Pro, After Effects y Photoshop. Actualmente formo parte del departamento de vídeo de Filmin, labor que compagino con la búsqueda constante de nuevos proyectos independientes y colaboraciones externas donde seguir explorando historias en la sala de montaje.",
                experienceTitle: "Experiencia laboral",
                jobs: {
                    parcela: {
                        role: "Ayudante de montaje"
                    },
                    suricata: {
                        company: "Productora audiovisual documental",
                        role: "Ayudante de montaje"
                    },
                    filmin: {
                        role: "Assistant Trailer Editor"
                    }
                }
            },
            contact: {
                kicker: "Contacto",
                title: "Hablemos de tu próximo proyecto",
                text: "Disponible para proyectos de montaje, ayudantía y colaboración audiovisual."
            },
            footer: {
                backToTop: "Volver arriba ↑"
            }
        },
        en: {
            meta: {
                title: "Inés Parellada — Film Editor",
                description: "Portfolio of Inés Parellada, film editor."
            },
            nav: {
                home: "Home",
                about: "About me",
                video: "Video",
                contact: "Contact",
                openMenu: "Open or close the menu",
                mainLabel: "Main navigation",
                languageLabel: "Language selector",
                categories: {
                    fiction: "Fiction",
                    documentary: "Documentary",
                    trailer: "Trailer and teaser",
                    other: "Other",
                    musicVideo: "Music video",
                    assistant: "Assistant editing"
                }
            },
            hero: {
                eyebrow: "Film editing",
                explore: "Explore",
                exploreLabel: "Go to latest projects",
                videoFallback: "Your browser cannot play this video."
            },
            projects: {
                kicker: "Selected work",
                title: "Latest projects",
                intro: "A selection of fiction, documentary, other formats and music-related projects.",
                viewAll: "View all productions",
                items: {
                    soho: {
                        category: "Ficiton",
                        meta: "2026 · Editing",
                        alt: "Still drudru"
                    },
                    merce: {
                        category: "Assistant Editing",
                        meta: "2026 · Assistant editing",
                        alt: "Still curling"
                    },
                    nike: {
                        category: "Fiction",
                        meta: "2026 · Editing",
                        alt: "still bosque"
                    }
                }
            },
            about: {
                kicker: "Profile",
                title: "About me",
                bio: "I am a film editor trained at ESCAC (Escola Superior de Cinema i Audiovisuals de Catalunya), where I completed the Foundation Year, a Bachelor’s Degree in Film, and a Master’s in Film Editing, deepening my focus on the narrative and expressive tools of editing. I regularly work with Avid Media Composer, DaVinci Resolve, Premiere Pro, Final Cut Pro, After Effects, and Photoshop. Currently, I am part of the video department at Filmin, which I balance with a constant drive to take on new freelance projects and external collaborations to keep exploring compelling stories in the editing room.",
                experienceTitle: "Work experience",
                jobs: {
                    parcela: {
                        role: "Assistant editor"
                    },
                    suricata: {
                        company: "Documentary audiovisual production company",
                        role: "Assistant editor"
                    },
                    filmin: {
                        role: "Assistant Trailer Editor"
                    }
                }
            },
            contact: {
                kicker: "Contact",
                title: "Let’s talk about your next project",
                text: "Available for editing, assistant editing and audiovisual collaborations."
            },
            footer: {
                backToTop: "Back to top ↑"
            }
        }
    };

    const getNestedValue = (object, path) => {
        return path.split(".").reduce((value, key) => value?.[key], object);
    };

    const applyLanguage = (language) => {
        const dictionary = translations[language] || translations.es;

        document.documentElement.lang = language;
        document.title = dictionary.meta.title;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute("content", dictionary.meta.description);

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const value = getNestedValue(dictionary, element.dataset.i18n);
            if (typeof value === "string") element.textContent = value;
        });

        document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
            const value = getNestedValue(dictionary, element.dataset.i18nAlt);
            if (typeof value === "string") element.setAttribute("alt", value);
        });

        document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
            const value = getNestedValue(dictionary, element.dataset.i18nAria);
            if (typeof value === "string") element.setAttribute("aria-label", value);
        });

        document.querySelectorAll("[data-language]").forEach((button) => {
            button.setAttribute("aria-pressed", String(button.dataset.language === language));
        });

        localStorage.setItem("portfolio-language", language);
        document.dispatchEvent(new CustomEvent("portfolio:languagechange", {
            detail: { language }
        }));
    };

    const navToggle = document.querySelector(".nav-toggle");
    const navPanel = document.querySelector(".nav-panel");
    const videoDropdown = document.querySelector(".nav-dropdown");

    const closeMenu = () => {
        if (!navToggle || !navPanel) return;
        navToggle.setAttribute("aria-expanded", "false");
        navPanel.classList.remove("is-open");
        document.body.classList.remove("menu-open");
    };

    navToggle?.addEventListener("click", () => {
        const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
        navToggle.setAttribute("aria-expanded", String(willOpen));
        navPanel?.classList.toggle("is-open", willOpen);
        document.body.classList.toggle("menu-open", willOpen);

        // En móvil mostramos directamente todas las categorías de vídeo.
        if (willOpen && window.innerWidth <= 1020 && videoDropdown) {
            videoDropdown.setAttribute("open", "");
        }
    });

    navPanel?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
        button.addEventListener("click", () => {
            applyLanguage(button.dataset.language);
            closeMenu();
        });
    });

    document.addEventListener("click", (event) => {
        const clickedToggle = navToggle?.contains(event.target);

        if (videoDropdown?.open && !videoDropdown.contains(event.target) && !clickedToggle) {
            videoDropdown.removeAttribute("open");
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1020) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
            videoDropdown?.removeAttribute("open");
        }
    });

    const savedLanguage = localStorage.getItem("portfolio-language");
    const browserLanguage = navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
    applyLanguage(savedLanguage || browserLanguage);
})();
