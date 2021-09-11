
const Llave_Api="api_key=ca84594165144fe196a7e2d9b8116999"; // Llave de Permiso al Api
const Url_Pagina = 'https://api.themoviedb.org/3/';  // Direccion de de la pagian ocn relacion al Api
const idioma = '&language=es-ES';  // Asignamos el Lenguaje
const Generos_Pelis = 'genre/movie/list?';  
const Peliculas = 'discover/movie?'; 
const Peliculas_Populares = 'trending/tv/day?'; 

// importo las clases a utilizar 
import {peliculasxgenero} from './DesplegarPeliculas.js';
import { MostrarCategorias} from './DesplegarCategorias.js';



//Muestra Las Categorias en el ComboBox
MostrarCategorias(Url_Pagina + Generos_Pelis + Llave_Api+idioma);


//Imprime las Peliculas segun la Cateogira
const genero = document.getElementById('Categorias');
genero.addEventListener('change', () => peliculasxgenero(Url_Pagina + Peliculas +  Llave_Api +idioma+ "&with_genres="+genero.value), false);



//Imprime las Peliculas o Series mas Popilares
peliculasxgenero(Url_Pagina + Peliculas_Populares + Llave_Api+idioma)





