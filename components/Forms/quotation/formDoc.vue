
<template>
    <form>
        <p>
            เล่มรถ
        </p>
        <file-upload @fileRecord="fileCarDoc($event)" :options="FileUploadOptions"></file-upload>
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
        fileCarDoc(filecar) {
            console.log('formCarDoc', filecar)
            this.$emit('formCarDoc', filecar)
        },
        // fileInsureDoc(fileinsur) {
        //     console.log('formInsurDoc', fileinsur)
        //     this.$emit('formInsurDoc', fileinsur)
        // }
    },
}
</script>