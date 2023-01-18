<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Switch</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/forms/switch/?utm_source=DemoApp&utm_medium=MDBVuePro"
        wavesFixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2"/>Docs
      </a>
    </mdb-row>
    <hr class="mb-5">

    <section class="demo-section">
      <h4>Material switch</h4>
      <section>
        <mdb-switch v-model="switchValues[0]"></mdb-switch>
      </section>
    </section>
    <section class="demo-result-section">
      {{ switchValues[0] }}
    </section>

    <section class="demo-section">
      <h4>Checked</h4>
      <section>
        <mdb-switch checked v-model="switchValues[1]"></mdb-switch>
      </section>
    </section>
    <section class="demo-result-section">
      {{ switchValues[1] }}
    </section>

    <section class="demo-section">
      <h4>Custom labels</h4>
      <section>
        <mdb-switch onLabel="ON" offLabel="OFF" v-model="switchValues[2]"></mdb-switch>
      </section>
    </section>
    <section class="demo-result-section">
      {{ switchValues[2] }}
    </section>

    <section class="demo-section">
      <h4>Disabled</h4>
      <section>
        <mdb-switch disabled v-model="switchValues[3]"></mdb-switch>
      </section>
    </section>
    <section class="demo-result-section">
      {{ switchValues[3] }}
    </section>

  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbSwitch } from 'mdbvue';
export default {
  name: 'SwitchProPage',
  data() {
    return {
      switchValues: [false, true, false, false]
    }
  },
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbSwitch
  },
};
</script>

<style scoped>
</style>