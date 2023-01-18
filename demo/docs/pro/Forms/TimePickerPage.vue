<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Time Picker</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/time-picker/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />
    
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6" md="4">
            <mdb-time-picker
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
      <h4>Twelve hour clock</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6" md="4">
            <mdb-time-picker
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
          <mdb-col sm="6" md="4">
            <mdb-time-picker
              placeholder="Select your time"
              label="format: am/pm"
              v-model="picker3"
              doneLabel="Accept"
              clearLabel="Reset"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{ picker3 }}
    </section>

    <section class="demo-section">
      <h4>Icon</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6" md="4">
            <mdb-time-picker
              label="icon"
              v-model="picker4"
              icon="clock"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{ picker4 }}
    </section>

    <section class="demo-section">
      <h4>Outline</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6" md="4">
            <mdb-time-picker
              label="outline"
              v-model="picker5"
              outline
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{ picker5 }}
    </section>

    <section class="demo-section">
      <h4>Default value (format: 24h)</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6" md="4">
            <mdb-time-picker
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
          <mdb-col sm="6" md="4">
            <mdb-time-picker
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
          <mdb-col sm="6" md="4">
            <mdb-time-picker
              label="outside access"
              ref="picker"
              v-model="picker8"
            />
            <mdb-btn size="sm" @click.native="$refs.picker.open()">Open Picker</mdb-btn>
            <mdb-btn size="sm" @click.native="$refs.picker.clear()">Clear Picker</mdb-btn>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{ picker8 }}
    </section>

    <section class="demo-section">
      <h4>Date and time picker</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6" md="4">
            <mdb-input :value="handlePickersValue()" @click.native="$refs.datePicker.open()" />
            <mdb-date-picker 
              ref="datePicker"
              disable-input
              v-model="datePickerValue"
              @close="$refs.timePicker.open()" />
            <mdb-time-picker
              ref="timePicker"
              disable-input
              v-model="timePickerValue" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Colorful example</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6" md="4">
            <mdb-time-picker
              label="danger color"
              :hours-format="24"
              color="danger-color"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbTimePicker, mdbDatePicker, mdbInput, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn } from 'mdbvue';

export default {
  name: 'TimePickerPage',
  data() {
    return {
      picker1: '',
      picker2: '',
      picker3: '',
      picker4: '',
      picker5: '',
      picker6: '21:23',
      picker7: '09:23pm',
      picker8: '',
      picker9: '',
      datePickerValue: '',
      timePickerValue: ''
    };
  },
  components: {
    mdbTimePicker,
    mdbDatePicker,
    mdbInput,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn
  },
  methods: {
    handlePickersValue() {
      let output = 'Pick date and time'
      if (this.datePickerValue && this.timePickerValue) output = `${this.datePickerValue}, ${this.timePickerValue}`
      else if (this.datePickerValue) output = this.datePickerValue
      else if (this.timePickerValue) output = this.timePickerValue
      return output
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
