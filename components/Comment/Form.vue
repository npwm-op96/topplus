<template>
  <div class="form-comment">
    <div class="write">
      <v-avatar v-if="!isMobile" :size="36" class="avatar">
        <img :src="avatar" alt="avatar">
      </v-avatar>
      <v-text-field v-model="commentData.comment" :placeholder="$t('common.blog_write')" solo color="primary"
        single-line />
      <v-btn class="send-btn" color="primary" @click="sendComment()">
        {{ isMobile ? '' : $t('common.form_send') }}
        <v-icon v-if="isMobile">mdi-send</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './comment.scss';
</style>

<script>
import avatarDefault from '~/static/images/avatars/pp_boy4.svg'

export default {
  props: {
    avatar: {
      type: String,
      default: avatarDefault
    }
  },
  data() {
    return {
      commentData: {
        name: 'กิตติ',
        avatar: '/images/avatars/pp_boy4.svg',
        date: '',
        comment:
          ''
      }
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  },
  methods: {
    sendComment() {
      this.commentData.name = 'ทดสอบ'
      this.commentData.date = this.$moment(new Date()).add(543, 'Y').format("DD/MM/YYYY")
      console.log('send Comment', this.commentData)
      this.$emit('comment', this.commentData);

    }
  },
}
</script>
