<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Time Picker</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/forms/time-picker/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr class="mb-4" />

    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2
              placeholder="Select your time"
              label="format: 24h"
              :hours-format="24"
              v-model="picker1"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{ picker1 }}
    </section>

    <section class="demo-section">
      <h4>Auto close</h4>
      <section>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2
              placeholder="Select your time"
              label="Auto close"
              v-model="pickerAutoClose"
              auto-close
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{ pickerAutoClose }}
    </section>

    <section class="demo-section">
      <h4>Twelve hour clock</h4>
      <section>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2
              placeholder="Select your time"
              label="format: am/pm"
              v-model="picker2"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{ picker2 }}
    </section>

    <section class="demo-section">
      <h4>Translations</h4>
      <section>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2
              placeholder="Select your time"
              label="format: am/pm"
              v-model="picker3"
              doneLabel="Accept"
              clearLabel="Reset"
              closeLabel="Exit"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{ picker3 }}
    </section>

    <section class="demo-section">
      <h4>Custom icons</h4>
      <section>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2
              label="icon"
              v-model="picker4"
              icon="clock"
              :pickerIcon="{ icon: 'clock', far: true }"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{ picker4 }}
    </section>

    <section class="demo-section">
      <h4>Alternative input styling</h4>
      <section>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2
              label="Simple input"
              :outline="false"
            />
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2
              label="Background input"
              bg
            />
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2
              label="Large input"
              size="lg"
              :picker-icon="{ icon: 'clock', class: 'fa-lg', far: true }"
            />
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2
              label="Small input"
              size="sm"
              :picker-icon="{ icon: 'clock', class: 'fa-sm', far: true }"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Default value (format: 24h)</h4>
      <section>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2
              label="default value"
              ref="picker"
              v-model="picker6"
              :hoursFormat="24"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{ picker6 }}
    </section>

    <section class="demo-section">
      <h4>Default value (format: 12h)</h4>
      <section>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2
              label="default value"
              ref="picker"
              v-model="picker7"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{ picker7 }}
    </section>

    <section class="demo-section">
      <h4>Access from another element</h4>
      <section>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2
              label="outside access"
              ref="picker"
              v-model="picker8"
            />
            <mdb-btn color="primary" rounded size="sm" @click.native="$refs.picker.open()"
              >Open Picker</mdb-btn
            >
            <mdb-btn color="primary" rounded size="sm" @click.native="$refs.picker.clear()"
              >Clear Picker</mdb-btn
            >
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{ picker8 }}
    </section>

    <section class="demo-section">
      <h4>Step</h4>
      <section>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2 label="Step" v-model="picker9" :step="15" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{ picker9 }}
    </section>

    <section class="demo-section">
      <h4>Time range - 24h format</h4>
      <section>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2
              label="03:20 - 15:20"
              v-model="picker10"
              :hours-format="24"
              min="03:20"
              max="15:20"
            />
          </mdb-col>
        </mdb-row>  
      </section>
    </section>
    <section class="demo-result-section">
      <p><strong>min: </strong>03:20</p>
      <p><strong>max: </strong>15:20</p>
      <p><strong>selected: </strong>{{ picker10 }}</p>
    </section>
    <section class="demo-section">
      <h4>Time range - 12h format</h4>
      <section>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2
              label="03:00am - 10:00am"
              v-model="picker11"
              min="03:20am"
              max="10:00am"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      <p><strong>min: </strong>03:00am</p>
      <p><strong>max: </strong>10:00am</p>
      <p><strong>selected: </strong>{{ picker11 }}</p>
    </section>

    <section class="demo-section">
      <h4>Colorful example</h4>
      <section>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <mdb-time-picker2
              label="danger color"
              :hours-format="24"
              color="danger-color"
              text-color="text-danger"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Date and time picker</h4>
      <section>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <div :style="{ position: 'relative' }">
            <mdb-input
              :value="pickersValue"
              outline
              label="Date & time"
            />
            <div :style="{position: 'absolute', top: '8px', right: '10px', cursor: 'pointer'}">
            <mdb-icon class="px-2" far icon="calendar" @click.native="$refs.datePicker.open()"/>
            <mdb-icon class="px-2" far icon="clock" @click.native="$refs.timePicker.open()"/>
            </div>
            </div>
            <mdb-date-picker2
              ref="datePicker"
              disable-input
              v-model="datePickerValue"
              @close="$refs.timePicker.open()"
            />
            <mdb-time-picker2
              ref="timePicker"
              disable-input
              v-model="timePickerValue"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Validation</h4>
      <section>
        <mdb-row>
          <mdb-col sm="8" md="6">
            <form @submit.prevent>
              <mdb-time-picker2
                label="Select time between 10:00 and 15:00"
                :hours-format="24"
                v-model="picker12"
                min="10:00"
                max="15:00"
                :wasValidated="wasValidated"
                :isValid="isValid"
                validFeedback="Everything OK"
                invalidFeedback="Choose another hour!"
                @getInputValue="handleChange"
              />
              <mdb-btn
                @click="submit"
                type="submit"
                class="float-right"
                color="primary"
                rounded
                >Submit</mdb-btn
              >
              <mdb-btn
                @click="wasValidated = false"
                type="submit"
                class="float-right"
                color="primary"
                rounded
                >Reset</mdb-btn
              >
            </form>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbTimePicker2,
  mdbDatePicker2,
  mdbInput,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbIcon,
  mdbBtn
} from "mdbvue";

export default {
  name: "TimePicker2Page",
  data() {
    return {
      picker1: "",
      picker2: "",
      picker3: "",
      picker4: "",
      picker5: "",
      picker6: "21:23",
      picker7: "09:23pm",
      picker8: "",
      picker9: "",
      picker10: "",
      picker11: "",
      picker12: "",
      pickerAutoClose: "",
      datePickerValue: "",
      timePickerValue: "",
      wasValidated: false,
      isValid: false,
      inputValue: "12:00"
    };
  },
  components: {
    mdbTimePicker2,
    mdbDatePicker2,
    mdbInput,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn
  },
  computed: {
    pickersValue () {
      let output = "";
      if (this.datePickerValue && this.timePickerValue)
        output = `${this.datePickerValue}, ${this.timePickerValue}`;
      else if (this.datePickerValue) output = this.datePickerValue;
      else if (this.timePickerValue) output = this.timePickerValue;
      return output;
    },
  },
  methods: {
    submit() {
      this.wasValidated = true;
      this.validate();
    },
    handleChange(e) {
      this.inputValue = e;
      this.$nextTick(this.validate);
    },
    validate() {
      if (this.inputValue === this.picker12 && this.inputValue !== "") {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
