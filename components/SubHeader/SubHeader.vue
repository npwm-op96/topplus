<template>
    <v-parallax height="200" class="backgound-header">
        <!-- <v-sheet width="100%" class=" pa-12 pl-0" color="primary lighten-3"> -->
        <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
                <h1 class="text-h4 font-weight-thin mb-4">
                    <h4 class="text-center white--text">{{ data.title }}</h4>
                </h1>
                <h4 class="subheading">
                    {{ data.desc }}
                </h4>
            </v-col>
        </v-row>
        <!-- {{data}} -->
        <!-- </v-sheet> -->
    </v-parallax>
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