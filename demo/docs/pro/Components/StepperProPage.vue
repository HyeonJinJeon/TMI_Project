<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Stepper</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/components/stepper/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <hr />
    <mdb-container class="mt-5">
      <section class="demo-section">
        <h4>Registration form with steps</h4>
        <section class="p-5">
          <mdb-stepper
            buttons
            v-model="registrationStep"
            :steps="registrationStepper"
          >
            <template #1>
              <h3 class="font-weight-bold pl-0 my-4">
                <strong>Basic Information</strong>
              </h3>
              <mdb-input label="Email" />
              <mdb-input label="Username" />
              <mdb-input label="Password" />
              <mdb-input label="Repeat Password" />
            </template>
            <template #2>
              <h3 class="font-weight-bold pl-0 my-4">
                <strong>Personal Data - {{ name }}</strong>
              </h3>
              <mdb-input v-model="name" label="First Name" />
              <mdb-input label="Second Name" />
              <mdb-input label="Surname" />
              <mdb-textarea label="Address" />
            </template>
            <template #3>
              <h3 class="font-weight-bold pl-0 m-4">
                <strong>Terms and conditions</strong>
              </h3>
              <mdb-input
                type="checkbox"
                id="checkbox1"
                label="I agree to the terms and conditions"
              />
              <mdb-input
                class="mb-5"
                type="checkbox"
                id="checkbox2"
                label="I want to receive newsletter"
              />
            </template>
            <template #4>
              <h3 class="font-weight-bold pl-0 my-4">
                <strong>Finish</strong>
              </h3>
              <h2 class="text-center font-weight-bold my-4">
                Registration completed!
              </h2>
            </template>
          </mdb-stepper>
        </section>
        <mdb-btn
          class="mt-4"
          rounded
          outline="indigo"
          @click="registrationStep++"
          >next step</mdb-btn
        >
        <h4 class="mt-4">Current step: {{ registrationStep }}</h4>
      </section>

      <section class="demo-section">
        <h4>Vertical registration form with steps</h4>
        <section class="p-5">
          <mdb-stepper
            vertical
            buttons
            :steps="registrationStepper"
            :options="verticalOptions"
          >
            <template #1>
              <h3 class="font-weight-bold pl-0 my-4">
                <strong>Basic Information</strong>
              </h3>
              <mdb-input label="Email" />
              <mdb-input label="Username" />
              <mdb-input label="Password" />
              <mdb-input label="Repeat Password" />
            </template>
            <template #2>
              <h3 class="font-weight-bold pl-0 my-4">
                <strong>Personal Data</strong>
              </h3>
              <mdb-input label="First Name" />
              <mdb-input label="Second Name" />
              <mdb-input label="Surname" />
              <mdb-textarea label="Address" />
            </template>
            <template #3>
              <h3 class="font-weight-bold pl-0 my-4">
                <strong>Terms and conditions</strong>
              </h3>
              <mdb-input
                type="checkbox"
                id="checkbox1"
                label="I agree to the terms and conditions"
              />
              <mdb-input
                type="checkbox"
                id="checkbox2"
                label="I want to receive newsletter"
              />
            </template>
            <template #4>
              <h3 class="font-weight-bold pl-0 my-4">
                <strong>Finish</strong>
              </h3>
              <h2 class="text-center font-weight-bold my-4">
                Registration completed!
              </h2>
            </template>
          </mdb-stepper>
        </section>
      </section>

      <section class="demo-section">
        <h4>Steps within form</h4>
        <section class="p-5">
          <mdb-container>
            <mdb-row>
              <mdb-col xl="6" lg="7" md="10">
                <mdb-card>
                  <mdb-card-body>
                    <h2 class="text-center font-weight-bold pt-4 pb-5">
                      <strong>Steps form example</strong>
                    </h2>
                    <mdb-stepper within buttons :steps="3">
                      <template #1>
                        <h3 class="font-weight-bold pl-0 my-4">
                          <strong>Step 1</strong>
                        </h3>
                        <mdb-input label="First Name" />
                        <mdb-input label="Second Name" />
                        <mdb-textarea label="Address" />
                      </template>
                      <template #2>
                        <h3 class="font-weight-bold pl-0 my-4">
                          <strong>Step 2</strong>
                        </h3>
                        <mdb-input label="Company Name" />
                        <mdb-input label="Company Addresws" />
                        <mdb-textarea label="Address" />
                      </template>
                      <template #3>
                        <h3 class="font-weight-bold pl-0 my-4">
                          <strong>Step 3</strong>
                        </h3>
                      </template>
                    </mdb-stepper>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col xl="6" lg="7" md="10">
                <mdb-card>
                  <mdb-card-body>
                    <h2 class="text-center font-weight-bold pt-4 pb-5">
                      <strong>Steps form example</strong>
                    </h2>
                    <mdb-stepper
                      within
                      buttons
                      :options="withinOptions"
                      :steps="withinSteps"
                    >
                      <template #1>
                        <h3 class="font-weight-bold pl-0 my-4">
                          <strong>Step 1</strong>
                        </h3>
                        <mdb-input label="First Name" />
                        <mdb-input label="Second Name" />
                        <mdb-textarea label="Address" />
                      </template>
                      <template #2>
                        <h3 class="font-weight-bold pl-0 my-4">
                          <strong>Step 2</strong>
                        </h3>
                        <mdb-input label="Company Name" />
                        <mdb-input label="Company Addresws" />
                        <mdb-textarea label="Address" />
                      </template>
                      <template #3>
                        <h3 class="font-weight-bold pl-0 my-4">
                          <strong>Step 3</strong>
                        </h3>
                      </template>
                    </mdb-stepper>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
            </mdb-row>
          </mdb-container>
        </section>
      </section>

      <section class="demo-section">
        <h4>Stepper with validation</h4>
        <section class="p-5">
          <mdb-stepper
            class="pt-5"
            buttons
            validation
            :validatedSteps="validatedSteps"
            @validate="validate"
            @submit="submit"
            :steps="validationStepper"
            :options="validationOptions"
          >
            <template #1>
              <h3 class="font-weight-bold pt-3 pl-0 my-4">
                <mdb-card-title>Personal Information</mdb-card-title>
              </h3>
              <form ref="form1">
                <mdb-input required label="First Name" v-model="form[0].name" />
                <mdb-input
                  required
                  label="Second Name"
                  v-model="form[0].surname"
                />
                <mdb-input required label="Address" v-model="form[0].address" />
              </form>
            </template>
            <template #2>
              <h3 class="font-weight-bold pt-3 pl-0 my-4">
                <mdb-card-title>Company Information</mdb-card-title>
              </h3>
              <form ref="form2">
                <mdb-input
                  required
                  label="Company Name"
                  v-model="form[1].company"
                />
                <mdb-input
                  required
                  label="Company Address"
                  v-model="form[1].address"
                />
              </form>
            </template>
            <template #3>
              <h3 class="font-weight-bold pt-3 pl-0 my-4">
                <mdb-card-title>Terms and conditions</mdb-card-title>
              </h3>
              <form ref="form3">
                <mdb-input
                  type="checkbox"
                  id="checkbox3"
                  required
                  v-model="form[2].condition"
                  label="I agree to the terms and conditions"
                />
                <mdb-input
                  type="checkbox"
                  id="checkbox4"
                  label="I want to receive newsletter"
                />
              </form>
            </template>
          </mdb-stepper>
        </section>
      </section>
      <section class="demo-result-section">
        {{ validation }}
      </section>

      <section class="demo-section">
        <h4>Vertical stepper (non-linear)</h4>
        <section class="p-5">
          <mdb-stepper simpleV :steps="3" :value="2">
            <template #1>
              <form>
                <mdb-input label="name" />
              </form>
            </template>
            <template #2>
              <form>
                <mdb-input label="email" type="email" />
              </form>
            </template>
            <template #3>
              <p>Finish!</p>
            </template>
          </mdb-stepper>
        </section>
      </section>

      <section class="demo-section">
        <h4>Vertical stepper linear with buttons</h4>
        <section class="p-5">
          <mdb-stepper
            simpleV
            :steps="4"
            buttons
            linear
            :options="simpleOptions"
          >
            <template #1>
              <form>
                <mdb-input label="name" />
              </form>
            </template>
            <template #2>
              <form>
                <mdb-input label="email" type="email" />
              </form>
            </template>
            <template #3>
              <form>
                <mdb-input label="message" type="textarea" :rows="4" />
              </form>
            </template>
            <template #4>
              <p>Finish!</p>
            </template>
          </mdb-stepper>
        </section>
      </section>

      <section class="demo-section">
        <h4>Vertical stepper with validation</h4>
        <section class="p-5">
          <mdb-stepper
            simpleV
            :steps="3"
            buttons
            validation
            :validatedSteps="validatedVerticalSteps"
            @validate="validateVertical"
            @submit="submitVertical"
          >
            <template #1>
              <form ref="vertical1">
                <mdb-input label="name" v-model="vertical.name" required />
              </form>
            </template>
            <template #2>
              <form ref="vertical2">
                <mdb-input
                  label="surname"
                  v-model="vertical.surname"
                  required
                />
              </form>
            </template>
            <template #3>
              <p>Finish!</p>
            </template>
          </mdb-stepper>
        </section>
      </section>
      <section class="demo-result-section">
        {{ validation2 }}
      </section>

      <section class="demo-section">
        <h4>Horizontal stepper (linear)</h4>
        <section class="p-5">
          <mdb-stepper simpleH :steps="4" buttons linear>
            <template #1>
              <form>
                <mdb-input label="name" />
              </form>
            </template>
            <template #2>
              <form>
                <mdb-input label="email" type="email" />
              </form>
            </template>
            <template #3>
              <form>
                <mdb-input label="message" type="textarea" :rows="4" />
              </form>
            </template>
            <template #4>
              <p>Finish!</p>
            </template>
          </mdb-stepper>
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
  mdbStepper,
  mdbInput,
  mdbTextarea,
  mdbCard,
  mdbCardBody,
  mdbIcon,
  mdbCardTitle,
  mdbBtn
} from "mdbvue";

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbStepper,
    mdbInput,
    mdbTextarea,
    mdbCard,
    mdbCardBody,
    mdbIcon,
    mdbCardTitle,
    mdbBtn
  },
  data() {
    return {
      validation: '',
      validation2: '',
      registrationStep: 2,
      registrationStepper: [
        { icon: "folder", far: true, name: "Basic Information" },
        { icon: "pencil-alt", name: "Personal Data" },
        { icon: "image", far: true, name: "Terms and Conditions" },
        { icon: "check", name: "Finish" }
      ],
      validationStepper: [
        { icon: "folder", far: true, name: "Basic Information" },
        { icon: "pencil-alt", name: "Company" },
        { icon: "check", name: "Finish" }
      ],
      verticalOptions: {
        stepBtn: { color: "info", active: "amber", iconClass: "white-text" },
        nextBtn: { outline: "info", icon: "chevron-right" },
        prevBtn: { outline: "info", icon: "chevron-left" },
        submitBtn: { color: "amber", icon: "check" },
        lineColor: "amber"
      },
      withinSteps: [
          { icon: "pen" },
          { icon: "map"},
          { icon: "paper-plane", far: true }
        ],
      withinOptions: {
        withinBtn: {
          color: "info",
          active: "amber"
        },
        nextBtn: {
          outline: "amber"
        },
        prevBtn: {
          outline: "amber"
        },
        submitBtn: {
          outline: "info"
        }
      },
      validationOptions: {
        stepBtn: {
          outline: "pink",
          active: "pink",
          iconClass: "pink-text"
        },
        nextBtn: {
          outline: "pink"
        },
        prevBtn: {
          outline: "pink"
        },
        submitBtn: {
          color: "success"
        },
        lineColor: "pink"
      },
      simpleOptions: {
        nextBtn: {
          color: "primary",
          text: "Continue"
        },
        prevBtn: {
          color: "secondary",
          text: "Go back"
        },
        submitBtn: {
          text: "Finish!"
        },
        stepBtn: {
          color: "secondary-color"
        }
      },
      name: "John Smith",
      validatedSteps: {},
      form: [
        {
          name: "",
          surname: "",
          address: ""
        },
        {
          company: "",
          address: ""
        },
        {
          condition: false
        }
      ],
      vertical: {
        name: "",
        surname: ""
      },
      validatedVerticalSteps: {}
    };
  },
  methods: {
    checkForm(form) {
      return (
        Object.keys(form).length ===
        Object.keys(form).filter(key => form[key].length > 0).length
      );
    },
    validate(step) {
      this.$refs[`form${step}`].classList.add("was-validated");

      if (step === 3) {
        this.validatedSteps[step] = this.form[step - 1].condition;
      } else if (this.checkForm(this.form[step - 1])) {
        this.validatedSteps[step] = true;
      } else {
        this.validatedSteps[step] = false;
      }
    },
    validateVertical(step) {
      this.$refs[`vertical${step}`].classList.add("was-validated");
      if (step === 1 && this.vertical.name.length > 0)
        this.validatedVerticalSteps[1] = true;
      else if (step === 2 && this.vertical.surname.length > 0)
        this.validatedVerticalSteps[2] = true;
    },
    submit() {
      this.validate(3);
      if (this.validatedSteps[3]) {
        this.validation = 'Submited!';
      }
    },
    submitVertical() {
      this.validation2 = `${this.vertical.name} has submitted the form.`;
    }
  }
};
</script>

<style></style>
