
<template>
  <form ref="formCus">
    <v-text-field @keyup="handleFormData()" v-model="form.name" :error-messages="nameErrors" label="ชื่อ" required
      @input="$v.form.name.$touch()" @blur="$v.form.name.$touch()"></v-text-field>
    <v-text-field @keyup="handleFormData()" v-model="form.tel" :error-messages="telErrors" :counter="10" label="เบอรโทร"
      required @input="$v.form.tel.$touch()" @blur="$v.form.tel.$touch()"></v-text-field>
  </form>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  name: "formData",
  mixins: [validationMixin],

  validations: {
    form: {
      name: { required },
      tel: { required, maxLength },
      select: { required },
    }

  },

  data: () => ({
    form: {
      name: '',
      tel: '',
    },
  }),
  watch: {
    form: function (val) {
      this.$emit('formData', val)
    },
  },
  computed: {

    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      !this.$v.form.name.required && errors.push("กรุณากรอกชื่อ");
      return errors;
    },
    telErrors() {
      const errors = [];
      if (!this.$v.form.tel.$dirty) return errors;
      !this.$v.form.tel.maxLength && errors.push("กรุณากรอกหมายเลขให้ครบ 10 หลัด");
      !this.$v.form.tel.required && errors.push("กรุณากรอกเบอร์โทร");
      return errors;
    },
  },

  methods: {
    handleFormData() {
      console.log('this.formCus', this.form)
      this.$emit('formData', this.form)
    },
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.tel = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
