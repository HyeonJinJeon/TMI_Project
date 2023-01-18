<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Multiselect</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/multiselect/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Standard multiselect</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select label="Select an option" multiple selectAll :options="countries"/>
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Multiselect with label & placeholder</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select multiple selectAll :options="countries2" label="label" placeholder="placeholder"/>
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Colorful Multiselect with label</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select multiple :color="color.background" selectAll :options="countries3" label="label" :labelClass="color.text" />
          </mdb-col>
        </mdb-row>

        <div class="d-flex justify-content-start">
            <div v-for="(option, i) in colors" :key="i" class="color-picker m-3" :class="`${option.background} ${color.background === option.background ? 'z-depth-1' : ''}`" @click="color = option"></div>
        </div>

      </section>
    </section>  
    <section class="demo-section">
      <h4>Multiselect with options groups</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select multiple selectAll :options="groupOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Multiselect with icons</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select label="Select an option" :scroll="false" multiple selectAll :options="iconOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Multiselect with search box</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select label="Select an option" multiple search selectAll :options="searchOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Multiselect with placeholder and search box</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select placeholder="Select an option" label="" multiple search selectAll :options="labelAndSearchOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Colorful Multiselect with label and search box</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select label="label" labelClass="text-info" multiple color="info" search selectAll :options="colorfulAndSearchOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Multiselect with options groups and search box</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select label="label" multiple search selectAll :options="groupsAndSearchOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Multiselect with icons and search box</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select label="Select an option" multiple search selectAll :options="iconsAndSearchOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Outline multiselect</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select label="Select an option" outline multiple selectAll v-model="outlineOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <br><br><br><br><br><br><br><br><br>
  </mdb-container>
</template>

<script>
import { mdbSelect, mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';

export default {
  name: 'MultiSelectPage',
  components: {
    mdbSelect,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  },
  data() {
    return {
      countries: [
        { text: 'USA', value: 1 }, 
        { text: 'Germany', value: 2 }, 
        { text: 'France', value: 3 }, 
        { text: 'Poland', value: 4 }, 
        { text: 'Japan', value: 5 }
      ],
      countries2: [
        { text: 'USA', value: 1 }, 
        { text: 'Germany', value: 2 }, 
        { text: 'France', value: 3 }, 
        { text: 'Poland', value: 4 }, 
        { text: 'Japan', value: 5 }
      ],
      countries3: [
        { text: 'USA', value: 1 }, 
        { text: 'Germany', value: 2 }, 
        { text: 'France', value: 3 }, 
        { text: 'Poland', value: 4 }, 
        { text: 'Japan', value: 5 }
      ],
      groupOptions: [
        { text: 'team 1', value: null, disabled: true, optgroup: true },
        { text: 'Option nr 1', value: 'Option 1', selected: true }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'team 2', value: null, disabled: true, optgroup: true },
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }
      ],
      iconOptions: [
        { text: 'Option nr 1', value: 'Option 1', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg' }, 
        { text: 'Option nr 2', value: 'Option 2', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg' }, 
        { text: 'Option nr 3', value: 'Option 3', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg' }
      ],
      searchOptions: [
        { text: 'USA', value: 1 }, 
        { text: 'Germany', value: 2 }, 
        { text: 'France', value: 3 }, 
        { text: 'Poland', value: 4 }, 
        { text: 'Japan', value: 5 }
      ],
      labelAndSearchOptions: [
        { text: 'USA', value: 1 }, 
        { text: 'Germany', value: 2 }, 
        { text: 'France', value: 3 }, 
        { text: 'Poland', value: 4 }, 
        { text: 'Japan', value: 5 }
      ],
      colorfulAndSearchOptions: [
        { text: 'USA', value: 1 }, 
        { text: 'Germany', value: 2 }, 
        { text: 'France', value: 3 }, 
        { text: 'Poland', value: 4 }, 
        { text: 'Japan', value: 5 }
      ],
      groupsAndSearchOptions: [
        { text: 'team 1', value: null, disabled: true, optgroup: true },
        { text: 'Option nr 1', value: 'Option 1', selected: true }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'team 2', value: null, disabled: true, optgroup: true },
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }
      ],
      iconsAndSearchOptions: [
        { text: 'Option nr 1', value: 'Option 1', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg' }, 
        { text: 'Option nr 2', value: 'Option 2', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg' }, 
        { text: 'Option nr 3', value: 'Option 3', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg' }
      ],
      outlineOptions: [
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      color: {
        background: 'lime',
        text: 'lime-text'
      },
      colors: [
        {
          background: 'danger-color',
          text: 'text-danger'
        },
        {
          background: 'warning-color',
          text: 'text-warning'
        },
        {
          background: 'info-color',
          text: 'text-info'
        },
        {
          background: 'success-color',
          text: 'text-success'
        },
        {
          background: 'default-color',
          text: 'text-default'
        },
        {
          background: 'secondary-color',
          text: 'text-secondary'
        },
        {
          background: 'pink',
          text: 'pink-text'
        },
        {
          background: 'pink lighten-3',
          text: 'pink-text'
        },
        {
          background: 'blue',
          text: 'blue-text'
        },
        {
          background: 'blue lighten-3',
          text: 'blue-text'
        },
        {
          background: 'cyan',
          text: 'cyan-text'
        },
        {
          background: 'lime',
          text: 'lime-text'
        },
        {
          background: 'amber',
          text: 'amber-text'
        }
      ]
    };
  },
};
</script>

<style scoped>
h4 {
  font-weight: bold;
}

.color-picker {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
