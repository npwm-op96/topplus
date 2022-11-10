
import axios from 'axios'
import {apiURL} from './apiURL';
const path = 'insurance'
export async function registerInsur(Payload) {
    let config = {
        method: "POST",
        url: `${apiURL}/${path}/registerInsur`,
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(Payload),
    };
    const res = await axios.post(config.url,config.data)
    
    return new Promise((resolve, reject) => {
        resolve(res);
        reject(res);
    });
}