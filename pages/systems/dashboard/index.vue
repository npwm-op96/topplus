<template>
    <div>
        <div class="main-wrap curve">
            <main-header :header="header" :dataMenu="dataMenu" />
            <div class="container-general container-front">
                <v-container class="pt-5">
                    <v-row>
                        <v-col cols="6"  sm="4" md="3">
                            <card-text :data="{ icon: 'mdi-account-supervisor-circle', color:'primary', text: 'สมาชิก', desc: '5000 +', img: '' }"></card-text>
                        </v-col>
                        <v-col cols="6"  sm="4" md="3">
                            <card-text :data="{ icon: 'mdi-store-cog', color:'success', text: 'ตรอ', desc: '5000 +', img: '' }"></card-text>
                        </v-col>
                        <v-col cols="6"  sm="4" md="3">
                            <card-text :data="{ icon: 'mdi-presentation', color:'danger', text: 'กิจกรรม', desc: '5000 +', img: '' }"></card-text>
                        </v-col>
                        <v-col cols="6"  sm="4" md="3">
                            <card-text :data="{ icon: 'mdi-notebook', color:'warning', text: 'สมัครเรียน', desc: '300 +', img: '' }"></card-text>
                        </v-col>
                        <v-col cols="6"  sm="4" md="3">
                            <card-text :data="{ icon: 'mdi-store-24-hour', color:'accent', text: 'สาขา', desc: '40 +', img: '' }"></card-text>
                        </v-col>
                        <v-col cols="6"  sm="4" md="3">
                            <card-text :data="{ icon: 'mdi-link-variant-remove', color:'secondary', text: 'สนใจลิงค์', desc: '3000 +', img: '' }"></card-text>
                        </v-col>
                        <v-col cols="6"  sm="4" md="3">
                            <card-text :data="{ icon: 'mdi-search-web', color:'error', text: 'เข้าชมเว็บไซต์', desc: '5000 +', img: '' }"></card-text>
                        </v-col>
                    </v-row>
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

//Dashboard Card
import Card from '~/components/Cards/Dashboard/Card';
export default {
    // middleware: 'auth',
    components: {
        "main-header": MenuHeader,

        Hidden,
        Corner,
        Notification,
        "main-footer": Footer,
        'card-text': Card
    },
    data() {
        return {
            dataMenu: menu,
            header: 'ระบบจัดการ'
        }
    },
    created() {
        this.$store.commit('ui/setheader', 'system')
        // 
        console.log(' this.$store.state.ui.header ', this.$store.state.ui.header)
    },
    head() {
        return {
            title: "System | หน้าแรก",
        };
    },

}
</script>
<style type="css">

</style>