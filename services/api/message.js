// import axios from 'axios'
// import { apiURL } from './apiURL';
// const path = 'message'
// export async function setMessageLineNoti(Payload) {
//     let config = {
//         method: "POST",
//         url: `${apiURL}/${path}/sentNotiLine`,
//         headers: {
//             "Content-Type": "application/json",
//         },
//         data: Payload
//     };
//     const res = await axios.post(config.url, config.data)

//     return new Promise((resolve, reject) => {
//         resolve(res);
//         reject(res);
//     });
// }

export default app => resource => ({
    async sentMessgeLine(file, data, type) {
        let messaage = []
        for (let index = 0; index < file.length; index++) {
            messaage[index] = this.dataMessage(file, data, type)
        }
        const form = {
            "to": "",
            "messages": messages
        }
    },
    async dataMessage(file, data, type) {
        let res = ''
        if (type = "image") {
            res = {
                "type": "image",
                "originalContentUrl": file,
                "previewImageUrl": file
            }
        }
        return res

    }

})