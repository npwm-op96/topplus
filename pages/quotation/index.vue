<template>
    <div class="main-wrap">
        <v-stepper v-model="step" vertical>
            <p class="text-center pt-5">ยินดีได้ดูแลครับคุณ {{ lineAccoount.displayName }}</p>

            <v-stepper-step @click="onchenage(1)" :complete="step > 2" step="1">
                ข้อมูล
            </v-stepper-step>
            <v-stepper-content step="1">
                <v-card class="mb-12" height="200px">
                    <form-data @formData="formData($event)"></form-data>
                </v-card>
                <v-btn color="primary" @click="step = 2">
                    ถัดไป
                </v-btn>
            </v-stepper-content>

            <v-stepper-step @click="onchenage(2)" :complete="step > 2" step="2">
                เอกสารเกี่ยวกับรถ
            </v-stepper-step>

            <v-stepper-content step="2">
                <v-card class="mb-12">
                    <form-doc @formCarDoc="formCarDoc($event)"></form-doc>
                    <form-insure @formInsureDoc="formInsureDoc($event)"></form-insure>
                </v-card>
                <v-btn color="primary" @click="step = 3">
                    ถัดไป
                </v-btn>
            </v-stepper-content>

            <v-stepper-step @click="onchenage(3)" :complete="step > 3" step="3">
                รูปรถ </v-stepper-step>

            <v-stepper-content step="3">
                <v-card class="mb-12" height="200px">
                    <form-picture @formPicture="formPicture($event)"></form-picture>
                </v-card>
                <v-btn color="primary" @click="step = 4">
                    ถัดไป
                </v-btn>
            </v-stepper-content>
            <v-stepper-step @click="onchenage(4)" :complete="step > 4" step="4">
                เลือกบริษัท
            </v-stepper-step>
            <v-stepper-content step="4">
                <v-card class="mb-12" height="300px">
                    <form-brand @itemInsur="formInsur($event)"></form-brand>
                </v-card>
                <v-btn color="primary" @click="step = 5">
                    ถัดไป
                </v-btn>

            </v-stepper-content>
            <v-stepper-step @click="onchenage(5)" :complete="step > 5" step="5">
                เสร็จสิน
            </v-stepper-step>
            <v-stepper-content step="5">
                <v-card class="mb-12 text-center" height="500px">
                    <div class="text-center">
                        <v-btn :disabled="dialogProgress" :loading="dialogProgress" class="white--text" color="primary"
                            @click="sentQuatation()">
                            ส่งเอกสาร </v-btn>
                        <v-dialog height="300px" v-model="dialogProgress" hide-overlay persistent width="300">
                            <v-card class="m-5 text-center" :color="value > 95 ? 'success' : 'primary'" dark>
                                <v-card-text>

                                    <h2 class="pb-3 pt-2">{{ textprogress }}</h2>


                                    <v-progress-circular :rotate="180" :size="100" :width="15" :value="value"
                                        color="white">
                                        {{ value }}
                                    </v-progress-circular>
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-card>
            </v-stepper-content>
        </v-stepper>
    </div>
</template>
    
<style scoped lang="scss">
@import "~/assets/pages";
</style>
<script>

import formData from '~/components/Forms/quotation/formData.vue'
import formDoc from '~/components/Forms/quotation/formDoc.vue'
import formPicture from '~/components/Forms/quotation/formPicture.vue'
import formBrand from '~/components/Forms/formBrand'
import formInsur from '~/components/Forms/quotation/formInsure.vue'

// import liff from '@line/liff';




// import dataForm from '~/components/Forms/quotation/dataform'

export default {
    components: {
        'form-data': formData,
        'form-doc': formDoc,
        'form-picture': formPicture,
        'form-brand': formBrand,
        'form-insure': formInsur
    },
    data() {
        return {
            step: 1,
            dialogProgress: false,
            QuotationData: {},
            interval: {},
            value: 0,
            textprogress: 'กำลังนำส่งเอกสาร',
            lineAccoount: {},
            facebookAccount: {},
        }
    },
    watch: {
        dialogProgress(val) {
            if (!val) return
            this.interval = setInterval(() => {
                if (this.value == 100) {
                    clearInterval(this.interval)
                    this.textprogress = 'นำส่งเอกสารสำเร็จ'
                    this.dialogProgress = false
                    liff.closeWindow();
                    return false
                }
                this.value += 25
            }, 600)
        },
    },
    computed: {

    },
    mounted() {
        // console.log(process.env.LIFFID)
        liff.init({ liffId: this.$config.LIFFID }, (res) => {
            const context = liff.getContext();
            console.log(context);
            console.log(liff.isLoggedIn())
            if (liff.isLoggedIn()) {
                liff.getDecodedIDToken()
                liff.getProfile().then(profile => {
                    console.log(profile)
                    this.lineAccoount.userProfile = profile.userId;
                    this.lineAccoount.displayName = profile.displayName;
                    this.lineAccoount.statusMessage = profile.statusMessage;
                    this.lineAccoount.pictureUrl = profile.pictureUrl;
                    this.lineAccoount.email = liff.getDecodedIDToken().email;
                }).catch(
                    err => console.error(err)
                );
            } else {
                liff.login();
            }
        }, err => console.error(err.code, error.message));
    },
    methods: {
        onchenage(step) {
            console.log('onchenage')
            this.step = step
        },
        formData(data) {
            this.QuotationData.CusData = data
        },
        formCarDoc(document) {
            this.QuotationData.FormCarDoc = document
        },
        formInsureDoc(insurance) {
            this.QuotationData.FormInsurDoc = insurance
            console.log('Q formInsureDoc', this.QuotationData)
        },
        formPicture(picture) {
            this.QuotationData.FormCarPicture = picture
        },
        formInsur(provider) {
            this.QuotationData.TempInsur = provider
            // console.log('getItmeInsur', this.QuotationData)
        },
        async saveCustomer(quotation, customer) {
            console.log('saveCustomer --> quo ->', quotation)
            console.log('saveCustomer --> customer ->', customer)

            let req = { ...customer, refQuo: quotation.id };
            const request = { ...req, lineAccoount: this.lineAccoount };
            console.log('req', request)
            // }
            return await this.$store.dispatch("customer/saveCustomer", request)
        },
        getChannel() {
            let channel = ''
            if (this.lineAccoount.userProfile != null) {
                channel = 'line'
            }
            else if (this.facebookAccount.userProfile != null) {
                channel = 'facebook'
            }
            return channel

        },
        async saveQuotation() {
            const req = {
                "channel": getChannel(),
                "status": "prepare",
                "tempInsurs": this.QuotationData.TempInsur
            }

            this.QuotationData.channel = 'Line'

            return await this.$store.dispatch('quotation/saveQuotation', req)

        },
        async saveFile(form) {
            return await this.$store.dispatch('files/saveFile', form)

        },
        async sentQuatation() {
            this.dialogProgress = true
            console.log('sentQuatation', this.QuotationData)
            const datacus = this.QuotationData?.CusData;
            let count = 1
            const quotation = await this.saveQuotation()
            const customer = await this.saveCustomer(quotation, datacus);
            if (customer) {
                liff
                    .sendMessages([
                        {
                            "type": "template",
                            "altText": "this is a carousel template",
                            "template": {
                                "type": "carousel",
                                "imageSize": "contain",
                                "columns": [
                                    {
                                        "thumbnailImageUrl": "https://images.autofun.co.th/file1/c61d65a5e7794b5b967f868f0713404e_1200.png",
                                        "title": "ขอบคุณที่ไว้วางใจ D4U",
                                        "text": "เราจะติดต่อกลับคุณเร็วที่สุด",
                                        "actions": [
                                            {
                                                "type": "message",
                                                "label": "ติดต่อเรา",
                                                "text": "ติดต่อเรา"
                                            }
                                        ],
                                        "imageBackgroundColor": "#ACA382"
                                    }
                                ]
                            }
                        },
                    ])
                    .then(() => {
                        console.log("message sent");
                    })
                    .catch((err) => {
                        console.log("error", err);
                    });
            }
            if (this.QuotationData.FormCarDoc) {
                let files = new FormData();
                files.append("module", 'quotation');
                files.append("refId", quotation.id);
                const fileList = this.QuotationData.FormCarDoc
                for (const file of fileList) {
                    files.append("FileData", file.file);
                    files.append("type", 'doccar');
                    files.append("fileName", file.file.name);
                }
                const file = await this.saveFile(files)
            }
            if (this.QuotationData.FormInsurDoc) {
                const fileList = this.QuotationData.FormInsurDoc
                let files = new FormData();
                files.append("module", 'quotation');
                files.append("refId", quotation.id);
                for (const file of fileList) {
                    files.append("FileData", file.file);
                    files.append("type", 'docinsur');
                    files.append("fileName", file.file.name);
                }
                const file = await this.saveFile(files)
            }
            if (this.QuotationData.FormCarPicture) {
                const fileList = this.QuotationData.FormCarPicture
                let files = new FormData();
                files.append("module", 'quotation');
                files.append("refId", quotation.id);
                for (const file of fileList) {
                    files.append("FileData", file.file);
                    files.append("type", 'carpicture');
                    files.append("fileName", file.file.name);
                }
                const file = await this.saveFile(files)
            }
        }
    },
}
</script>