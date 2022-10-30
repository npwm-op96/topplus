<template>
    <div class="main-wrap">
        <main-header :header="'Academy'" :dataMenu="dataMenu" />
        <!-- <v-icon>mdi-arrow-left-circle</v-icon> -->
        <div class="container-general container-front">

                <v-container>
                    <v-row>
                        <v-card>

                        <v-col cols="12">

                            ลงทะเบียน
                            <template>
                                <v-form ref="form" v-model="valid" lazy-validation>
                                    <v-col cols="8">
                                        <v-row>
                                            <v-col cols="12" lg="6">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules"
                                                    label="ชื่อ" required>
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" lg="6">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules"
                                                    label="นามสกุล" required>
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" lg="6">

                                                <v-text-field v-model="email" :rules="emailRules" label="อีเมล์"
                                                    required>
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" lg="6">
                                                <v-select v-model="select" :items="items"
                                                    :rules="[v => !!v || 'Item is required']" label="Item" required>
                                                </v-select>
                                            </v-col>
                                            <!-- <v-col cols="12" lg="6">
                                            <v-checkbox v-model="checkbox"
                                                :rules="[v => !!v || 'You must agree to continue!']"
                                                label="Do you agree?" required></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" lg="6">
                                            <v-checkbox v-model="checkbox"
                                                :rules="[v => !!v || 'You must agree to continue!']"
                                                label="Do you agree?" required></v-checkbox>
                                        </v-col> -->
                                            <!-- <v-col cols="12" lg="2">
                                            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                                                Validate
                                            </v-btn>
                                        </v-col>
                                        <v-col cols="12" lg="2">

                                            <v-btn color="error" class="mr-4" @click="reset">
                                                Reset Form
                                            </v-btn>
                                        </v-col>
                                        <v-col cols="12" lg="2">
                                            <v-btn color="warning" @click="resetValidation">
                                                Reset Validation
                                            </v-btn>
                                        </v-col> -->
                                            <v-col cols="12" lg="2">
                                                <v-btn color="primary" @click="resetValidation">
                                                    ลงทะเบียน
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-form>
                            </template>

                        </v-col>
                    </v-card>

                    </v-row>
                </v-container>
        </div>
        <div id="footer">
            <!-- <main-footer /> -->
        </div>
    </div>
</template>

<style lang="scss">
@import "~/assets/pages";
// @import './course-styles.scss';
</style>
<script>
import brand from "~/static/text/brand";

import MenuHeader from "~/components/Header/MenuHeader";
import Sidebar from "~/components/Blog/Sidebar";
import Headline from "~/components/Course/Headline";
import Footer from "~/components/Footer";
import menu from '~/components/Header/data/course'
import imgAPI from "~/static/images/imgAPI";


export default {
    components: {
        "main-header": MenuHeader,
        "main-footer": Footer,
        Headline,
        Sidebar,
        // PostCard,
        // Calendar,
        // 'event-course': Events
    },
    data() {
        return {
            dataMenu: menu,
            imgAPI: imgAPI,
            hasSaved: false,
            isEditing: null,
            model: null,
            states: [
                { name: 'Florida', abbr: 'FL', id: 1 },
                { name: 'Georgia', abbr: 'GA', id: 2 },
                { name: 'Nebraska', abbr: 'NE', id: 3 },
                { name: 'California', abbr: 'CA', id: 4 },
                { name: 'New York', abbr: 'NY', id: 5 },
            ],
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            checkbox: false,
        }
    },
    methods: {
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    }
}

</script>