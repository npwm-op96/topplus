<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general container-front">
      <v-container class="inner-wrap max-md">
      </v-container>
      <contact-sales :data="brands" :form="form" />
    </div>
    <main-footer />
  </div>
</template>
    
<style scoped lang="scss">
@import '~/assets/pages';
</style>
    
<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import SiteMap from '~/components/Footer'
import ContactSales from '~/components/Forms/Sales/Contact-Sales'
import brands from '~/api/brands.js'



export default {
  components: {
    'main-header': Header,
    'main-footer': SiteMap,
    'contact-sales': ContactSales
  },
  data() {
    return {
      brands: brands,
      form:
      {
        type: 'ประกันชีวิต',
        prename: 'นาย',
        fname: 'ทดสอบชื่อ',
        lname: 'ทดสอบนามสกุล',
        item: [],
        id_card: '',
        no: '',
        startdate: '',
        enddate: '',
        gender: '',
        year_card: 1
      },
      imggender: {
        M: 'https://www.eng.chula.ac.th/wp-content/uploads/2016/11/profile-pic-420x600.jpeg',
        F: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4uK1U4rhPOElLUGo9yQRP6n3wqVwVCqioON24BkmxoFYfhMAPzPoJKNzR1wEg_3VnJM&usqp=CAU'
      }
    }
  },
  created() {
    const code = this.$route.params.code;
    // console.log('id', this.brands)
    if (code) {
      this.brands = this._.filter(this.brands, (item) => item.shortCom == code)
      console.log('filter', this.brands[0])
      this.form.item.push(code)
    }
  },
  methods: {
    getGender(data) {
      return this.imggender[data]
    }

  },
  head() {
    return {
      title: 'ติดต่อซื้อ | ' + brand.medical.desc
    }
  }
}
</script>
    