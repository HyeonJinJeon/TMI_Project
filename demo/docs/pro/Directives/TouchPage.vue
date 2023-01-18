<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Touch Directive</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/directives/touch/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="demo-section">
        <h4>Long tap</h4>
        <section>
          <mdb-view
            src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg"
            imgClass="img-fluid"
          >
            <transition
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
            >
              <mdb-mask
                flex-center
                v-if="mask"
                overlay="stylish-strong"
                text="Hold the button to remove the mask from the image"
              />
            </transition>
          </mdb-view>
          <mdb-btn v-mdb-touch:longTap="showImage" class="mx-0 mt-2" color="pink"
            >Tap & hold to show image</mdb-btn
          >
        </section>
      </section>
      <section class="demo-section">
        <h4>Double tap</h4>
        <section>
          <div class="img-container" v-mdb-touch:doubleTap="resizeImg" ref="img">
            <img
              src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg"
              :style="imgStyle"
              class="w-100"
            />
          </div>
        </section>
      </section>
      <section class="demo-section">
        <h4>Pinch</h4>
        <section>
          <div class="img-container" v-mdb-touch:pinch="zoom" ref="pinchImg">
            <img
              src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg"
              class="img-fluid"
              :style="imgStyle2"
            />
          </div>
        </section>
      </section>
      <section class="demo-section">
        <h4>Swipe (right, left)</h4>
        <section>
          <div v-mdb-touch:swipe.left="swipeLeft" v-mdb-touch:swipe.right="swipeRight">
            <mdb-view
              src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg"
              imgClass="img-fluid"
            >
              <mdb-mask :overlay="overlays[activeOverlay]" />
            </mdb-view>
          </div>
        </section>
      </section>
      <section class="demo-section">
        <h4>Swipe (up, down)</h4>
        <section>
          <div v-mdb-touch:swipe.up="swipeUp" v-mdb-touch:swipe.down="swipeDown">
            <img :src="imgs[active]" class="img-fluid" />
          </div>
        </section>
      </section>
      <section class="demo-section">
        <h4>Pan</h4>
        <section>
          <div v-mdb-touch:pan="pan" style="overflow: hidden; height: 400px;">
            <img
              :style="imgStyle3"
              src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(47).jpg"
            />
          </div>
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
  mdbMask,
  mdbView,
  mdbBtn,
  mdbTouch
} from "mdbvue";

export default {
  name: "TouchPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbMask,
    mdbView,
    mdbBtn
  },
  data() {
    return {
      mask: true,
      scale: 1,
      scale2: 1,
      origin: null,
      origin2: null,
      translate: {
        x: 0,
        y: 0
      },
      active: 1,
      activeOverlay: 0,
      overlays: ["indigo-light", "indigo-strong", "blue-light", "pink-light"],
      imgs: [
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(41).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(46).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(45).jpg"
      ]
    };
  },
  computed: {
    imgStyle() {
      return {
        transform: `scale(${this.scale})`,
        transformOrigin: this.origin
          ? `${this.origin.x}px ${this.origin.y}px 0`
          : "50% 50% 0"
      };
    },
    imgStyle2() {
      return {
        transform: `scale(${this.scale2})`,
        transformOrigin: this.origin2
          ? `${this.origin2.x}px ${this.origin2.y}px 0`
          : "50% 50% 0"
      };
    },
    imgStyle3() {
      return {
        transform: `translate(${this.translate.x}px, ${this.translate.y}px)`
      };
    }
  },
  methods: {
    resizeImg(e) {
      const rect = this.$refs.img.getBoundingClientRect();
      this.origin = {
        x: e.origin.x - rect.x,
        y: e.origin.y - rect.y
      };

      this.scale === 1 ? (this.scale = 2) : (this.scale = 1);
    },
    swipeRight() {
      if (this.activeOverlay === 0)
        this.activeOverlay = this.overlays.length - 1;
      else this.activeOverlay--;
    },
    swipeLeft() {
      if (this.activeOverlay === this.overlays.length - 1)
        this.activeOverlay = 0;
      this.activeOverlay++;
    },
    swipeDown() {
      if (this.active === 0) this.active = this.imgs.length - 1;
      else this.active--;
    },
    swipeUp() {
      if (this.active === this.imgs.length - 1) this.active = 0;
      this.active++;
    },
    zoom(e) {
      const rect = this.$refs.pinchImg.getBoundingClientRect();
      this.origin2 = {
        x: e.origin.x - rect.x,
        y: e.origin.y - rect.y
      };
      this.scale2 * e.ratio > 1 ? (this.scale2 *= e.ratio) : (this.scale2 = 1);
    },
    pan(e) {
      this.translate = {
        x: this.translate.x + e.x,
        y: this.translate.y + e.y
      };
    },
    showImage() {
      this.mask = false;
    }
  },
  directives: { mdbTouch }
};
</script>

<style scoped>
.img-container {
  width: 100%;
  max-height: 600px;
  overflow: hidden;
}

.img-container img {
  transition: transform 0.4s linear;
}
</style>
