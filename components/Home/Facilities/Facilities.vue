<template>
  <div class="root">
    <u-animate-container>
      <v-container class="carousel-header">
        <div class="px-3">
          <h4 class="use-text-title">
            {{ $t('medical.services_title') }}
          </h4>
          <p class="use-text-subtitle2">Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.</p>
        </div>
        <v-btn
          :href="link.medical.product"
          text
          class="view-all"
        >
          {{ $t('common.btn_seeall') }}
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-container>
      <div class="carousel-handle">
        <div v-if="loaded" class="carousel-wrap">
          <slick
            ref="slick"
            :options="slickOptions"
            @afterChange="handleAfterChange"
          >
            <div class="item">
              <div class="carousel-prop">
                <div />
              </div>
            </div>
            <div
              v-for="(item, index) in servicesList"
              :key="index"
              class="item"
            >
              <card
                :title="item.title"
                :desc="item.desc"
                :img="item.img"
                button="see detail"
              />
            </div>
          </slick>
        </div>
      </div>
      <div class="floating-artwork">
        <v-container class="fixed-width">
          <div class="artwork">
            <slider-art :fade="fade">
              <u-animate
                :offset="250"
                name="fadeInLeftShort"
                delay="0.3s"
                duration="0.5s"
              >
                <div>
                  <img
                    :src="imgAPI.medical[13]"
                    :data-2d="imgAPI.medical[12]"
                    :data-3d="imgAPI.medical[13]"
                    class="img-2d3d"
                    alt="facilities"
                  />
                </div>
              </u-animate>
            </slider-art>
            <nav class="arrow">
              <v-btn
                fab
                small
                aria-label="next"
                class="margin"
                @click="next()"
              >
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
              <v-btn
                fab
                small
                aria-label="prev"
                class="margin"
                @click="prev()"
              >
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </nav>
          </div>
        </v-container>
      </div>
    </u-animate-container>
  </div>
</template>

<style lang="scss" scoped>
@import './facilities-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'
import Card from '../../Cards/FacilityCard'
import SliderArt from '../SliderArt'

export default {
  components: {
    Card,
    SliderArt,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      imgAPI: imgAPI,
      link: link,
      fade: false,
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      },
      servicesList: [
        {
          title: 'Lorem Ipsum',
          desc:
            'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
          img: imgAPI.medical[26]
        },
        {
          title: 'Etiam rhoncus',
          desc:
            'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
          img: imgAPI.medical[27]
        },
        {
          title: 'Duis fermentum',
          desc:
            'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
          img: imgAPI.medical[28]
        },
        {
          title: 'Lorem Ipsum',
          desc:
            'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
          img: imgAPI.medical[29]
        },
        {
          title: 'Etiam rhoncus',
          desc:
            'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
          img: imgAPI.medical[30]
        },
        {
          title: 'Duis fermentum',
          desc:
            'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
          img: imgAPI.medical[26]
        }
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    next: function() {
      this.$refs.slick.next()
    },
    prev: function() {
      this.$refs.slick.prev()
    },
    handleAfterChange(event, slick, currentSlide) {
      if (currentSlide > 0) {
        this.fade = true
      } else {
        this.fade = false
      }
    }
  }
}
</script>
