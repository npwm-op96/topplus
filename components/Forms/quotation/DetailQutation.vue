<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template class="" v-slot:activator="{ on, attrs }">
                <v-btn class="m-3" color="primary" dark v-bind="attrs" v-on="on">
                    <v-icon>mdi-list-box-outline </v-icon> ดูรายละเอียด
                </v-btn>
            </template>
            <vue-easy-lightbox v-if="loaded" :visible="visible" :imgs="imgShow" :index="index"
                @hide="handleHide">ddddd</vue-easy-lightbox>
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>รายละเอียดใบคำขอ</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="dialog = false">
                            แก้ไขข้อมูล
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-list three-line subheader>

                    <p class="text-h5 pl-3 pt-4">ข้อมูลลูกค้า</p>

                    <!-- {{ data }} -->
                    <!-- <v-subheader>เลขที่ใบสั่งซื้อที่ </v-subheader> -->
                    <div class="d-flex ">
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>เลขที่ใบสั่งซื้อที่ </v-list-item-title>
                                <v-list-item-subtitle>{{ data.customers[0].id }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>ขื่อลูกค้า {{ data.customers[0].name }} </v-list-item-title>
                                <v-list-item-subtitle>เบอร์โทรติดต่อ : {{ data.customers[0].tel }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>วันที่ส่งคำขอ</v-list-item-title>
                                <v-list-item-subtitle>{{ dateThai(data.date) }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-list>
                <v-divider></v-divider>
                <v-list v-if="(data.tempinsure && dialog)" three-line subheader>
                    <p class="text-h5 pl-3 pt-4">บริษัทประกันที่ลูกค้าสนใจ</p>
                    <v-list-item>
                        <v-row>
                            <v-col cols="12" sm="8" xs="8" md="6" xl="3" lg="4"
                                v-for="(  item, index ) in data.tempinsure " :key="index">
                                <v-card :disabled="data.status != 'prepare'" class="pt-1 mr-4">
                                    <div class="d-flex ">

                                        <v-avatar class="ma-3" size="125" tile>
                                            <v-img :src="dataInsur(item).img"></v-img>
                                        </v-avatar>
                                        <div>
                                            <v-card-title class="text-h7"
                                                v-text="`บริษัท ${dataInsur(item).nameTh}`"></v-card-title>

                                            <!-- <v-card-subtitle v-text="item.artist"></v-card-subtitle> -->

                                            <v-card-actions>


                                                <v-btn color="success" class="ml-2 mt-5" outlined rounded>
                                                    <v-icon>mdi-checkbox-marked-circle-outline</v-icon>ยื่นยัน
                                                </v-btn>
                                            </v-card-actions>
                                        </div>

                                    </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-list-item>
                </v-list>
                <v-list v-if="(data.files != null && dialog)" three-line subheader>
                    <p class="text-h5 pl-3">เอกสาร</p>
                    <v-list-item>
                        <v-row>
                            <v-col cols="12" sm="8" xs="8" md="6" xl="3" lg="4"
                                v-for="(  item, index ) in data.files.filter(file => file.nameFile.includes('doccar'))"
                                :key="index">

                                <v-card class="pt-1 mr-4">
                                    <div class="d-flex ">
                                        <v-avatar class="ma-3" size="125" tile>
                                            <v-img @click="() => showImg(`${$config.URL_B2}${item.idfile}`)"
                                                :src="`${$config.URL_B2}${item.idfile}`"></v-img>
                                            <v-icon class="zoom-icon">mdi-magnify-plus-outline</v-icon>

                                        </v-avatar>
                                        <div>

                                            <v-card-actions>
                                                <v-btn color="primary" class="ml-2 mt-5" outlined rounded>
                                                    ขอเอกสารกับลูกค้าใหม่
                                                </v-btn>
                                            </v-card-actions>
                                            <v-card-actions>
                                                <v-btn color="success" class="ml-2 mt-5" outlined rounded>
                                                    <v-icon>mdi-cloud-download</v-icon>ดาวโหลดเอกสาร
                                                </v-btn>
                                            </v-card-actions>
                                        </div>
                                    </div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="8" xs="8" md="6" xl="3" lg="4"
                                v-for="(  item, index ) in data.files.filter(file => file.nameFile.includes('docinsur'))"
                                :key="index">
                                <v-card class="pt-1 mr-4">
                                    <div class="d-flex ">
                                        <v-avatar class="ma-3" size="125" tile>
                                            <v-img @click="() => showImg(`${$config.URL_B2}${item.idfile}`)"
                                                :src="`${$config.URL_B2}${item.idfile}`"></v-img>
                                            <v-icon class="zoom-icon">mdi-magnify-plus-outline</v-icon>

                                        </v-avatar>
                                        <div>
                                            <v-card-actions>
                                                <v-btn color="primary" class="ml-2 mt-5" outlined rounded>
                                                    ขอเอกสารกับลูกค้าใหม่
                                                </v-btn>
                                            </v-card-actions>
                                            <v-card-actions>
                                                <v-btn color="success" class="ml-2 mt-5" outlined rounded>
                                                    <v-icon>mdi-cloud-download</v-icon>ดาวโหลดเอกสาร
                                                </v-btn>
                                            </v-card-actions>
                                        </div>
                                    </div>
                                </v-card>
                            </v-col>

                            <v-col cols="12" sm="8" xs="8" md="6" xl="3" lg="4"
                                v-for="(  item, index ) in data.files.filter(file => file.nameFile.includes('carpicture'))"
                                :key="index">
                                <v-card class="pt-1 mr-4">
                                    <div class="d-flex ">
                                        <v-avatar class="ma-3" size="125" tile>
                                            <v-img @click="() => showImg(`${$config.URL_B2}${item.idfile}`)"
                                                :src="`${$config.URL_B2}${item.idfile}`"></v-img>
                                            <v-icon class="zoom-icon">mdi-magnify-plus-outline</v-icon>

                                        </v-avatar>
                                        <div>

                                            <v-card-actions>
                                                <v-btn color="primary" class="ml-2 mt-5" outlined rounded>
                                                    ขอเอกสารกับลูกค้าใหม่
                                                </v-btn>
                                            </v-card-actions>
                                            <v-card-actions>
                                                <v-btn color="success" class="ml-2 mt-5" outlined rounded>
                                                    <v-icon>mdi-cloud-download</v-icon>ดาวโหลดเอกสาร
                                                </v-btn>
                                            </v-card-actions>
                                        </div>

                                    </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-list-item>

                    <v-btn color="success" class="ml-2 mt-5" outlined rounded>
                        <v-icon>mdi-content-save-plus </v-icon>ดาวเโหลดเอกสารทั้งหมด
                    </v-btn>
                </v-list>
                <v-divider></v-divider>
                <v-list v-if="(data.files != null && dialog)" three-line subheader>
                    <p class="text-h5 pl-3 pt-5">ใบเสนอลูกค้า</p>
                    <v-list-item>
                        <v-row>
                            <v-col cols="12" sm="8" xs="8" md="6" xl="3" lg="4">
                                <v-card class="pt-1">
                                    <div class=" col-12">
                                        <file-upload @fileRecord="GetQuotation($event)" :options="FileUploadOptions"></file-upload>

                                    </div>
                                    <div class="d-flex ">

                                        <v-card-actions>
                                            <v-btn :disabled="QuotationData.quotationDoc" @click="showQationDoc()" color="success" class="ml-2 mt-5" outlined rounded>
                                                <v-icon>mdi-note-search-outline</v-icon>ตรวจสอบ
                                            </v-btn>
                                        </v-card-actions>
                                        <v-card-actions>
                                            <v-btn :disabled="QuotationData.quotationDoc" color="success" class="ml-2 mt-5" outlined rounded>
                                                <v-icon>mdi-email-fast</v-icon>ส่งให้ลูกค้า
                                            </v-btn>
                                        </v-card-actions>
                                    </div>


                                </v-card>
                            </v-col>
                        </v-row>
                    </v-list-item>

                    <!-- <v-btn color="success" class="ml-2 mt-5" outlined rounded>
                        <v-icon>mdi-content-save-plus </v-icon>ส่งใบเสนอราคาให้ลูกค้า
                    </v-btn> -->
                </v-list>
                <v-divider></v-divider>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<style lang="scss">
@import './gallery-style.scss';
</style>
<script>
import brands from "~/api/brands.js";
import FileUploadVue from '~/components/Fileupload/';

export default {

    components: {
        Slick: () => import("vue-slick"),
        'file-upload': FileUploadVue

    },
    data: function () {
        return {
            loaded: false,
            visible: false,
            index: 0,
            imgShow: [""],
            // preview 

            masterinsur: '',
            data: '',
            dialog: false,
            notifications: false,
            sound: true,
            UrlImg: '',
            widgets: false,
            displayValue: '',
            // optionUploadfile

            FileUploadOptions: {
                theme: '',
                multiple: false,
                deletable: true,
                meta: '',
                accept: 'image/*,video/*,.pdf,.zip',
                maxSize: '3MB',
                maxFiles: 1,
                helpText: 'อัพโหลดไฟล์ของคุณ',
                errorText: {
                    type: 'โปรดระบุไฟล์เอกสารหรือรูปภาพหรือวีดีโอ',
                    size: 'ไฟล์ของคุณใหญ่เกินไป'
                },
                uploadUrl: {
                    default: ''
                },
                thumbnailSize: 120
            },
            QuotationData:{}

        };
    },
    beforeMount() {
        this.loaded = true

        this.data = this.params.data
        this.UrlImg = this.$config.URL_B2

    },
    methods: {
        dateThai(date) {
            //    return  this.$moment.locale('Th-th')
            return this.$moment(date).locale('th').add(543, 'year').format('LLLL')

        },
        dataInsur(code) {
            // console.log(code)
            return this._.filter(brands, { "code": code })[0]
            // this._.flatten([array1, array2])
        },
        GetQuotation(doc){
            // urlResized
            this.QuotationData.quotationDoc = doc
            console.log('GetQuotation',this.QuotationData)

        },
        download(id) {

        },
        showQationDoc(){
            if(this.QuotationData.quotationDoc[0].type.includes("image")){
                this.showImg(this.QuotationData.quotationDoc[0].urlResized)
            }
        },
        showImg(img) {
            this.imgShow[0] = img
            console.log('showImg', this.imgShow)
            // this.index = 0
            this.visible = true
        },
        handleHide() {
            this.visible = false
        },
    }
};
</script>