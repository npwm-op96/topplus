<template>
  <fragment>
    <div class="root">
      <v-container>
        <v-row>
          <v-col
            cols="12"     
            md="6"
            class="px-sm-6"
          >
            <h4 class="use-text-title">
              {{ $t('medical.expertise_title') }}
            </h4>
            <p class="desc use-text-subtitle2">
              <!-- {{ $t('medical.expertise_subtitle') }} -->
              แผนการและเทคนิคของทีมงานที่พัฒนาให้คุณร่วมกับเรา
            </p>
            <div class="running-tag" v-if="loaded">
              <slick :options="slickOptions">
                <div
                  v-for="(group, indexGroup) in expertiseList"
                  :key="indexGroup"
                  class="tag-group"
                >
                  <span
                    v-for="(item, indexChild) in group"
                    :key="indexChild"
                    class="tag-item"
                  >
                    {{ item }}
                  </span>
                </div>
              </slick>
            </div>
          </v-col>
          <v-col v-if="isTablet" cols="12" md="6" class="px-6">
            <div class="circle-wave">
              <div class="ball">
                <img
                  :src="imgAPI.medical[23]"
                  :data-2d="imgAPI.medical[22]"
                  :data-3d="imgAPI.medical[23]"
                  class="img-2d3d"
                  alt="speciality 3d"
                />
              </div>
            </div>
            <u-animate-container>
              <u-animate
                :offset="0"
                name="zoomInShort"
                delay="0.3s"
                duration="0.3s"
              >
                <div class="illustration-wrap" v-if="loaded">
                  <div>
                    <span class="icon-green" />
                  </div>
                  <div>
                    <span class="icon-red" />
                  </div>
                  <div>
                    <span class="icon-blue" />
                  </div>
                </div>
              </u-animate>
            </u-animate-container>
        </v-col>
        </v-row>
      </v-container>
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
@import './speciality-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      imgAPI: imgAPI,
      loaded: false,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true
      },
      expertiseList: [
        ['ดูแลสมาชิก', 'สอนการคีย์งาน', 'กิจกรรม'],
        ['การสอบ', 'การอบรมณ์', 'การเป็นผู้นำ'],
        ['เป็นกันเอง', 'ช่วยเหลือ', 'ปรึกษา'],
        ['แผนการ', 'แพทฟอร์ม', 'ไลน์ OA'],
        ['การขาย', 'การพูด', 'เทคโนโลยี'],
         ['การสร้างทีม', 'การดูแลสมาชิก', 'การสร้างราได้'],
        // ['Dentist', 'Padriatic', 'Cardiology'],
        // ['Othopaedi', 'Traumatologi', 'Anestesiologi'],
        // ['Reumatologi', 'Andrologi', 'Ortodonsia']
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    isTablet() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
