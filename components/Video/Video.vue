<template>
    <div class="main-feature">
      <v-dialog
        v-model="dialog"
        max-width="690"
      >
        <v-card class="video-popup">
          <v-card-title class="headline mb-3 d-flex justify-space-between">
            <h4 class="use-text-subtitle">
              {{ $t('medical.banner_title') }}
            </h4>
            <v-btn class="close-btn" icon @click="handleVideoClose()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <div class="text-center" v-if="yt.use">
            
            <youtube
              :video-id="videofile"
              :player-vars="playerVars"
              :width= "640"
              :height="360"
              ref="youtube"
            />
          </div>
        </v-card>
      </v-dialog>
      <v-container class="fixed-width">
        <u-animate-container>
          <v-row :class="[isMobile ? 'column-reverse' : 'row']" class="spacing6">
            <v-col md="8" class="px-6" cols="12">
              <!-- <title-main :text="$t('medical.about_title')" :align="isMobile ? 'center' : 'left'" /> -->
              <p class="pb-2 use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
                <!-- {{ $t('medical.about_subtitle') }} -->
              </p>
              <div class="video">
                <figure>
                  <img :src="'https://www.fininsurance.co.th/wp-content/uploads/2017/01/logo-redcrop.png'" alt="cover" />
                </figure>
                <v-btn icon class="play-btn" @click="handleVideoOpen">
                  <span class="ion-ios-play-outline" />
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </u-animate-container>   
      </v-container>
    </div>
  </template>
  
  <style lang="scss" scoped>
  @import './video-style.scss';
  </style>
  
  <script>
  import youtube from '~/youtube'
  import imgAPI from '~/static/images/imgAPI'
  import Title from '~/components/Title'

  
  export default {
    name:'Video',
    components: {
      'title-main': Title
    },
    props:['videofile'],
    data() {
      return {
        // videoId: videofile,
        player: null,
        loaded: false,
        yt: youtube,
        imgAPI: imgAPI,
        dialog: false,
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
          showinfo: 1,
          mute: 0,
          origin: 'https://localhost:8008'
        }
      }
    },
    mounted() {
      this.loaded = true
    },
    computed: {
      isMobile() {
        const mdDown = this.$store.state.breakpoints.smDown
        return mdDown.indexOf(this.$mq) > -1
      },
      isDesktop() {
        const smUp = this.$store.state.breakpoints.smUp
        return smUp.indexOf(this.$mq) > -1
      }
    },
    methods: {
      handleVideoOpen() {
        if (!this.yt.use) {
          return false
        }
        this.dialog = true
        setTimeout(() => {
          this.player = this.$refs.youtube.player
          this.player.playVideo()
        }, 100)
      },
      handleVideoClose() {
        this.dialog = false
        this.player.pauseVideo()
      }
    }
  }
  </script>
  