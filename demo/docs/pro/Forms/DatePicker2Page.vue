<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Date Picker 2</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/date-picker/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker-2 v-model="date" label="Basic example" title="Select date" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date}}
    </section>
    <section class="demo-section">
      <h4>Inline example</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker-2 inline v-model="date20" label="Inline example" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date20}}
    </section>
    <section class="demo-section">
      <h4>Other date format example</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker-2 v-model="date15" label="Basic example" :options="option"/>
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
            <mdb-date-picker-2 v-model="date2" label="Placeholder example" placeholder='Pick a date'/>
            <mdb-btn size="sm" @click.native="date2 = '2012-02-02'">Change date to 2012-02-02</mdb-btn>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date2}}
    </section>
    <section class="demo-section">
      <h4>Single date disabled <span class="text-info pl-2">{{singleLimit[0].disabled}}</span></h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker-2 v-model="date4" :limit="singleLimit" label="Limit example" />
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
            <mdb-date-picker-2 v-model="date5" :limit="arrayLimit" label="Limit example" />
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
            <mdb-date-picker-2 v-model="date6" :limit="rangeLimit" label="Limit example" />
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
            <mdb-date-picker-2 v-model="date13" :limit="fromLimit" label="Limit example" />
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
            <mdb-date-picker-2 v-model="date14" :limit="toLimit" label="Limit example" />
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
            <mdb-date-picker-2 v-model="date7" disabledPast label="Limit example" />
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
            <mdb-date-picker-2 v-model="date8" disabledFuture label="Limit example" />
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
            <mdb-date-picker-2 v-model="date11" autoHide label="Auto hide example"/>
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
            <mdb-date-picker-2 v-model="date3" label="Default date" />
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
            <mdb-date-picker-2 icon="clock" far v-model="date12" label="Icon example" />
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
            <mdb-date-picker-2 v-model="date10" :limit="limit" label="Limits example" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      {{date10}}
    </section>
    <section class="demo-section">
      <h4>Customization</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker-2 label="Pick your date" :options="customOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Access from another element</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker-2 ref="picker" v-model="date16" label="Pick your date" />
            <mdb-btn @click.native="$refs.picker.open()">Open Picker</mdb-btn>
            <mdb-btn @click.native="$refs.picker.open(), $refs.picker.today(),  $refs.picker.close()">Pick today</mdb-btn>
            <mdb-btn @click.native="$refs.picker.open(), $refs.picker.clear(),  $refs.picker.close()">Clear</mdb-btn>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Validation</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <form @submit.prevent="checkForm" novalidate>
              <mdb-date-picker-2
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
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbDatePicker2, mdbRow, mdbCol, mdbIcon, mdbBtn } from 'mdbvue';
import moment from 'moment';

export default {
  name: 'DatePicker2Page',
  components: {
    mdbContainer,
    mdbDatePicker2,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn
  },
  data() {
    return {
      date: '',
      option: {
        type: 'day',
        format: 'DD-MM-YYYY'
      },
      date2: '',
      date3: moment().subtract(3,'d').format('YYYY-MM-DD'),
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
      date20: '',
      validation: {
        value: null,
        valid: false,
        validated: false
      },
      limit: [{
        type: 'weekday',
        available: [1, 2, 3, 4, 5]
      },
      {
        type: 'fromto',
        from: moment().subtract(10,'d').format('YYYY-MM-DD'),
        to: moment().add(10,'d').format('YYYY-MM-DD')
      }],
      singleLimit: [{
        type: 'exact',
        disabled: moment().subtract(3,'d').format('YYYY-MM-DD')
      }],
      arrayLimit: [{
        type: 'exact',
        disabled: [moment().subtract(3,'d').format('YYYY-MM-DD'), moment().subtract(1,'d').format('YYYY-MM-DD'), moment().add(3,'d').format('YYYY-MM-DD')]
      }],
      rangeLimit: [{
        type: 'range',
        from: moment().subtract(3,'d').format('YYYY-MM-DD'),
        to: moment().add(3,'d').format('YYYY-MM-DD')
      }],
      fromLimit: [{
        type: 'from',
        from: moment().subtract(3,'d').format('YYYY-MM-DD')
      }],
      toLimit: [{
        type: 'to',
        to: moment().add(3,'d').format('YYYY-MM-DD')
      }],
      customOptions: {
        color: {
          header: 'danger',
          headerText: 'danger',
          checkedDay: 'danger'
        },
        buttons: {
          ok: 'Accept',
          clear: 'Reset',
          cancel: 'Return'
        }
      }
    };
  },
  methods: {
    checkForm(event) {
      event.target.classList.add("was-validated");
      this.validation.validated = true;
    },
    validate() {
      if (this.validation.value) {
        this.validation.valid = true;
        this.validation.validated = true;
      } else {
        this.validation.valid = false;
      }
    }
  },
};

</script>

<style>
</style>
