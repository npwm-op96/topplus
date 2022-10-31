<template>
  <fragment>
    <scrollactive v-if="isDesktop" :offset="navOffset" active-class="active" tag="div">
      <v-menu :open-on-hover="hover" :position-x="0" max-height="480" offset-y content-class="mega-menu-root"
        min-width="100%" nudge-left nudge-width>
        <template #activator="{ attrs, on }">
          <span class="button-item" v-bind="attrs" v-on="on">
            <v-btn text>
              <!-- {{ $t('common.header_sample_page') }} -->
              ซื้อประกัน
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </span>
        </template>
        <div class="mega-menu rounded-menu">
          <v-container class="max-md">
            <v-row>
              <v-col v-for="(insurance, index) in insurData" :key="index" cols="3">
                <!-- {{insurData}} -->
                <v-list>
                  <v-subheader class="title-mega">{{ insurance.name }}</v-subheader>
                  <v-card to='#' :color="`#${insurance.color}`">
                    <v-img contain :src="insurance.img" alt="thumbnail" class="thumb-menu-insur" />
                  </v-card>
                  <!-- <v-list-item-group>
                    <v-list-item v-for="(item, index) in subitem.child" :key="index" :href="item.link"
                      :class="{ current: curURL === (curOrigin+langPath+item.link)}">
                      <v-list-item-content>
                        <v-list-item-title class="menu-list" v-text="" />
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group> -->
                </v-list>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-menu>
      <v-btn v-if="singleNav" v-for="(item, index) in menuPrimary" :key="index" :href="item.link"
        class="anchor-link scrollactive-item "  text @click="setOffset(item.offset)">
        {{ $t('nav.header_'+item.name) }}
      </v-btn>
      <v-btn  v-if="!singleNav" v-for="(item, index) in menuPrimary" :key="index" :href="'/' + item.link" text>
        {{ $t('nav.header_'+item.name) }}
      </v-btn>
      <v-menu :open-on-hover="hover" :position-x="0" max-height="480" offset-y content-class="mega-menu-root"
        min-width="100%" nudge-left nudge-width>
        <template #activator="{ attrs, on }">
          <span class="button-item" v-bind="attrs" v-on="on">
            <v-btn text>
              {{ $t('common.header_sample_page') }}
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </span>
        </template>
        <div class="mega-menu rounded-menu">
          <v-container class="max-md">
            <v-row>
              <v-col v-for="(subitem, index) in menuSecondary" :key="index" sm="3">
                <v-list>
                  <v-subheader class="title-mega">{{ subitem.name }}</v-subheader>
                  <img :src="subitem.thumb" alt="thumbnail" class="thumb-menu" />
                  <v-list-item-group>
                    <v-list-item v-for="(item, index) in subitem.child" :key="index" :href="item.link"
                      :class="{ current: curURL === (curOrigin+langPath+item.link)}">
                      <v-list-item-content>
                        <v-list-item-title class="menu-list" v-text="$t('common.header_'+item.name)" />
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-menu>
    </scrollactive>
  </fragment>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import brands from '~/static/api/brands.js'
export default {
  data() {
    return {
      navOffset: 20,
      hover: false,
      curURL: '',
      curOrigin: '',
      langPath: '',
      insurData: brands

    }
  },
  methods: {
    setOffset: function (offset) {
      this.navOffset = offset
    }
  },
  mounted() {
    this.curURL = window.location.href
    this.curOrigin = window.location.origin
    this.langPath = '/' + this.$i18n.locale
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  },
  props: {
    menuPrimary: {
      type: Array,
      required: true
    },
    menuSecondary: {
      type: Array,
      required: true
    },
    singleNav: {
      type: Boolean,
      default: false
    }
  }
}
</script>
