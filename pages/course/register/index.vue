<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general container-front">
      <v-container class="inner-wrap max-md">
        <v-card class="pt-3 pb-3" color="light-blue  lighten-5">

          <div class="full-form-wrap">
            <v-card color="light-blue lighten-3" max-width="420" class="mx-auto">
              <div cols="12">
                <!-- <v-card color="right"> -->
                <div class="text-center bg-whtie  pb-1">
                  <p class="text-center header_insur text-write pt-2 pb-0 mb-0 ">
                    ใบอนุญาตเป็นนายหน้าประกัน {{ form.type }}
                  </p>
                </div>
                <div class="d-flex">
                  <div class="col-2 ma-0 ">
                    <v-img class="logo_cer" width="40px"
                      :src="'https://www.oic.or.th/sites/default/files/about-logo/about-logo-4.png'"></v-img>
                  </div>
                  <div class="col-8 ma-0 pa-0">
                    <p class="text-center pt-3 type-insur text-write">
                      ประเภท การจัดการประกัน{{ form.type }}
                    </p>
                  </div>
                  <div class="col-2 ma-0 pa-0">
                    <!-- <v-img contain :src="'https://www.oic.or.th/sites/default/files/about-logo/about-logo-4.png'"></v-img> -->
                  </div>
                </div>
                <div class="d-flex text-center text-card">
                  <div class="col-4  text-left">
                    <p>&nbsp</p>
                    <p>&nbsp</p>
                    <p>เลขที่ใบอนุญาต</p>
                    <p>บัตรประชาชน</p>
                    <p>{{ form.startdate }}</p>
                    <p>วันออกใบอนุญาต</p>


                  </div>
                  <div class="col-4  text-left">
                    <p>ชื่อ {{ form.fname }}</p>
                    <p>นามสกุล {{ form.lname }}</p>
                    <p>{{ form.no }}</p>
                    <p>{{ form.id_card }}</p>
                    <p>{{ form.enddate }}</p>
                    <p>วันใบอนุญาตหมดอายุ</p>
                  </div>
                  <div class="col-4">
                    <!-- <v-avatar class="ma-3" size="100px" tile> -->
                      <v-img class="ma-1" max-width="100px"  :src="getGender(form.gender)"></v-img>
                    <!-- </v-avatar> -->
                    <v-chip class="mx-auto" draggable label link pill>{{ form.fname }}</v-chip>
                  </div>

                </div>
                <div class="d-flex">
                  <div>

                  </div>
                </div>

                <!-- </v-card> -->
              </div>
            </v-card>
          </div>
        </v-card>
      </v-container>
      <contact :form="form" />
    </div>
    <main-footer />
  </div>
</template>
  
<style scoped lang="scss">
v-card{
  .theme--dark{
    color: black;
  }
}
.logo_cer {
  position: absolute;
  top: 36px;
}
.header_insur{
  font-size: 14px;
}

.type-insur {
  @include breakpoints-down(sm) {
    font-size: 10px;
  }
  font-size: 13px;
}

.text-card p {
  font-size: 11px;
  margin-bottom: 13px;
  @include breakpoints-down(xs) {
    margin-bottom: 5px;
    font-size: 9px;

    .v-avatar .v-image, .v-avatar .v-responsive__content {
      background-size: 50px !important;
    }
  }
}

.nopadding {
  padding: 0 !important;
  margin: 0 !important;
}

.bg-whtie {
  border-top-left-radius:10px;
  border-top-right-radius:10px;

  background-color: white
}

@import '~/assets/pages';
</style>
  
<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import SiteMap from '~/components/Footer'
import Contact from '~/components/Forms/Contact'

export default {
  components: {
    'main-header': Header,
    'main-footer': SiteMap,
    Contact
  },
  data() {
    return {
      form:
      {
        type: 'ประกันชีวิต',
        prename: 'นาย',
        fname: 'ทดสอบชื่อ',
        lname: 'ทดสอบนามสกุล',
        id_card: '1999999999999',
        no: '1435398764',
        startdate: '27/10/2565',
        enddate: '26/10/2566',
        gender:'',
        year_card:1
      },
      imggender:{
        M:'https://www.eng.chula.ac.th/wp-content/uploads/2016/11/profile-pic-420x600.jpeg',
        F:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4uK1U4rhPOElLUGo9yQRP6n3wqVwVCqioON24BkmxoFYfhMAPzPoJKNzR1wEg_3VnJM&usqp=CAU'
      }
    }    
  },
  created() {
    const data = this.$route.params.data;
    console.log('data', data)
    // if (!data) {
    //   this.$router.push({ name: 'error', })
    // }

  },
  methods: {
    getGender(data){
      return  this.imggender[data]
    }

  },
  head() {
    return {
      title: 'Contact | ' + brand.medical.desc
    }
  }
}
</script>
  