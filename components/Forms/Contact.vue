<template>
  <div class="page-wrap">
    <v-snackbar :timeout="4000" top right v-model="snackbar" class="notification">
      <div class="action">
        Message Sent
      </div>
      <v-btn text icon @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-container class="inner-wrap max-md">
      <div class="full-form-wrap">
        <div class="text-center">
          <h3 class="use-text-title use-text-primary pb-3 text-center">
            <!-- {{ $t('common.contact_title2') }} -->
          </h3>
          <p class="desc use-text-subtitle2 text-center">
            <!-- {{ $t('common.contact_subtitle') }} -->
          </p>
        </div>
        <!-- {{form}} -->
        <v-divider></v-divider>
        <br>
        ข้อมูลการติดต่อ
        <div class="form">
          <v-form ref="form" v-model="valid">
            <v-row class="spacing6">
              <v-col cols="12" sm="6" class="px-6">
                <v-select @change="chengeGender($event)" v-model="form.gender" :items="gender" label="เพศ" ></v-select>
                <!-- <v-text-field v-model="form.gender" :label="'เพศ ?'" color="white" /> -->
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="form.id_card" :label="'บัตรประจำตัวของคุณ ?'" color="white" />
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="form.fname" :rules="nameRules" :label="'ชื่อ'" color="white" required />
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="form.lname" :label="'นามสกุล'" color="white" required />
              </v-col>

              <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="form.tel" :label="'เบอร์โทร'" color="white" required />
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="form.email" :rules="emailRules" :label="'อีเมล'" color="white" required />
              </v-col>
              <!-- <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="company" :label="$t('common.form_company')" color="white" />
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="company" :label="$t('common.form_company')" color="white" />
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="company" :label="$t('common.form_company')" color="white" />
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="company" :label="$t('common.form_company')" color="white" />
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="company" :label="$t('common.form_company')" color="white" />
              </v-col>
              <v-col cols="12" class="px-6">
                <v-textarea v-model="message" rows="6" color="white" :label="$t('common.form_message')" />
              </v-col> -->
            </v-row>
            <div class="btn-area">
              <div class="form-control-label">
                <v-checkbox v-model="checkbox" color="primary" :rules="[v => !!v || 'You must agree to continue!']"
                  :label="$t('common.form_terms')" required />
                <span>
                  <a href="#" class="link">
                    {{ $t('common.form_privacy') }}
                  </a>
                </span>
              </div>
              <v-btn :block="isMobile" color="primary" @click="validate" large>
                {{ $t('common.form_send') }}
              </v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
</style>

<script>
import { get } from 'http'
import logo from '~/static/images/medical-logo.svg'
import brand from '~/static/text/brand'
import link from '~/static/text/link'

export default {
  data() {
    return {
      gender: [
        {
          value: 'M',
          text: 'ชาย'
        },
        {
          value: 'F',
          text: 'หญิง'
        }
      ],
      valid: true,
      snackbar: false,
      formcourse: {},
      name: '',
      nameRules: [v => !!v || 'กรอกข้อมูลให้ถูกต้อง'],
      email: '',
      emailRules: [
        v => !!v || 'กรุณากรอกอีเมล',
        v => /.+@.+\..+/.test(v) || 'อีเมล์ไม่ถูกต้อง'
      ],
      phone: '',
      company: '',
      message: '',
      checkbox: false,
      logo: logo,
      brand: brand,
      routeLink: link

    }
  },
  props: {
    form: {
      type: Object,
      require: true
    }
  },
  watch: {

  },
  created() {
    this.genarateData()
  },
  mounted() {
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        console.log('form', this.form)
      }
    },
    chengeGender(e) {
      console.log(e)

    },
    async genarateData() {
      await this.getDate()
      await this.getExpireDate()
      await this.getNO()
    },
    formchange(e) {
      console.log('e', e)
    },
    getDate() {
      this.form.startdate = this.$moment(new Date()).add(543, 'Y').format("DD/MM/YYYY")
    },
    getExpireDate() {
      this.form.enddate = this.$moment(this.form.startdate).add(this.form.year_card).format("DD/MM/YYYY")
    },
    getNO() {
      this.form.no = Math.floor(Math.random() * 9000000000) + 1000000000
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
