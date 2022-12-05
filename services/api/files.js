import { GET_LOCAL_TOKEN } from '~/utils/Utils.js'
import JSZip from 'jszip'
import { saveAs } from 'file-saver';


var axios = require('axios');
const zip = new JSZip();

export default app => resource => ({


    async saveFile(form) {
        const url = `${resource}/saveFile`
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            // data: Payload,
        };

        const res = await app.$axios.post(url, form, config)

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
        const res = await app.$axios.post(url, form, config)

        return new Promise((resolve, reject) => {
            resolve(res);
            reject(res);
        });
    },
    async dowloadAll(req) {
        console.log('dowloadAll url', req.url)
        console.log('dowloadAll data', req.data)

        return new Promise((resolve, reject) => {
            let config = {
                method: 'get',
                headers: {
                    "Content-Type": "text/plain",
                },
                responseType: 'blob',
            }

            let promises = [];

            for (let i = 0; i < req.data.length; i++) {
                let config = { params: { "fileId": req.data[i].idfile } }
                promises.push(axios.get(req.url, config));
            }
            axios.all(promises)
                .then(axios.spread((...args) => {
                    let file = []
                    for (let i = 0; i < args.length; i++) {
                        // console.log('file ALL', file)
                        file[i] = args[i].data;
                    }
                    console.log('file ALL', file.length)

                    var files = zip.folder();
                    for (let i = 0; i < file.length; i++) {
                        // console.log(file[i].name);
                        files.file(req.data[i].nameFile, file[i]);
                    }
                    zip.generateAsync({ type: "blob" }).then(function(content) {
                        console.log(content)
                        const name = `เอกสาร_${app.$moment(new Date()).format("DD-MM-YYYY")}.zip`
                        saveAs(content, name);
                    })
                }))

        });
    },
    async downloadfile(req) {
        return new Promise((resolve, reject) => {
            var _url = req.url
            const config = {
                params: {
                    fileId: req.id
                },
                method: 'get',
                headers: {
                    "Content-Type": "text/plain",
                },
                responseType: 'blob',
            }
            axios(_url, config)
                .then(function(response) {
                    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                    console.log('fileURL', new Blob([response.data]))
                    var fileLink = document.createElement('a');
                    fileLink.href = fileURL;
                    fileLink.setAttribute('download', req.title);
                    document.body.appendChild(fileLink);
                    fileLink.click();
                })
                .catch(function(error) {
                    console.log();
                    reject(error);

                });
        });

    },
})