import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

const movies = [
    {
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        title: "Castle in the Sky",
        description: "The girl Sheeta, taken captive by government agent Muska...",
        director: "Hayao Miyazaki",
        release_date: "1986",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
    },
    {
        id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
        title: "Grave of the Fireflies",
        description: "In the latter part of World War II...",
        director: "Isao Takahata",
        release_date: "1988",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg",
    },
    {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        description: "Two sisters move to the country with their father in order to be closer to their hospitalized mother...",
        director: "Hayao Miyazaki",
        release_date: "1998",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
    },
    {
        id: "dc2e6bd1-8156-4886-adff-b39e6043af0c",
        title: "Spirited Away",
        description: "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents...",
        director: "Hayao Miyazaki",
        release_date: "2001",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    },
    {
        id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        title: "Princess Mononoke",
        description: "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure...",
        director: "Hayao Miyazaki",
        release_date: "1997",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg",
    },
    {
        id: "112c1e67-726f-40b1-ac17-6974127bb9b9",
        title: "Tales from Earthsea",
        description: "Something bizarre has come over the land. The kingdom is deteriorating. People are beginning to act strange... ",
        director: "Gorō Miyazaki",
        release_date: "2006",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/67yYwCPq7NbxSF6BIIXCMD34sY0.jpg",
    }
    



];

function Home() {
    return (
        <>
            <Navbar />
            <MovieList movies={movies} />
            <Footer />
        </>
    );
}

export default Home;