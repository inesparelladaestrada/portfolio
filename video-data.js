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
                title: "Trailer",
                intro: "Tráilers, teasers y piezas promocionales desarrolladas para presentar historias con precisión y ritmo.",
                projects: [
                    {
                        title: "Filmin",
                        status: "progress",
                        date: "2026",
                        synopsis: "Como ayudante de edición y postproducción en el departamento de vídeo de Filmin, me encargo de preparar, adaptar y optimizar los trailers y teasers tanto para el catálogo de la plataforma como para eventos clave como el Atlàntida Film Fest. Mi labor abarca la adaptación y creación de piezas en español, inglés y portugués, el subtitulado, y el diseño integral de cartelas, grafismos y efectos visuales. Además, participo en la edición y acabado de piezas curatoriales como los Filmin Picks —entre ellos el dedicado a Heavy Traffic, disponible actualmente en la plataforma y en 'otros' en mi página web—, trabajando a diario con DaVinci Resolve, After Effects y Photoshop.",
                        role: "Assisant trailer editor",
                        duration: "Actualidad",
                        poster: "img/fotosvideos/trailerteaser/filmin/1.jpg",
                        youtube: "https://www.youtube.com/watch?v=qAbbsQkXOR4",
                    },
                    {
                        title: "HERENCIA",
                        status: "complete",
                        date: "2026",
                        synopsis: "Herencia (España, 2026) es un largometraje documental dirigido por Ricardo Íscar y producido por El Refugio Producciones en producción asociada con Suricata Stories, proyecto en el cual participé en la edición y montaje del teaser promocional.",
                        role: "Montaje",
                        duration: "2:04",
                        posters: ["img/fotosvideos/trailerteaser/herencia/1.jpg",
                            "img/fotosvideos/trailerteaser/herencia/2.jpg",
                            "img/fotosvideos/trailerteaser/herencia/3.jpg"],
                        youtube: "https://www.youtube.com/watch?v=UHYvgP-nZdQ"
                    }
                    
                ]
            },
            otros: {
                title: "Otros",
                intro: "Publicidad, contenido para redes sociales y otras piezas audiovisuales adaptadas a distintos formatos y canales.",
                projects: [
                    {
                        
                        title: "Uitwaaien ",
                        status: "complete",
                        date: "2026",
                        synopsis: "Fashion film",
                        role: "Montaje",
                        duration: "1:23",
                        posters: ["img/fotosvideos/otros/uitwaaien/1.jpg",
                            "img/fotosvideos/otros/uitwaaien/2.jpg",
                            "img/fotosvideos/otros/uitwaaien/3.jpg"],
                        youtube: "https://drive.google.com/file/d/1NZxFohKIl3MyBNuISRxsom-BACv82Btq/view?usp=sharing"
                    },
                    {
                        title: "Filmin Pick - Heavy Traffic",
                        status: "complete",
                        date: "2026",
                        synopsis: "La polémica obra maestra de Ralph Bakshi ofrece una radiografía visceral y delirante de Nueva York a través de Michael Corleone, un dibujante fracasado y desertor que intenta crear animación inspirándose en su entorno marginal. Mientras lidia con la convivencia en el humilde apartamento de sus padres, el protagonista debe soportar las burlas constantes de sus conocidos vinculados a la mafia y el desprecio de una joven inmersa en los bajos fondos de proxenetas y traficantes.",
                        role: "Montaje",
                        duration: "2:30",
                        poster: "img/fotosvideos/otros/filminpick/1.jpg",
                        youtube: "https://www.filmin.es/pelicula/heavy-traffic?trailer=1"
                    },
                    {
                        title: "Academia goes cinema",
                        status: "complete",
                        date: "2025",
                        synopsis: "Presentado en las universidades de Gante y KU Leuven en diciembre de 2025, el documental doble RIVERS —producido por Suricata Stories para Academia Goes Cinema— unió la investigación académica con narrativas indígenas de Nepal y Colombia sobre el daño ambiental mediante debates, paneles y talleres, con el apoyo de diversas redes universitarias, el Festival REstART y fondos de cooperación como VLIRUOS y DGD.",
                        role: "Montaje",
                        duration: "11:07",
                        posters: ["img/fotosvideos/otros/academia/1.png",
                            "img/fotosvideos/otros/academia/2.png",
                            "img/fotosvideos/otros/academia/3.png"],
                        youtube: "https://www.youtube.com/watch?v=FEGyaQ3k_Do"
                    },
                    {
                        title: "Societat Catalana d'Endocrinologia i Nutrició",
                        status: "complete",
                        date: "2025",
                        synopsis: "Q&A del XXVIII Congreso de la Sociedad Catalana de Endocrinología y Nutrición, celebrado los días 19 y 20 de febrero de 2026 en el Colegio Oficial de Médicos de Barcelona, un encuentro clave de divulgación y debate clínico producido por Suricata Stories.",
                        role: "Montaje",
                        duration: "10:22",
                        posters: ["img/fotosvideos/otros/nutri/1.png",
                            "img/fotosvideos/otros/nutri/2.png",
                            "img/fotosvideos/otros/nutri/3.png"],
                        youtube: "https://vimeo.com/1161657185/fae91c5bd5?fl=ip&fe=ec"
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
                        title: "Filmin",
                        status: "progress",
                        date: "2026",
                        synopsis: "As an Assistant Editor and Post-Production Assistant in Filmin's video department, I prepare, adapt, and optimize trailers and teasers for both the platform's catalog and key events such as the Atlàntida Film Fest. My work encompasses adapting and creating trailers in Spanish, English, and Portuguese, subtitling, and designing end cards, motion graphics, and visual effects. Additionally, I participate in the editing and finishing of curated content like Filmin Picks—including the piece dedicated to Heavy Traffic, currently streaming on the platform and in the ‘Other’ section on my website.—working daily with DaVinci Resolve, Adobe After Effects, and Photoshop.",
                        role: "Assisant trailer editor",
                        duration: "Currently Working",
                        poster: "img/fotosvideos/trailerteaser/filmin/1.jpg",
                        youtube: "https://www.youtube.com/watch?v=qAbbsQkXOR4",
                    },
                    { 
                        title: "HERENCIA",
                        status: "complete",
                        date: "2026",
                        synopsis: "Herencia (Spain, 2026) is a documentary directed by Ricardo Íscar and produced by El Refugio Producciones in associated production with Suricata Stories, a project for which I edited the promotional teaser.",
                        role: "Montaje",
                        duration: "2:04",
                        posters: ["img/fotosvideos/trailerteaser/herencia/1.jpg",
                            "img/fotosvideos/trailerteaser/herencia/2.jpg",
                            "img/fotosvideos/trailerteaser/herencia/3.jpg"],
                        youtube: "https://www.youtube.com/watch?v=UHYvgP-nZdQ"
                    }
                ]
            },
            otros: {
                title: "Other",
                intro: "Advertising, social media content and other audiovisual pieces adapted for different formats and channels.",
                projects: [
                    {
                        title: "Uitwaaien ",
                        status: "complete",
                        date: "2026",
                        synopsis: "Fashion film",
                        role: "Editing",
                        duration: "1:23",
                        posters: ["img/fotosvideos/otros/uitwaaien/1.jpg",
                            "img/fotosvideos/otros/uitwaaien/2.jpg",
                            "img/fotosvideos/otros/uitwaaien/3.jpg"],
                        youtube: "https://drive.google.com/file/d/1NZxFohKIl3MyBNuISRxsom-BACv82Btq/view?usp=sharing"
                    },
                    {
                        title: "Filmin Pick - Heavy Traffic",
                        status: "complete",
                        date: "2026",
                        synopsis: "Ralph Bakshi's controversial masterpiece delivers a visceral, delirious snapshot of New York through Michael Corleone, a draft dodger and struggling cartoonist who draws inspiration from the harsh world around him. Living in a run-down apartment with his parents, he endures constant ridicule from his mobster friends as well as contempt from a shallow girl tied to downtown pimps and pushers.",
                        role: "Editing",
                        duration: "2:30",
                        poster: "img/fotosvideos/otros/filminpick/1.jpg",
                        youtube: "https://www.filmin.es/pelicula/heavy-traffic?trailer=1"
                    },
                    {
                        title: "Academia goes cinema",
                        status: "complete",
                        date: "2025",
                        synopsis: "Presented at Ghent and KU Leuven universities in December 2025, the RIVERS twin documentary—produced by Suricata Stories for Academia Goes Cinema—bridged academic research and Indigenous storytelling from Nepal and Colombia on environmental harm through screenings, panels, and workshops, supported by university networks, the REstART Festival, VLIRUOS, and DGD.",
                        role: "Editing",
                        duration: "11:07",
                        posters: ["img/fotosvideos/otros/academia/1.png",
                            "img/fotosvideos/otros/academia/2.png",
                            "img/fotosvideos/otros/academia/3.png"],
                        youtube: "https://www.youtube.com/watch?v=FEGyaQ3k_Do"
                    },
                    {
                        title: "Societat Catalana d'Endocrinologia i Nutrició",
                        status: "complete",
                        date: "2025",
                        synopsis: "Q&A of the 28th Congress of the Catalan Society of Endocrinology and Nutrition, held on February 19–20, 2026, at the Official College of Physicians, capturing key scientific insights and discussions, produced by Suricata Stories.",
                        role: "Editing",
                        duration: "10:22",
                        posters: ["img/fotosvideos/otros/nutri/1.png",
                            "img/fotosvideos/otros/nutri/2.png",
                            "img/fotosvideos/otros/nutri/3.png"],
                        youtube: "https://vimeo.com/1161657185/fae91c5bd5?fl=ip&fe=ec"
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
