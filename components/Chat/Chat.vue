<template>
  <div class="chat">
    <div :class="{ show: showChat }" class="panel">
      <header>
        <h3>
          <span class="indicator online" />
          <v-avatar class="avatar">
            <img :src="imgAPI.members[0]" alt="visitor">
          </v-avatar>
          ผู้เชียวชาญ 

        </h3>
        <v-btn @click="closeChat()" class="close" icon>
          <i class="ion-md-close" />
        </v-btn>
      </header>
      <div class="chat-room" id="chat-container">
        <ul>
          <li v-for="(item, index) in conversation" :key="index" :class="{ 'text-right': item.visitor }" class="item">
            <v-avatar v-if="!item.visitor" class="avatar">
              <img :src="imgAPI.members[0]" alt="visitor">
            </v-avatar>
            <span :class="{ 'from': !item.visitor }" class="talk">
              <v-img v-if="item.img" src="https://qr-official.line.me/sid/M/319atzqw.png?shortenUrl=true"></v-img>
              {{ item.text }}
              <a class="" v-if="item.link" :href="link">{{link}}</a>
            </span>
          </li>

        </ul>
      </div>
      <div class="form">
        <v-text-field v-model="message" @keyup.enter="send()" label="สอบถาม" class="input" />
        <v-btn elevation="0" class="send" fab small @click="send()">
          <span class="ion-md-send" />
        </v-btn>
      </div>
    </div>
    <v-btn @click="toggleChat()" fab class="chat-button">
      <span class="indicator online" />
      <i class="ion-md-text" />
    </v-btn>
  </div>
</template>

<style scoped lang="scss">
@import "./chat-style.scss";
</style>

<script>
import avatar from "~/static/images/avatars/pp_boy4.svg";
import imgAPI from "~/static/images/imgAPI";

export default {
  data() {
    return {
      showChat: false,
      message: "",
      link: "https://www.fininsurance.co.th/register?uid=FNG21-17089#",
      visitorAvatar: avatar,
      imgAPI: imgAPI,
      conversation: [
        {
          text: "ยินดีให้คำปรึกษา",
          visitor: false,
          img: true,
          link:false
        },
        {
          text: `สมัครสมาชิก`,
          visitor: false,
          img: false,
          link:true

        },
        // {
        //   text: 'Hola!, Maecenas nisl ',
        //   visitor: true
        // },
        // {
        //   text: 'Hola!, Maecenas',
        //   visitor: false
        // }
      ],
    };
  },
  methods: {
    send() {
      if (this.message !== "") {
        this.conversation.push({ text: this.message, visitor: true });
        this.message = "";
        // scroll to bottom
        const ctn = document.getElementById("chat-container");
        setTimeout(() => {
          ctn.scrollTo(0, ctn.scrollHeight);
        }, 300);
      }
    },
    toggleChat() {
      this.showChat = !this.showChat;
    },
    closeChat() {
      this.showChat = false;
    },
  },
};
</script>
