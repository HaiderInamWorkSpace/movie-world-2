const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: "Trending",
        url: `/discover/movie?api_key=e44ced425e7dfc7a1a94d6958674620d&sort_by=popularity.desc`
    },
    fetchToprated: {
        title: "Top Rated",
        url: `/movie/top_rated/?api_key=e44ced425e7dfc7a1a94d6958674620d`
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=e44ced425e7dfc7a1a94d6958674620d&with_genres=28`
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=e44ced425e7dfc7a1a94d6958674620d&with_genres=35`
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie?api_key=e44ced425e7dfc7a1a94d6958674620d&with_genres=27`
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=e44ced425e7dfc7a1a94d6958674620d&with_genres=10749`
    },
    fetchMystery: {
        title: "Mystery",
        url: `/discover/movie?api_key=e44ced425e7dfc7a1a94d6958674620d&with_genres=9648`
    },
    fetchSciFi: {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=e44ced425e7dfc7a1a94d6958674620d&with_genres=878`
    },
    fetchWestern: {
        title: "Western",
        url: `/discover/movie?api_key=e44ced425e7dfc7a1a94d6958674620d&with_genres=37`
    },
    fetchAnimation: {
        title: "Animation",
        url: `/discover/movie?api_key=e44ced425e7dfc7a1a94d6958674620d&with_genres=16`
    },
    fetchAnimation: {
        title: "Animation",
        url: `/discover/movie?api_key=e44ced425e7dfc7a1a94d6958674620d&with_genres=16`
    },
    
    fetchTV: {
        title: "TV Movie",
        url: `/discover/movie?api_key=e44ced425e7dfc7a1a94d6958674620d&with_genres=10770`
    },
}