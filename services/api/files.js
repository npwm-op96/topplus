import axios from 'axios'
import { apiURL } from './apiURL';
const path = 'Files'
export async function saveFile(form) {
    let config = {
        method: "POST",
        url: `${apiURL}/${path}/saveFile`,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        // data: Payload,
    };

    const res = await axios.post(config.url, form, config)

    return new Promise((resolve, reject) => {
        resolve(res);
        reject(res);
    });
}