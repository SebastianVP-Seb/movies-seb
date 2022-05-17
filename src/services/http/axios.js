import axios from 'axios';
import { LANGUAGE_ISO } from '../../utils/constants';

const baseURL=process.env.API_URL;
const TOKEN=process.env.TOKEN_API;

const default_params={
    'language': LANGUAGE_ISO.ES
};

const default_headers={
'Authorization': `Bearer ${TOKEN}`
};

export const request=axios.create({
    baseURL,
    params: default_params,
    headers: default_headers
});

// request.get('/tv/92749').then(console.log)