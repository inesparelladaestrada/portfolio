(() => {
    const body = document.body;
    const root = body.dataset.root || "";
    const currentPage = body.dataset.page || "";

    const href = (path) => `${root}${path}`;
    const activeClass = (page) => currentPage === page ? " is-active" : "";
    const videoActiveClass = ["video", "video-overview"].includes(currentPage) ? " is-active" : "";
    const currentCategory = body.dataset.videoCategory || "";
    const categoryActiveClass = (category) => currentCategory === category ? " class=\"is-active\"" : "";
    const aboutHref = currentPage === "home" ? "#sobre-mi" : href("index.html#sobre-mi");
    const contactHref = currentPage === "home" ? "#contacte" : href("index.html#contacte");

    const header = `
        <header class="site-header">
            <div class="navbar page-width">
                <a class="brand" href="${href("index.html")}" aria-label="Inés Parellada — Film Editor">
                    <span class="brand__name">Inés Parellada</span>
                    <span class="brand__role">Film editor</span>
                </a>

                <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-navigation" data-i18n-aria="nav.openMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav class="nav-panel" id="main-navigation" aria-label="Navegación principal" data-i18n-aria="nav.mainLabel">
                    <ul class="nav-list">
                        <li>
                            <a class="nav-link${activeClass("home")}" href="${href("index.html")}" data-i18n="nav.home">Inicio</a>
                        </li>
                        <li>
                            <a class="nav-link" href="${aboutHref}" data-i18n="nav.about">Sobre mí</a>
                        </li>
                        <li>
                            <details class="nav-dropdown${videoActiveClass}">
                                <summary data-i18n="nav.video">Vídeo</summary>
                                <ul class="dropdown-menu">
                                    <li><a${categoryActiveClass("ficcion")} href="${href("ficcion.html")}" data-i18n="nav.categories.fiction">Ficción</a></li>
                                    <li><a${categoryActiveClass("ayudantia")} href="${href("ayudantia.html")}" data-i18n="nav.categories.assistant">Ayudantía</a></li>
                                    <li><a${categoryActiveClass("documental")} href="${href("documental.html")}" data-i18n="nav.categories.documentary">Documental</a></li>
                                    <li><a${categoryActiveClass("trailer-teaser")} href="${href("trailer-teaser.html")}" data-i18n="nav.categories.trailer">Tráiler y teaser</a></li>
                                    <li><a${categoryActiveClass("videoclip")} href="${href("videoclip.html")}" data-i18n="nav.categories.musicVideo">Videoclip</a></li>
                                    <li><a${categoryActiveClass("otros")} href="${href("otros.html")}" data-i18n="nav.categories.other">Otros</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a class="nav-link${activeClass("contact")}" href="${contactHref}" data-i18n="nav.contact">Contacto</a>
                        </li>
                    </ul>

                    <div class="language-switch" aria-label="Selector de idioma" data-i18n-aria="nav.languageLabel">
                        <button type="button" data-language="en" aria-pressed="false">EN</button>
                        <span aria-hidden="true">|</span>
                        <button type="button" data-language="es" aria-pressed="true">ES</button>
                    </div>
                </nav>
            </div>
        </header>
    `;

    const footer = `
        <footer class="site-footer">
            <div class="page-width footer-layout">
                <span>© 2026 Inés Parellada</span>

                <div class="footer-links">
                    <a href="https://www.instagram.com/ipe.mov?igsh=bjFseTYyenF3b2Zw" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://es.pinterest.com/inesparelladaestrada/?invite_code=8c40366a9d39410287ddfa20432bbfdb&sender=1137862799511319839" target="_blank" rel="noopener noreferrer">Pinterest</a>
                    <a href="https://www.linkedin.com/in/inés-parellada-estrada-571774351?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">LinkedIn</a>

                </div>

                <a class="back-to-top" href="#home" data-i18n="footer.backToTop">Volver arriba ↑</a>
            </div>
        </footer>
    `;

    const headerTarget = document.querySelector("#site-header");
    const footerTarget = document.querySelector("#site-footer");

    if (headerTarget) headerTarget.innerHTML = header;
    if (footerTarget) footerTarget.innerHTML = footer;
})();
