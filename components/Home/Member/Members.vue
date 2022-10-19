<template>
  <fragment>
    <div class="root">
      <v-container>
        <div class="deco">
          <img
            :src="imgAPI.medical[17]"
            :data-3d="imgAPI.medical[16]"
            :data-2d="imgAPI.medical[17]"
            class="img-2d3d"
            alt="speciality 3d"
          />
        </div>
        <u-animate-container>
          <v-row>
            <v-col cols="12" md="3" class="px-sm-6">
              <u-animate
                :offset="-100"
                name="fadeInLeftShort"
                delay="0.2s"
                duration="0.3s"
              >
                <div class="side-filter">
                  <h4 class="use-text-title">
                    <!-- {{ $t('medical.ask_doctors') }} -->
                    ทีมสมาชิก
                  </h4>
                  <v-list class="nav">
                    <v-list-item-group v-model="item" color="primary">
                      <v-list-item
                        class="filter"
                      >
                        <v-list-item-title>
                          {{ 'ดูทั้งหมด' }}
                        </v-list-item-title>
                      </v-list-item>
                      <v-list-item
                        v-for="(item, index) in categories"
                        :key="index"
                        class="filter"
                      >
                        <v-list-item-title>
                          {{ item }}
                        </v-list-item-title>
                      </v-list-item>
                      
                    </v-list-item-group>
                  </v-list>
                </div>
              </u-animate>
            </v-col>
            <v-col cols="12" md="9" lg="8" class="px-6">
              <div class="massonry">
                <v-row>
                  <v-col
                    v-for="(item, index) in memberData"
                    :key="index"
                    cols="12"
                    sm="6"
                    class="px-lg-8 px-3 py-3"
                  >
                    <u-animate
                      :delay="0.2 * index + 's'"
                      duration="0.4s"
                      name="fadeInUpShort"
                    >
                      <div>
                        <profile-card
                          :avatar="item.avatar"
                          :name="item.name"
                          :position="item.position"
                          :rating="item.rating"
                          :exp="item.exp"
                        />
                      </div>
                    </u-animate>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </u-animate-container>
      </v-container>
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
@import "./members-style.scss";
</style>

<script>
import imgAPI from "~/static/images/imgAPI";
import ProfileCard from "../../Cards/ProfileCard2";

export default {
  components: {
    ProfileCard,
  },
  data() {
    return {
      item: 0,
      imgAPI: imgAPI,
      loaded: false,
      categories: ["ทั้งหมด", "อาวุโส", "ผู้จัดการ", "นักพัฒนา"],
      memberData: [
        {
          avatar: imgAPI.members[0],
          name: "เจริญรุ่งเรือง กิ่งแก้ว",
          position: [
            "รองประธานผู้ช่วยฝ่ายบริหาร FIN",
            "ผู้อำนวยการภาคอวุโส AIA",
            // "กรรมการฝ่ายประกันภัย ASC",
          ],
          rating: 95,
          exp: '34',
        },
        {
          avatar: imgAPI.members[1],
          name: "วรัญญา เศรษฐสิงห์",
          position: ["นายหน้าประกันภัย และผู้จัดการขยายงาน"],
          rating: 95,
          exp: "over 10",
        },
        {
          avatar: imgAPI.members[2],
          name: "วราภรณ์ พุฒแก้ว",
          position: ["ผู้จัดดการสาขา"],
          rating: 3,
          exp: '4',
        },
        {
          avatar: imgAPI.members[3],
          name: "ณัฐพล วงษ์รัศมี",
          position: ["Software Engineer"],
          rating: 95,
          exp: '2',
        },
      ],
    };
  },
  mounted() {
    this.loaded = true;
  },
};
</script>
