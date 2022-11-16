import Vue from 'vue'
import { AgGridVue } from 'ag-grid-vue'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';



// Register the required feature modules with the Grid
ModuleRegistry.registerModules([ClientSideRowModelModule]);
Vue.component('ag-grid-vue', AgGridVue)