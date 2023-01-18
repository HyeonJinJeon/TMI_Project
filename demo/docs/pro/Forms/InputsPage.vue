<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Inputs</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/inputs/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>v-model</h4>
      <section>
        <mdb-input type="text" label="Input text" v-model="inputValue"/> 
        <mdb-btn size="md" class="mb-5" @click="inputValue = 'New value'">Change value</mdb-btn>
        <mdb-input type="checkbox" id="check1" class="mb-2 pl-0" v-model="checkValue" checkboxValue="Checkbox" label="Checkbox" />
        <mdb-btn size="md" @click="checkValue = !checkValue">Change value</mdb-btn>
      </section>
    </section>
    <section class="demo-result-section">
      <p class="m-0 pb-1">Input value: <strong>{{ inputValue }}</strong></p>
      <p class="m-0 p-0">Checkbox value: <strong>{{ checkValue }}</strong></p>
    </section>

    <section class="demo-section">
      <h4>Checkboxes</h4>
      <section>
        <h5 class="mb-3">Basic examples</h5>
        <mdb-input type="checkbox" id="checkbox1" v-model="check" label="Default checkbox" class="mb-2 pl-0" />
        <p class="pt-2">Checked: {{ check }}</p>

        <h5 class="mt-5 mb-3">Filled-in checkbox</h5>
        <mdb-input type="checkbox" id="checkbox2" label="Filled-in checkbox" checked filled class="mb-2 pl-0"/>

        <h5 class="mt-5 mb-3">Multiple checkboxes, bound to the same Array</h5>
        <mdb-input type="checkbox" id="checkboxArray1" v-model="checkArray" checkboxValue="Jack" label="Jack" class="mb-2 pl-0" />
        <mdb-input type="checkbox" id="checkboxArray2" v-model="checkArray" checkboxValue="John" label="John" class="mb-2 pl-0" />
        <mdb-input type="checkbox" id="checkboxArray3" v-model="checkArray" checkboxValue="Mike" label="Mike" class="mb-2 pl-0" />
        <p class="pt-2">Checked names: {{ checkArray }}</p>
        
        <h5 class="mt-5 mb-3">Disabled checkboxes</h5>
        <mdb-input type="checkbox" id="checkbox3" label="Default checkbox" disabled class="mb-2 pl-0"/>
        <mdb-input type="checkbox" id="checkbox4" label="Filled-in checkbox" filled disabled class="mb-2 pl-0"/>

        <h5 class="mt-5 mb-3">Inline checkboxes</h5>
        <mdb-form-inline>
          <mdb-input type="checkbox" id="checkbox5" label="Default checkbox" class="mb-2 pl-0" />
          <mdb-input type="checkbox" id="checkbox6" label="Filled-in checkbox" filled class="mb-2 pl-0"/>
          <mdb-input type="checkbox" id="checkbox7" label="Default checkbox" class="mb-2 pl-0" />
        </mdb-form-inline>

      </section>
    </section>

    <section class="demo-section">
      <h4>Radio buttons</h4>
      <section>
        <h5 class="mb-5">Basic examples</h5>
        <mdb-input type="radio" id="option1-1" name="option1" radioValue="option1" label="Option 1" v-model="radio" />
        <mdb-input type="radio" id="option1-2" name="option1" radioValue="option2" label="Option 2" v-model="radio" />
        <mdb-input type="radio" id="option1-3" name="option1" radioValue="option3" label="Option 3" v-model="radio" />
        <p class="pt-2">Picked: {{ radio }}</p>

        <h5 class="my-5">Radio buttons with gap</h5>
        <mdb-input type="radio"
          gap
          id="option2-1"
          name="option2"
          value="option1"
          label="Option 1"
        />
        <mdb-input type="radio"
          gap
          id="option2-2"
          name="option2"
          value="option2"
          label="Option 2"
          checked
        />
        <mdb-input type="radio"
          gap
          id="option2-3"
          name="option2"
          value="option3"
          label="Option 3"
        />

        <h5 class="my-5">Inline radio buttons</h5>
        <mdb-form-inline>
          <mdb-input type="radio"
            id="option3-1"
            name="option3"
            value="option1"
            label="Option 1"
          />
          <mdb-input type="radio"
            id="option3-2"
            name="option3"
            value="option2"
            label="Option 2"
          />
          <mdb-input type="radio"
            id="option3-3"
            name="option3"
            value="option3"
            label="Option 3"
          />
        </mdb-form-inline>
      </section>
    </section>

    <section class="demo-section">
      <h4>Helper text</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-input type="text" label="Input text" counter small="Your username shouldn't be longer than 10 characters."/>
            <mdb-input type="text" outline label="Input text" counter small="Your username shouldn't be longer than 10 characters."/>
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Character counter</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-input type="text" label="Input text" counter />
            <mdb-input type="text" label="Input text" counter :counterMaxValue="20" />
            <mdb-input type="text" label="Input text" outline counter />
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">      
      <h4>Slider</h4>
      <section>
        <mdb-range-input :min="0" :max="100" v-model="sliderValue"></mdb-range-input>
      </section>
    </section>
    <section class="demo-result-section">
      {{ sliderValue }}
    </section>

    <section class="demo-section">
      <h4>Slider with different width</h4>
      <section>
        <mdb-range-input wrapperClass="my-4 w-25" :min="0" :max="100" v-model="slider2Value" wrapperClassName></mdb-range-input>
        <mdb-range-input wrapperClass="my-4 w-50" :min="0" :max="100" v-model="slider3Value" wrapperClassName></mdb-range-input>
        <mdb-range-input wrapperClass="my-4 w-75" :min="0" :max="100" v-model="slider4Value" wrapperClassName></mdb-range-input>
        <mdb-range-input wrapperClass="my-4 w-100" :min="0" :max="100" v-model="slider5Value" wrapperClassName></mdb-range-input>
      </section>
    </section>

    <section class="demo-section">
      <h4>Slider with first and last value</h4>
      <section>
        <div class="d-flex justify-content-center my-4">
          <mdb-range-input wrapperClass="my-4 w-25" :min="20" :max="50" v-model="slider6Value" wrapperClassName></mdb-range-input>
        </div>
        <div class="d-flex justify-content-center my-4">
          <mdb-range-input wrapperClass="my-4 w-50" :min="0" :max="40" v-model="slider7Value" wrapperClassName></mdb-range-input>
        </div>
        <div class="d-flex justify-content-center my-4">
          <mdb-range-input wrapperClass="my-4 w-75" :min="0" :max="100" v-model="slider8Value" wrapperClassName></mdb-range-input>
        </div>
        <div class="d-flex justify-content-center my-4">
          <mdb-range-input wrapperClass="my-4 w-100" :min="40" :max="100" v-model="slider9Value" wrapperClassName></mdb-range-input>
        </div>
      </section>
    </section>

    <section class="demo-section">
      <h4>Button checkboxes</h4>
      <section>
        <h5 class="title mb-3">Classic checkbox buttons</h5>
        <mdb-btn-group>
          <mdb-btn color="primary" @click.native="toggleActiveState1" :active="active1">Checkbox 1 (pre-checked)</mdb-btn>
          <mdb-btn color="primary" @click.native="toggleActiveState2" :active="active2">Checkbox 2</mdb-btn>
          <mdb-btn color="primary" @click.native="toggleActiveState3" :active="active3">Checkbox 3</mdb-btn>
        </mdb-btn-group>

        <h5 class="title my-3">Rounded checkbox buttons</h5>
        <mdb-btn-group>
          <mdb-btn color="pink" rounded @click.native="toggleActiveState1" :active="active1">Checkbox 1 (pre-checked)</mdb-btn>
          <mdb-btn color="pink" rounded @click.native="toggleActiveState2" :active="active2">Checkbox 2</mdb-btn>
          <mdb-btn color="pink" rounded @click.native="toggleActiveState3" :active="active3">Checkbox 3</mdb-btn>
        </mdb-btn-group>

        <h5 class="title my-3">Rounded checkbox buttons</h5>
        <mdb-btn-group>
          <mdb-btn color="warning" rounded icon="diamond" iconRight @click.native="toggleActiveState1" :active="active1">Checkbox 1 (pre-checked)</mdb-btn>
          <mdb-btn color="warning" rounded icon="user" iconRight @click.native="toggleActiveState2" :active="active2">Checkbox 2</mdb-btn>
          <mdb-btn color="warning" rounded icon="code" iconRight @click.native="toggleActiveState3" :active="active3">Checkbox 3</mdb-btn>
        </mdb-btn-group>
      </section>
    </section>

    <section class="demo-section">
      <h4>Input with background</h4>
      <section>
        <mdb-input bg label="small" size="sm"/>
        <mdb-input bg label="medium" size="md"/>
        <mdb-input bg label="large" size="lg"/>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbInput, mdbFormInline, mdbRangeInput, mdbBtn, mdbBtnGroup, mdbIcon, mdbRow, mdbCol } from 'mdbvue';

export default {
  name: 'InputsProPage',
  components: {
    mdbContainer,
    mdbInput,
    mdbFormInline,
    mdbRangeInput,
    mdbBtn,
    mdbBtnGroup,
    mdbIcon,
    mdbRow,
    mdbCol
  },
  data() {
    return {
      radio: 'option2',
      active1: true,
      active2: false,
      active3: false,
      check: false,
      checkArray: ['John'],
      multiCheckboxes: false,
      inputValue: 'hello',
      checkValue: true,
      sliderValue: 50,
      slider2Value: 50,
      slider3Value: 50,
      slider4Value: 50,
      slider5Value: 50,
      slider6Value: 50,
      slider7Value: 50,
      slider8Value: 50,
      slider9Value: 50
    };
  },
  methods: {
    toggleActiveState1() {
      this.active1 = !this.active1;
    },
    toggleActiveState2() {
      this.active2 = !this.active2;
    },
    toggleActiveState3() {
      this.active3 = !this.active3;
    }
  }
};

</script>

<style scoped>
h5 {
  font-weight: bold;
}
</style>
