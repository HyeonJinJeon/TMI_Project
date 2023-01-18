<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Autocomplete</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/forms/autocomplete/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>

    <section class="demo-section">
      <h4 class="mb-5">Basic Example with v-model</h4>
      <section>
        <mdb-row>
          <mdb-col md="6" class="mx-auto">
            <form>
            <mdb-autocomplete
              icon="heart"
              :data="states"
              label="What is your favorite US state?"
              v-model="state"
            />
            </form>
          </mdb-col>
        </mdb-row>
        <p>
          You've selected: <strong>{{ state }}</strong>
        </p>
        <div class="d-flex justify-content-center mt-5">
          <mdb-btn
            rounded
            size="md"
            :color="state === 'Kansas' ? 'amber' : 'info'"
            @click="state = 'Kansas'"
            >select Kansas</mdb-btn
          >
          <mdb-btn
            rounded
            size="md"
            :color="state === 'Delaware' ? 'amber' : 'info'"
            @click="state = 'Delaware'"
            >select Delaware</mdb-btn
          >
          <mdb-btn
            rounded
            size="md"
            :color="state === 'Alabama' ? 'amber' : 'info'"
            @click="state = 'Alabama'"
            >select Alabama</mdb-btn
          >
          <mdb-btn
            rounded
            size="md"
            :color="state === 'Arizona' ? 'amber' : 'info'"
            @click="state = 'Arizona'"
            >select Arizona</mdb-btn
          >
          <mdb-btn
            rounded
            size="md"
            :color="state === 'North Carolina' ? 'amber' : 'info'"
            @click="state = 'North Carolina'"
            >select North Carolina</mdb-btn
          >
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="mb-5">Dropdown appended to body</h4>
      <section>
        <mdb-row>
          <mdb-col md="6" class="mx-auto">
            <mdb-autocomplete
              :data="states"
              outline
              append-to-body
              label="Appended to body"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="mb-5">Dropdown on top with disabled scrolling</h4>
      <section>
        <mdb-row>
          <mdb-col md="6" class="mx-auto">
            <mdb-autocomplete
              :data="states"
              top
              outline
              :flip-on-scroll="false"
              label="Dropdown on top"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="mb-5">Disabled</h4>
      <section>
        <mdb-row>
          <mdb-col md="6" class="mx-auto">
            <mdb-autocomplete
              icon="ban"
              :data="states"
              outline
              label="Disabled"
              disabled
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="mb-5">Validation</h4>
      <section>
        <mdb-row>
          <mdb-col md="6" class="mx-auto">
            <mdb-autocomplete
              :data="states"
              label="Autocomplete with validation"
              validation
              :wasValidated="wasValidated"
              @clear="wasValidated = false"
              invalidFeedback="Choose your state"
              validFeedback="Everything is ok"
              showAll
              icon="paper-plane"
            />
          </mdb-col>
          <mdb-col>
            <mdb-btn
              size="md"
              rounded
              color="amber"
              @click="wasValidated = true"
              >Validate input</mdb-btn
            >
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="mb-5">Custom filter function</h4>
      <section>
        <mdb-row>
          <mdb-col md="6" class="mx-auto">
            <mdb-autocomplete
              outline
              :data="states"
              label="Select your state"
              :filterFunction="filterResults"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4 class="mb-5">Async data (autocomplete with background)</h4>
      <section>
        <mdb-row>
          <mdb-col md="6" class="mx-auto">
            <mdb-autocomplete
              @search="requestCountry"
              :data="countryList"
              :filterFunction="item => item"
              label="Select your country"
              :isAsync="true"
              bg
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4 class="mb-5">Autocomplete within form</h4>
      <section>
        <mdb-row>
          <mdb-col md="5">
            <mdb-card>
              <mdb-card-body class="mx-4">
                <div class="text-center">
                  <h3 class="dark-grey-text mb-5"><strong>Sign up</strong></h3>
                </div>
                <mdb-input label="Your email" type="email" />
                <mdb-input
                  label="Your password"
                  type="password"
                  containerClass="mb-0"
                />
                <mdb-autocomplete
                  :data="countries"
                  label="Your country"
                  class="pb-3"
                />
                <div class="text-center mb-3">
                  <mdb-btn
                    type="button"
                    gradient="blue"
                    rounded
                    class="btn-block z-depth-1a"
                    >Sign up</mdb-btn
                  >
                </div>
                <p
                  class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"
                >
                  or Sign up with:
                </p>
                <div class="row my-3 d-flex justify-content-center">
                  <mdb-btn
                    type="button"
                    color="white"
                    rounded
                    class="mr-md-3 z-depth-1a"
                    ><mdb-icon
                      fab
                      icon="facebook-f"
                      class="blue-text text-center"
                  /></mdb-btn>
                  <mdb-btn
                    type="button"
                    color="white"
                    rounded
                    class="mr-md-3 z-depth-1a"
                    ><mdb-icon fab icon="twitter" class="blue-text"
                  /></mdb-btn>
                  <mdb-btn
                    type="button"
                    color="white"
                    rounded
                    class="z-depth-1a"
                    ><mdb-icon fab icon="google-plus-g" class="blue-text"
                  /></mdb-btn>
                </div>
              </mdb-card-body>
              <mdb-modal-footer class="mx-5 pt-3 mb-1">
                <p class="font-small grey-text d-flex justify-content-end">
                  Not a member? <a href="#" class="blue-text ml-1"> Sign In</a>
                </p>
              </mdb-modal-footer>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="mb-5">Autocomplete within modal</h4>
      <section>
        <mdb-row>
          <mdb-col md="6" style="margin-right: auto; margin-left: auto">
            <mdb-btn @click.native="showModal = true" rounded
              >Launch demo modal</mdb-btn
            >

            <mdb-modal :show="showModal" @close="showModal = false" cascade>
              <mdb-modal-header class="light-blue darken-3 white-text">
                <h4 class="title">
                  <mdb-icon icon="pencil-alt" /> Contact form
                </h4>
              </mdb-modal-header>
              <mdb-modal-body>
                <mdb-input icon="envelope" label="Your name" />
                <mdb-input icon="lock" label="Your email" />
                <mdb-autocomplete :scroll="false" icon="tag" label="Subject" :data="subjects" />
                <mdb-textarea icon="pencil-alt" label="Your message" />

                <div class="text-center">
                  <mdb-btn color="info" class="mb-2 waves-light"
                    >Send <mdb-icon icon="send" class="ml-1"></mdb-icon
                  ></mdb-btn>
                </div>
              </mdb-modal-body>
            </mdb-modal>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import axios from "axios";
import {
  mdbAutocomplete,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbInput,
  mdbTextarea,
  mdbBtn,
  mdbCard,
  mdbCardBody,
  mdbModal,
  mdbModalHeader,
  mdbModalBody,
  mdbModalFooter,
  mdbIcon
} from "mdbvue";

export default {
  methods: {
    filterResults(item, search) {
      return item.toLowerCase().indexOf(search.toLowerCase()) === 0;
    },
    requestCountry(value) {
      if (value === "") {
        this.countryList = [];
        return;
      }
      axios
        .get(`https://restcountries.eu/rest/v2/name/${value}`)
        .then(response => {
          this.countryList = response.data.map(country => country.name);
        })
        .catch(() => {
          this.countryList = [];
        });
    },
    getAllCountries() {
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then(response => {
          this.countries = response.data.map(country => country.name);
        })
    }
  },
  name: "AutocompletePage",
  components: {
    mdbAutocomplete,
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbInput,
    mdbTextarea,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter,
    mdbIcon,
    mdbModal
  },
  data() {
    return {
      state: "Arizona",
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illnois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ],
      countries: [],
      subjects: [
        "Where's My Stuff?",
        "Cancel Items or Orders",
        "Returns & Refunds",
        "Shipping Rates & Information",
        "Change Your Payment Method",
        "Manage Your Account Information",
        "About Two-Step Verification",
        "Cancel Items or Orders",
        "Change Your Order Information",
        "Contact Third-Party Sellers",
        "More in Managing Your Orders"
      ],
      countryList: [],
      showModal: false,
      wasValidated: false
    };
  },
  mounted() {
    this.getAllCountries();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font-small {
  font-size: 0.8rem;
}
</style>
