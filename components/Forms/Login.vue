<template>
  <AuthFrame :title="$t('common.login_subtitle')" :subtitle="$t('common.auth_desc')" type="login">
    <div>
      <div class="head">
        <h3 :class="isMobile ? 'use-text-title use-text-primary' : 'use-text-subtitle'">
          {{ $t('common.login_title') }}
        </h3>
      </div>
      <social-auth />
      <div class="separator">
        <p>
          {{ $t('common.login_or') }}
        </p>
      </div>
      <v-form ref="form" v-model="valid">
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field v-model="username" :label="'รหัสสมาชิก'" :rules="requiredRules" color="secondary"
              name="username" required />
          </v-col>
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field v-model="password" :label="$t('common.login_password')" :rules="requiredRules"
              color="secondary" type="password" name="email" required />
          </v-col>
        </v-row>
        <div class="form-helper">
          <div class="form-control-label">
            <v-checkbox v-model="checkbox" :label="$t('common.login_remember')" color="secondary" />
          </div>
          <v-btn small class="button-link" text href="#">
            {{ $t('common.login_forgot') }}
          </v-btn>
        </div>
        <div class="btn-area">
          <v-btn large block color="primary" @click="handleSubmit">
            {{ $t('common.continue') }}
          </v-btn>
        </div>
      </v-form>
    </div>
  </AuthFrame>
</template>

<style lang="scss" scoped>
@import './form-style';
</style>

<script>
import SocialAuth from './SocialAuth'
import AuthFrame from './AuthFrame'


// const {SINGIN} = Authorize()

export default {
  components: {
    SocialAuth,
    AuthFrame
  },
  data() {
    return {
      valid: true,
      username: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      requiredRules: [v => !!v || 'This field is required'],
      checkbox: false
    }
  },
  created() {
    this.handleLogin()
  },
  methods: {
    async handleLogin() {
      console.log('loggedIn',this.$auth.loggedIn)
      const loggedIn = this.$auth.loggedIn
      if (loggedIn) {
        const user = this.$auth.user
        this.$router.push({ name: 'systems/dashboard', params: { data: user } })
      }
      return
    },
    async handleSubmit() {
      if (this.$refs.form.validate()) {
        // console.log('data submited',)
        const req = {
          username: this.username,
          password: this.password
        }
        const res = await this.$auth.loginWith('local', { data: req })
        if (res) {
         await  this.handleLogin()
         console.log('data submited', res)

        }

      }
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
