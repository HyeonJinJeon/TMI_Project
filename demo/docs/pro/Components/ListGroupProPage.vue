<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>List Group</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/components/list-group/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h2>List with social icons</h2>
      <section>
        <mdb-row>
          <mdb-col md="6" class="mt-5 mx-3">
            <mdb-list-group flush>
              <mdb-list-group-item :justify-content-between="false">
                <mdb-btn floating tag="a" icon="facebook-f" fab class="btn-fb"/>Cras justo odio
              </mdb-list-group-item>
              <mdb-list-group-item :justify-content-between="false">
                <mdb-btn floating tag="a" icon="twitter" fab class="btn-tw"/>Cras justo odio
              </mdb-list-group-item>
              <mdb-list-group-item :justify-content-between="false">
                <mdb-btn floating tag="a" icon="linkedin-in" fab class="btn-li"/>Cras justo odio
              </mdb-list-group-item>
              <mdb-list-group-item :justify-content-between="false">
                <mdb-btn floating tag="a" icon="slack-hash" fab class="btn-slack"/>Cras justo odio
              </mdb-list-group-item>
              <mdb-list-group-item :justify-content-between="false">
                <mdb-btn floating tag="a" icon="youtube" fab class="btn-yt"/>Cras justo odio
              </mdb-list-group-item>
            </mdb-list-group>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbListGroup,
  mdbListGroupItem,
  mdbContainer,
  mdbIcon,
  mdbRow,
  mdbCol,
  mdbBtn
} from "mdbvue";

export default {
  name: "ListGroupProPage",
  components: {
    mdbListGroup,
    mdbListGroupItem,
    mdbContainer,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbBtn
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
