<template>
  <div>
    <div class="main-wrap curve">
      <main-header :header="header" :dataMenu="dataMenu" />
      <div class="container-general container-front">
        <v-container class="pt-5">
          <div>
            <h3>ลูกค้า</h3>
          </div>
          <datables-ag :columnDefs="columnDefs" :rowData="rowData" :options="options"></datables-ag>
        </v-container>
        <!-- <quotation-modal></quotation-modal> -->

      </div>
    </div>
  </div>
</template>
  
<style scoped lang="scss">
@import "~/assets/pages";
</style>
  
<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import MenuHeader from "~/components/Header";
import menu from "~/components/Header/data/system.js";
import Hidden from "~/components/Hidden";
import Corner from "~/components/Home/Corner";
import Notification from "~/components/Notification";
import brand from "~/static/text/brand";
import datablesAg from "~/components/DataTables";
import quotation from "~/api/quotation.js";
import DetailQutationVue from "~/components/Forms/quotation/DetailQutation.vue";
import StatusVue from "~/components/Status/Status.vue";

export default {
  // middleware: 'auth',
  components: {
    "main-header": MenuHeader,
    "quotation-modal": DetailQutationVue,
    Hidden,
    Corner,
    Notification,
    "main-footer": Footer,
    datablesAg,
    StatusVue
    //   "level-member":ƒ levelmember
  },
  setup(props) { },
  data() {
    return {
      dataMenu: menu,
      header: "ระบบจัดการ",
      level: 0,
      _quotation: null,
      columnDefs: [
        { headerName: "เลขที่", field: "id" },
        {
          headerName: "ชื่อลูกค้า ", field: "name", valueGetter: params => {
            return params?.data.customers[0].name;
          }
        },
        {
          headerName: "สถานะ ", field: "status",
          cellRendererSelector: params => {
            console.log(params.data)
            return {
              component: 'StatusVue',
              params: { status: params.data.status }
            };
          },
        },
        {
          headerName: "เบอร์", field: "tel", valueGetter: params => {
            return params?.data.customers[0].tel;
          }
        },
        {
          headerName: "วันที่ลงทะเบียน", field: "date", cellRenderer: params => this.dateThai(params.data.dateTime)
          , sort: "desc"
        },
        {
          headerName: 'อัพเดท', field: 'fieldName',
          cellRendererSelector: params => {
            console.log(params.data)
            return {
              component: 'quotation-modal',
              params: { data: params.data }
            };
          },
        }
      ],
      rowData: null,
      options: {
        pagination: true,
        paginationPageSize: "20",
      },
    };
  },
  async created() {
    // await this.setQuotation();
    await this.getQuotation();

    this.$store.commit("ui/setheader", "system");
    //
    console.log(" this.$store.state.ui.header ", this.$store.state.ui.header);
  },
  methods: {
    async setQuotation() {
      console.log("setQuotation", quotation);
      await this.$store.dispatch('quotation/getQuotation')
      // this._quotation = await this.$store.state.quotation.quotation
    },
    async getQuotation() {
      this._quotation = await this.$store.dispatch('quotation/getQuotation')
      var quotation = await this._quotation;
      // console.log("getQuotation", this._quotation);
      // const quotation = this._.filter(
      //   this._quotation,
      //   (item) => item.level == this.level
      // );

      // console.log(quotation);
      this.rowData = quotation;
    },
    dateThai(date) {
      return this.$moment(date).add(543, 'year').format('LLLL')

    },
  },
  head() {
    return {
      title: "System | สมาชิก",
    };
  },
};
</script>
<style type="css">

</style>
