/*
 * GALERÍA DE FOTOGRAFÍA
 * ---------------------
 * 1. Guarda las fotografías dentro de img/fotografia/.
 * 2. Sustituye el valor de "src" por el nombre de tu archivo.
 * 3. El campo "aspect" admite: landscape, portrait o square.
 * 4. Las categorías actuales son: retrato, rodaje, calle y paisaje.
 *    Puedes cambiarlas, pero recuerda actualizar categoryLabels.
 */

window.PORTFOLIO_PHOTO_DATA = {
    es: {
        title: "Fotografía",
        kicker: "Portfolio visual",
        intro: "Una selección de imágenes, retratos y momentos observados dentro y fuera del rodaje.",
        allLabel: "Todas",
        categoryLabels: {
            retrato: "Retrato",
            rodaje: "Rodaje",
            calle: "Calle",
            paisaje: "Paisaje"
        },
        photos: [
            {
                title: "Retrato 01",
                category: "retrato",
                year: "2026",
                location: "Barcelona",
                description: "Añade aquí una breve descripción de la fotografía o de la serie a la que pertenece.",
                src: "img/fotografia/foto-01.svg",
                alt: "Imagen provisional para una fotografía de retrato",
                aspect: "landscape"
            },
            {
                title: "Retrato 02",
                category: "retrato",
                year: "2026",
                location: "Barcelona",
                description: "Puedes indicar el contexto, la técnica o la intención de la imagen.",
                src: "img/fotografia/foto-02.svg",
                alt: "Imagen provisional para una fotografía vertical de retrato",
                aspect: "portrait"
            },
            {
                title: "Entre tomas",
                category: "rodaje",
                year: "2025",
                location: "Catalunya",
                description: "Fotografía de rodaje o making of. Sustituye esta imagen por tu archivo definitivo.",
                src: "img/fotografia/foto-03.svg",
                alt: "Imagen provisional para una fotografía de rodaje",
                aspect: "portrait"
            },
            {
                title: "Rodaje 02",
                category: "rodaje",
                year: "2025",
                location: "Barcelona",
                description: "La galería permite combinar fotografías horizontales, verticales y cuadradas.",
                src: "img/fotografia/foto-04.svg",
                alt: "Imagen provisional para una fotografía horizontal de rodaje",
                aspect: "landscape"
            },
            {
                title: "Ciudad 01",
                category: "calle",
                year: "2025",
                location: "Barcelona",
                description: "Una imagen perteneciente a una serie de fotografía urbana.",
                src: "img/fotografia/foto-05.svg",
                alt: "Imagen provisional para una fotografía urbana cuadrada",
                aspect: "square"
            },
            {
                title: "Ciudad 02",
                category: "calle",
                year: "2025",
                location: "Madrid",
                description: "Al clicar la fotografía se abre a mayor tamaño y permite recorrer la galería.",
                src: "img/fotografia/foto-06.svg",
                alt: "Imagen provisional para una fotografía urbana horizontal",
                aspect: "landscape"
            },
            {
                title: "Paisaje 01",
                category: "paisaje",
                year: "2024",
                location: "Pirineos",
                description: "Añade el lugar, el año y cualquier información que quieras destacar.",
                src: "img/fotografia/foto-07.svg",
                alt: "Imagen provisional para una fotografía horizontal de paisaje",
                aspect: "landscape"
            },
            {
                title: "Paisaje 02",
                category: "paisaje",
                year: "2024",
                location: "Costa Brava",
                description: "Ejemplo de fotografía vertical dentro de la composición editorial.",
                src: "img/fotografia/foto-08.svg",
                alt: "Imagen provisional para una fotografía vertical de paisaje",
                aspect: "portrait"
            }
        ]
    },
    en: {
        title: "Photography",
        kicker: "Visual portfolio",
        intro: "A selection of images, portraits and observed moments on and away from set.",
        allLabel: "All",
        categoryLabels: {
            retrato: "Portrait",
            rodaje: "On set",
            calle: "Street",
            paisaje: "Landscape"
        },
        photos: [
            {
                title: "Portrait 01",
                category: "retrato",
                year: "2026",
                location: "Barcelona",
                description: "Add a short description of the photograph or the series it belongs to.",
                src: "img/fotografia/foto-01.svg",
                alt: "Placeholder for a portrait photograph",
                aspect: "landscape"
            },
            {
                title: "Portrait 02",
                category: "retrato",
                year: "2026",
                location: "Barcelona",
                description: "You can describe the context, technique or intention behind the image.",
                src: "img/fotografia/foto-02.svg",
                alt: "Placeholder for a vertical portrait photograph",
                aspect: "portrait"
            },
            {
                title: "Between takes",
                category: "rodaje",
                year: "2025",
                location: "Catalonia",
                description: "An on-set or behind-the-scenes photograph. Replace it with your final image.",
                src: "img/fotografia/foto-03.svg",
                alt: "Placeholder for an on-set photograph",
                aspect: "portrait"
            },
            {
                title: "On set 02",
                category: "rodaje",
                year: "2025",
                location: "Barcelona",
                description: "The gallery combines horizontal, vertical and square photographs.",
                src: "img/fotografia/foto-04.svg",
                alt: "Placeholder for a horizontal on-set photograph",
                aspect: "landscape"
            },
            {
                title: "City 01",
                category: "calle",
                year: "2025",
                location: "Barcelona",
                description: "An image from a street photography series.",
                src: "img/fotografia/foto-05.svg",
                alt: "Placeholder for a square street photograph",
                aspect: "square"
            },
            {
                title: "City 02",
                category: "calle",
                year: "2025",
                location: "Madrid",
                description: "Clicking a photograph opens it at a larger size and lets you browse the gallery.",
                src: "img/fotografia/foto-06.svg",
                alt: "Placeholder for a horizontal street photograph",
                aspect: "landscape"
            },
            {
                title: "Landscape 01",
                category: "paisaje",
                year: "2024",
                location: "Pyrenees",
                description: "Add the place, year and any details you would like to highlight.",
                src: "img/fotografia/foto-07.svg",
                alt: "Placeholder for a horizontal landscape photograph",
                aspect: "landscape"
            },
            {
                title: "Landscape 02",
                category: "paisaje",
                year: "2024",
                location: "Costa Brava",
                description: "Example of a vertical image within the editorial layout.",
                src: "img/fotografia/foto-08.svg",
                alt: "Placeholder for a vertical landscape photograph",
                aspect: "portrait"
            }
        ]
    }
};
