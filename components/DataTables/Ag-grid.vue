<template>
    <div class="flex h-full">
        <!-- {{columnDefs}} -->
        <v-col sm="8" lg="4">
            <v-text-field id="filter-text-box" v-model="seachText" outlined label="ค้นหาข้อมุล"
                placeholder="ค้นหาข้อมุล" @input="onFilterTextBoxChanged()" prepend-inner-icon="mdi-magnify-expand">
            </v-text-field>
        </v-col>
        <ag-grid-vue style="width: 100%; height: 600px" :class="themetable " :columnDefs="columnDefs"
            :pagination="options.pagination" @grid-ready="onGridReady" :paginationPageSize="options.paginationPageSize"
            :rowData="rowData"  :sortingOrder="sortingOrder" :defaultColDef="defaultColDef"
>
        </ag-grid-vue>
    </div>
</template>

<script>
import 'ag-grid-community/styles/ag-theme-material.css'; 
const replaceAccents = function replaceAccents(value) {
  return value
    .replace(new RegExp("[àáâãäå]", "g"), "a")
    .replace(new RegExp("æ", "g"), "ae")
    .replace(new RegExp("ç", "g"), "c")
    .replace(new RegExp("[èéêë]", "g"), "e")
    .replace(new RegExp("[ìíîï]", "g"), "i")
    .replace(new RegExp("ñ", "g"), "n")
    .replace(new RegExp("[òóôõøö]", "g"), "o")
    .replace(new RegExp("œ", "g"), "oe")
    .replace(new RegExp("[ùúûü]", "g"), "u")
    .replace(new RegExp("[ýÿ]", "g"), "y")
    .replace(new RegExp("\\W", "g"), "");
};

const filterParams = {
  textFormatter: replaceAccents,
};

export default {
  components: {
    name: "datables-ag",
  },
  props: {
    columnDefs: {
      type: Array,
      // default: []
    },
    rowData: {
      type: Array,
      // default: []
    },
    options: {
      String: Object,
    },
  },
  data() {
    return {
      gridApi: null,
      columnApi: null,
      seachText: "",
      columnApi: null,
      sortingOrder: null,
      defaultColDef: {
        sortable: true,
        // flex: 1,
        // editable: true,
        // minWidth: 200,
        resizable: true,
        // floatingFilter: true,
      },
      search: {
        headerName: "Results",
        field: "medals",
        getQuickFilterText: (params) => {
          return getMedalString(params.value);
        },
      },
    };
  },
  computed: {
    themetable() {
      if (process.client) {
        console.log(localStorage.getItem("D4UDarkMode"));
        return !localStorage.getItem("D4UDarkMode")
          ? "ag-theme-material-dark"
          : "ag-theme-material";
      }
    },

    //   },: {
    //     isMobile() {
    //       const xsDown = this.$store.state.breakpoints.xsDown
    //       return xsDown.indexOf(this.$mq) > -1
    //     }
    //     themetable:function(newval,oldvalue) {
    //       // getter
    //         if (process.client) {
    //           let darkMode = localStorage.getItem("D4UDarkMode");

    //           return !darkMode ? "ag-theme-alpine-dark" : "ag-theme-alpine";
    //         }
    // themetable() {
    //   let darkMode = false;
    //   if (process.client) {
    //     //   if (typeof Storage !== "undefined") {
    //     // eslint-disable-line
    //     darkMode = localStorage.getItem("D4UDarkMode");
    //     console.log("themetable", darkMode);
    //   }
    //   //   }
    //   // const dark = localStorage.getItem('D4UDarkMode')
    //   return darkMode ? "ag-theme-alpine-dark" : "ag-theme-alpine";
    // },
  },
  created() {
    this.$props.columnDefs.push({ search: this.search });
    this.sortingOrder = ['desc', 'asc', null];

  },
  beforeMount() {
    // this.columnDefs = [
    //     { headerName: "Make", field: "make" },
    //     { headerName: "Model", field: "model" },
    //     { headerName: "Price", field: "price" }
    // ];
    // this.rowData = [
    //     { make: "Toyota", model: "Celica", price: 35000 },
    //     { make: "Ford", model: "Mondeo", price: 32000 },
    //     { make: "Porsche", model: "Boxter", price: 72000 }
    // ];
  },
  methods: {
    onFilterTextBoxChanged() {
      this.gridApi.setQuickFilter(this.seachText);
    },
    onPrintQuickFilterTexts() {
      this.gridApi.forEachNode(function(rowNode, index) {
        console.log(
          "Row " +
            index +
            " quick filter text is " +
            rowNode.quickFilterAggregateText
        );
      });
    },
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    },
  },
};
</script>
