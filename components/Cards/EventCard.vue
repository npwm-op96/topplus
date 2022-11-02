<template>
  <v-card class="facility-card" @click="onPage(data)">
    <figure>
      <img :src="data.img" alt="img" />
    </figure>
    <div class="text">
      <h6>{{ data.title }}</h6>
      <p>{{ data.desc }}</p>
    </div>
    <v-btn color="secondary" class="button"> ดูเพิ่มเติม </v-btn>
  </v-card>
</template>

<style lang="scss" scoped>
@import "./events-card.scss";
</style>

<script>
export default {
  props: {
    // img: {
    //   type: String,
    //   required: true
    // },
    // title: {
    //   type: String,
    //   required: true
    // },
    // desc: {
    //   type: String,
    //   required: true
    // },
    // button: {
    //   type: String,
    //   required: true
    // },
    data: {
      type: Object,
      require: true,
    },
  },
  methods: {
    onPage(data) {
      this.$router.push({ name: "events-detail-event", params:{data:data }});
    },
  },
};
</script>
