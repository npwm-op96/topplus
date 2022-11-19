<template>
  <div>
    <!-- {{ options }} -->
    <VueFileAgent ref="vueFileAgent" :uploadHeaders="{}" :multiple="options.multiple" :deletable="true" :meta="true"
      :accept="options.accept" :maxSize="options.maxSize" :maxFiles="options.maxFiles" :helpText="options.helpText"
      :errorText="options.errorText" :thumbnailSize="options.thumbnailSize" :theme="options.theme" v-model="fileRecords"
      @select="filesSelected($event)" @beforedelete="onBeforeDelete($event)" @delete="fileDeleted($event)">
    </VueFileAgent>
  </div>

</template>
<script>
import Vue from "vue";
import VueFileAgent from "vue-file-agent";
import VueFileAgentStyles from "vue-file-agent/dist/vue-file-agent.css";

Vue.use(VueFileAgent);
const defaultStyles = {
  textColor: "white",
  uppercase: "uppercase",
  fontWeight: "bold",
};
export default {
  props: {
    options: {
      type: Object,
      default: () => ({
      }),
    },
  },
  mounted() {
    console.log("props", this.$props.options);
  },
  data: function () {
    return {
      // finalStyles : Object.assign({}, defaultStyles, textStyles),
      fileRecords: [],
      uploadUrl: "https://www.mocky.io/v2/5d4fb20b3000005c111099e3",
      uploadHeaders: { "X-Test-Header": "vue-file-agent" },
      fileRecordsForUpload: [], // maintain an upload queue
    };
  },
  methods: {
    uploadFiles: function () {
      // Using the default uploader. You may use another uploader instead.
      this.$refs.vueFileAgent.upload(
        this.uploadUrl,
        this.uploadHeaders,
        this.fileRecordsForUpload
      );
      this.fileRecordsForUpload = [];
    },
    deleteUploadedFile: function (fileRecord) {
      // Using the default uploader. You may use another uploader instead.
      this.$refs.vueFileAgent.deleteUpload(
        this.uploadUrl,
        this.uploadHeaders,
        fileRecord
      );
    },
    filesSelected: function (fileRecordsNewlySelected) {
      var validFileRecords = fileRecordsNewlySelected.filter(
        (fileRecord) => !fileRecord.error
      );
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
        validFileRecords
      );
      this.$emit('fileRecord', this.fileRecordsForUpload)
    },
    onBeforeDelete: function (fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        // queued file, not yet uploaded. Just remove from the arrays
        this.fileRecordsForUpload.splice(i, 1);
        var k = this.fileRecords.indexOf(fileRecord);
        if (k !== -1) this.fileRecords.splice(k, 1);
      } else {
        if (confirm("คุณต้องการที่จะลบไฟล์นี้")) {
          this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
        }
      }
    },
    fileDeleted: function (fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
      } else {
        this.deleteUploadedFile(fileRecord);
      }
    },
  },
};
</script>
