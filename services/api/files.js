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
    }
})