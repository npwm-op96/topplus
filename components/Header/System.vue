<template>
    <fragment>
        <v-navigation-drawer v-model="openNavMobile" fixed temporary class="mobile-nav">
            <mobile-menu :data-menu="dataMenu" />
        </v-navigation-drawer>
        <v-app-bar v-scroll="handleScroll" :class="{ fixed: fixed }" class="header" fixed dense app height="auto">
            <v-col>
                <div class="header-content">
                    <nav class="nav-menu">
                        <v-btn text icon @click.stop="handleToggleOpen">
                            <v-icon>mdi-menu</v-icon>
                        </v-btn>
                        <div class="logo">
                            <a v-if="!openNavMobile" :href="link.medical.home">
                                <logo  :title="header" type="landscape" />
                            </a>
                        </div>
                        <div class="main-menu" v-if="loaded">
                            <!-- <header-menu :data-menu="dataMenu" v-if="isDesktop" /> -->
                        </div>
                    </nav>
                    <nav>
                        <hidden point="xsDown">
                            <search-field short />
                        </hidden>
                        <v-spacer v-if="isDesktop" class="vertical-divider" />
                        <user-menu />
                        <!-- <setting-menu /> -->
                    </nav>
                </div>

                <hidden point="smUp">
                    <search-field />
                </hidden>

            </v-col>
        </v-app-bar>
    </fragment>
</template>
  
<style lang="scss" scoped>
@import './header-style.scss';
</style>
  
<script>
import link from '~/static/text/link'
import Logo from '../Logo'
import SearchField from './TopNav/SearchField'
import MultiLevel from './TopNav/MultiLevel'
import SystemMobile from './SideNav/SystemMobile'
import Hidden from '../Hidden'
import Settings from './TopNav/Settings.vue'
import UserMenu from './TopNav/UserMenu'

import system from './data/system'

export default {
    components: {
        Logo,
        Hidden,
        'mobile-menu': SystemMobile,
        'header-menu': MultiLevel,
        'setting-menu': Settings,
        SearchField,
        UserMenu
    },
    data() {
        return {
            header: 'ระบบจัดการ',
            dataMenu: system,
            link: link,
            fixed: false,
            loaded: false,
            openNavMobile: null,
            // dataMenu: listmenu
        }
    },
    mounted() {
        this.loaded = true

        this.curURL = window.location.href
        this.curOrigin = window.location.origin
        this.langPath = '/' + this.$i18n.locale
    },
    methods: {
        handleScroll: function () {
            if (window.scrollY > 100) {
                return (this.fixed = true)
            }
            return (this.fixed = false)
        },
        handleToggleOpen: function () {
            this.openNavMobile = !this.openNavMobile
        }
    },
    computed: {
        isTablet() {
            const mdDown = this.$store.state.breakpoints.mdDown
            return mdDown.indexOf(this.$mq) > -1
        },
        isDesktop() {
            const lgUp = this.$store.state.breakpoints.lgUp
            return lgUp.indexOf(this.$mq) > -1
        }
    }
}
</script>
  