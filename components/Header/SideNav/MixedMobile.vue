<template>
  <fragment>
    <v-list dense>
      <v-menu :open-on-hover="hover" :position-x="0" :position-y="50" max-height="480" offset-y content-class="mega-menu-root"
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
          <v-card>
            <v-container class="max-md">
              <v-row>
                <v-col v-for="(insurance, index) in insurData" :key="index" cols="3" md="2">
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
          </v-card>
        </div>
      </v-menu>
      <v-list-item v-for="(item, index) in menuPrimary" :key="index" :href="singleNav ? item.link : '/' + item.link"
        :class="{ current: curURL === (curOrigin+langPath+item.link)}" link>
        <v-list-item-content>
          <v-list-item-title class="menu-list">
            {{ $t('nav.header_'+item.name) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group class="group-child">
        <template #activator>
          <v-list-item class="has-child">
            <v-list-item-title class="menu-list">
              {{ $t('common.header_sample_page') }}
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list v-for="(subitem, index) in menuSecondary" :key="index">
          <v-subheader class="title-mega">{{ subitem.name }}</v-subheader>
          <v-list-item-group>
            <v-list-item v-for="(item, index) in subitem.child" :key="index" :href="item.link"
              :class="{ current: curURL === (curOrigin+langPath+item.link)}">
              <v-list-item-content>
                <v-list-item-title class="menu-list" v-text="$t('common.header_'+item.name)" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-list-group>
    </v-list>
    <v-divider />
    <v-list dense>
      <v-list-item v-for="(item, index) in ['login', 'register']" :key="index" :href="link.medical[item]"
        :class="{ current: curURL === (curOrigin+langPath+item)}" link>
        <v-list-item-content>
          <v-list-item-title class="menu-list">{{ $t('common.header_'+item) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </fragment>
</template>

<style scoped lang="scss">
@import '../sidenav-style';
</style>

<script>
import link from '~/static/text/link'
import brands from '~/static/api/brands.js'


export default {
  data() {
    return {
      link: link,
      isOpen: false,
      hover: false,
      curURL: '',
      curOrigin: '',
      langPath: '',
      insurData: brands

    }
  },
  mounted() {
    this.curURL = window.location.href
    this.curOrigin = window.location.origin
    this.langPath = '/' + this.$i18n.locale
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
