<template>
  <div>
    <div class="main-wrap curve">
      <main-header home />
      <div class="container-wrap">
        <div id="home">
          <banner-slider />
        </div>
        <section class="space-top">
          <counter />
        </section>
        <section class="space-top">
          <div id="timeline">
            <level-member />
          </div>
        </section>
        <section id="event" class="space-top">
          <Events />
        </section>

        <section id="skill" class="space-top">
          <speciality />
        </section>
        <section id="members" class="space-top-short">
          <member />
          <!-- <ask-doctors /> -->
        </section>
        <div class="space-top-short space-bottom-short" id="brands">
          <BrandContract />
          <!-- <clinics /> -->
        </div>
      </div>
      <main-footer />
      <!-- <hidden point="smDown"> -->
      <corner />
      <!-- </hidden> -->
      <!-- <hidden point="mdDown"> -->
        <notification />
      <!-- </hidden> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import BannerSlider from '~/components/Home/BannerSlider'
import Counter from '~/components/Home/Counter'
import Events from '~/components/Home/Events'
import Speciality from '~/components/Home/Speciality'
// import AskDoctors from '~/components/Home/AskDoctors'
import Member from '../components/Home/Member'
import Testimonials from '~/components/Home/Testimonials'
import CallAction from '~/components/CallAction'
// import Clinics from '~/components/Home/Clinics'
import BrandContract from '../components/Home/BrandContract'
import Hidden from '~/components/Hidden'
import Corner from '~/components/Home/Corner'
import Notification from '~/components/Notification'
import brand from '~/static/text/brand'
import levelmember from '~/components/Home/LevelMember'

export default {
  components: {
    "main-header": Header,
    BannerSlider,
    Counter,
    Events,
    Speciality,
    Testimonials,
    Member,
    CallAction,
    BrandContract,
    Hidden,
    Corner,
    Notification,
    "main-footer": Footer,
    "level-member": levelmember
  },
  head() {
    return {
      title: "Home | " + brand.medical.desc,
    };
  },
}
</script>
<style type="css">
</style>