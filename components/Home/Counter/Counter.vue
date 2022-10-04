<template>
  <div class="counter-wrap" :class="{ dark: dark }">
    <div id="watched_counter" />
    <v-container>
      <v-row
        align="center"
        justify="center"
        class="root"
      >
        <v-col cols="12" lg="3" sm="4" class="px-6">
          <div class="counter-item">
            <span class="icon ion-ios-people-outline primary--text" />
            <div class="text">
              <h4 v-if="loaded">
                +<span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 5000,
                    options: { duration: 1 }
                  }"
                />
              </h4>
              <h6 class="use-text-subtitle">
                {{ $t('medical.about_doctor') }}
              </h6>
            </div>
          </div>
          <p class="text-center">Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. </p>
        </v-col>
        <v-col cols="12" lg="3" sm="4" class="px-6">
          <div class="counter-item">
            <span class="icon ion-ios-home-outline primary--text" />
            <div class="text">
              <h4 v-if="loaded">
                +<span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 123,
                    options: { duration: 1 }
                  }"
                />
              </h4>
              <h6 class="use-text-subtitle">
                {{ $t('medical.about_clinics') }}
              </h6>
            </div>
          </div>
          <p class="text-center">Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. </p>
        </v-col>
        <v-col cols="12" lg="3" sm="4" class="px-6">
          <div class="counter-item">
            <span class="icon ion-ios-medkit-outline primary--text" />
            <div class="text">
              <h4 v-if="loaded">
                <span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 24,
                    options: { duration: 1 }
                  }"
                />
              </h4>
              <h6 class="use-text-subtitle">
                {{ $t('medical.about_hours') }}
              </h6>
            </div>
          </div>
          <p class="text-center">Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './counter-style';
</style>

<script>
export default {
  data: () => ({
    loaded: false
  }),
  mounted() {
    this.loaded = true
  },
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>
