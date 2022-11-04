<template>
    <v-dialog transition="dialog-bottom-transition" max-width="1000" max-height="100%">
        <template v-slot:activator="{ on, attrs }">
            <v-btn large outlined color="primary" class="button mr-xs-3 mr-sm-3"   v-bind="attrs" v-on="on">{{ options.button }}</v-btn>
        </template>
        <template v-slot:default="dialog">
            <v-card>
                <v-toolbar color="primary" dark>{{ options.title }}</v-toolbar>
                <v-card-text>
                    <slot name="content"></slot>
                </v-card-text>
                <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">ปิด</v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>
<script>
export default {
    name: 'dialog-main',
    props: {
        options: {
            type: Object
        },
    },
    data() {
        return {

        }
    },
}
</script>