<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Resize Directive</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/directives/resize/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="demo-section">
        <h4>Resize the window to observe the effect</h4>
        <section>
          <mdb-view
            v-mdb-resize="changeOverlay"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
            imgClass="img-fluid"
          >
            <mdb-mask
              style="transition: background-color .4s ease-in"
              :overlay="overlay"
              text="resize the window to observe the effect"
              flex-center
            />
          </mdb-view>
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
  mdbView,
  mdbMask,
  mdbResize
} from "mdbvue";

export default {
  name: "ResizePage",
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbView,
    mdbMask
  },
  data() {
    return {
      overlay: "indigo-strong",
      overlays: [
        "blue-light",
        "red-light",
        "pink-light",
        "purple-light",
        "indigo-light",
        "cyan-light",
        "teal-light",
        "green-light",
        "lime-light",
        "yellow-light",
        "orange-light",
        "brown-light",
        "grey-light",
        "black-light",
        "stylish-light",
        "white-light",
        "blue-strong",
        "red-strong",
        "pink-strong",
        "purple-strong",
        "indigo-strong",
        "cyan-strong",
        "teal-strong",
        "green-strong",
        "lime-strong",
        "yellow-strong",
        "orange-strong",
        "brown-strong",
        "grey-strong",
        "black-strong",
        "stylish-strong",
        "white-strong"
      ],
      throttling: false
    };
  },
  methods: {
    changeOverlay() {
      if (!this.throttling) {
        this.throttling = true;
        setTimeout(() => {
          const index = Math.floor(Math.random() * this.overlays.length);
          this.overlay = this.overlays[index];
          this.throttling = false;
        }, 800);
      }
    }
  },

  directives: { mdbResize }
};
</script>

<style scoped></style>
