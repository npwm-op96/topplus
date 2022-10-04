<template>
  <v-card class="profile">
    <div class="person-block">
      <v-avatar class="photo" width="80" height="80">
        <v-img   :src="avatar" :alt="name" />
      </v-avatar>
      <div class="name-card">
        <h4>{{ name }}</h4>
        <!-- {{position}} -->
        <ul v-for="(item, index) in position" :key="index">
          <!-- <li > -->
            <v-list class="pb-0"> {{ item }}</v-list>
          <!-- </li> -->
        </ul>
      </div>
    </div>
    <hr class="divider" />
    <div class="action">
      <div class="property">
        <span> <i class="ion-thumbsup"></i>&nbsp; {{ rating }}%</span>
        <span><i class="ion-briefcase"></i>&nbsp; {{ exp }} Years</span>
      </div>
      <v-btn color="success" class="button">
        <span><i color="white" class="ion-briefcase"></i>&nbsp; ติดต่อ</span>
      </v-btn>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import "./profile-card2.scss";
</style>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: Array,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    exp: {
      type: String,
      required: true,
    },
  },
};
</script>
