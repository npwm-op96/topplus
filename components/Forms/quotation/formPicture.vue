<template>
    <form>
        <p>
            รูปรถ 4 มุม
        </p>
        <file-upload @fileRecord="fileCarPicture($event)" :options="FileUploadOptions"></file-upload>
        <!-- <v-checkbox @change="cehckInsur($event)" v-model="haveinsur" label="มีกรมธรรม์เดิม"></v-checkbox>
        <div v-if="haveinsur">
            <p>
            กรรมธรรมเดิม
        </p>
        <file-upload  :options="FileUploadOptions"></file-upload>
        </div> -->


    </form>
</template>
<script>
import FileUploadVue from '~/components/Fileupload/';
export default {
    components: {
        'file-upload': FileUploadVue
    },
    data() {
        return {
            haveinsur: false,
            FileUploadOptions: {
                theme: 'list',
                multiple: true,
                deletable: true,
                meta: '',
                accept: 'image/*,video/*,.pdf,.zip',
                maxSize: '14MB',
                maxFiles: 4,
                helpText: 'อัพโหลดไฟล์ของคุณ',
                errorText: {
                    type: 'โปรดระบุไฟล์เอกสารหรือรูปภาพหรือวีดีโอ',
                    size: 'ไฟล์ของคุณใหญ่เกินไป'
                },
                uploadUrl: {
                    default: ''
                },
                thumbnailSize: '40px'
            }
        }
    },
    methods: {
        cehckInsur(e) {
            this.$nextTick(() => {
                console.log(e.target)
            })
        },
        fileCarPicture(filecar) {
            // console.log('formPicture', filecar)
            this.$emit('formPicture', filecar)
        }
    },
}
</script>