
import axios from 'axios'
import {apiURL} from './apiURL';
const path = 'message'
export async function setMessageLineNoti(Payload) {
    let config = {
        method: "POST",
        url: `${apiURL}/${path}/sentNotiLine`,
        headers: {
            "Content-Type": "application/json",
        },
        data:Payload
    };
    const res = await axios.post(config.url,config.data)
    
    return new Promise((resolve, reject) => {
        resolve(res);
        reject(res);
    });
}