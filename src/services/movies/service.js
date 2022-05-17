import http from "@services/http";
import { movie, people, search, trending, tv } from "./createEndPoints";

//se importan los endpoints creados

const getMovieBy=({
    popular: (page=1)=>http.postFromAxios({path: movie().popular, params: {page}}),
    details: (id)=>http.getFromAxios({path: movie(id).details}),
    similar: (id, page=1)=>http.getFromAxios({path: movie(id).similar, params: {page}}),
    watchProviders: (id)=>http.getFromAxios({path: movie(id).watchProviders}),
});

const getTvBy=({
    popular: (page=1)=>http.postFromAxios({path: tv().popular, params: {page}}),
    details: (id)=>http.getFromAxios({path: tv(id).details}),
    similar: (id, page=1)=>http.getFromAxios({path: tv(id).similar, params: {page}}),
    watchProviders: (id)=>http.getFromAxios({path: tv(id).watchProviders}),
});

const getTrendingBy=({
    day: {
        tvShows: (page=1)=>http.getFromAxios({path: trending().day.tv, params: {page}}),
        all: (page=1)=>http.getFromAxios({path: trending().day.all, params: {page}}),
        movies: (page=1)=>http.getFromAxios({path: trending().day.movie, params: {page}}),
        persons: (page=1)=>http.getFromAxios({path: trending().day.person, params: {page}})
    },
    week: {
        tvShows: (page=1)=>http.getFromAxios({path: trending().week.tv, params: {page}}),
        all: (page=1)=>http.getFromAxios({path: trending().week.all, params: {page}}),
        movies: (page=1)=>http.getFromAxios({path: trending().week.movie, params: {page}}),
        persons: (page=1)=>http.getFromAxios({path: trending().week.person, params: {page}})
    }
});

const searchBy=({
    all: (query, page=1)=>http.getFromAxios({path: search().all , params: {query, page}}),
    tvShows: (query, page=1)=>http.getFromAxios({path: search().tvShows , params: {query, page}}),
    movies: (query, page=1)=>http.getFromAxios({path: search().movies , params: {query, page}}),
    persons: (query, page=1)=>http.getFromAxios({path: search().persons , params: {query, page}}),
    keywords: (query, page=1)=>http.getFromAxios({path: search().keywords , params: {query, page}}),
    companies: (query, page=1)=>http.getFromAxios({path: search().companies , params: {query, page}}),
    collections: (query, page=1)=>http.getFromAxios({path: search().collections , params: {query, page}}),
});

const getPeople=({
    details: (idPeople)=>http.getFromAxios({path: people(idPeople).peopleDeatails})
});

export { getMovieBy, getTvBy, getTrendingBy, searchBy, getPeople };
