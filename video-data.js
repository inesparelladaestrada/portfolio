/*
 * CATÁLOGO DE PROYECTOS AUDIOVISUALES
 * -----------------------------------
 * Para añadir proyectos, duplica uno de los objetos dentro de "projects".
 *
 * Cada proyecto puede mostrar 1, 2 o 3 fotografías.
 * Para una sola foto puedes seguir usando:
 * poster: "img/videos/ficcion/proyecto.jpg"
 *
 * Para crear un carrusel de 2 o 3 fotos usa:
 * posters: [
 *   "img/videos/ficcion/proyecto-1.jpg",
 *   "img/videos/ficcion/proyecto-2.jpg",
 *   "img/videos/ficcion/proyecto-3.jpg"
 * ]
 *
 * Si un proyecto está publicado en YouTube o Vimeo, añade opcionalmente:
 * video: "https://www.youtube.com/watch?v=..."
 * o bien: video: "https://vimeo.com/..."
 * También se mantiene compatibilidad con el campo antiguo youtube.
 * Si se deja vacío, no aparecerá ningún enlace bajo la fotografía.
 */

window.PORTFOLIO_VIDEO_DATA = {
    es: {
        categories: {
            ficcion: {
                title: "Ficción",
                intro: "Selección de cortometrajes, piezas de ficción y proyectos narrativos.",
                projects: [
                    {
                        title: "Fingir estar muerta",
                        status: "progress",
                        date: "2026",
                        synopsis: "Entras en trance, tu mente viaja a otra realidad:Estás en el mismo lugar, pero ahora es más oscuro e inquietante, donde no hay nadie. Durante un largo instante te quedas ahí, encerrada, hasta regresar nuevamente a la vida real. Son tantas las ocasiones en las que te ocurre que, para detenerlo, decides alejarte sin dar explicaciones. Y... funciona.",
                        role: "Montaje",
                        duration: "Duración pendiente de estar confirmada",
                        posters: ["img/fotosvideos/ficcion/fingir/1.png",
                            "img/fotosvideos/ficcion/fingir/2.png",
                            "img/fotosvideos/ficcion/fingir/3.png"],
                        youtube: ""
                    },
                    {
                        title: "Caníbales",
                        status: "progress",
                        date: "2026",
                        synopsis: "Puedes ordenar los proyectos por relevancia o por fecha. Cada ficha muestra una fotografía junto con la información del proyecto.",
                        role: "Montaje",
                        duration: "Duración por definir",
                        posters: ["img/fotosvideos/ficcion/canibales/1.jpg",
                            "img/fotosvideos/ficcion/canibales/2.jpg",
                            "img/fotosvideos/ficcion/canibales/3.jpg"],
                        youtube: ""
                    },
                    {
                        title: "DRUDRU",
                        status: "complete",
                        date: "2026",
                        synopsis: "Entras en trance, tu mente viaja a otra realidad:Estás en el mismo lugar, pero ahora es más oscuro e inquietante, donde no hay nadie. Durante un largo instante te quedas ahí, encerrada, hasta regresar nuevamente a la vida real. Son tantas las ocasiones en las que te ocurre que, para detenerlo, decides alejarte sin dar explicaciones. Y... funciona.",
                        role: "Montaje",
                        duration: "15 min",
                        posters: ["img/fotosvideos/ficcion/drudru/1.png",
                            "img/fotosvideos/ficcion/drudru/2.png",
                            "img/fotosvideos/ficcion/drudru/3.png"],
                        youtube: ""
                    },
                    {
                        title: "Fingir estar muerta",
                        status: "progress",
                        date: "2026",
                        synopsis: "Entras en trance, tu mente viaja a otra realidad:Estás en el mismo lugar, pero ahora es más oscuro e inquietante, donde no hay nadie. Durante un largo instante te quedas ahí, encerrada, hasta regresar nuevamente a la vida real. Son tantas las ocasiones en las que te ocurre que, para detenerlo, decides alejarte sin dar explicaciones. Y... funciona.",
                        role: "Montaje",
                        duration: "Duración pendiente de estar confirmada",
                        posters: ["img/fotosvideos/ficcion/fingir/1.png",
                            "img/fotosvideos/ficcion/fingir/2.png",
                            "img/fotosvideos/ficcion/fingir/3.png"],
                        youtube: ""
                    },
                    {
                        title: "Fingir estar muerta",
                        status: "progress",
                        date: "2026",
                        synopsis: "Entras en trance, tu mente viaja a otra realidad:Estás en el mismo lugar, pero ahora es más oscuro e inquietante, donde no hay nadie. Durante un largo instante te quedas ahí, encerrada, hasta regresar nuevamente a la vida real. Son tantas las ocasiones en las que te ocurre que, para detenerlo, decides alejarte sin dar explicaciones. Y... funciona.",
                        role: "Montaje",
                        duration: "Duración pendiente de estar confirmada",
                        posters: ["img/fotosvideos/ficcion/fingir/1.png",
                            "img/fotosvideos/ficcion/fingir/2.png",
                            "img/fotosvideos/ficcion/fingir/3.png"],
                        youtube: ""
                    }
                ]
            },
            documental: {
                title: "Documental",
                intro: "Proyectos documentales construidos desde el montaje, la investigación y el trabajo con material de archivo.",
                projects: [
                    {
                        title: "Título del proyecto documental",
                        status: "complete",
                        date: "2026",
                        synopsis: "Añade aquí la sinopsis, el contexto del documental y cualquier dato relevante sobre el proyecto.",
                        role: "Ayudante de montaje",
                        duration: "Duración por definir",
                        poster: "",
                        youtube: ""
                    }
                ]
            },
            "trailer-teaser": {
                title: "Tráiler y teaser",
                intro: "Tráilers, teasers y piezas promocionales desarrolladas para presentar historias con precisión y ritmo.",
                projects: [
                    {
                        title: "Título del tráiler o teaser",
                        status: "complete",
                        date: "2026",
                        synopsis: "Describe brevemente la obra promocionada, el objetivo de la pieza y tu participación en el montaje.",
                        role: "Trailer editing",
                        duration: "Duración por definir",
                        poster: "",
                        youtube: ""
                    }
                ]
            },
            otros: {
                title: "Otros",
                intro: "Publicidad, contenido para redes sociales y otras piezas audiovisuales adaptadas a distintos formatos y canales.",
                projects: [
                    {
                        title: "Título de la campaña",
                        status: "complete",
                        date: "2026",
                        synopsis: "Añade el nombre de la marca, una breve descripción de la campaña y las versiones o formatos realizados.",
                        role: "Montaje",
                        duration: "Duración por definir",
                        poster: "",
                        youtube: ""
                    },
                    {
                        title: "Título de la pieza para redes",
                        status: "complete",
                        date: "2026",
                        synopsis: "Explica la campaña, la plataforma de publicación y las adaptaciones de formato realizadas.",
                        role: "Montaje y adaptación",
                        duration: "Duración por definir",
                        poster: "",
                        youtube: ""
                    }
                ]
            },
            videoclip: {
                title: "Videoclip",
                intro: "Videoclips y piezas musicales.",
                projects: [
                    {
                        title: "Esa chica",
                        status: "complete",
                        date: "2026",
                        synopsis: "Esa chica, canción de Mar López.",
                        role: "Montaje",
                        duration: "3:48 min",
                        poster: "img/fotosvideos/videoclip/esachica/1.jpg",
                        youtube: "https://www.youtube.com/watch?v=77ZC0oJv_z4&list=RD77ZC0oJv_z4&start_radio=1"
                    }
                ]
            },
            ayudantia: {
                title: "Ayudantía",
                intro: "Proyectos en los que he participado como ayudante de montaje y apoyo al flujo de postproducción.",
                projects: [
                    {
                        title: "Título del proyecto",
                        status: "progress",
                        date: "2026",
                        synopsis: "Añade la sinopsis y detalla las tareas realizadas como ayudante de montaje dentro del proyecto.",
                        role: "Ayudante de montaje",
                        duration: "Duración por definir",
                        poster: "",
                        youtube: ""
                    }
                ]
            }
        }
    },
    en: {
        categories: {
            ficcion: {
                title: "Fiction",
                intro: "A selection of short films, fiction pieces and narrative projects.",
                projects: [
                    {
                        title: "Fingir estar muerta",
                        status: "progress",
                        date: "2026",
                        synopsis: "You go into a trance, and your mind travels to another reality. You are in the same place, but now it is darker and more unsettling, and there is no one around. For what feels like a long time, you remain trapped there, until you finally return to real life. It happens so often that, in order to make it stop, you decide to walk away without giving any explanation. And... it works.",
                        role: "Editing",
                        duration: "Duration to be confirmed",
                        posters: ["img/fotosvideos/ficcion/fingir/1.png",
                            "img/fotosvideos/ficcion/fingir/2.png",
                            "img/fotosvideos/ficcion/fingir/3.png"],
                        youtube: ""
                    },
                    {
                        title: "Caníbales",
                        status: "progress",
                        date: "2026",
                        synopsis: "Projects can be ordered by relevance or date. Every entry displays a photograph alongside the project information.",
                        role: "Editing",
                        duration: "Duration to be confirmed",
                        posters: ["img/fotosvideos/ficcion/canibales/1.jpg",
                            "img/fotosvideos/ficcion/canibales/2.jpg",
                            "img/fotosvideos/ficcion/canibales/3.jpg"],
                        youtube: ""
                    },
                     {
                        title: "Caníbales",
                        status: "progress",
                        date: "2026",
                        synopsis: "Projects can be ordered by relevance or date. Every entry displays a photograph alongside the project information.",
                        role: "Editing",
                        duration: "Duration to be confirmed",
                        posters: ["img/fotosvideos/ficcion/canibales/1.jpg",
                            "img/fotosvideos/ficcion/canibales/2.jpg",
                            "img/fotosvideos/ficcion/canibales/3.jpg"],
                        youtube: ""
                    }
                ]
            },
            documental: {
                title: "Documentary",
                intro: "Documentary projects shaped through editing, research and work with archive material.",
                projects: [
                    {
                        title: "Documentary project title",
                        status: "complete",
                        date: "2026",
                        synopsis: "Add the synopsis, documentary context and any relevant information about the project.",
                        role: "Assistant editor",
                        duration: "Duration to be confirmed",
                        poster: "",
                        youtube: ""
                    }
                ]
            },
            "trailer-teaser": {
                title: "Trailer and teaser",
                intro: "Trailers, teasers and promotional pieces designed to introduce stories with precision and rhythm.",
                projects: [
                    {
                        title: "Trailer or teaser title",
                        status: "complete",
                        date: "2026",
                        synopsis: "Briefly describe the promoted work, the purpose of the piece and your role in the edit.",
                        role: "Trailer editing",
                        duration: "Duration to be confirmed",
                        poster: "",
                        youtube: ""
                    }
                ]
            },
            otros: {
                title: "Other",
                intro: "Advertising, social media content and other audiovisual pieces adapted for different formats and channels.",
                projects: [
                    {
                        title: "Campaign title",
                        status: "complete",
                        date: "2026",
                        synopsis: "Add the brand name, a short description of the campaign and the versions or formats delivered.",
                        role: "Editing",
                        duration: "Duration to be confirmed",
                        poster: "",
                        youtube: ""
                    },
                    {
                        title: "Social media piece title",
                        status: "complete",
                        date: "2026",
                        synopsis: "Explain the campaign, the publishing platform and the different format adaptations created.",
                        role: "Editing and adaptation",
                        duration: "Duration to be confirmed",
                        poster: "",
                        youtube: ""
                    }
                ]
            },
            videoclip: {
                title: "Music video",
                intro: "Music videos and visual pieces where rhythm, emotion and imagery form a single narrative.",
                projects: [
                    {
                        title: "Esa chica",
                        status: "complete",
                        date: "2026",
                        synopsis: "Esa chica, song by Mar López.",
                        role: "Editor",
                        duration: "3:48 min",
                        poster: "img/fotosvideos/videoclip/esachica/1.jpg",
                        youtube: "https://www.youtube.com/watch?v=77ZC0oJv_z4&list=RD77ZC0oJv_z4&start_radio=1"
                    }
                ]
            },
            ayudantia: {
                title: "Assistant editing",
                intro: "Projects where I worked as an assistant editor and supported the post-production workflow.",
                projects: [
                    {
                        title: "Project title",
                        status: "progress",
                        date: "2026",
                        synopsis: "Add the synopsis and describe the assistant editing tasks carried out during the project.",
                        role: "Assistant editor",
                        duration: "Duration to be confirmed",
                        poster: "",
                        youtube: ""
                    }
                ]
            }
        }
    }
};
