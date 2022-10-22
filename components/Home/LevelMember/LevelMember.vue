<template>
    <fragment>
        <v-container>
            <v-col cols="12" lg="10" md="10">
                <u-animate-container>
                    <v-timeline :direction="'horizontal'">
                        <v-timeline-item v-for='(item,index) in memberData' :key="index" large>
                            <template v-slot:icon>
                                <v-avatar>
                                    <img :alt="item.name" :src="'https://cdn-icons-png.flaticon.com/512/482/482636.png?w=1380&t=st=1666418334~exp=1666418934~hmac=ab6f94c238dca1eec5c1e62ceab6ab352e66f03f34d627a7b92d5e556924ea1f'">
                                </v-avatar>
                            </template>
                            <template v-slot:opposite>
                                <span>
                                    <v-chip class="ma-2" :color="item.level >= 8 ?'orange':'primary'" text-color="white">
                                        <v-avatar v-if="item.level >= 8 " left>
                                            <v-icon>{{item.level >= 8 ?'mdi-star':''}}</v-icon>
                                        </v-avatar>
                                        ระดับ :{{item.level}}
                                    </v-chip>
                                </span>
                            </template>
                            <u-animate :delay="0.2 * index + 's'" duration="0.4s" name="fadeInUpShort">
                                <v-card class="elevation-2">
                                    <v-card-title class="text-h5">
                                        {{item.name}}
                                    </v-card-title>
                                    <v-card-text>
                                        {{item.position}}
                                    </v-card-text>
                                </v-card>
                            </u-animate>

                        </v-timeline-item>
                    </v-timeline>
                </u-animate-container>
            </v-col>
        </v-container>
    </fragment>
</template>
<style scoped lang="scss">
@import "./level-member-style";
</style>
<script>

import imgAPI from "~/static/images/imgAPI";

export default {
    name: 'level-member',
    props: ['videofile'],
    data() {
        return {
            imgAPI: imgAPI,
            memberData: [
                {
                    avatar: imgAPI.members[0],
                    name: "เจริญรุ่งเรือง กิ่งแก้ว",
                    position: [
                        "รองประธานผู้ช่วยฝ่ายบริหาร FIN",
                        "ผู้อำนวยการภาคอวุโส AIA",
                        // "กรรมการฝ่ายประกันภัย ASC",
                    ],
                    level: 8,
                    rating: 95,
                    exp: '34',
                },
                {
                    avatar: imgAPI.members[1],
                    name: "วรัญญา เศรษฐสิงห์",
                    position: ["นายหน้าประกันภัย และผู้จัดการขยายงาน"],
                    rating: 95,
                    exp: "over 10",
                    level: 3
                },
                {
                    avatar: imgAPI.members[2],
                    name: "วราภรณ์ พุฒแก้ว",
                    position: ["ผู้จัดดการสาขา"],
                    rating: 3,
                    level: 3,
                    exp: '4',
                },
                {
                    avatar: imgAPI.members[3],
                    name: "ณัฐพล วงษ์รัศมี",
                    position: ["Software Engineer"],
                    rating: 95,
                    exp: '2',
                    level: 1,

                },
            ],
        }
    }
}
</script>
  