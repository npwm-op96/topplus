<template>
    <div>
        <div class="main-wrap curve">
            <main-header :header="header" :dataMenu="dataMenu" />
            <div class="container-wrap">
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


//   import BannerSlider from '~/components/Home/BannerSlider'
//   import Counter from '~/components/Home/Counter'
//   import Events from '~/components/Home/Events'
//   import Speciality from '~/components/Home/Speciality'
// import AskDoctors from '~/components/Home/AskDoctors'
//   import Member from '../components/Home/Member'
//   import Testimonials from '~/components/Home/Testimonials'
//   import CallAction from '~/components/CallAction'
// import Clinics from '~/components/Home/Clinics'
//   import BrandContract from '~/components/Home/BrandContract'
import Hidden from '~/components/Hidden'
import Corner from '~/components/Home/Corner'
import Notification from '~/components/Notification'
import brand from '~/static/text/brand'
import { GetQuotation } from '../../services/api/quotation';
//   import levelmember from '~/components/Home/LevelMember'

export default {
    // middleware: 'auth',
    components: {
        "main-header": MenuHeader,
        //   BannerSlider,
        //   Counter,
        //   Events,
        //   Speciality,
        //   Testimonials,
        //   Member,
        //   CallAction,
        //   BrandContract,
        Hidden,
        Corner,
        Notification,
        "main-footer": Footer,
        //   "level-member": levelmember
    },
    data() {
        return {
            dataMenu: menu,
            header: 'ระบบจัดการ'
        }
    },
    created() {
        this.$store.commit('ui/setheader','system')
// 
        console.log(' this.$store.state.ui.header ', this.$store.state.ui.header)
        this.GetQuotation()
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