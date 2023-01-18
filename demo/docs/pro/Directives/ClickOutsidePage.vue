<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Click Outside Directive</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/directives/click-outside/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>

    <hr />

    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-btn v-mdb-click-outside="handleOutsideClick" color="success">Click outside me</mdb-btn>
      </section>
    </section>
    <section class="demo-result-section">
      <span>click outside: <strong>{{ outsideClicks }}</strong></span><br>
      <mdb-btn darkWaves outline="black" size="sm" @click.stop.native="outsideClicks = 0">Reset</mdb-btn>
    </section>

    <section class="demo-section">
      <h4>Bubbling example</h4>
      <section>
        <div class="p-5 blue darken-4" v-mdb-click-outside="handleOutsideClick2">
          <div class="p-5 grey" v-mdb-click-outside="handleOutsideClick3">
            <mdb-btn v-mdb-click-outside="handleOutsideClick4" color="success">Button</mdb-btn>
          </div>
        </div>
      </section>
    </section>
    <section class="demo-result-section">
      <span>click outside: <strong>{{ outsideClicks2 }}</strong></span><br>
      <mdb-btn darkWaves outline="black" size="sm" @click.stop.native="resetOutsideClicks2">Reset</mdb-btn>
    </section>

  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbIcon,
  mdbBtn,
  mdbClickOutside
} from "mdbvue";

export default {
  name: "ClickOutsidePage",
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbBtn
  },
  directives: { mdbClickOutside },
  data() {
    return {
      outsideClicks: 0,
      outsideClicks2: {
        blueDiv: 0,
        greyDiv: 0,
        button: 0
      }
    };
  },
  methods: {
    handleOutsideClick() {
      this.outsideClicks++;
    },
    handleOutsideClick2() {
      this.outsideClicks2.blueDiv++;
    },
    handleOutsideClick3() {
      this.outsideClicks2.greyDiv++;
    },
    handleOutsideClick4() {
      this.outsideClicks2.button++;
    },
    resetOutsideClicks2() {
      for (let i in this.outsideClicks2) {
        this.outsideClicks2[i] = 0;
      }
    }
  }
};
</script>

<style scoped></style>
