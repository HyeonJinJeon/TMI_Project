<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Testimonials Sections</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/sections/testimonials/#v-4"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="text-center my-5">
        <mdb-carousel
          multi
          slide
          :items="9"
          testimonial
          indicators
          indicatorsColor="indigo"
          controlls
          navColor="indigo"
        >
          <template #[i+1] v-for="(testimonial, i) in testimonials">
            <mdb-testimonial :key="i">
              <mdb-avatar
                wrapperClass="z-depth-1 mb-4"
                :width="200"
                circle
                tag="img"
                :src="testimonial.img"
              />

              <h4 class="font-weight-bold mt-4">{{testimonial.name}}</h4>
              <h6 class="blue-text font-weight-bold my-3">{{testimonial.position}}</h6>
              <p class="font-weight-normal">
                <mdb-icon icon="quote-left" class="pr-2"></mdb-icon>
                {{testimonial.quote}}
              </p>
              <div>
                <mdb-rating :value="testimonial.rating" disabled far iconActiveClass="grey-text" />
              </div>
            </mdb-testimonial>
          </template>
        </mdb-carousel>
      </section>
    </mdb-container>
  </mdb-container>
</template>

<script>
import {
  mdbCarousel,
  mdbRating,
  mdbContainer,
  mdbRow,
  mdbTestimonial,
  mdbAvatar,
  mdbIcon
} from "mdbvue";

export default {
  name: "TestimonialsMultiPage",
  components: {
    mdbCarousel,
    mdbRating,
    mdbContainer,
    mdbRow,
    mdbTestimonial,
    mdbAvatar,
    mdbIcon
  },
  data() {
    return {
      testimonials: [
        {
          img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg",
          quote:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
          name: "Anna Deynah",
          position: "Web Designer",
          rating: 4
        },
        {
          img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",
          quote:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
          name: "John Doe",
          position: "Web Developer",
          rating: 5
        },
        {
          img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
          quote:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
          name: "Abbey Clark",
          position: "Photographer",
          rating: 4
        },
        {
          img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg",
          quote:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
          name: "Blake Dabney",
          position: "Web Designer",
          rating: 4
        },
        {
          img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg",
          quote:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
          name: "Cami Gosse",
          position: "Frontend Developer",
          rating: 5
        },
        {
          img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg",
          quote:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
          name: "Andrea Clay",
          position: "Photographer",
          rating: 4
        },
        {
          img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg",
          quote:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
          name: "Bobby Haley",
          position: "Web Developer",
          rating: 5
        },
        {
          img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg",
          quote:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
          name: "Elisa Janson",
          position: "Frontend Developer",
          rating: 5
        },
        {
          img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg",
          quote:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
          name: "Rob Jacobs",
          position: "Backend Developer",
          rating: 4
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>


