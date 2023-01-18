<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Select</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/forms/select/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select v-model="basicOptions" label="Label" append-to-body />
          </mdb-col>
          <mdb-col sm="6" class="my-2">
            <mdb-btn
              tag="a"
              color="warning"
              iconColor="white"
              floating
              @click.native="removeOption(basicOptions)"
              icon="minus"
              size="sm"
            ></mdb-btn>
            <mdb-btn
              tag="a"
              color="success"
              iconColor="white"
              floating
              @click.native="addOption(basicOptions)"
              icon="plus"
              size="sm"
            ></mdb-btn>
            <mdb-btn
              tag="a"
              color="danger"
              iconColor="white"
              floating
              @click.native="removeAllOptions(basicOptions)"
              icon="trash"
              size="sm"
            ></mdb-btn>
            <mdb-btn
              color="grey"
              size="sm"
              :disabled="basicOptions.length < 2"
              @click.native="selectOption(1)"
              >Select option 2</mdb-btn
            >
            <mdb-btn
              color="grey"
              size="sm"
              :disabled="basicOptions.length < 3"
              @click.native="selectOption(2)"
              >Select option 3</mdb-btn
            >
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      <p
        class="mb-0"
        v-for="(option, index) in basicOptions"
        :key="index"
        :class="option.selected && 'text-info'"
      >
        {{ option.text }}
      </p>
    </section>
    <section class="demo-section">
      <h4>Color variations</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select
              :color="color.background"
              :labelClass="color.text"
              :scroll="false"
              :options="colorOptions"
              label="Success select"
            />
          </mdb-col>
        </mdb-row>
        <div class="d-flex justify-content-start">
          <div
            v-for="(option, i) in colors"
            :key="i"
            class="color-picker m-3"
            :class="
              `${option.background} ${
                color.background === option.background ? 'z-depth-1' : ''
              }`
            "
            @click="color = option"
          ></div>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Select with secondary text</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select :options="secondaryOptions" label="Secondary text" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      <p
        class="mb-0"
        v-for="(option, index) in secondaryOptions"
        :key="index"
        :class="option.selected && 'text-info'"
      >
        {{ option.text }}
      </p>
    </section>
    <section class="demo-section">
      <h4>Select with search box</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select
              search
              @search="phrase = $event"
              :options="searchOptions"
              label="Search"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      <p
        class="mb-0"
        v-for="(option, index) in searchOptions"
        :key="index"
        :class="option.selected && 'text-info'"
      >
        {{ option.text }}
      </p>
      <p>Searched phrase: {{ phrase }}</p>
    </section>
    <section class="demo-section">
      <h4>Custom filter - case sensitive search</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select
              search
              :options="customSearchOptions"
              label="Custom search"
              :filter="(text, search) => { return text.includes(search)}"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      <p
        class="mb-0"
        v-for="(option, index) in customSearchOptions"
        :key="index"
        :class="option.selected && 'text-info'"
      >
        {{ option.text }}
      </p>
      <p>Searched phrase: {{ customSearchPhrase }}</p>
    </section>
    <section class="demo-section">
      <h4>Select with icon</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select
              icon="paper-plane"
              far
              search
              :options="iconSelectOptions"
              label="Search"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      <p
        class="mb-0"
        v-for="(option, index) in iconSelectOptions"
        :key="index"
        :class="option.selected && 'text-info'"
      >
        {{ option.text }}
      </p>
    </section>
    <section class="demo-section">
      <h4>Select opening to the top with scrolling disabled</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select
              :scroll="false"
              top
              :flipOnScroll="false"
              :options="scrollingOptions"
              label="Scrolling disabled"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      <p
        class="mb-0"
        v-for="(option, index) in scrollingOptions"
        :key="index"
        :class="option.selected && 'text-info'"
      >
        {{ option.text }}
      </p>
    </section>
    <section class="demo-section">
      <h4>Select with dropdown appended to body</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select search :options="labelOptions" label="Example label" append-to-body/>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      <p
        class="mb-0"
        v-for="(option, index) in labelOptions"
        :key="index"
        :class="option.selected && 'text-info'"
      >
        {{ option.text }}
      </p>
    </section>
    <section class="demo-section">
      <h4>Multiple select</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select
              multiple
              search
              selectAll
              :options="multiOptions"
              label="Example label"
              :show="showSelect"
              @toggleSelect="showSelect = $event"
            >
              <template #footer>
                <mdb-btn
                  class="mt-0 ml-2 mb-3"
                  @click="showSelect = false"
                  color="primary"
                  size="sm"
                  >Save</mdb-btn
                >
              </template>
            </mdb-select>
          </mdb-col>
          <mdb-col sm="6" class="my-2">
            <mdb-btn
              tag="a"
              color="warning"
              iconColor="white"
              floating
              @click="removeOption(multiOptions)"
              icon="minus"
              size="sm"
            ></mdb-btn>
            <mdb-btn
              tag="a"
              color="success"
              iconColor="white"
              floating
              @click="addOption(multiOptions)"
              icon="plus"
              size="sm"
            ></mdb-btn>
            <mdb-btn
              tag="a"
              color="danger"
              iconColor="white"
              floating
              @click="removeAllOptions(multiOptions)"
              icon="trash"
              size="sm"
            ></mdb-btn>
            <mdb-btn
              color="grey"
              size="sm"
              :disabled="multiOptions.length < 2"
              @click.native="selectOptions(0, 1)"
              >Select options 1, 2</mdb-btn
            >
            <mdb-btn
              color="grey"
              size="sm"
              :disabled="multiOptions.length < 3"
              @click.native="selectOptions(2, 3)"
              >Select options 3, 4</mdb-btn
            >
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      <p
        class="mb-0"
        v-for="(option, index) in multiOptions"
        :key="index"
        :class="option.selected && 'text-info'"
      >
        {{ option.text }}
      </p>
    </section>
    <section class="demo-section">
      <h4>Options groups</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select :options="groupOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      <p
        class="mb-0"
        v-for="(option, index) in groupOptions"
        :key="index"
        :class="option.selected && 'text-info'"
      >
        {{ option.text }}
      </p>
    </section>
    <section class="demo-section">
      <h4>Select with icons</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select label="Select an option" :scroll="false" :options="iconOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      <p
        class="mb-0"
        v-for="(option, index) in iconOptions"
        :key="index"
        :class="option.selected && 'text-info'"
      >
        {{ option.text }}
      </p>
    </section>
    <section class="demo-section">
      <h4>Disabled select</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select
              label="Select an option"
              disabled
              :options="disabledOptions"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Resetting select</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select
              label="Select an option"
              v-model="resetSelectOptions"
              resetBtn
            />
          </mdb-col>
          <mdb-col sm="6">
            <mdb-select
              v-model="resetMultiSelectOptions"
              resetBtn
              multiple
              selectAll
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Material Select Validation</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select
              v-model="validateOptions"
              validation
              ref="validationSelect"
              resetBtn
              label="validate"
            />
            <mdb-btn
              size="sm"
              color="primary"
              @click.native="$refs.validationSelect.validate()"
              >Validate</mdb-btn
            >
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select
              label="Select an option"
              v-model="validateMultiOptions"
              validation
              multiple
              selectAll
              ref="validationMultiSelect"
              resetBtn
            />
            <mdb-btn
              size="sm"
              color="primary"
              @click.native="$refs.validationMultiSelect.validate()"
              >Validate</mdb-btn
            >
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Data from API</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select
              :flipOnScroll="true"
              v-model="axiosOptions"
              @change="populateLanguageSelect"
              scroll
              resetBtn
              :visibleOptions="5"
              label="Choose country"
            />
          </mdb-col>
          <mdb-col sm="6">
            <mdb-select
              :flipOnScroll="true"
              :disabled="disableLanguageSelect"
              v-model="languageOptions"
              label="Choose language"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      Selected country code: <strong>{{ selectedData }}</strong>
      <br />
      Selected language: <strong>{{ selectedLanguage }}</strong>
    </section>
    <section class="demo-section">
      <h4>Outline select with icon and placeholder</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select
              v-model="outlineIconOptions"
              palceholder="Choose your option"
              label="select with icon"
              outline
              icon="smile"
              far
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Select with background</h4>
      <section>
        <mdb-select bg label="small" :options="bgOptions" />
      </section>
    </section>
    <section class="demo-section">
      <h4>Outline select with dynamically loaded options</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select
              v-model="outlineOptions"
              label="Select your country"
              outline
              search
              @search="handleSearch"
              disableFilter
            >
              <small slot="footer" class="p-2 grey-text">{{
                loading
                  ? "loading..."
                  : outlineOptions.length === 0
                  ? searchValue === ""
                    ? "Start typing to load options"
                    : "No results found"
                  : "Select your country"
              }}</small>
            </mdb-select>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-result-section">
      <p>
        Searched phrase: <strong>{{ searchValue }}</strong>
      </p>
      <p>
        Selected country: <strong>{{ selectedCountry.text }}</strong>
      </p>
      <p>
        Alpha 2 code: <strong>{{ selectedCountry.value }}</strong>
      </p>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbSelect,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbIcon,
  mdbBtn
} from "mdbvue";
import axios from "axios";

export default {
  name: "SelectPage",
  components: {
    mdbSelect,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn
  },
  computed: {
    selectedData() {
      let response = this.axiosOptions.find(option => {
        return option.selected === true;
      });
      if (response) {
        return response.value;
      }
      return "Country is not selected";
    },
    selectedLanguage() {
      const selectedOption = this.languageOptions.find(option => option.selected);

      return selectedOption ? selectedOption.value : "Language not selected";
    },
    selectedCountry() {
      const selected = this.outlineOptions.find(option => option.selected);
      if (selected === undefined) return "";
      return selected;
    },
  },
  data() {
    return {
      showSelect: false,
      basicOptions: [
        { text: "Option nr 1", value: "Option 1" },
        { text: "Option nr 2", value: "Option 2" },
        { text: "Option nr 3", value: "Option 3" },
        { text: "Option nr 4", value: "Option 4" },
        { text: "Option nr 5", value: "Option 5" }
      ],
      bgOptions: [
        { text: "Option nr 1", value: "Option 1" },
        { text: "Option nr 2", value: "Option 2" },
        { text: "Option nr 3", value: "Option 3" },
        { text: "Option nr 4", value: "Option 4" },
        { text: "Option nr 5", value: "Option 5" }
      ],
      colorOptions: [
        { text: "Option nr 1", value: "Option 1", selected: true },
        { text: "Option nr 2", value: "Option 2" },
        { text: "Option nr 3", value: "Option 3" },
        { text: "Option nr 4", value: "Option 4" },
        { text: "Option nr 5", value: "Option 5" }
      ],
      secondaryOptions: [
        {
          text: "Volkswagen Passat",
          secondaryText: "Production year: 2012",
          value: "Option 1"
        },
        {
          text: "Subaru Legacy",
          secondaryText: "Production year: 2017",
          value: "Option 2"
        },
        {
          text: "Hyundai Elantra",
          secondaryText: "Production year: 2015",
          value: "Option 3"
        },
        {
          text: "Honda Civic",
          secondaryText: "Production year: 2019",
          value: "Option 4"
        },
        {
          text: "Audi A6",
          secondaryText: "Production year: 2016",
          value: "Option 5"
        }
      ],
      searchOptions: [
        { text: "Option nr 1", value: "Option 1" },
        { text: "Option nr 2", value: "Option 2" },
        { text: "Option nr 3", value: "Option 3" },
        { text: "Option nr 4", value: "Option 4" },
        { text: "Option nr 5", value: "Option 5" }
      ],
      customSearchOptions: [
        { text: "option", value: "Option 1" },
        { text: "Option", value: "Option 2" },
        { text: "OPTION", value: "Option 3" },
      ],
      iconSelectOptions: [
        { text: "Option nr 1", value: "Option 1" },
        { text: "Option nr 2", value: "Option 2" },
        { text: "Option nr 3", value: "Option 3" },
        { text: "Option nr 4", value: "Option 4" },
        { text: "Option nr 5", value: "Option 5" }
      ],
      scrollingOptions: [
        { text: "Option nr 1", value: "Option 1" },
        { text: "Option nr 2", value: "Option 2" },
        { text: "Option nr 3", value: "Option 3" },
        { text: "Option nr 4", value: "Option 4" },
        { text: "Option nr 5", value: "Option 5" }
      ],
      labelOptions: [
        { text: "Option nr 1", value: "Option 1" },
        { text: "Option nr 2", value: "Option 2" },
        { text: "Option nr 3", value: "Option 3" },
        { text: "Option nr 4", value: "Option 4" },
        { text: "Option nr 5", value: "Option 5" }
      ],
      multiOptions: [
        { text: "Option nr 1", value: "Option 1" },
        { text: "Option nr 2", value: "Option 2" },
        { text: "Option nr 3", value: "Option 3" },
        { text: "Option nr 4", value: "Option 4" },
        { text: "Option nr 5", value: "Option 5" }
      ],
      groupOptions: [
        { text: "team 1", value: null, disabled: true, optgroup: true },
        { text: "Option nr 1", value: "Option 1", selected: true },
        { text: "Option nr 2", value: "Option 2" },
        { text: "team 2", value: null, disabled: true, optgroup: true },
        { text: "Option nr 3", value: "Option 3" },
        { text: "Option nr 4", value: "Option 4" }
      ],
      iconOptions: [
        {
          text: "Option nr 1",
          value: "Option 1",
          icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
        },
        {
          text: "Option nr 2",
          value: "Option 2",
          icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
        },
        {
          text: "Option nr 3",
          value: "Option 3",
          icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg"
        }
      ],
      disabledOptions: [
        { text: "Option nr 1", value: "Option 1" },
        { text: "Option nr 2", value: "Option 2" },
        { text: "Option nr 3", value: "Option 3" },
        { text: "Option nr 4", value: "Option 4" },
        { text: "Option nr 5", value: "Option 5" }
      ],
      resetSelectOptions: [
        { text: "Option nr 1", value: "Option 1" },
        { text: "Option nr 2", value: "Option 2" },
        { text: "Option nr 3", value: "Option 3" },
        { text: "Option nr 4", value: "Option 4" },
        { text: "Option nr 5", value: "Option 5" }
      ],
      resetMultiSelectOptions: [
        { text: "Option nr 1", value: "Option 1", selected: true },
        { text: "Option nr 2", value: "Option 2", selected: true },
        { text: "Option nr 3", value: "Option 3", selected: true },
        { text: "Option nr 4", value: "Option 4" },
        { text: "Option nr 5", value: "Option 5" }
      ],
      validateOptions: [
        { text: "Option nr 1", value: "Option 1" },
        { text: "Option nr 2", value: "Option 2" },
        { text: "Option nr 3", value: "Option 3" },
        { text: "Option nr 4", value: "Option 4" },
        { text: "Option nr 5", value: "Option 5" }
      ],
      validateMultiOptions: [
        { text: "Option nr 1", value: "Option 1" },
        { text: "Option nr 2", value: "Option 2" },
        { text: "Option nr 3", value: "Option 3" },
        { text: "Option nr 4", value: "Option 4" },
        { text: "Option nr 5", value: "Option 5" }
      ],
      outlineOptions: [],
      outlineIconOptions: [
        { text: "Option nr 1", value: "Option 1" },
        { text: "Option nr 2", value: "Option 2" },
        { text: "Option nr 3", value: "Option 3" },
        { text: "Option nr 4", value: "Option 4" },
        { text: "Option nr 5", value: "Option 5" }
      ],
      axiosOptions: [],
      languageOptions: [],
      disableLanguageSelect: false,
      color: {
        background: "lime",
        text: "lime-text"
      },
      phrase: "",
      customSearchPhrase: "",
      colors: [
        {
          background: "danger-color",
          text: "text-danger"
        },
        {
          background: "warning-color",
          text: "text-warning"
        },
        {
          background: "info-color",
          text: "text-info"
        },
        {
          background: "success-color",
          text: "text-success"
        },
        {
          background: "default-color",
          text: "text-default"
        },
        {
          background: "secondary-color",
          text: "text-secondary"
        },
        {
          background: "pink",
          text: "pink-text"
        },
        {
          background: "pink lighten-3",
          text: "pink-text"
        },
        {
          background: "blue",
          text: "blue-text"
        },
        {
          background: "blue lighten-3",
          text: "blue-text"
        },
        {
          background: "cyan",
          text: "cyan-text"
        },
        {
          background: "lime",
          text: "lime-text"
        },
        {
          background: "amber",
          text: "amber-text"
        }
      ],
      searchValue: "",
      loading: false
    };
  },
  methods: {
    populateLanguageSelect(code) {
      if (code) {
        fetch(`https://restcountries.eu/rest/v2/alpha/${code}`).then(resp => resp.json()).then(resp => {
          this.languageOptions = resp.languages.map((language, i) => ({ value: language.name, text: language.name, selected: i === 0 }))  
        });

        this.disableLanguageSelect = false;
      }
      else {
        this.languageOptions = [];

        this.disableLanguageSelect = true;
      }
    },
    removeOption(data) {
      if (data.length < 2) return;
      data.pop();
    },
    removeAllOptions(data) {
      if (data.length < 2) return;
      data.splice(1);
    },
    addOption(data) {
      data.push({
        selected: false,
        text: "Option nr " + (data.length + 1),
        value: "Option " + (data.length + 1)
      });
    },
    selectOption(key) {
      this.basicOptions.forEach(option => {
        option.selected = false;
      });

      this.$set(this.basicOptions[key], "selected", true);
      this.basicOptions.sort();
    },
    selectOptions(...keys) {
      this.multiOptions.forEach(option => {
        option.selected = false;
      });
      keys.forEach(key => {
        this.$set(this.multiOptions[key], "selected", true);
      });
      this.multiOptions.sort();
    },
    handleSearch(value) {
      this.searchValue = value;
      if (value === "") {
        this.outlineOptions = [];
        return;
      }
      this.loading = true;

      axios
        .get(`https://restcountries.eu/rest/v2/name/${value}`)
        .then(response => {
          if (this.searchValue === "") return;
          const options = response.data.map(country => {
            return {
              text: country.name,
              value: country.alpha2Code,
              selected: false
            };
          });
          this.outlineOptions = options;
          this.loading = false;
        })
        .catch(() => {
          this.outlineOptions = [];
          this.loading = false;
        });
    },
  },
  mounted() {
    axios
      .get("https://restcountries.eu/rest/v2/region/europe")
      .then(response => {
        this.axiosOptions = response.data.map(entry => {
          return {
            text: entry.name,
            value: entry.alpha3Code,
          }
        })
      });
  }
};
</script>

<style scoped>
.color-picker {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
