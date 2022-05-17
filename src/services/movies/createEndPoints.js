const urlBaseMovie=`/movie`;
const urlBaseTv=`/tv`;
const urlBaseTrending=`/trendings`;
const urlBaseSearch=`/search`;
const urlBasePeople=`/person`;
const urlBaseImage=`https://image.tmdb.org/t/p`;

const movie=(movie_id)=>{

    return {
        details: `${urlBaseMovie}/${movie_id}`,
        watchProviders: `${urlBaseMovie}/${movie_id}/watch/providers`,
        popular: `${urlBaseMovie}/popular`,
        similar: `${urlBaseMovie}/${movie_id}/similar`
    };
};

const tv=(tv_id)=>({
    details: `${urlBaseTv}/${tv_id}`,
    watchProviders: `${urlBaseTv}/${tv_id}/watch/providers`,
    popular: `${urlBaseTv}/popular`,
    similar: `${urlBaseTv}/${tv_id}/similar`
});

const trending=()=>({
    day: {
        all: `${urlBaseTrending}/all/day`,
        movie: `${urlBaseTrending}/movie/day`,
        tv: `${urlBaseTrending}/tv/day`,
        person: `${urlBaseTrending}/person/day`
    },
    week: {
        all: `${urlBaseTrending}/all/week`,
        movie: `${urlBaseTrending}/movie/week`,
        tv: `${urlBaseTrending}/tv/week`,
        person: `${urlBaseTrending}/person/week`
    }
});

const search=()=>({
    all: `${urlBaseSearch}/multi`,
    tvShows: `${urlBaseSearch}/tv`,
    movies: `${urlBaseSearch}/movie`,
    persons: `${urlBaseSearch}/person`,
    keywords: `${urlBaseSearch}/keyword`,
    companies: `${urlBaseSearch}/company`,
    collections: `${urlBaseSearch}/collection`,
});

const image=(img)=>({
    original: `${urlBaseImage}/original/${img}`,
    w500: `${urlBaseImage}/w500/${img}`
});

const people=(peopleId)=>({
    peopleDeatails: `${urlBasePeople}/${peopleId}`
});

export { movie, tv, trending, search, image, people };