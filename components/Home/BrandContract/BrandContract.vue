<template>
  <fragment>
    <div class="root">
      <v-container :class="{ 'fixed-width': mdUp }">
        <div class="pa-3">
          <h4 class="use-text-title text-capitalize">
            {{ $t('brands.brand_title') }}
          </h4>
          <p class="use-text-subtitle2">{{$t('brands.brand_detail')}}</p>
        </div>
        <v-btn  text class="view-all">
          {{ $t("common.btn_seeall") }}
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
        <u-animate-container>
          <v-row>
            <v-col
              v-for="(item, index) in brandData"
              :key="index"
              cols="12"
              md="6"
              class="px-3"
            >
              <u-animate
                :offset="-50"
                :delay="(0.2 * index) + 's'"
                duration="0.4s"
                name="fadeInUpShort"
              >
                <div>
                  <AddressCard
                    :img="item.img"
                    :name="item.name"
                    :phone="item.phone"
                    :email="item.email"
                    :address="item.address"
                    :link="link.medical.contactMap"
                  />
                </div>
              </u-animate>
            </v-col>
          </v-row>
        </u-animate-container>
      </v-container>
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
@import './brandcontract-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'
import brands from '~/static/api/brands.js'

import AddressCard from '../../Cards/AddressCard'

export default {
  components: {
    AddressCard
  },
  data() {
    return {
      link: link,
      brandData: brands
    }
  },
  computed: {
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    }
  },
  created() {
    this.getBrands()
  },
  methods:{
    async getBrands(){
      this.brandData = brands

    }
  }
}
</script>
