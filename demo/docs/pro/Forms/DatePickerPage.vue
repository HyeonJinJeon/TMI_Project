<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Date Picker</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/date-picker/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker v-model="date" label="Basic example"/>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date}}
    </section>
    <section class="demo-section">
      <h4>Date format option</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker v-model="date15" label="Basic example" :option="option"/>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date15}}
    </section>
    <section class="demo-section">
      <h4>Basic example with placeholder</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker v-model="date2" label="Placeholder example" placeholder='Pick a date'/>
            <mdb-btn size="sm" @click.native="date2 = '2012-02-02'">Change date to 2012-02-02</mdb-btn>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date2}}
    </section>
    <section class="demo-section">
      <h4>Outline</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker outline label="Outline" v-model="date9" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date9}}
    </section>
    <section class="demo-section">
      <h4>Single date disabled <span class="text-info pl-2">{{singleLimit[0].disabled}}</span></h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker v-model="date4" :limit="singleLimit" label="Limit example" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date4}}
    </section>
    <section class="demo-section">
      <h4>Array of disabled dates <span class="text-info pl-2">{{arrayLimit[0].disabled}}</span></h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker v-model="date5" :limit="arrayLimit" label="Limit example" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date5}}
    </section>
    <section class="demo-section">
      <h4>Disabled range of dates <span class="text-info pl-2">{{rangeLimit[0].from}} - {{rangeLimit[0].to}}</span></h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker v-model="date6" :limit="rangeLimit" label="Limit example" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date6}}
    </section>
    <section class="demo-section">
      <h4>Disabled from <span class="text-info pl-2">{{rangeLimit[0].from}}</span></h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker v-model="date13" :limit="fromLimit" label="Limit example" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date13}}
    </section>
    <section class="demo-section">
      <h4>Disabled to <span class="text-info pl-2">{{rangeLimit[0].to}}</span></h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker v-model="date14" :limit="toLimit" label="Limit example" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date14}}
    </section>
    <section class="demo-section">
      <h4>Disabled past</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker v-model="date7" disabledPast label="Limit example" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date7}}
    </section>
    <section class="demo-section">
      <h4>Disabled future</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker v-model="date8" disabledFuture label="Limit example" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date8}}
    </section>
    <section class="demo-section">
      <h4>Auto hide</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker v-model="date11" autoHide label="Auto hide example"/>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date11}}
    </section>
     <section class="demo-section">
      <h4>Default date</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker v-model="date3" label="Default date" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date3}}
    </section>
    <section class="demo-section">
      <h4>Icon</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker icon="clock" far v-model="date12" label="Icon example" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date12}}
    </section>
    <section class="demo-section">
      <h4>Limits <span class="text-info pl-2">{{limit[1].from}} - {{limit[1].to}} & only weekdays</span></h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker v-model="date10" :limit="limit" label="Limits example" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date10}}
    </section>
    <section class="demo-section">
      <h4>Validation</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <form @submit.prevent="checkForm" novalidate>
              <mdb-date-picker
                v-model="validation.value"
                :validation="validation.validated"
                :isValid="validation.valid"
                required
                @change="validate()"
                validFeedback="Look's good."
                invalidFeedback="Please pick a date"
                label="Validated date"
              />
              <mdb-btn type="submit">Submit</mdb-btn>
            </form>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Customization</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker label="Pick your date" :option="customOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Access from another element</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker ref="picker" v-model="date16" label="Pick your date" />
            <mdb-btn @click.native="$refs.picker.open()">Open Picker</mdb-btn>
            <mdb-btn @click.native="$refs.picker.open(), $refs.picker.today(),  $refs.picker.close()">Pick today</mdb-btn>
            <mdb-btn @click.native="$refs.picker.open(), $refs.picker.clear(),  $refs.picker.close()">Clear</mdb-btn>
          </mdb-col>
        </mdb-row>
      </section>
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
  </mdb-container>
</template>

<script>
const currentDate = new Date();

import { mdbContainer, mdbDatePicker, mdbTimePicker, mdbInput, mdbRow, mdbCol, mdbIcon, mdbBtn } from 'mdbvue';
export default {
  name: 'DatePickerPage',
  components: {
    mdbContainer,
    mdbDatePicker,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn,
    mdbTimePicker,
    mdbInput
  },
  methods: {
    checkForm(event) {
      event.target.classList.add("was-validated");
      this.validation.validated = true;
    },
    validate() {
      console.log(this.validation.value);
      if (this.validation.value) {
        this.validation.valid = true;
        this.validation.validated = true;
      } else {
        this.validation.valid = false;
      }
    },
    handlePickersValue() {
      let output = 'Pick date and time'
      if (this.datePickerValue && this.timePickerValue) output = `${this.datePickerValue}, ${this.timePickerValue}`
      else if (this.datePickerValue) output = this.datePickerValue
      else if (this.timePickerValue) output = this.timePickerValue
      return output
    }
  },
  data() {
    return {
      currentDate: new Date(),
      date: '',
      option: {
        type: 'day',
        format: 'DD-MM-YYYY'
      },
      date2: '',
      date3: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()-2}`,
      date4: '',
      date5: '',
      date6: '',
      date7: '',
      date8: '',
      date9: '',
      date10: '',
      date11: '',
      date12: '',
      date13: '',
      date14: '',
      date15: '',
      date16: '',
      datePickerValue: '',
      timePickerValue: '',
      limit: [{
        type: 'weekday',
        available: [1, 2, 3, 4, 5]
      },
      {
        type: 'fromto',
        from: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()-5}`,
        to: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()+5}`
      }],
      singleLimit: [{
        type: 'exact',
        disabled: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()-3}`
      }],
      arrayLimit: [{
        type: 'exact',
        disabled: [`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()-3}`, `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()-2}`, `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()+5}`]
      }],
      rangeLimit: [{
        type: 'range',
        from: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()-3}`,
        to: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()+3}`
      }],
      fromLimit: [{
        type: 'from',
        from: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()-3}`
      }],
      toLimit: [{
        type: 'to',
        to: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()+3}`
      }],
      validation: {
        value: null,
        valid: false,
        validated: false
      },
      customOptions: {
        color: {
          header: 'danger',
          headerText: 'danger',
          checkedDay: 'danger'
        },
        buttons: {
          ok: 'Accept',
          clear: 'Reset',
          today: 'Current'
        }
      }
    };
  }
};

</script>

<style>
</style>
