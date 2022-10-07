<template>
  <div>
    <div class="main-wrap">
      <main-header home />
      <div class="container-wrap">
        <div id="home">
          <banner-slider />
        </div>
        <section class="space-top">
          <counter />
        </section>
        <section
          id="facility"
          class="space-top-short"
        >
          <events />
        </section>
        <section
          id="our-expertise"
          class="space-top"
        >
          <!-- <speciality /> -->
        </section>
        <section
          id="ask-doctors"
          class="space-top-short"
        >
        <member/>
          <!-- <ask-doctors /> -->
        </section>
        <section
          id="testimonials"
          class="space-top-short"
        >
          <!-- <testimonials /> -->
        </section>
        <div class="space-top" id="call-to-action">
          <!-- <call-action /> -->
        </div>
        <div class="space-top-short space-bottom-short" id="clinics">
          <BrandContract/>
          <!-- <clinics /> -->
        </div>
      </div>
      <main-footer />
      <hidden point="smDown">
        <corner />
      </hidden>
      <hidden point="mdDown">
        <notification />
      </hidden>
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

export default {
  components: {
    'main-header': Header,
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
    'main-footer': Footer
  },
  head() {
    return {
      title: brand.medical.desc
    }
  }
}
</script>
