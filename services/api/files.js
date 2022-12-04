export default $axios => resource => ({

    async saveFile(form) {
        const url = `${resource}/saveFile`
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            // data: Payload,
        };

        const res = await $axios.post(url, form, config)

        return new Promise((resolve, reject) => {
            resolve(res);
            reject(res);
        });
    },
    async dowloadfiles(Idfile) {
        const url = `${resource}/saveFile`
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": `${GET_LOCAL_TOKEN()}`
            },
            // data: Payload,
        };

        const res = await $axios.post(url, form, config)

        return new Promise((resolve, reject) => {
            resolve(res);
            reject(res);
        });
    },
    async requestfiles(Idfile) {
        const url = `${resource}/saveFile`
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": `${GET_LOCAL_TOKEN()}`
            },
            // data: Payload,
        };
        const res = await $axios.post(url, form, config)

        return new Promise((resolve, reject) => {
            resolve(res);
            reject(res);
        });
    },
    async dowloadAll(IdQuo) {
        const url = `${resource}/saveFile`
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": `${GET_LOCAL_TOKEN()}`
            },
            // data: Payload,
        };
        const res = await $axios.post(url, form, config)

        return new Promise((resolve, reject) => {
            resolve(res);
            reject(res);
        });
    }
})