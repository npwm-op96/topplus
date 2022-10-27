<template>
  <v-snackbar :timeout="-1" v-model="snackbarPdpa" class="notification">
    <div class="action col-sm-12">
      {{ $t('common.notif_msg') }}
    </div>
    <v-btn color="primary" class="button  " @click="acceptDPDPA()">
      {{ $t('common.accept') }}
    </v-btn>
    <v-btn outlined color="primary" class="button">
      {{ $t('รายละเอียด') }}
    </v-btn>
  </v-snackbar>
</template>

<style lang="scss" scoped>
@import './notification-style.scss';
</style>

<script>
export default {
  data() {
    return {
      snackbarPdpa: true
    }
  },
  created() {
    this.checkPDPA()
  },
  methods: {
    acceptDPDPA() {
      document.cookie = "user=FNG21-17089;"
      localStorage.setItem('DPDA-accep_D4U2022', true)

      this.snackbarPdpa = false
    },
    checkPDPA() {
      if (process.client) {
        if (localStorage.getItem('DPDA-accep_D4U2022') == null) {
          console.log('PDPA ', localStorage.getItem('DPDA-accep_D4U2022'))
          this.snackbarPdpa = true
        }
        else {
          this.snackbarPdpa = false
        }
      }
    }
  }
}
</script>
