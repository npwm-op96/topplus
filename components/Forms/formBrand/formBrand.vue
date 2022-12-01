<template>
    <div>
        <div class="carousel-handle">
            <small>ประกันขายดี</small>
            <div class="carousel-wrap">
                <slick ref="slick" :options="slickOptions" @afterChange="handleAfterChange">
                    <div class="item">
                        <div class="carousel-prop">
                            <!-- {{itemInsur.length}} -->
                        </div>
                    </div>
                    <div v-if="index > 0 && index <6 " :class="{ disabled: itemInsur.length == 3 && !checkintem(item.code) }" @change="onselectItem(item)" v-for="(item, index) in brands" :key="item.code" class="item">
                        <input type="checkbox" :id="`item${index + 1}`" />
                        <label :for="`item${index + 1}`">
                            <v-card @click="() => showImg(index - 1)" class="mr-5">
                                <v-img max-width="50px" v-ripple :src="item.img"></v-img>
                            </v-card>
                        </label>
                    </div>
                </slick>
                <br />
                <v-divider />
            </div>
        </div>
        <div class="carousel-handle">
            <small>ประกันมั่นใจ</small>
            <div class="carousel-wrap">
                <slick ref="slick" :options="slickOptions" @afterChange="handleAfterChange">
                    <div class="item">
                        <div class="carousel-prop">
                            <!-- {{itemInsur.length}} -->
                        </div>
                    </div>
                    <div v-if="index > 6 && index <10 " :class="{ disabled: itemInsur.length == 3 && !checkintem(item.code) }" @change="onselectItem(item)" v-for="(item, index) in brands" :key="item.code" class="item">
                        <input type="checkbox" :id="`item${index + 1}`" />
                        <label :for="`item${index + 1}`">
                            <v-card @click="() => showImg(index - 1)" class="mr-5">
                                <v-img max-width="50px" v-ripple :src="item.img"></v-img>
                            </v-card>
                        </label>
                    </div>
                </slick>
                <br />
                <v-divider />
            </div>
        </div>
        <div class="carousel-handle">
            <small>ประกันประหยัด</small>
            <div class="carousel-wrap">
                <slick ref="slick" :options="slickOptions" @afterChange="handleAfterChange">
                    <div class="item">
                        <div class="carousel-prop">
                            <!-- {{itemInsur.length}} -->
                        </div>
                    </div>
                    <div v-if="index >10 && index <15 " :class="{ disabled: itemInsur.length == 3 && !checkintem(item.code) }" @change="onselectItem(item)" v-for="(item, index) in brands" :key="item.code" class="item">
                        <input type="checkbox" :id="`item${index + 1}`" />
                        <label :for="`item${index + 1}`">
                            <v-card @click="() => showImg(index - 1)" class="mr-5">
                                <v-img max-width="50px" v-ripple :src="item.img"></v-img>
                            </v-card>
                        </label>
                    </div>
                </slick>
                <br />
                <v-divider />
            </div>
        </div>
    </div>
</template>
<script>

// import imgAPI from "~/static/images/imgAPI";
import brands from "~/api/brands.js";

export default {

    data() {
        return {
            loaded: false,
            visible: false,
            index: 0,
            brands: brands,
            itemInsur: [],
            slickOptions: {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 4,
                arrows: false,
                slidesToScroll: 1,
                variableWidth: true,
                responsive: [
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            },
        }
    },
    mounted() {
        this.loaded = true
    },
    methods: {
        async onselectItem(item) {
            const provider = await _.find(this.itemInsur, { code: item.code });
            console.log('onselectItem', provider)
            if (!provider) {
                console.log('add', item)
                this.itemInsur.push(await item.code)
            }
            else {
                console.log('remove', item)
                await this._.remove(this.itemInsur, {
                    code: item.code
                });
            }
            this.$emit('itemInsur', this.itemInsur)
        },
         checkintem(code) {
            const status =  Boolean(_.find( this.itemInsur, { code: code }));
            return status;
        },
        // Slide
        next: function () {
            this.$refs.slick.next();
        },
        prev: function () {
            this.$refs.slick.prev();
        },
        showImg(index) {
            console.log('showImg')
            this.index = index
            this.visible = true
        },
        handleHide() {
            this.visible = false
        },
        handleAfterChange(event, slick, currentSlide) {
            if (currentSlide > 0) {
                this.fade = true;
            } else {
                this.fade = false;
            }
        },
        //EndSlide
    },
}
</script>
<style lang="scss">
div {
    list-style-type: none;
}

span {
    display: inline-block;
}

input[type="checkbox"][id^="item"] {
    display: none;
}

label {
    width: auto;
    border: 1px solid #fff;
    // padding: 10px;
    display: block;
    position: relative;
    margin: 5px;
    cursor: pointer;
}

.disabled {
    pointer-events: none; //This makes it not clickable
    opacity: 0.6; //This grays it out to look disabled
}

label:before {
    background-color: white;
    color: white;
    content: " ";
    display: block;
    border-radius: 30px;
    // border: 1px solid grey;
    position: absolute;
    top: -5px;
    left: -5px;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 28px;
    transition-duration: 0.4s;
    transform: scale(0);
}

label img {
    // height: 70px;
    // width: 70px;
    transition-duration: 0.2s;
    transform-origin: 50% 50%;
}

:checked+label {
    // border-color: #ddd;
}

:checked+label:before {
    position: absolute;
    z-index: 1;
    content: "✓";
    background-color: #5cd926;
    transform: scale(1.2);
}

:checked+label img {
    transform: scale(0.9);
    box-shadow: 0 0 5px rgb(255, 255, 255);
    z-index: -1;
}
</style>