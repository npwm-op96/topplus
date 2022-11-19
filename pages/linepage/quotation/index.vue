<template>
    <div class="main-wrap">
        <v-stepper v-model="e6" vertical>
            <v-stepper-step @click="onchenage(1)" :complete="e6 > 2" step="1">
                ข้อมูล
            </v-stepper-step>
            <v-stepper-content step="1">
                <v-card class="mb-12" height="200px">
                    <form-data @formData="formData($event)"></form-data>
                </v-card>
                <v-btn color="primary" @click="e6 = 2">
                    ถัดไป
                </v-btn>
            </v-stepper-content>

            <v-stepper-step @click="onchenage(2)" :complete="e6 > 2" step="2">
                เอกสารเกี่ยวกับรถ
            </v-stepper-step>

            <v-stepper-content step="2">
                <v-card class="mb-12">
                    <form-doc @formCarDoc="formCarDoc($event)" @formInsureDoc="formInsurDoc($event)"></form-doc>
                </v-card>
                <v-btn color="primary" @click="e6 = 3">
                    ถัดไป
                </v-btn>
            </v-stepper-content>

            <v-stepper-step @click="onchenage(3)" :complete="e6 > 3" step="3">
                รูปรถ </v-stepper-step>

            <v-stepper-content step="3">
                <v-card class="mb-12" height="200px">
                    <form-picture @formPicture="formPicture($event)"></form-picture>
                </v-card>
                <v-btn color="primary" @click="e6 = 4">
                    ถัดไป
                </v-btn>
            </v-stepper-content>
            <v-stepper-step @click="onchenage(4)" :complete="e6 > 4" step="4">
                เลือกบริษัท
            </v-stepper-step>
            <v-stepper-content step="4">
                <v-card class="mb-12" height="300px">
                    <form-brand @itemInsur="formInsur($event)"></form-brand>
                </v-card>
                <v-btn color="primary" @click="e6 = 5">
                    ถัดไป
                </v-btn>

            </v-stepper-content>
            <v-stepper-step @click="onchenage(5)" :complete="e6 > 5" step="5">
                เสร็จสิน
            </v-stepper-step>
            <v-stepper-content step="5">
                <v-card class="mb-12 text-center" height="200px">
                    <v-btn color="primary" @click="sentQuatation()">
                        ส่งเอกสาร
                    </v-btn>
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




// import dataForm from '~/components/Forms/quotation/dataform'

export default {
    components: {
        'form-data': formData,
        'form-doc': formDoc,
        'form-picture': formPicture,
        'form-brand': formBrand


    },
    data() {
        return {
            e6: 1,
            QuatationData: {
            }
        }
    },
    computed: {

    },
    created() {

    },
    methods: {
        onchenage(step) {
            console.log('onchenage')
            this.e6 = step
        },
        formData(data) {
            this.QuatationData.CusData = data
        },
        formCarDoc(document) {
            this.QuatationData.FormCarDoc = document
        },
        formInsurDoc(document) {
            this.QuatationData.FormInsurDoc = document
        },
        formPicture(picture) {
            this.QuatationData.FormCarPicture = picture
        },
        formInsur(provider) {
            this.QuatationData.TempInsur = provider
            // console.log('getItmeInsur', this.QuatationData)
        },
        sentQuatation() {
            console.log('sentQuatation', this.QuatationData)
            let count = 1

            // if (count == 100) {
            // liff.closeWindow();


        }
    },
}
</script>