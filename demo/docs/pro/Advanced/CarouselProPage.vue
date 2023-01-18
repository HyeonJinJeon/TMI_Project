<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Carousel</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/advanced/carousel/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <section class="demo-section">
      <h4>Basic multi-item carousel</h4>
      <section>
        <mdb-carousel :items="9" multi indicators controlls slide :interval="8000">
          <template #[i+1] v-for="(img, i) in basic">
            <mdb-card :key="i">
              <mdb-card-image :src="img" alt="Card image cap"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title>{{i + 1}}</mdb-card-title>
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn color="primary" size="md">Button</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </template>
        </mdb-carousel>
      </section>
    </section>

    <section class="demo-section">
      <h4>Multi item carousel with v-model</h4>
      <section>
        <mdb-carousel
          :items="9"
          multi
          indicators
          controlls
          leftIcon="angle-double-left"
          rightIcon="angle-double-right"
          navColor="mdb-color"
          slide
          indicatorsColor="mdb-color"
          v-model="multi"
        >
          <template #[i+1] v-for="(img, i) in multiItems">
            <mdb-card :key="i">
              <mdb-card-image :src="img" alt="Card image cap"></mdb-card-image>
              <mdb-card-body class="text-center">
                <mdb-card-title>{{i+1}}</mdb-card-title>
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn color="amber" rounded size="md">Button</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </template>
        </mdb-carousel>

        <p class="mt-3 ml-1">
          Current index:
          <strong>{{multi}}</strong>
        </p>
        <mdb-row class="mt-3 ml-1">
          <mdb-btn size="sm" floating tag="a" color="amber" @click="multi++" icon="plus"></mdb-btn>
          <mdb-btn size="sm" floating tag="a" color="amber" @click="multi--" icon="minus"></mdb-btn>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>One item per time</h4>
      <section>
        <mdb-carousel
          :items="6"
          multi
          one
          indicators
          controlls
          leftIcon="angle-double-left"
          rightIcon="angle-double-right"
          navColor="info"
          indicatorsColor="info-color"
          slide
        >
          <template #[i+1] v-for="(img, i) in singleItems">
            <mdb-card :key="i">
              <mdb-card-image :src="img" alt="Card image cap"></mdb-card-image>
              <mdb-card-body class="text-center">
                <mdb-card-title>{{i+1}}</mdb-card-title>
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn color="pink" rounded size="md">Button</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </template>
        </mdb-carousel>
      </section>
    </section>

    <section class="demo-section">
      <h4>Thumbnails carousel</h4>
      <section>
        <mdb-carousel :items="thumbnailCarousel" thumbnails></mdb-carousel>
      </section>
    </section>

    <section class="demo-section">
      <h4>Lightbox carousel</h4>
      <section>
        <mdb-carousel
          :items="9"
          multi
          slide
          controlls
          indicators
          indicatorsColor="secondary-color"
          navColor="secondary"
        >
          <template v-for="(i, index) in items" #[index+1]>
            <div :key="index" style="cursor: pointer">
              <mdb-row md="4" class="d-md-inline-block px-2" @click.native="showLightbox(i)">
                <figure>
                  <img :src="imgs[i]" class="img-fluid" alt />
                </figure>
              </mdb-row>
              <mdb-row md="4" class="d-md-inline-block px-2" @click.native="showLightbox(i + 1)">
                <figure>
                  <img :src="imgs[i+1]" class="img-fluid" alt />
                </figure>
              </mdb-row>
            </div>
          </template>
        </mdb-carousel>

        <mdb-lightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></mdb-lightbox>
      </section>
    </section>
    <section class="demo-section">
      <h4>Testimonial Carousel</h4>
      <section>
        <mdb-carousel testimonial controlls :items="3">
          <template #[i+1] v-for="(testimonial, i) in testimonials">
            <mdb-testimonial class="text-center" :key="i">
              <mdb-avatar
                wrapperClass="z-depth-1 mb-4"
                :width="200"
                circle
                tag="img"
                :src="testimonial.img"
              />
              <p>
                <mdb-icon icon="quote-left" class="pr-1"></mdb-icon>
                {{testimonial.quote}}
              </p>
              <h4 class="font-weight-bold">{{testimonial.name}}</h4>
              <h6 class="font-weight-bold my-3">{{testimonial.position}}</h6>
              <mdb-rating :value="testimonial.rating" disabled far iconActiveClass="blue-text" />
            </mdb-testimonial>
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
  mdbBtn,
  mdbLightbox,
  mdbTestimonial,
  mdbAvatar,
  mdbRating
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
    mdbBtn,
    mdbLightbox,
    mdbTestimonial,
    mdbAvatar,
    mdbRating
  },
  data() {
    return {
      multi: 2,
      thumbnailCarousel: [
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg",
          thumbnail:
            "https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg"
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg",
          thumbnail: "https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg"
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg",
          thumbnail: "https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
        }
      ],
      imgs: [
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(2).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(3).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(4).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(5).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(6).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(7).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(8).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(9).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(10).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(11).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(12).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(13).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(14).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(15).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(16).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(17).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(18).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(19).jpg"
      ],
      basic: [
        "https://mdbootstrap.com/img/Photos/Others/img (36).jpg",
        "https://mdbootstrap.com/img/Photos/Others/img (34).jpg",
        "https://mdbootstrap.com/img/Photos/Others/img (38).jpg",
        "https://mdbootstrap.com/img/Photos/Others/img (29).jpg",
        "https://mdbootstrap.com/img/Photos/Others/img (30).jpg",
        "https://mdbootstrap.com/img/Photos/Others/img (27).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
      ],
      multiItems: [
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
      ],
      singleItems: [
        "https://mdbootstrap.com/img/Photos/Others/img (36).jpg",
        "https://mdbootstrap.com/img/Photos/Others/img (34).jpg",
        "https://mdbootstrap.com/img/Photos/Others/img (38).jpg",
        "https://mdbootstrap.com/img/Photos/Others/img (29).jpg",
        "https://mdbootstrap.com/img/Photos/Others/img (30).jpg",
        "https://mdbootstrap.com/img/Photos/Others/img (27).jpg"
      ],
      testimonials: [
        {
          img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
          quote:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.",
          name: "Anna Deynah",
          position: "Founder at ET Company",
          rating: 4
        },
        {
          img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
          quote:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.",
          name: "Maria Kate",
          position: "Photographer at Studio LA",
          rating: 5
        },
        {
          img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",
          quote:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          name: "John Doe ",
          position: "Front-end Developer in NY",
          rating: 4
        }
      ],
      visible: false,
      index: 0
    };
  },
  methods: {
    showLightbox(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  },
  computed: {
    items() {
      return this.imgs.map((_, i) => i).filter((_, i) => i % 2 === 0);
    }
  }
};
</script>