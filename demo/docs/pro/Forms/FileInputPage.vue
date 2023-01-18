<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>File Input</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/file-input/" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-file-input sm ref="fileInput" />
        <mdb-btn @click.native="resetFileInput" size="sm" color="danger">Reset</mdb-btn>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="mt-5 mb-3">Multiple files</h4>
      <section>
        <mdb-file-input sm multiple btnColor="primary" />
      </section> 
    </section>
    <section class="demo-section">
      <h4 class="mt-5 mb-3">Size</h4>
      <section>
        <mdb-file-input sm btnColor="unique" />
        <mdb-file-input btnColor="light-blue" />
        <mdb-file-input lg btnColor="primary" />
      </section> 
    </section>
    <section class="demo-section">
      <h4 class="mt-5 mb-3">Outline</h4>
      <section>
        <mdb-file-input sm outline="info" />
        <mdb-file-input outline="default" />
        <mdb-file-input lg outline="danger" />
      </section> 
    </section>
    <section class="demo-section">
      <h4 class="mt-5 mb-3">Image placeholder</h4>
      <section>
        <div>
          <mdb-row>
            <mdb-col md="4">
              <mdb-file-input circle btnColor="mdb-color" btn-title="add photo" rounded img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" />
            </mdb-col>
            <mdb-col md="4">
              <mdb-file-input :width="300" btnColor="mdb-color" rounded btn-title="add photo" img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" />
            </mdb-col>
          </mdb-row>
        </div>
      </section> 
    </section>
    <section class="demo-section">
      <h4 class="mt-5 mb-3">Rounded with outline buttons</h4>
      <section>
        <mdb-file-input rounded sm outline="success" />
        <mdb-file-input rounded outline="secondary" />
        <mdb-file-input rounded lg outline="warning" />
      </section> 
    </section>
    <section class="demo-section">
      <h4 class="mt-5 mb-3">Rounded with gradient buttons</h4>
      <section>
        <mdb-file-input sm rounded gradient="purple" />
        <mdb-file-input rounded gradient="aqua" />
        <mdb-file-input rounded lg gradient="peach" />
      </section> 
    </section>
    <section class="demo-section">
      <h4 class="mt-5 mb-3">Buttons with icons</h4>
      <section>
        <mdb-row>
          <mdb-col sm="12" md="6">
            <mdb-file-input icon="cloud-upload-alt" sm gradient="blue" />
            <mdb-file-input icon-right="cloud-upload-alt" sm rounded btnColor="pink" />
          </mdb-col>
          <mdb-col>
            <mdb-file-input icon="cloud-upload-alt" outline="info" />
            <mdb-file-input icon-right="upload" rounded lg outline="danger" />
          </mdb-col>
        </mdb-row>
      </section> 
    </section>
    <section class="demo-section">
      <h4 class="mt-5 mb-3">Floating buttons</h4>
      <section>
        <mdb-row>
          <mdb-col sm="12" md="4">
            <mdb-file-input floating icon="paperclip" gradient="peach" />
          </mdb-col>
          <mdb-col sm="12" md="4">
            <mdb-file-input floating icon="heart" gradient="blue" />
          </mdb-col>
          <mdb-col>
            <mdb-file-input floating icon="cloud-upload-alt" gradient="purple" />
          </mdb-col>
        </mdb-row>
         <mdb-row>
          <mdb-col sm="12" md="4">
            <mdb-file-input floating lg icon="paperclip" btnColor="pink" />
          </mdb-col>
          <mdb-col sm="12" md="4">
            <mdb-file-input floating lg icon="heart" btnColor="cyan" />
          </mdb-col>
          <mdb-col>
            <mdb-file-input floating lg icon="cloud-upload-alt" btnColor="amber" />
          </mdb-col>
        </mdb-row>
      </section> 
    </section>
    <section class="demo-section">
      <h4 class="mt-5 mb-3">File inputs within cards</h4>
      <section>
        <mdb-row>
          <mdb-col sm="12" md="6">
            <mdb-card class="indigo py-4 px-5 z-depth-2">
              <mdb-file-input icon="cloud-upload-alt" sm outline="white" />
              <mdb-file-input icon="cloud-upload-alt" sm rounded text-field-title="Upload one more" outline="white" />            
            </mdb-card>
          </mdb-col>
          <mdb-col sm="12" md="6">
            <mdb-card class="mdb-color lighten-4 py-4 px-5 z-depth-2">
              <mdb-file-input floating text-white icon="paperclip" gradient="peach" />
              <mdb-file-input floating text-white icon="paperclip" gradient="peach" />
              <mdb-file-input floating text-white icon="paperclip" gradient="peach" />
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section> 
    </section>
  </mdb-container>
</template>

<script>
import { mdbCol, mdbFileInput, mdbContainer, mdbRow, mdbBtn, mdbIcon, mdbCard } from "mdbvue";

export default {
  name: "FileInputPage",
  components: {
    mdbCol,
    mdbFileInput,
    mdbContainer,
    mdbRow,
    mdbBtn,
    mdbIcon,
    mdbCard
  },
  data() {
    return {
      test: 'Test value',
      result: '',
      result2: '',
      result3: '',
      result4: '',
      result5: '',
      result6: '',
      result7: '',
      result8: '',
      result9: '',
      result10: '',
    };
  },
  methods: {
    resetFileInput() {
      this.$refs.fileInput.reset();
    }
  }
};
</script>

<style scoped>

</style>
