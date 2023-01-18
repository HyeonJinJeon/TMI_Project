<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Mutation Observer Directive</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/directives/mutation-observer/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="demo-section">
        <h4>Input example</h4>
        <section>
          <mdb-input
            v-mdb-mutate.attributes.subtree="mutationHandler"
            :outline="outline"
            label="Mutation observer"
          />
          <mdb-btn @click="outline = !outline">Toggle input style</mdb-btn>
        </section>
      </section>
      <section class="demo-result-section">
        <p>
          Number of mutations: <strong>{{ mutationCount }}</strong>
        </p>
      </section>

      <section class="demo-section">
        <h4>Select example</h4>
        <section>
          <mdb-select
            v-mdb-mutate="mutate"
            label="Mutation observer"
            :options="options"
          />
        </section>
      </section>
      <section class="demo-result-section">
        <p>
          Number of changes in value: <strong>{{ valueMutation }}</strong>
        </p>
      </section>
    </mdb-container>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbIcon,
  mdbInput,
  mdbSelect,
  mdbBtn,
  mdbMutate
} from "mdbvue";

export default {
  name: "ResizePage",
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbInput,
    mdbSelect,
    mdbBtn
  },
  data() {
    return {
      mutationCount: 0,
      outline: false,
      valueMutation: 0,
      options: [
        { text: "Option nr 1", value: "Option 1" },
        { text: "Option nr 2", value: "Option 2" },
        { text: "Option nr 3", value: "Option 3" },
        { text: "Option nr 4", value: "Option 4" },
        { text: "Option nr 5", value: "Option 5" }
      ],
      mutate: {
        handler: () => {
          this.valueMutation++;
        },
        options: {
          attributes: true,
          subtree: true,
          attributeFilter: ["value"]
        }
      }
    };
  },
  methods: {
    mutationHandler() {
      this.mutationCount++;
    }
  },
  directives: { mdbMutate }
};
</script>

<style scoped></style>
