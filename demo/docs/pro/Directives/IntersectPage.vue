<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Intersect Directive</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/directives/intersection-observer/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="demo-section">
        <h4></h4>
        <section>
          <mdb-card>
            <mdb-card-body style="max-height: 200px; overflow-y: scroll">
              <div
                class="py-5 my-5 text-primary d-flex align-items-center"
                v-mdb-intersect:container="() => callback('first')"
              >
                <h3 class="mb-0">First element</h3>
                <mdb-icon icon="heart" far class="ml-3" size="3x" />
              </div>
              <div
                class="py-5 my-5 amber-text d-flex align-items-center justify-content-end"
                v-mdb-intersect:container="() => callback('second')"
              >
                <mdb-icon icon="paw" size="3x" class="mr-3" />
                <h3 class="mb-0">Second element</h3>
              </div>
              <div
                class="py-5 my-5 pink-text d-flex align-items-center"
                v-mdb-intersect:container="() => callback('third')"
              >
                <h3 class="mb-0">Third element</h3>
                <mdb-icon icon="carrot" size="3x" class="ml-3" />
              </div>
            </mdb-card-body>
          </mdb-card>
        </section>
      </section>
      <section class="demo-result-section">
        <p>Intersection counter</p>
        <ul>
          <li>
            First element: <strong>{{ first }}</strong>
          </li>
          <li>
            Second element: <strong>{{ second }}</strong>
          </li>
          <li>
            Third element: <strong>{{ third }}</strong>
          </li>
        </ul>
      </section>
      <section class="demo-section">
        <h4>Scroll down to see the effect</h4>
        <section class="border-section text-center" :class="borderColor">
          <mdb-row style="margin-top: 40vh">
            <mdb-col sm="6">
              <mdb-card v-mdb-intersect.start="() => intersectionHandler(1)">
                <mdb-card-body>
                  <mdb-card-title>First element</mdb-card-title>
                  <div class="info-color circle"></div>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
          <mdb-row style="margin-top: 50vh" class="justify-content-end">
            <mdb-col sm="6">
              <mdb-card v-mdb-intersect="() => intersectionHandler(2)">
                <mdb-card-body>
                  <mdb-card-title>Second element</mdb-card-title>
                  <div class="warning-color circle"></div>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
          <mdb-row style="margin-top: 50vh">
            <mdb-col sm="6">
              <mdb-card v-mdb-intersect="() => intersectionHandler(3)">
                <mdb-card-body>
                  <mdb-card-title>Third element</mdb-card-title>
                  <div class="success-color circle"></div>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
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
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbIntersect,
  mdbSticky
} from "mdbvue";

export default {
  name: "ResizePage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbCard,
    mdbCardBody,
    mdbCardTitle
  },
  data() {
    return {
      element: null,
      first: 0,
      second: 0,
      third: 0
    };
  },
  computed: {
    borderColor() {
      return this.element === 1
        ? "border-info"
        : this.element === 2
        ? "border-warning"
        : this.element === 3
        ? "border-success"
        : "border-grey";
    }
  },
  methods: {
    intersectionHandler(el) {
      this.element = el;
    },
    callback(element) {
      console.log(element);
      this[element]++;
    }
  },
  directives: { mdbIntersect, mdbSticky }
};
</script>

<style scoped>
.circle {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  margin: 20px auto;
}

.border-section {
  border-width: 3px;
  transition: border-color 0.4s linear;
}
</style>
