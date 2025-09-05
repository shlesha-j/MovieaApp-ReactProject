import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])
    //  useEffect(() => {
    //     const storedFavs = localStorage.getItem("favorites");
    //     if(storedFavs && storedFavs !== "undefined"){
    //         setFavorites(JSON.parse(storedFavs))
    //     }
    //  }, [])
    useEffect(() => {
        debugger
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])


    useEffect(() => {
        try {
            const storedFavs = localStorage.getItem("favorites");
            if (storedFavs) {
                setFavorites(JSON.parse(storedFavs));
            }
        } catch (err) {
            console.error("Failed to parse favorites:", err);
            setFavorites([]);
        }
    }, []);


    

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }



    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}