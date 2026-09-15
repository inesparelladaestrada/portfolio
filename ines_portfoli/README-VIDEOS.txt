CÓMO AÑADIR LOS PROYECTOS
==========================

Cada proyecto muestra su información y puede tener 1, 2 o 3 fotografías.
Si añades 2 o 3, la web crea automáticamente un carrusel con flechas y puntos.
Además, algunos proyectos pueden incluir un enlace opcional a YouTube o Vimeo.

1. Guarda las fotografías dentro de una carpeta de la web. Por ejemplo:
   img/videos/ficcion/sangre-de-pez.jpg

2. Abre el archivo video-data.js.

3. Busca la categoría correspondiente:
   ficcion, documental, trailer-teaser, otros, videoclip o ayudantia.

4. Para UNA foto, escribe la ruta en poster:
   poster: "img/videos/ficcion/sangre-de-pez.jpg"

   Para DOS o TRES fotos, usa posters y pon cada ruta entre comillas:
   posters: [
       "img/videos/ficcion/sangre-de-pez-1.jpg",
       "img/videos/ficcion/sangre-de-pez-2.jpg",
       "img/videos/ficcion/sangre-de-pez-3.jpg"
   ]

   No hace falta tocar video-pages.js. El carrusel aparecerá automáticamente.

5. Completa el resto de campos:
   title: título del proyecto
   status: "progress" o "complete"
   date: fecha o año
   synopsis: sinopsis
   role: tu función en el proyecto
   duration: duración de la obra

6. Si quieres enlazar ese proyecto a YouTube o Vimeo, pega la URL en video:
   video: "https://www.youtube.com/watch?v=..."
   o
   video: "https://vimeo.com/..."

   Si ese proyecto no tiene enlace, déjalo vacío:
   video: ""

   Nota: si ya estabas usando el campo youtube, también seguirá funcionando.

EJEMPLO
-------
{
    title: "Sangre de pez",
    status: "complete",
    date: "2026",
    synopsis: "Sinopsis del proyecto.",
    role: "Montaje",
    duration: "8 min",
    posters: [
        "img/videos/ficcion/sangre-de-pez-1.jpg",
        "img/videos/ficcion/sangre-de-pez-2.jpg",
        "img/videos/ficcion/sangre-de-pez-3.jpg"
    ],
    video: "https://www.youtube.com/watch?v=..."
}

ESTADOS DISPONIBLES
-------------------
status: "progress"  -> En progreso
status: "complete"  -> Finalizado

IMPORTANTE
----------
El nombre de la imagen y la ruta deben coincidir exactamente, incluyendo
mayúsculas, minúsculas y la extensión .jpg, .png o .webp.
