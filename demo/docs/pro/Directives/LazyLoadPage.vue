<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Lazy Load Directive</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/directives/lazy-load/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="demo-section">
        <h4>Basic example</h4>
        <section v-mdb-lazy-load="{ loading: 'https://placehold.it/1321x583?text=Loading', offset: 200 }">
          <img data-src="https://mdbootstrap.com/img/Photos/Slides/img%20(102).jpg" alt="Example image" class="img-fluid mb-1" />
          <img data-src="https://mdbootstrap.com/img/Photos/Slides/img%20(103).jpg" alt="Example image" class="img-fluid mb-1" />
          <img data-src="https://mdbootstrap.com/img/Photos/Slides/img%20(104).jpg" alt="Example image" class="img-fluid mb-1" />
          <img data-src="https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg" alt="Example image" class="img-fluid mb-1" />
          <img data-src="https://mdbootstrap.com/img/Photos/Slides/img%20(106).jpg" alt="Example image" class="img-fluid" />
        </section>
      </section>

      <section class="demo-section">
        <h4>Custom animation example</h4>
        <section v-mdb-lazy-load="{ loading: 'https://placehold.it/1321x583?text=Loading', offset: 200, animation: 'tada' }">
          <img data-src="https://mdbootstrap.com/img/Photos/Slides/img%20(107).jpg" alt="Example image" class="img-fluid mb-1" />
          <img data-src="https://mdbootstrap.com/img/Photos/Slides/img%20(108).jpg" alt="Example image" class="img-fluid mb-1" />
          <img data-src="https://mdbootstrap.com/img/Photos/Slides/img%20(109).jpg" alt="Example image" class="img-fluid mb-1" />
          <img data-src="https://mdbootstrap.com/img/Photos/Slides/img%20(110).jpg" alt="Example image" class="img-fluid mb-1" />
          <img data-src="https://mdbootstrap.com/img/Photos/Slides/img%20(111).jpg" alt="Example image" class="img-fluid" />
        </section>
      </section>

      <section class="demo-section">
        <h4>Example with videos</h4>
        <section v-mdb-lazy-load="{ selector: 'video', loading: 'https://placehold.it/1048x590?text=Loading', offset: 200 }">
          <video class="video-fluid z-depth-1" autoplay loop muted data-src="https://mdbootstrap.com/img/video/Sail-Away.mp4"></video>
          <video class="video-fluid z-depth-1" autoplay loop muted data-src="https://mdbootstrap.com/img/video/Nature-Sunset.mp4"></video>
          <video class="video-fluid z-depth-1" autoplay loop muted data-src="https://mdbootstrap.com/img/video/Tropical.mp4"></video>
          <video class="video-fluid z-depth-1" autoplay loop muted data-src="https://mdbootstrap.com/img/video/Cube.mp4"></video>
          <video class="video-fluid z-depth-1" autoplay loop muted data-src="https://mdbootstrap.com/img/video/City-Nights.mp4"></video>
        </section>
      </section>

      <section class="demo-section">
        <h4>Direct access examples</h4>
        <section>
          <img v-mdb-lazy-load="{ selector: 'this', loading: 'https://placehold.it/1048x590?text=Loading', offset: 200 }" data-src="https://mdbootstrap.com/img/Photos/Slides/img%20(102).jpg" alt="Example image" class="img-fluid mb-1" />
          <video v-mdb-lazy-load="{ selector: 'this', loading: 'https://placehold.it/1048x590?text=Loading', offset: 200 }" class="video-fluid z-depth-1" autoplay loop muted data-src="https://mdbootstrap.com/img/video/Sail-Away.mp4"></video>
        </section>
      </section>

    </mdb-container>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbIcon,
  mdbLazyLoad
} from "mdbvue";

export default {
  name: "LazyLoadPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon
  },
  directives: { mdbLazyLoad }
};
</script>

<style scoped></style>
