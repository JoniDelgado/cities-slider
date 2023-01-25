import { createContext } from "react";

const dataContext = createContext();

const data = [
  {
    id: 1,
    img: "images/amsterdam.jpg",
    text: "Amsterdam es la capital de los Países Bajos, conocida por su patrimonio artístico, su elaborado sistema de canales y sus casas angostas con fachadas de dos aguas, herencias de la Edad de Oro de la ciudad durante el siglo XVII.",
    country: "Paises Bajos",
    state: "Amsterdam",
    flag: "https://flagcdn.com/w80/nl.png",
  },
  {
    id: 2,
    img: "images/buenos-aires.jpg",
    text: "Buenos Aires es la gran capital cosmopolita de Argentina. Su centro es la Plaza de Mayo, rodeada de imponentes edificios del siglo XIX, incluida la Casa Rosada, el icónico palacio presidencial que tiene varios balcones.",
    country: "Argentina",
    state: "Buenos Aires",
    flag: "https://flagcdn.com/w80/ar.png",
  },
  {
    id: 3,
    img: "images/madrid.jpg",
    text: "Madrid es un municipio y una ciudad de España, con categoría histórica de villa, ​ es la capital del Estado​ y de la Comunidad de Madrid.",
    country: "España",
    state: "Madrid",
    flag: "https://flagcdn.com/w80/es.png",
  },
  {
    id: 4,
    img: "images/paris.jpg",
    text: "París, la capital de Francia, es una importante ciudad europea y un centro mundial del arte, la moda, la gastronomía y la cultura. Su paisaje urbano del siglo XIX está entrecruzado por amplios bulevares y el río Sena. Aparte de estos hitos, como la Torre Eiffel y la catedral gótica de Notre Dame del siglo XII.",
    country: "Francia",
    state: "Paris",
    flag: "https://flagcdn.com/w80/fr.png",
  },
  {
    id: 5,
    img: "images/rio.jpg",
    text: "Río de Janeiro es una enorme ciudad costera de Brasil, famosa por sus playas de Copacabana e Ipanema, la estatua del Cristo Redentor de 38 m de alto sobre el cerro del Corcovado y el morro Pan de Azúcar, una cima de granito con teleféricos que ascienden a su cima",
    country: "Brasil",
    state: "Rio de Janeiro",
    flag: "https://flagcdn.com/w80/br.png",
  },
  {
    id: 6,
    img: "images/roma.jpg",
    text: "Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial. Las ruinas antiguas como las del Foro y el Coliseo evocan el poder del antiguo Imperio Romano.",
    country: "Italia",
    state: "Roma",
    flag: "https://flagcdn.com/w80/it.png",
  },
];

const DataProvider = ({ children }) => {
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default dataContext;
export { DataProvider };
