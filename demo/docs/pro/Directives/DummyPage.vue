<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Dummy Directive</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/directives/dummy/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="demo-section">
        <h4>Text</h4>
        <section>
          <h5 class="my-4 h5 text-primary">Adjust the placeholder's length:</h5>
          <mdb-range-input :min="50" :max="1200" v-model="text" />
          <p v-mdb-dummy:text="text"></p>
        </section>
      </section>
      <section class="demo-section">
        <h4>Image</h4>
        <section>
          <img v-mdb-dummy:img="{ height, width }" class="img-fluid"/>

          <h5 class="my-4 h5 text-primary">Adjust the placeholder's size:</h5>
          <mdb-row>
            <mdb-col col="1">
              <p class="font-weight-bold">width:</p>
            </mdb-col>
            <mdb-col>
              <mdb-range-input :min="50" :max="800" v-model="width" />
            </mdb-col>
          </mdb-row>
          <mdb-row class="mt-2">
            <mdb-col col="1">
              <p class="font-weight-bold">height:</p>
            </mdb-col>
            <mdb-col>
              <mdb-range-input :min="50" :max="800" v-model="height" />
            </mdb-col>
          </mdb-row>
        </section>
      </section>
      <section class="demo-section">
        <h4>Table</h4>
        <section>
          <table v-mdb-dummy:table="{ columns, rows }" class="table" />

          <h5 class="my-4 h5 text-primary">Adjust the table's size:</h5>
          <mdb-row>
            <mdb-col col="1">
              <p class="font-weight-bold">columns:</p>
            </mdb-col>
            <mdb-col>
              <mdb-range-input :min="1" :max="10" v-model="columns" />
            </mdb-col>
          </mdb-row>
          <mdb-row class="mt-2">
            <mdb-col col="1">
              <p class="font-weight-bold">rows:</p>
            </mdb-col>
            <mdb-col>
              <mdb-range-input :min="1" :max="10" v-model="rows" />
            </mdb-col>
          </mdb-row>
        </section>
      </section>
      <section class="demo-section">
        <h4>Lists</h4>
        <section>
          <ol v-mdb-dummy:list="list"></ol>

          <h5 class="my-4 h5 text-primary">Adjust the list's length:</h5>
          <mdb-range-input :min="1" :max="20" v-model="list" />
        </section>
      </section>
      <section class="demo-section">
        <h4>Layout</h4>
        <section>
          <mdb-container>
            <mdb-row>
              <mdb-col class="mb-4">
                <mdb-carousel
                  indicators
                  controlls
                  slide
                  v-mdb-dummy:img="{ width: 1200, height: 600 }"
                  :items="[
                    { img: true, src: '' },
                    { img: true, src: '' },
                    { img: true, src: '' }
                  ]"
                />
              </mdb-col>
            </mdb-row>
            <mdb-row>
              <mdb-col>
                <p v-mdb-dummy:text="1000"></p>
              </mdb-col>
            </mdb-row>
            <hr class="my-5" />
            <mdb-row>
              <mdb-col md="5" class="mb-4">
                <mdb-card>
                  <mdb-card-image
                    v-mdb-dummy:img="{ width: 600, height: 300 }"
                    src=""
                  />
                  <mdb-card-body>
                    <mdb-card-title v-mdb-dummy:text="24"></mdb-card-title>
                    <mdb-card-text v-mdb-dummy:text="300"></mdb-card-text>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col md="7" class="mb-4">
                <p v-mdb-dummy:text="700"></p>
                <div class="d-flex  align-items-end mt-5">
                  <mdb-avatar tag="img" v-mdb-dummy:img="40" :width="40" />
                  <h5 class="ml-3 mb-0">John Doe</h5>
                </div>
              </mdb-col>
            </mdb-row>
          </mdb-container>
        </section>
      </section>
    </mdb-container>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbIcon,
  mdbRangeInput,
  mdbCard,
  mdbCardBody,
  mdbCardText,
  mdbCardTitle,
  mdbCardImage,
  mdbCarousel,
  mdbAvatar,
  mdbDummy
} from "mdbvue";

export default {
  name: "DummyPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbRangeInput,
    mdbCard,
    mdbCardBody,
    mdbCardText,
    mdbCardTitle,
    mdbCardImage,
    mdbCarousel,
    mdbAvatar
  },
  data() {
    return {
      width: 150,
      height: 150,
      text: 500,
      columns: 4,
      rows: 5,
      list: 7
    };
  },
  directives: { mdbDummy }
};
</script>

<style scoped></style>
