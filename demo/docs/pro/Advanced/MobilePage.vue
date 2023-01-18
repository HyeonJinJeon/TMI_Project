<template>
  <mdb-container>
    <mdb-row class="mt-5">
      <h4 class="demo-title">
        <strong>Mobile</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/advanced/mobile/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <hr />

    <section class="demo-section">
      <h4>Basic example with touch events</h4>
      <section>
        <mdb-carousel :items="basicCarousel" slide indicators touch></mdb-carousel>
      </section>
    </section>

    <section class="demo-section">
      <h4>Multi-item carousel with touch events</h4>
      <section>
        <mdb-carousel :items="9" multi indicators slide touch>
          <template v-slot:1>
            <mdb-card>
              <mdb-card-image
                src="https://mdbootstrap.com/img/Photos/Others/img (36).jpg"
                alt="Card image cap"
              ></mdb-card-image>
              <mdb-card-body class="text-center">
                <mdb-card-title>First Page</mdb-card-title>
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn color="primary" rounded size="md">Button</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </template>
          <template v-slot:2>
            <mdb-card>
              <mdb-card-image
                src="https://mdbootstrap.com/img/Photos/Others/img (34).jpg"
                alt="Card image cap"
              ></mdb-card-image>
              <mdb-card-body class="text-center">
                <mdb-card-title>First Page</mdb-card-title>
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn color="primary" rounded size="md">Button</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </template>
          <template v-slot:3>
            <mdb-card>
              <mdb-card-image
                src="https://mdbootstrap.com/img/Photos/Others/img (38).jpg"
                alt="Card image cap"
              ></mdb-card-image>
              <mdb-card-body class="text-center">
                <mdb-card-title>First Page</mdb-card-title>
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn color="primary" rounded size="md">Button</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </template>
          <template v-slot:4>
            <mdb-card>
              <mdb-card-image
                src="https://mdbootstrap.com/img/Photos/Others/img (29).jpg"
                alt="Card image cap"
              ></mdb-card-image>
              <mdb-card-body class="text-center">
                <mdb-card-title>Second Page</mdb-card-title>
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn color="primary" rounded size="md">Button</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </template>
          <template v-slot:5>
            <mdb-card>
              <mdb-card-image
                src="https://mdbootstrap.com/img/Photos/Others/img (30).jpg"
                alt="Card image cap"
              ></mdb-card-image>
              <mdb-card-body class="text-center">
                <mdb-card-title>Second Page</mdb-card-title>
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn color="primary" rounded size="md">Button</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </template>
          <template v-slot:6>
            <mdb-card>
              <mdb-card-image
                src="https://mdbootstrap.com/img/Photos/Others/img (27).jpg"
                alt="Card image cap"
              ></mdb-card-image>
              <mdb-card-body class="text-center">
                <mdb-card-title>Second Page</mdb-card-title>
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn color="primary" rounded size="md">Button</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </template>
          <template v-slot:7>
            <mdb-card>
              <mdb-card-image
                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                alt="Card image cap"
              ></mdb-card-image>
              <mdb-card-body class="text-center">
                <mdb-card-title>Third Page</mdb-card-title>
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn color="primary" rounded size="md">Button</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </template>
          <template v-slot:8>
            <mdb-card>
              <mdb-card-image
                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                alt="Card image cap"
              ></mdb-card-image>
              <mdb-card-body class="text-center">
                <mdb-card-title>Third Page</mdb-card-title>
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn color="primary" rounded size="md">Button</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </template>
          <template v-slot:9>
            <mdb-card>
              <mdb-card-image
                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                alt="Card image cap"
              ></mdb-card-image>
              <mdb-card-body class="text-center">
                <mdb-card-title>Third Page</mdb-card-title>
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn color="primary" rounded size="md">Button</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </template>
        </mdb-carousel>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbCarousel,
  mdbRow,
  mdbIcon,
  mdbContainer,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn
} from "mdbvue";

export default {
  name: "CarouselPage",
  components: {
    mdbCarousel,
    mdbRow,
    mdbIcon,
    mdbContainer,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn
  },
  data() {
    return {
      basicCarousel: [
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
          mask: "black-light",
          alt: "First Slide",
          caption: {
            title: "First slide"
          }
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",
          mask: "black-strong",
          caption: {
            title: "Second slide"
          }
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",
          mask: "black-slight",
          caption: {
            title: "Third slide"
          }
        }
      ],
    };
  }
};
</script> 