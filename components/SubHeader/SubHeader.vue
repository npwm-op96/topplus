<template>
    <v-img  height="220" srcset :src="imgAPI.background[0]" class="backgound-header">
        <!-- <v-sheet width="100%" class=" pa-12 pl-0" color="primary lighten-3"> -->
        <v-row align="center" class="pt-10" justify="center">
            <v-col class="text-center " cols="12">
                    <h1 class="text-h4 font-weight-thin mb-4">
                        <h4 class="text-center ">{{ data.title }}</h4>
                    </h1>
                    <h4 class="subheading">
                        {{ data.desc }}
                    </h4>
            </v-col>
        </v-row>
        <!-- {{this}} -->

        <!-- {{data}} -->
        <!-- </v-sheet> -->
    </v-img>
</template>
<script>
import imgAPI from "~/static/images/imgAPI";

export default {
    props: {
        data: {
            type: Object
        }
    },
    data() {
        return {
            imgAPI: imgAPI
        }
    },
    created() {

    },
}
</script>