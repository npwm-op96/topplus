<template>
  <div class="main-wrap">
    <main-header :href="link.medical.register" text="register" />
    <div class="container-general container-front">
      <login-form />
    </div>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/pages";
</style>

<script>
import brand from "~/static/text/brand";
import Header from "~/components/Header/Basic";
import Footer from "~/components/Footer";
import LoginForm from "~/components/Forms/Login";
import link from "~/static/text/link";

export default {
  components: {
    "main-header": Header,
    "main-footer": Footer,
    LoginForm,
  },
  data() {
    return {
      link: link,
    };
  },
  created() {
    const loggedIn = this.$auth.loggedIn;
    if (loggedIn) {
      const user = this.$auth.user;
      this.$router.push({ name: "systems/dashboard", params: { data: user } });
    }
  },
  head() {
    return {
      title: "Login | " + brand.medical.desc,
    };
  },
};
</script>
