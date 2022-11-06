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
          <p class="desc use-text-subtitle2 ">
            <!-- {{ $t('common.contact_subtitle') }} -->
          </p>
          <ul>
            <li :class="{ disabled: selectmessage == 1 && !checkselect(item.shortCom) }" @change="onselectItem()"
              v-for="(item, index) in $_.orderBy(brands, ['shortCom'], ['asc'])" :key="item.shortCom">
              <!-- {{index+1}} -->
              <input v-model="form.item" :value="item.shortCom" type="checkbox" :id="`item${index + 1}`" />
              <label :for="`item${index + 1}`">
                <img :src="item.img" /></label>
            </li>
          </ul>
          <div>
            <ul>
              <li v-for="(item, index) in form.item" :key="index">

                <v-chip class="ma-2" :color="getNameinsur(item).color=='#FFFFFF'?'success':getNameinsur(item).color" outlined>
                  {{getNameinsur(item).brands}}
                </v-chip>
              </li>
            </ul>
          </div>
          <div>
            <v-chip class="ma-2" color="success" outlined>{{ massageOnselect[selectmessage].text }}</v-chip>
          </div>
        </div>
        <!-- {{form}} -->
        <v-divider></v-divider>
        <br>
        ข้อมูลการติดต่อ
        <div class="form">
          <v-form ref="form" v-model="valid">
            <v-row class="spacing6">
              <v-col cols="12" sm="6" class="px-6">
                <v-select @change="chengeGender($event)" v-model="form.gender" :items="gender" label="เพศ"></v-select>
                <!-- <v-text-field v-model="form.gender" :label="'เพศ ?'" color="white" /> -->
              </v-col>
              <!-- <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="form.id_card" :label="'บัตรประจำตัวของคุณ ?'" color="white" />
              </v-col> -->
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
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="form.lineId" :rules="emailRules" :label="'ไอดี ไลน์'" color="white" />
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
                <!-- <span>
                  <a href="#" class="link">
                    {{ $t('common.form_privacy') }}
                  </a>
                </span> -->
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
@import '../form-style.scss';

ul {
  list-style-type: none;
}

li {
  display: inline-block;
}

input[type="checkbox"][id^="item"] {
  display: none;
}

label {
  border: 1px solid #fff;
  padding: 10px;
  display: block;
  position: relative;
  margin: 10px;
  cursor: pointer;
}

.disabled {
  pointer-events: none; //This makes it not clickable
  opacity: 0.6; //This grays it out to look disabled
}

label:before {
  background-color: white;
  color: white;
  content: " ";
  display: block;
  border-radius: 50%;
  border: 1px solid grey;
  position: absolute;
  top: -5px;
  left: -5px;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 28px;
  transition-duration: 0.4s;
  transform: scale(0);
}

label img {
  height: 50px;
  width: 50px;
  transition-duration: 0.2s;
  transform-origin: 50% 50%;
}

:checked+label {
  border-color: #ddd;
}

:checked+label:before {
  content: "✓";
  background-color: grey;
  transform: scale(1);
}

:checked+label img {
  transform: scale(0.9);
  box-shadow: 0 0 5px #333;
  z-index: -1;
}
</style>


<script>
import logo from '~/static/images/medical-logo.svg'
import brand from '~/static/text/brand'
import link from '~/static/text/link'
import brands from '~/api/brands.js'

export default {
  data() {
    return {
      brands: brands,
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
      selectmessage: 0,
      massageOnselect: [
        {
          text: 'เลือกบริษัทที่ต้องการเปรียบเทียบอย่างน้อย 1-3 บริษัท',
          // mode: 0
        },
        {
          text: 'คุณได้เลือกบริษัทประกันครบแล้ว',
          // mode: 1
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
    getNameinsur(word) {
      console.log('word', word)
      const res = this._.filter(this.brands, (item) => item.shortCom == word)[0]
      console.log('getNameinsur', res)
      
      return {color:`#${res.color}`,brands:res.nameTh}
    },
    checkselect(el) {
      const status = Boolean(this._.findIndex(this.form.item, (item) => item == el))
      console.log('status', status)
      return status

    },
    onselectItem() {
      console.log('item', this.form.item)
      this.selectmessage = this.form.item.length == 3 ? 1 : 0
    },
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
