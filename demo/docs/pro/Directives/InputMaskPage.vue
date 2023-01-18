<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Input Mask Directive</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/directives/input-mask/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>

    <hr />

    <section class="demo-section">
      <h4>Only numbers</h4>
      <section>
        <mdb-input class="mt-0 mb-0" v-mdb-input-mask="'♠♠♠♠♠♠♠♠♠♠'" v-model="value" placeholder="♠♠♠♠♠♠♠♠♠♠" />
      </section>
    </section>
    <section class="demo-result-section">
      {{ value }}
    </section>

    <section class="demo-section">
      <h4>Only letters</h4>
      <section>
        <mdb-input class="mt-0 mb-0" v-mdb-input-mask="'♣♣♣♣♣♣♣♣♣♣'" v-model="value2" placeholder="♣♣♣♣♣♣♣♣♣♣" />
      </section>
    </section>
    <section class="demo-result-section">
      {{ value2 }}
    </section>

    <section class="demo-section">
      <h4>Numbers and letters</h4>
      <section>
        <mdb-input class="mt-0 mb-0" v-mdb-input-mask="'♥♥♥♥♥♥♥♥♥♥'" v-model="value3" placeholder="♥♥♥♥♥♥♥♥♥♥" />
      </section>
    </section>
    <section class="demo-result-section">
      {{ value3 }}
    </section>

    <section class="demo-section">
      <h4>Any</h4>
      <section>
        <mdb-input class="mt-0 mb-0" v-mdb-input-mask="'♦♦♦♦♦♦♦♦♦♦'" v-model="value4" placeholder="♦♦♦♦♦♦♦♦♦♦" />
      </section>
    </section>
    <section class="demo-result-section">
      {{ value4 }}
    </section>

    <section class="demo-section">
      <h4>Basic examples</h4>
      <section>
        <mdb-input v-mdb-input-mask="'♠♠/♠♠/♠♠♠♠ ♠♠:♠♠'" v-model="value5" placeholder="♠♠/♠♠/♠♠♠♠ ♠♠:♠♠" label="Date and time" />
        <mdb-input v-mdb-input-mask="'+48 ♠♠♠ ♠♠♠ ♠♠♠'" v-model="value6" placeholder="+48 ♠♠♠ ♠♠♠ ♠♠♠" label="Phone number" />
        <mdb-input v-mdb-input-mask="'ISBN 0-♠♠♠♠♠-♠♠♠-0'" v-model="value7" placeholder="ISBN 0-♠♠♠♠♠-♠♠♠-0" label="Book number" />
        <mdb-input v-mdb-input-mask="'♠♠-♠♠♠'" v-model="value8" placeholder="♠♠-♠♠♠" label="Zip code" />
      </section>
    </section>
    <section class="demo-result-section">
      Date and time: {{ value5 }} <br>
      Phone number: {{ value6 }} <br>
      Book number: {{ value7 }} <br>
      Zip code: {{ value8 }}
    </section>

  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbIcon,
  mdbInput,
  mdbInputMask
} from 'mdbvue';

export default {
  name: 'InputMaskPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbInput
  },
  data() {
    return {
      value: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: ''
    }
  },
  directives: { mdbInputMask }
}
</script>

<style scoped>

</style>