<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Chips</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/components/badges/#chips-avatars/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr class="mb-5" />

    <section class="demo-section">
      <h4>Chips with avatars</h4>
      <section>
        <mdb-chip
          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg"
          alt="Contact Person"
          waves
        >
          John Doe</mdb-chip
        >
        <mdb-chip
          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-10.jpg"
          alt="Contact Person"
          size="md"
          waves
        >
          Anna Smith</mdb-chip
        >
        <mdb-chip
          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
          alt="Contact Person"
          size="lg"
          waves
        >
          Lara Lim</mdb-chip
        >
      </section>
    </section>

    <section class="demo-section">
      <h4>Chips without avatars</h4>
      <section>
        <mdb-chip color="pink lighten-4" close> Tag 220 </mdb-chip>
      </section>
    </section>

    <section class="demo-section">
      <h4>Chips with various colors</h4>
      <section>
        <mdb-chip
          src="https://mdbootstrap.com/img/Photos/Avatars/img(7).jpg"
          alt="Contact Person"
        >
          Caroline Smith</mdb-chip
        >
        <mdb-chip
          src="https://mdbootstrap.com/img/Photos/Avatars/img(28).jpg"
          alt="Contact Person"
          color="cyan darken-2"
          text="white"
          size="md"
        >
          Martha Lores</mdb-chip
        >
        <mdb-chip
          src="https://mdbootstrap.com/img/Photos/Avatars/img(21).jpg"
          alt="Contact Person"
          color="success-color"
          text="white"
          size="lg"
          >The Sylvester</mdb-chip
        >
        <mdb-chip color="teal lighten-2" text="white" close>Martha</mdb-chip>
        <mdb-chip color="indigo lighten-4" text="indigo" size="md" close
          >24.08.2016</mdb-chip
        >
        <mdb-chip gradient="aqua" text="white" size="lg" close
          >Aqua gradient</mdb-chip
        >
      </section>
    </section>

    <section class="demo-section">
      <h4>Chip input</h4>
      <section>
        <mdb-chip-input
          placeholder="+Tag"
          secondaryPlaceholder="Enter a tag"
          waves
        />
        <mdb-chip-input :chips="['Tag 1', 'Tag 2', 'Tag 3']" />
      </section>
    </section>

    <section class="demo-section">
      <h4>Chip input - v-model</h4>
      <section>
        <mdb-chip-input
          placeholder="+Tag"
          secondaryPlaceholder="Enter a tag"
          waves
          v-model="chips"
        />
        <h5 class="text-primary">Current chips: </h5>
        <ul class="pl-4">
          <li v-for="(chip, i) in chips" :key="i" class="py-2">{{ chip }} <mdb-icon @click.native="removeChip(i)" icon="times" color="primary" size="sm" class="pl-2" style="cursor: pointer;"/></li>
        </ul>
      </section>
    </section>

    <section class="demo-section">
      <h4>Chip input with button</h4>
      <section>
        <mdb-chip-input
          placeholder="+Tag"
          secondaryPlaceholder="Enter a tag"
          waves
          btn
        />
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbChip, mdbChipInput, mdbIcon, mdbRow } from "mdbvue";

export default {
  components: {
    mdbContainer,
    mdbChip,
    mdbChipInput,
    mdbIcon,
    mdbRow
  },
  data() {
    return {
      chips: [
        'Tag 1',
        'Tag 2',
        'Tag 3'
      ]
    }
  },
  methods: {
    removeChip(index) {
      this.chips = this.chips.filter((chip, i) => i !== index);
    }
  }
};
</script>

<style></style>
