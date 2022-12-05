import { GET_LOCAL_TOKEN } from '~/utils/Utils.js'
var axios = require('axios');

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
    async requestfiles(Idfile) {
        const url = `${resource}/saveFile`
        let config = {
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${GET_LOCAL_TOKEN}`
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
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${GET_LOCAL_TOKEN}`
            },
            // data: Payload,
        };
        const res = await $axios.post(url, form, config)

        return new Promise((resolve, reject) => {
            resolve(res);
            reject(res);
        });
    },
    async downloadfile(req) {
        return new Promise((resolve, reject) => {
            const params = {
                fileId: req.title
            }
            console.log('download param ', req.title)

            // const params = { fileId: label }

            var _url = req.url

            axios(_url, { params })
                .then(function(response) {
                    // console.log(JSON.stringify(response.data));
                    this.forceFileDownload(response, req.title)

                    resolve(response);

                })
                .catch(function(error) {
                    console.log();
                    reject(error);

                });
            // resolve(res);
        });
        // $axios.get(url, { responseType: 'blob' })
        //     .then(response => {
        //         const blob = new Blob([response.data])
        //         const link = document.createElement('a')
        //         link.href = URL.createObjectURL(blob)
        //         link.download = label
        //         link.click()
        //         URL.revokeObjectURL(link.href)
        //     }).catch(console.error)
    },
    // downloadfile(url, title) {
    //     $axios({
    //             method: 'get',
    //             url,
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //                 "Authorization": `${GET_LOCAL_TOKEN()}`
    //             },
    //             responseType: 'arraybuffer',
    //         })
    //         .then((response) => {
    //             this.forceFileDownload(response, title)
    //         })
    //         .catch(() => console.log('error occured'))
    // },
    forceFileDownload(response, title) {
        console.log(title)
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', title)
        document.body.appendChild(link)
        link.click()
    },
})