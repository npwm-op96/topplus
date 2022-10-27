<template>
  <div class="root">
    <u-animate-container>

      <div class="carousel-handle">
        <div v-if="loaded" class="carousel-wrap">
          <slick ref="slick" :options="slickOptions" @afterChange="handleAfterChange">
            <!-- <div class="item">
              <div class="carousel-prop">
                <div />
              </div>
            </div> -->
            <div v-for="(item, index) in courseList" :key="index" class="item">
              <card :data="item" />
            </div>
          </slick>
        </div>
      </div>
      <div class="floating-artwork">
        <v-container class="fixed-width">
          <div class="artwork">
            <slider-art :fade="fade">
              <u-animate :offset="250" name="fadeInLeftShort" delay="0.3s" duration="0.5s">
                <div>
                  <img :src="imgAPI.medical[13]" :data-2d="imgAPI.medical[12]" :data-3d="imgAPI.medical[13]"
                    class="img-2d3d" alt="facilities" />
                </div>
              </u-animate>
            </slider-art>
            <nav class="arrow">
              <v-btn fab small aria-label="next" class="margin" @click="next()">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
              <v-btn fab small aria-label="prev" class="margin" @click="prev()">
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
@import "./events-style.scss";
</style>

<script>
import imgAPI from "~/static/images/imgAPI";
import link from "~/static/text/link";
import Card from "../../Cards/CourseCard";
import SliderArt from "../SliderArt";


export default {
  components: {
    Card,
    SliderArt,
    Slick: () => import("vue-slick"),
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
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
      courseList: [
        {
          title: 'ขอรับใบอนุญาตเป็นนายหน้าประกันวินาศภัย',
          desc:
            'ทีไอไอ สถาบันประกันภัยไทย',
          img: 'https://tasksquadhq.com/wp-content/uploads/2020/04/staff-training-1024x684.jpg',
          time: '15 ',
          price: '999',
          unit: 'ชม',
          startdate: '1 พ.ย. 2565',
          enddate: '30 ม.ค. 2566',
          sponser: imgAPI.course[0]
        },
        {
          title: 'ขอต่ออายุใบอนุญาตเป็นนายหน้าประกันวินาศภัย ครั้งที่ 1',
          desc:
            'ทีไอไอ สถาบันประกันภัยไทย',
          img: 'https://tasksquadhq.com/wp-content/uploads/2020/04/staff-training-1024x684.jpg',
          time: '15 ',
          price: '999',
          unit: 'ชม',
          startdate: '1 พ.ย. 2565',
          enddate: '30 ม.ค. 2566',
          sponser: imgAPI.course[0]
        },
        {
          title: 'ขอต่ออายุใบอนุญาตเป็นนายหน้าประกันวินาศภัย ครั้งที่ 2',
          desc:
            'ทีไอไอ สถาบันประกันภัยไทย',
          img: 'https://tasksquadhq.com/wp-content/uploads/2020/04/staff-training-1024x684.jpg',
          time: '15 ',
          price: '999',
          unit: 'ชม',
          startdate: '1 พ.ย. 2565',
          enddate: '30 ม.ค. 2566',
          sponser: imgAPI.course[0]
        },
        {
          title: 'ขอต่ออายุใบอนุญาตเป็นนายหน้าประกันวินาศภัย ครั้งที่ 3',
          desc:
            'ทีไอไอ สถาบันประกันภัยไทย',
          img: 'https://tasksquadhq.com/wp-content/uploads/2020/04/staff-training-1024x684.jpg',
          time: '15 ',
          price: '999',
          unit: 'ชม',
          startdate: '1 พ.ย. 2565',
          enddate: '30 ม.ค. 2566',
          sponser: imgAPI.course[0]
        },
      ],
    };
  },
  created() {
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    next: function () {
      this.$refs.slick.next();
    },
    prev: function () {
      this.$refs.slick.prev();
    },
    handleAfterChange(event, slick, currentSlide) {
      if (currentSlide > 0) {
        this.fade = true;
      } else {
        this.fade = false;
      }
    },
  },
};
</script>
