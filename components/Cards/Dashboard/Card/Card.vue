<template>
    <v-card class="mx-auto" :color="data.color" dark max-width="400">
        <v-card-title>
            <v-card color="" class="text-icon text--back">
                <v-icon large left>
                {{ data.icon }}
            </v-icon>
            <span class="text-h6 font-weight-light">{{ data.text }}</span>  
            </v-card>
  
        </v-card-title>

        <v-card-text class="text-h4 text-center pt-5  pb-0 font-weight-bold">
            {{ data.desc }}
        </v-card-text>
        <v-card-actions v-if="isDesktop">
            <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                    <v-img class="elevation-6" alt="" :src="data.img">
                    </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>ล่าสุด</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-card-actions>
    </v-card>
</template>
<style type="scss">
.text-icon{
    position: absolute;
    top: -20px;
    left: 12px;
    padding: 10px;
    
}
</style>

<script>
export default {
    data: () => ({
        // data: {
        //     text: '',
        //     img: '',
        //     icon: '',
        //     color:''
        // },
        // data:data ||{}
    }),
    props: {
        data: {
            type: Object
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
        },
        isMobile() {
            const lgUp = this.$store.state.breakpoints.lgUp
            return lgUp.indexOf(this.$mq) > -1
        }
    },
}
</script>