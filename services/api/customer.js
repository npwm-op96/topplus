export default $axios => resource => ({

    async saveCustomer(Payload) {
        const url = `${resource}/saveCustomer`
        const data = JSON.stringify(Payload)
        let config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await $axios.post(url, data, config)
        return new Promise((resolve, reject) => {
            resolve(res);
            reject(res);
        });
    }
});