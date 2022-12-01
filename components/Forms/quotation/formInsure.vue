
<template>
    <form>
        <v-checkbox @change="cehckInsur($event)" v-model="haveinsur" label="มีกรมธรรม์เดิม"></v-checkbox>
        <div v-if="haveinsur">
            <p>
                กรรมธรรมเดิม
            </p>
            <file-upload @fileRecord="fileInsureDoc($event)" :options="FileUploadOptions"></file-upload>
        </div>


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
            }
        }
    },
    methods: {
        cehckInsur(e) {
            this.$nextTick(() => {
                console.log(e.target)
            })
        },
        fileInsureDoc(fileinsur) {
            console.log('formInsureDoc', fileinsur)
            this.$emit('formInsureDoc', fileinsur)
        }
    },
}
</script>