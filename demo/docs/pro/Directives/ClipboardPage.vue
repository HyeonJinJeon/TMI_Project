<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Clipboard Directive</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/directives/clipboard/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="demo-section">
        <h4>Copy to clipboard (button)</h4>
        <section>
          <p class="py-3">{{ text }}</p>
          <mdb-btn v-mdb-clipboard="text" color="primary"
            >copy to clipboard</mdb-btn
          >
          <mdb-input
            placeholder="Paste the text"
            type="textarea"
            outline
            :rows="8"
          />
        </section>
      </section>

      <section class="demo-section">
        <h4>Copy to clipboard (click on text)</h4>
        <section>
          <p v-mdb-clipboard="text2" class="py-3">{{ text2 }}</p>
          <mdb-input
            placeholder="Paste the text"
            type="textarea"
            outline
            :rows="4"
          />
        </section>
      </section>
    </mdb-container>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbIcon,
  mdbBtn,
  mdbInput,
  mdbClipboard
} from "mdbvue";

export default {
  name: "ClipboardPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbBtn,
    mdbInput
  },
  data() {
    return {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse. Eu mi bibendum neque egestas congue quisque egestas. Feugiat sed lectus vestibulum mattis ullamcorper. Sit amet porttitor eget dolor. Ultrices sagittis orci a scelerisque purus semper. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Aliquet enim tortor at auctor urna. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Ac tortor dignissim convallis aenean et.",

      text2: "Click on the text to copy its content to the clipboard"
    };
  },

  directives: { mdbClipboard }
};
</script>

<style scoped></style>
