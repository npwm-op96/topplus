<template>
    <div>
        <div class="main-wrap curve">
            <main-header :header="header" :dataMenu="dataMenu" />
            <div class="container-general container-front">
                <v-container class="pt-5">
                  <div>
                    <h3>จัดการสมาชิก</h3>
                  </div> 
                    <datables-ag :columnDefs="columnDefs" :rowData="rowData" :options="options"></datables-ag>
                </v-container>

            </div>
        </div>
    </div>
</template>
  
<style scoped lang="scss">
@import '~/assets/pages';
</style>
  
<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import MenuHeader from "~/components/Header";
import menu from '~/components/Header/data/system.js'
import Hidden from '~/components/Hidden'
import Corner from '~/components/Home/Corner'
import Notification from '~/components/Notification'
import brand from '~/static/text/brand'
import datablesAg from '~/components/DataTables';
import members from '~/api/members.js'

export default {
    // middleware: 'auth',
    components: {
        "main-header": MenuHeader,

        Hidden,
        Corner,
        Notification,
        "main-footer": Footer,
        datablesAg
        //   "level-member":ƒ levelmember
    },
    data() {
        return {
            dataMenu: menu,
            header: 'ระบบจัดการ',
            columnDefs: [
                { headerName: "เลขเอเจ็น", field: "user_login" },
                { headerName: "ชื่อ", field: "name" },
                { headerName: "ต้นสาย", field: "user_adviser" },
                { headerName: "ลำดับ", field: "rank" },
                { headerName: "วันที่ลงทะเบียน", field: "user_registered" },
            ],
            rowData: members,
            options:{
                pagination:true,
                paginationPageSize:'20'

            }
            
        }
    },
    created() {
        this.$store.commit('ui/setheader', 'system')
        // 
        console.log(' this.$store.state.ui.header ', this.$store.state.ui.header)
    },
    head() {
        return {
            title: "System | สมาชิก",
        };
    },

}
</script>
<style type="css">

</style>