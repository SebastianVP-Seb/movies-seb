import { getTranscriptionErrorMovie } from "../movies/codes.transcription.movie";
import { request } from "./axios";

//Interfaces para mandar a llamar a los elementos

//se le pide el config para saber la url de la que se genera la petición
//en la resolución se manda como origin
const successResponsePromise=({data, status, headers, config})=>({data, status, headers, origin: config.url});
const errorRseponsePromise=({code, response, config})=>{
    // console.log(response)
    return (
    {
        code,
        status: response.status, 
        infoError: {
            code: response.data.status_code,
            message: getTranscriptionErrorMovie(response.data)
    },
    origin: config.url
    }
)};
    
//GET, mandar a llamar en index de la carpeta movies
const getFromAxios=({path, params={}, headers={}})=>new Promise((resolve, reject)=>
request.get(path, {params,headers})
    .then(response=>{
        // console.log(response)
        resolve(successResponsePromise(response))})
    .catch((error)=>reject(errorRseponsePromise(error)))
);

//POST 
const postFromAxios=({path, params={}, headers={}, data})=>new Promise((resolve, reject)=>
    request.post(path, data, {params, headers}))
    .then(response=>resolve(successResponsePromise(response)))
    .catch((error)=>reject(errorRseponsePromise(error)))

const http={getFromAxios, postFromAxios};

export default http;