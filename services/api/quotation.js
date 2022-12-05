import { GET_LOCAL_TOKEN } from '~/utils/Utils.js'

export default $axios => resource => ({
    async saveQuotation(Payload) {
        const url = `${resource}/saveQuotation`
        const data = JSON.stringify(Payload)
        let config = {
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${GET_LOCAL_TOKEN}`
            },
        };
        const res = await $axios.post(url, data, config)
        return res;
    },
    async GetQuotation(Payload) {
        const url = `${resource}/GetQuotation`
        let config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${GET_LOCAL_TOKEN()}`
            },
        };
        const res = await $axios.post(`${url}`, Payload, config)
        return res;
    },
    async GetByQuotation(Payload) {
        let config = {
            method: "POST",
            url: `/${resource}/GetByQuotation`,
            headers: {
                "Content-Type": "application/json",
            },
            // data: JSON.stringify(Payload),
        };
        const res = await $axios.post(config.url, config.data, config)
        return res;
    }

})