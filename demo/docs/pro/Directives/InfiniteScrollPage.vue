<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Infinite Scroll</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/directives/infinite-scroll/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="demo-section">
        <h4>Infinite scroll (within container)</h4>
        <section>
          <mdb-list-group
            v-mdb-infinite-scroll="showMoreItems"
            flush
            style="max-height: 255px; overflow-y: scroll;"
          >
            <mdb-list-group-item
              v-for="(activity, i) in visibleActivities"
              :key="i"
              social
              circle
              iconColor="grey"
              :icon="activity.icon"
              >{{ activity.text }}</mdb-list-group-item
            >
          </mdb-list-group>
        </section>
      </section>
      <section class="demo-section">
        <h4>Infinite scroll (spinner)</h4>
        <section>
          <ul class="list-unstyled" v-mdb-infinite-scroll="loadItems">
            <li v-for="(item, i) in visibleItems" :key="i" class="my-2">
              <mdb-card>
                <mdb-card-body>
                  <mdb-row>
                    <mdb-col sm="6">
                      <img :src="item.img" class="img-fluid" />
                    </mdb-col>
                    <mdb-col sm="6">
                      <h4 class="text-primary">{{ item.title }}</h4>
                      <h6>{{ item.category }}</h6>
                      <p class="grey-text my-4">{{ item.description }}</p>
                      <h2>{{ item.price }}</h2>

                      <div class="d-flex justify-content-end">
                        <mdb-btn
                          tag="a"
                          floating
                          color="primary"
                          icon="shopping-cart"
                        />
                        <mdb-btn tag="a" floating color="pink" icon="heart" />
                      </div>
                    </mdb-col>
                  </mdb-row>
                </mdb-card-body>
              </mdb-card>
            </li>
            <li v-if="loading" class="text-center mt-5"><mdb-spinner /></li>
          </ul>
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
  mdbSpinner,
  mdbBtn,
  mdbCard,
  mdbCardBody,
  mdbListGroup,
  mdbListGroupItem,
  mdbInfiniteScroll
} from "mdbvue";

export default {
  name: "InfiniteScrollPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbSpinner,
    mdbBtn,
    mdbCard,
    mdbListGroup,
    mdbListGroupItem,
    mdbCardBody
  },
  data() {
    return {
      items: [
        {
          img:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg",
          category: "Shoes",
          title: "Leather boots",
          description:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
          price: "69$"
        },
        {
          img:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg",
          category: "Jeans",
          title: "Slim jeans",
          description:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
          price: "99$"
        },
        {
          img: "https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg",
          category: "Shorts",
          title: "Denim shorts",
          description:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
          price: "49$"
        },
        {
          img:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg",
          category: "Accesories",
          title: "Summer hat",
          description:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
          price: "39$"
        },
        {
          img:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(37).jpg",
          category: "Shoes",
          title: "Black Heels",
          description:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
          price: "79$"
        },
        {
          img:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(31).jpg",
          category: "Outwear",
          title: "Black jacket",
          description:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
          price: "149$"
        },
        {
          img:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(38).jpg",
          category: "Accesories",
          title: "Leather bag",
          description:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
          price: "29$"
        },
        {
          img:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/belt.jpg",
          category: "Accesories",
          title: "Leather belt",
          description:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
          price: "79$"
        },
        {
          img:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(57).jpg",
          category: "Shoes",
          title: "Snickers",
          description:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
          price: "139$"
        }
      ],
      show: 3,
      loading: false,
      activities: [
        {
          icon: "swimmer",
          text: "Swimming"
        },
        {
          icon: "running",
          text: "Running"
        },
        {
          icon: "skating",
          text: "Skating"
        },
        {
          icon: "skiing",
          text: "Skiing"
        },
        {
          icon: "snowboarding",
          text: "Snowboarding"
        },
        {
          icon: "quidditch",
          text: "Quidditch"
        },
        {
          icon: "dumbbell",
          text: "Weight lifting"
        },
        {
          icon: "basketball-ball",
          text: "Basketball"
        },
        {
          icon: "futbol",
          text: "Football"
        },
        {
          icon: "volleyball-ball",
          text: "Volleyball"
        },
        {
          icon: "hockey-puck",
          text: "Hockey"
        },
        {
          icon: "table-tennis",
          text: "Table Tennis"
        },
        {
          icon: "skiing-nordic",
          text: "Nordic skiing"
        },
        {
          icon: "golf-ball",
          text: "Golf"
        },
        {
          icon: "biking",
          text: "Cycling"
        },
        {
          icon: "chess",
          text: "Chess"
        }
      ],
      amount: 4
    };
  },
  computed: {
    visibleItems() {
      return this.items.slice(0, this.show);
    },
    visibleActivities() {
      return this.activities.slice(0, this.amount);
    }
  },
  methods: {
    showMoreItems() {
      if (this.amount + 2 < this.activities.length) this.amount += 2;
      else this.amount = this.activities.length - 1;
    },
    loadItems() {
      if (!this.loading && this.show < this.items.length) {
        this.loading = true;
        setTimeout(() => {
          this.show += 1;
          this.loading = false;
        }, 1000);
      }

      return;
    }
  },
  directives: { mdbInfiniteScroll }
};
</script>

<style scoped></style>
