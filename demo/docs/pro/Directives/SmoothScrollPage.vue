<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text" id="top"><strong>SmoothScroll</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/scroll/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="my-4"/>
    <mdb-row>
      <ul class="smooth-scroll list-unstyled">
        <li>
          <h5><a href="#test1" v-mdb-smooth="'#test1'">Click to scroll to section 1</a></h5>
        </li>
        <br>
        <li>
          <h5><a href="#test2" v-mdb-smooth>Click to scroll to section 2</a></h5>
        </li>
        <br>
      </ul>
    </mdb-row>

    <div style="margin-top: 1000px">
      <h3><a id="test1" href="#top" v-mdb-smooth>Section 1</a></h3>
      <a href="#top" v-mdb-smooth>Back to top</a>
      <hr>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
    </div>

    <div style="margin-top: 500px">
      <h3><a id="test2" href="#test2">Section 2</a></h3>
      <a href="#top" v-mdb-smooth>Back to top</a>
      <hr>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
    </div>

    <section class="demo-section mt-5">
      <h4>Example with container</h4>
      <a href="#first-heading" v-mdb-smooth>First heading</a><br>
      <a href="#second-heading" v-mdb-smooth>Second heading</a>
      <section style="height: 300px; overflow-y: scroll">
        <h5 id="first-heading" style="margin-top: 200px">First heading</h5>
        <h5 id="second-heading" style="margin-top: 200px; margin-bottom: 400px">Second heading</h5>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbSmooth } from 'mdbvue';
export default {
  name: "SmoothScrollPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon
  },
  directives: {
    mdbSmooth
  }
};
</script>

<style>

</style>
