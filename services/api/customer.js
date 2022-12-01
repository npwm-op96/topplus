import axios from 'axios'
import { apiURL } from './apiURL';
const path = 'Customer'
export async function saveCustomer(Payload) {
    let config = {
        method: "POST",
        url: `${apiURL}/${path}/saveCustomer`,
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(Payload),
    };

    const res = await axios.post(config.url, config.data, config)

    return new Promise((resolve, reject) => {
        resolve(res);
        reject(res);
    });
}