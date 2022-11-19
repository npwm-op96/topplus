
import axios from 'axios'
import { apiURL } from './apiURL';
const path = 'quatation'
export async function saveQuatation(Payload) {
    let config = {
        method: "POST",
        url: `${apiURL}/${path}/saveQuatation`,
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(Payload),
    };
    const res = await axios.post(config.url, config.data)

    return new Promise((resolve, reject) => {
        resolve(res);
        reject(res);
    });
}