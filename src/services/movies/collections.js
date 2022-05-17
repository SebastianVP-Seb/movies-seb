import { getMovieBy, getPeople, getTrendingBy, getTvBy, searchBy } from "./service";

//GET TRENDING BY
const getTrendingData = async () => {

    //generar los de service.js

    // getTrendingBy.day.all()
    //     .then(response=>console.log({'day_all': response}))
    // getTrendingBy.day.movies()
    //     .then(response=>console.log({'day_movies': response}))
    // getTrendingBy.day.tvShows()
    //     .then(response=>console.log({'day_tvShows': response}))
    // getTrendingBy.week.all()
    //     .then(response=>console.log({'week_all': response}))
    // getTrendingBy.week.movies()
    //     .then(response=>console.log({'week_movies': response}))
    // getTrendingBy.week.tvShows()
    //     .then(response=>console.log({'week_tvShows': response}))

    try {
        const [
            dayAll,
            dayMovies,
            dayTvShows,
            weekAll,
            weekMovies,
            weekTvShows
        ] = await Promise.all([
            getTrendingBy.day.all(),
            getTrendingBy.day.movies(),
            getTrendingBy.day.tvShows(),
            getTrendingBy.week.all(),
            getTrendingBy.week.movies(),
            getTrendingBy.week.tvShows(),
        ]);
            // .then(arrayResolveValues=>{
            //     console.log({arrayResolveValues})
            // })
            // ;
        return {
            success: true,
            day: {
                all: dayAll.data,
                movie: dayMovies.data,
                tvShows: dayTvShows.data,
            },
            week: {
                all: weekAll.data,
                movie: weekMovies.data,
                tvShows: weekTvShows.data
            }
        };
    } catch (error) {
        return { ...error, success: false, message: 'holaaaaaa' };
        // console.log(error)
    };
};

// getTrendingData()
//     .then(console.log);

//GET MOVIE BY
// de service.js 
const getMoviePageData = async (movieId) => {

    try {
        if (movieId) {
            const [details, similar, watchProviders] = await Promise.all([
                getMovieBy.details(movieId),
                getMovieBy.similar(movieId),
                getMovieBy.watchProviders(movieId)
            ]);

            return {
                success: true,
                details: details.data,
                similar: similar.data,
                watchProviders: watchProviders.data
            };
        } else {
            throw new Error()
        };
    }
    catch (error) {
        return {
            success: false,
            ...error
        };
    };
};

// getMoviePageData('301565')//posible string
//     .then(console.log)

//GET TY_BY
const getTvPageData = async (tvId) => {

    try {
        // if (tvId) {
            const [details, similar, watchProviders] = await Promise.all([
                getTvBy.details(tvId),
                getTvBy.similar(tvId),
                getTvBy.watchProviders(tvId)
            ]);

            return {
                success: true,
                details: details,
                similar: similar,
                watchProviders: watchProviders
            };
        // } else {
        //     throw new Error()
        // };
    }
    catch (error) {
        return {
            success: false,
            ...error
        };
    };
};

// getTvPageData('7')
//     .then(console.log)

//SEARCH_BY
const searchPageData=async (query) => {

    try {
        // if (query) {
            const [details, similar, watchProviders] = await Promise.all([
                searchBy.all(query),
                searchBy.tvShows(query),
                searchBy.movies(query),
                searchBy.persons(query),
                searchBy.keywords(query),
                searchBy.companies(query),
                searchBy.collections(query)
            ]);

            return {
                success: true,
                details: details,
                similar: similar,
                watchProviders: watchProviders
            };
        // } else {
        //     throw new Error()
        // };
    }
    catch (error) {
        return {
            success: false,
            ...error
        };
    };
};

// searchPageData('fast')
//     .then(console.log)

//GET_PEOPLE
const peoplePageData= async (idPeople) =>{
    try {
        const [detailsPeople]= await Promise.all([
            getPeople.details(idPeople)
        ]);

        return {
            success: true,
            detailsPeople
        };
    } catch (error) {
        return {
            success: false,
            ...error
        };
    };
};

// peoplePageData(5)
//     .then(console.log)

export {getTrendingData, getMoviePageData, getTvPageData, searchPageData }