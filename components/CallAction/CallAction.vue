<template>
  <v-container>
    <u-animate-container>
      <div class="root">
        <u-animate
          :offset="40"
          name="fadeInUpShort"
          delay="0.3s"
          duration="0.5s"
        >
          <v-card class="paper">
            <v-row align="center">
              <v-col cols="12" md="8" class="px-sm-6">
                <h4 class="use-text-title2 pb-2">
                  {{ $t('medical.cta_title') }}
                </h4>
                <p>
                  {{ $t('medical.cta_subtitle') }}
                </p>
              </v-col>
              <v-col cols="12" md="4" class="px-sm-6">
                <div class="d-flex align-center justify-center">
                  <v-btn
                    :href="link.medical.contact"
                    block
                    large
                    color="white"
                    class="button"
                  >
                    {{ $t('medical.cta_btn') }}
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </u-animate>
      </div>
    </u-animate-container>
  </v-container>
</template>

<style lang="scss" scoped>
@import './action-style.scss';
</style>

<script>
import link from '~/static/text/link'

export default {
  data() {
    return {
      link: link
    }
  }
}
</script>
