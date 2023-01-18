<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>LightBox</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/advanced/lightbox/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <section class="demo-section">
      <h4>Basic lightbox</h4>
      <section>
        <mdb-lightbox :imgs="imgs" gallery></mdb-lightbox>
      </section>
    </section>
    <section class="demo-section">
      <h4>Lightbox gallery with gaps</h4>
      <section>
        <mdb-lightbox :imgs="gallery" gallery gap></mdb-lightbox>
      </section>
    </section>
    <section class="demo-section">
      <h4>Lightbox with captions</h4>
      <section>
        <mdb-lightbox :imgs="captions" gallery></mdb-lightbox>
      </section>
    </section>
    <section class="demo-section">
      <h4>Gallery with heading</h4>
      <section>
        <h2 class="font-weight-bold my-5 text-center">My Projects</h2>
        <mdb-lightbox
          :imgs="headingGallery"
          gallery
          gap
          imgClass="z-depth-1"
        ></mdb-lightbox>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbLightbox, mdbContainer, mdbRow, mdbIcon } from "mdbvue";

export default {
  components: {
    mdbLightbox,
    mdbContainer,
    mdbRow,
    mdbIcon
  },
  data() {
    return {
      imgs: [
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg"
      ],
      gallery: [
        {
          thumbnail:
            "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(145).jpg",
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(150).jpg",
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(152).jpg",
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(42).jpg",
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(151).jpg",
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(40).jpg",
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg",
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg",
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(146).jpg",
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(146).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(149).jpg",
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(41).jpg",
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(41).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(43).jpg",
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(43).jpg"
        }
      ],
      captions: [
        {
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(94).jpg",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est."
        },
        {
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(96).jpg",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est."
        },
        {
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(95).jpg",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est."
        },
        {
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(92).jpg",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est."
        },
        {
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(137).jpg",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est."
        },
        {
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(132).jpg",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est."
        },
        {
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(129).jpg",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est."
        },
        {
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(130).jpg",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est."
        },
        {
          img:
            "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(131).jpg",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est."
        }
      ],
      headingGallery: [
        {
          thumbnail:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(63).jpg",
          img:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(63).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(66).jpg",
          img:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(66).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(65).jpg",
          img:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(65).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
          img:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(67).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(68).jpg",
          img:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(68).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(64).jpg",
          img:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(64).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(69).jpg",
          img:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(69).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(59).jpg",
          img:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(59).jpg"
        },
        {
          thumbnail:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(70).jpg",
          img:
            "https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(70).jpg"
        }
      ],
    };
  },
};
</script>

<style scoped></style>
