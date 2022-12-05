<template>
    <div class="text-center">
        <v-chip v-if="(status == 'prepare')" class="ma-2">
            ลูกค้าให้ความสนใจ
        </v-chip>

        <v-chip v-else-if="(status == 'quotaionDoc')" class="ma-2" color="primary">
            ส่งใบเสนอให้ลูกค้า
        </v-chip>

        <v-chip v-else-if="(status == 'decide')" class="ma-2" color="secondary">
            รอลูกค้าตัดสินใจเลือกบริษัท
        </v-chip>

        <v-chip v-else-if="(status == 'payment')" class="ma-2" color="red" text-color="white">
            รอการชำระเงิน
        </v-chip>

        <v-chip v-else-if="(status == 'sendto')" class="ma-2" color="green" text-color="white">
            หมอบกรมธรรม์ให้ลูกค้า
        </v-chip>

        <v-chip v-else-if="(status == 'protection')" class="ma-2" color="green" text-color="white">
            คุ้มครอง
        </v-chip>
    </div>
</template>
<script>

export default {
    date: () => {
        status
    },
    beforeMount() {
        this.status = this.params.status
    }
}
</script>