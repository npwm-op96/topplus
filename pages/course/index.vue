<template>
  <div class="main-wrap">
    <main-header :header="'Academy'" :dataMenu="dataMenu" />
    <div class="container-general container-front">
      <v-container>
        <v-row>
          <v-col cols="12">
            <!-- <template> -->
            <!-- <v-card> -->
            <!-- <v-card-title class="py-6"> -->
            <h3>
              <!-- {{ $t("medical.services_title") }} -->
              หลักสูตรอบรม
            </h3>
            <!-- </v-card-title> -->

            <v-tabs  class="localfix"  v-model="tab" background-color="transparent" color="success">
              <v-tab  v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>

            <v-tabs-items background-color="transparent" v-model="tab">
              <v-tab-item v-for="item in items" :key="item">
                <v-card flat>
                  <v-card-text>
                    <event-course></event-course>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
            <!-- </v-card> -->
            <!-- </template> -->
            <!-- <calendar></calendar> -->
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col cols="12">
            <v-tabs>
              <v-tab>นายหน้าขอรับ / ขอต่อ 1 - 3</v-tab>
              <v-tab>นายหน้าขอต่อปีที่ 4 เป็นต้นไป</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item v-for="item in items" :key="item">
                ดกดกด
                <event-course></event-course>

                <v-card color="basil" flat>
                  <v-card-text>

                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
            <calendar></calendar>
          </v-col>
        </v-row> -->
        <v-row>
          <v-col cols="12">
            <!-- <headline /> -->
          </v-col>
        </v-row>
        <!-- <v-row class="mt-8">
          <v-col md="6" cols="12" class="px-3">
            <post-card
              :href="link.medical.blogDetail"
              :img="'https://s3-ap-southeast-1.amazonaws.com/gettgo-web-production/app/public/ckeditor_assets/pictures/1361/content_shutterstock_1422153062.jpg'"
              title="ประกันชีวิต"
              desc="การชดเชยรายได้ที่ต้องสูญเสียไปอันเนื่องมาจากการเสียชีวิต ทุพพลภาพถาวรสิ้นเชิง หรือชราภาพ โดยบริษัทประกันชีวิต (บริษัทฯ)"
              date="12 Nov 2020"
              orientation="landscape"
              type="full"
            />
          </v-col>
          <v-col md="6" cols="12" class="px-4">
            <post-card
              :href="link.medical.blogDetail"
              :img="'https://blog.masii.co.th/wp-content/uploads/2019/09/1729-e1567577480675.jpg'"
              title="ประกันวินาศภัย"
              desc="การประกันภัยทุกประเภทที่นอกเหนือจาก การประกันชีวิต โดยผู้รับประกันภัยตกลงจะชดใช้ค่าสินไหมทดแทน ให้ผู้เอาประกันภัยหากทรัพย์สินที่ทําประกันภัยเอาไว้เกิดความสูญเสีย หรือ เสียหายจากภัยต่างๆ ซึ่งความเสียหายนั้นสามารถประเมินค่าเป็นตัวเงินได้"
              date="12 Nov 2020"
              orientation="landscape"
              type="full"
            />
          </v-col>
        </v-row> -->
        <!-- <v-row class="mt-6">
          <v-col md="8">
            <div
              v-for="index in 6"
              :key="index"
              :class="{ 'mt-15': index > 1 }"
            >
              <post-card
                :href="link.medical.blogDetail"
                :img="'https://resource.skilllane.com/assets/cpd-landing/image-OIC-LIFE@2x.webp'"
                title="นายหน้า / ตัวแทน ประกันชีวิต"
                desc="Maecenas rutrum dolor sed nisi maximus rhoncus. Nunc vel dignissim enim. Proin pretium arcu eget"
                date="12 Nov 2020"
                orientation="portrait"
                type="full"
              />
            </div>
            <div class="arrow">
              <v-row justify="space-between" class="mt-5">
                <v-btn text>
                  <v-icon>mdi-arrow-left</v-icon>
                  {{ $t("common.btn_prev") }}
                </v-btn>
                <v-btn text>
                  {{ $t("common.btn_next") }}
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </v-row>
            </div>
          </v-col>
          <v-col md="4" cols="12">
            <sidebar />
          </v-col>
        </v-row> -->
      </v-container>
    </div>
    <div id="footer">
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/pages";
@import './course-styles.scss';

</style>

<script>
import brand from "~/static/text/brand";
import MenuHeader from "~/components/Header/MenuHeader";
import Headline from "~/components/Course/Headline";
import PostCard from "~/components/Cards/PostCard";
import Sidebar from "~/components/Blog/Sidebar";
import Footer from "~/components/Footer";
import imgAPI from "~/static/images/imgAPI";
import link from "~/static/text/link";
import Calendar from "~/components/Calendar"
import Events from "~/components/Course/Events"
import menu from '~/components/Header/data/course'



export default {
  components: {
    "main-header": MenuHeader,
    "main-footer": Footer,
    Headline,
    Sidebar,
    PostCard,
    Calendar,
    'event-course': Events
  },
  data() {
    return {
      dataMenu: menu,
      imgAPI: imgAPI,
      link: link,
      tab: null,
      items: [
        'นายหน้าขอรับ / ขอต่อ 1 - 3', 'นายหน้าขอต่อปีที่ 4 เป็นต้นไป',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
  head() {
    return {
      title: "Course | " + brand.medical.desc,
    };
  },
};
</script>
