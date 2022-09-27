<template>
  <fragment>
    <div class="root">
      <v-container :class="{ 'fixed-width': mdUp }">
        <div class="pa-3">
          <h4 class="use-text-title text-capitalize">
            {{ $t('medical.clinic_title') }}
          </h4>
          <p class="use-text-subtitle2">Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.</p>
        </div>
        <u-animate-container>
          <v-row>
            <v-col
              v-for="(item, index) in clinicData"
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
@import './clinics-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'
import AddressCard from '../../Cards/AddressCard'

export default {
  components: {
    AddressCard
  },
  data() {
    return {
      link: link,
      clinicData: [
        {
          img: imgAPI.medical[37],
          name: 'Central Clinic',
          phone: '+123 456 78 91',
          email: 'hello@awrora.com',
          address: 'Lorem ipsum street no.14 Block A'
        },
        {
          img: imgAPI.medical[38],
          name: 'Dental Clinic',
          phone: '+123 456 78 91',
          email: 'hello@awrora.com',
          address: 'Lorem ipsum street Block C - Vestibullum Building'
        },
        {
          img: imgAPI.medical[39],
          name: 'Mother and Baby Care',
          phone: '+123 456 78 91',
          email: 'hello@awrora.com',
          address: 'Lorem ipsum street no.14 Block A'
        },
        {
          img: imgAPI.medical[40],
          name: 'Orthopedic Clinic',
          phone: '+123 456 78 91',
          email: 'hello@awrora.com',
          address: 'Lorem ipsum street Block C - Vestibullum Building'
        },
        {
          img: imgAPI.medical[41],
          name: 'Mother and Baby Care',
          phone: '+123 456 78 91',
          email: 'hello@awrora.com',
          address: 'Lorem ipsum street no.14 Block A'
        },
        {
          img: imgAPI.medical[42],
          name: 'Orthopedic Clinic',
          phone: '+123 456 78 91',
          email: 'hello@awrora.com',
          address: 'Lorem ipsum street Block C - Vestibullum Building'
        }
      ]
    }
  },
  computed: {
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    }
  }
}
</script>
