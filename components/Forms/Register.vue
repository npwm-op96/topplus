<template>
  <AuthFrame :title="$t('common.register_subtitle')" :subtitle="$t('common.auth_desc')">
    <div>
      <div class="head">
        <h3 :class="isMobile ? 'use-text-title use-text-primary' : 'use-text-subtitle'">
          {{ $t('common.login_create') }}
        </h3>
      </div>
      <social-auth />
      <div class="separator">
        <p>
          {{ $t('common.register_or') }}
        </p>
      </div>
      <v-form ref="form" v-model="valid">
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field v-model="username" :label="'รหัสสมาชิก FIN'" @keyup="checkMember()" :rules="memberRule"
              color="secondary" name="username" required />
            <Dialog :disabled="ismember" :options="options">
              <template v-slot:content>
                <iframe src="https://www.fininsurance.co.th/register?uid=FNG21-17089#" width="100%" height="1000px"
                  frameborder="0"></iframe>
              </template>
            </Dialog>
          </v-col>
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field :disabled="ismember" v-model="email" :label="$t('common.register_email')" :rules="emailRules"
              color="secondary" name="email" required />
          </v-col>
          <v-col cols="12" md="6" class="px-3">
            <v-text-field :disabled="ismember" v-model="password" :label="$t('common.register_password')"
              :rules="requiredRules" color="secondary" type="password" name="email" required />
          </v-col>
          <v-col cols="12" md="6" class="px-3">
            <v-text-field :disabled="ismember" v-model="confirmPassword" :label="$t('common.register_confirm')"
              :rules="passwordRules" color="secondary" type="password" name="confirm" required />
          </v-col>
        </v-row>
        <div class="btn-area flex">
          <div class="form-helper">
            <div class="form-control-label">
              <v-checkbox :disabled="ismember" v-model="checkbox" :label="$t('common.form_terms')"
                :rules="requiredRules" color="secondary" required />
              <span>
                <a href="#" class="link">
                  {{ $t('common.form_privacy') }}
                </a>
              </span>
            </div>
          </div>
          <v-btn :disabled="ismember" :block="isTablet || isMobile" large color="primary" @click="handleSubmit">
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
import Dialog from '~/components/Dialog'


export default {
  components: {
    SocialAuth,
    AuthFrame,
    Dialog
  },
  data() {
    return {
      loginMember: [{
        'username': 'FNG21-17089',
        'active': true
      }],
      options: { title: 'สมัครสามาชิกกับ FIN ', button: 'สมัครสามาชิกกับ FIN' },

      valid: true,
      ismember: false,
      email: '',
      username: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      confirmPassword: '',
      memberRule: [v => !!v || 'กรุณากรอกรหัสมาชิก', v=>!this.checkMember(v) || 'รหัสที่คุณกรอกยังไม่ได้ลงทะเบียนกับทาง FIN'
      ],
      requiredRules: [v => !!v || 'This field is required'],

      passwordRules: [
        v => !!v || 'This field is required',
        v => v === this.password || 'Passwords do not match'
      ],
      checkbox: false
    }
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        console.log('data submited')
      }
    },
    checkMember() {
      // console.log(this._)
      console.log('before ismember', this.ismember, this.username)

      this.ismember = Boolean(this._.findIndex(this.loginMember, (member) => member.username === this.username))

      console.log('ismember', this.ismember)
      return this.ismember

    }
  },
  computed: {
    isTablet() {
      const mdDown = this.$store.state.breakpoints.mdDown
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdDown.indexOf(this.$mq) > -1 && mdUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
