<template>
  <v-card class="course-card">
    <figure>
      <img contain :src="data.img" alt="img">
    </figure>
    <v-card-title class="logo-pre">
      <v-avatar color="">
        <v-img contain
          :src="data.sponser"
          alt="alt" />
      </v-avatar>
    </v-card-title>
    <v-card-title class="time_course">
      <v-chip class="ma-2" color="light">
        <label >เวลาเข้าอบรม {{data.time}} {{data.unit}}</label> 
      </v-chip>
    </v-card-title>
    <v-card-subtitle class="date_couse">
      {{data.startdate}}-{{data.enddate}}
      <!-- 1,000 miles of wonder -->
    </v-card-subtitle >
    <div class="text">
      <h6>{{ data.title }}</h6>
      <p>{{ data.desc }}</p>
    </div>

    <v-btn color="success" class="button">
      1,000 บาท
      <!-- {{$t('common.btn_seedetail')}} -->
      <!-- {{ data.button }} -->
    </v-btn>

  </v-card>
</template>

<style lang="scss" scoped>
@import './course-card.scss';
</style>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
  }
}
</script>
