import axios from 'axios'
import { GET_LOCAL_TOKEN } from '~/utils/Utils.js'
import { apiURL } from './apiURL';
const path = 'Quotation'
export async function saveQuotation(Payload) {
    let config = {
        method: "POST",
        url: `${apiURL}/${path}/saveQuotation`,
        headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${GET_LOCAL_TOKEN}`
        },
        data: JSON.stringify(Payload),
    };
    const res = await axios.post(config.url, config.data, config)
    return res;
}

export async function GetQuotation(Payload) {
    let config = {
        method: "POST",
        url: `${apiURL}/${path}/GetQuotation`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${GET_LOCAL_TOKEN()}`
        },
        // data: JSON.stringify(Payload),
    };
    const res = await axios.post(config.url, config.data, config)
    return res;
}
export async function GetByQuotation(Payload) {
    let config = {
        method: "POST",
        url: `${apiURL}/${path}/GetByQuotation`,
        headers: {
            "Content-Type": "application/json",
        },
        // data: JSON.stringify(Payload),
    };
    const res = await axios.post(config.url, config.data, config)
    return res;
}