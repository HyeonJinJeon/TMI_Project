<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Hotkey</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/directives/hotkey/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="demo-section">
        <h4>Textarea - hotkey</h4>
        <section>
          <p>
            Press alt+l to insert a default text / ctrl + c to clear textarea
          </p>
          <mdb-input
            type="textarea"
            v-model="value"
            v-mdb-hotkey="inputKeymap"
            :rows="3"
            label="Press a key combination"
          />
        </section>
      </section>
      <section class="demo-section">
        <h4>Tabs - keyboard navigation</h4>
        <section>
          <div v-mdb-hotkey:window.prevent="documentKeymap">
            <p>Use right/left arrows to switch tabs</p>
            <mdb-tabs
              :active="activeTab"
              @activeTab="activeTab = $event"
              tabs
              card
              class="mb-5"
              color="indigo"
              justify
              :links="[
                { text: 'Home' },
                { text: 'Profile' },
                { text: 'Contact' }
              ]"
              :content="tabs"
            />
          </div>
        </section>
      </section>
    </mdb-container>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbIcon,
  mdbInput,
  mdbTabs,
  mdbHotkey
} from "mdbvue";

export default {
  name: "HotkeyPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbInput,
    mdbTabs
  },
  data() {
    return {
      value: "",
      activeTab: 0,
      tabs: [
        `Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`,
        `Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.`,
        `Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`
      ]
    };
  },
  computed: {
    inputKeymap() {
      return {
        "alt+l": this.insertText,
        "ctrl+c": this.removeText
      };
    },
    documentKeymap() {
      return {
        "ArrowRight": this.changeTab,
        "ArrowLeft": () => this.changeTab(-1)
      };
    }
  },
  methods: {
    insertText() {
      this.value =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    },
    removeText() {
      this.value = "";
    },
    changeTab(direction = 1) {
      let next = this.activeTab + direction;
      if (next < 0) next = this.tabs.length - 1;
      else if (next > this.tabs.length - 1) next = 0;

      this.activeTab = next;
    }
  },
  directives: { mdbHotkey }
};
</script>

<style scoped></style>
