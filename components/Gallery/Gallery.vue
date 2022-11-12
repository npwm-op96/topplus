<template>
  <u-animate-container>
    <vue-easy-lightbox v-if="loaded" :visible="visible" :imgs="imgAPI.events" :index="index" @hide="handleHide" />
    <div class="carousel-handle">
      <div class="carousel-wrap">
        <slick ref="slick" :options="slickOptions" @afterChange="handleAfterChange">
          <div class="item">
            <div class="carousel-prop">

            </div>
          </div>
          {{ imgAPI }}
          <vue-easy-lightbox v-if="loaded" :visible="visible" :imgs="imgAPI.events" :index="index" @hide="handleHide" />
          <div v-for="(item, index) in imgAPI.events" :key="index" class="item">
            <v-card @click="() => showImg(index - 1)" class="mr-5">
              <v-img v-ripple :src="item"></v-img>
              <v-icon class="zoom-icon">mdi-magnify-plus-outline</v-icon>

            </v-card>

            <!-- {{item}} -->
            <!-- <card :data="item" /> -->
          </div>
        </slick>
        <br />
        <v-divider />

        <h3 class="pt-3">
          <p>รายละเอียด</p>
        </h3>
        <p>
          บุคลากรภายในองค์กรต้องการได้รับการดูแลจากองค์กร ให้มีคุณภาพชีวิตที่ดี เพื่อเป็นแรงกาย
          แรงใจในการมุมานะทำงานให้แก่องค์กร และเป็นกลไกสำคัญผลักดันให้องค์กรก้าวไปสู่ความสำเร็จ
          องค์กรที่มีความรับผิดชอบต่อบุคลากรของตนจะต้องไม่ละเลยการดูแลเอาใจใส่พนักงาน แม้เพียงเรื่องเล็ก ๆ น้อย ๆ
          ก็สามารถทำให้บุคลากรมีขวัญและกำลังใจที่ดี พร้อมที่จะอุทิศตนจงรักภักดีต่อองค์กรอย่างไม่เสื่อมคลาย เพราะฉะนั้น
          jobsDB ขอนำเสนอกิจกรรมภายในองค์กรที่จะทำให้พนักงานของคุณปราบปลื้ม และมีความสุขในการทำงานเพิ่มมากขึ้น
          ดังต่อไปนี้
        </p>
      </div>

    </div>

  </u-animate-container>
</template>
<style lang="scss">
@import './gallery-style.scss';
</style>
<script>
import imgAPI from "~/static/images/imgAPI";
export default {

  setup() { },
  components: {
    Slick: () => import("vue-slick"),
  },
  data() {
    return {
      loaded: false,
      visible: false,
      index: 0,
      imgAPI: imgAPI,
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
    };
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    next: function () {
      this.$refs.slick.next();
    },
    prev: function () {
      this.$refs.slick.prev();
    },
    showImg(index) {
      console.log('showImg')
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
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

