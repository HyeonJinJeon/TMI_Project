<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Pills</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/pills/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />

    <section class="demo-section">
      <h4>Material pills</h4>
      <section>
        <mdb-tabs 
          :active="0"
          pills 
          color="secondary"
          :links="[
            { text: 'Active' },
            { text: 'Link' },
            { text: 'Link' },
            { text: 'Help' }]" 
          :content="[
            `Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`,
            `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>`,
            `Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.`,
            `Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`]"
        />
      </section>
    </section>

    <section class="demo-section">
      <h4>Pills justified</h4>
      <section>
        <mdb-tabs 
          :active="0"
          pills 
          justify
          color="pink"
          :links="[
            { text: 'Active' },
            { text: 'Link 1' },
            { text: 'Link 2' },
            { text: 'Link 3' }]" 
          />
      </section>
    </section>

    <section class="demo-section">
      <h4>Pills with dropdown</h4>
      <section>
        <mdb-tabs 
          :active="0"
          pills 
          justify
          color="success"
          :links="[
            { text: 'Active' },
            { text: 'Dropdown', dropdown: true, dropdownItems: [{ text: 'Action' }, { text: 'Another action' }, { text: 'Something else here' }, { divider: true }, { text: 'Separeted link'}]},
            { text: 'Link 1' },
            { text: 'Link 2' }]" 
          />
      </section>
    </section>

    <section class="demo-section">
      <h4>Gradient pills</h4>
      <section>
        <mdb-tabs 
          :active="0"
          pills 
          justify
          gradient="peach"
          :links="[
            { text: 'Active' },
            { text: 'Link 1' },
            { text: 'Link 2' },
            { text: 'Link 3' }]" 
          />
      </section>
    </section>

    <section class="demo-section">
      <h4>Rounded pills</h4>
      <section>
        <mdb-row>
          <mdb-col md="10" lg="8" xl="6">
            <mdb-tabs 
              :active="0"
              pills 
              rounded
              color="deep-purple"
              justify
              :links="[
                { text: 'Active' },
                { text: 'Link 1' },
                { text: 'Link 2' },
                { text: 'Link 3' }]" 
              />
          </mdb-col>
          <mdb-col md="10" lg="8" xl="6">
            <mdb-tabs 
              :active="0"
              pills 
              rounded
              color="light-purple"
              justify
              :links="[
                { text: 'Active' },
                { text: 'Link 1' },
                { text: 'Link 2' },
                { text: 'Link 3' }]" 
              />
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col md="10" lg="8" xl="6">
            <mdb-tabs 
              :active="0"
              pills 
              rounded
              gradient="peach"
              justify
              :links="[
                { text: 'Active' },
                { text: 'Link 1' },
                { text: 'Link 2' },
                { text: 'Link 3' }]" 
              />
          </mdb-col>
          <mdb-col md="10" lg="8" xl="6">
            <mdb-tabs 
              :active="0"
              pills 
              rounded
              gradient="aqua"
              justify
              :links="[
                { text: 'Active' },
                { text: 'Link 1' },
                { text: 'Link 2' },
                { text: 'Link 3' }]" 
              />
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col md="10" lg="8" xl="6">
            <mdb-tabs 
              :active="0"
              pills 
              rounded
              outline="red"
              justify
              :links="[
                { text: 'Active' },
                { text: 'Link 1' },
                { text: 'Link 2' },
                { text: 'Link 3' }]" 
              />
          </mdb-col>
          <mdb-col md="10" lg="8" xl="6">
            <mdb-tabs 
              :active="0"
              pills 
              rounded
              outline="green"
              justify
              :links="[
                { text: 'Active' },
                { text: 'Link 1' },
                { text: 'Link 2' },
                { text: 'Link 3' }]" 
              />
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Pills with icons</h4>
      <section>
        <mdb-tabs 
          :active="0"
          pills 
          justify
          color="info"
          :links="[
            { text: 'USA', icon: 'android', fab: true },
            { text: 'Mexico', icon: 'leaf' },
            { text: 'Poland', icon: 'heart' },
            { text: 'Brazil', icon: 'futbol', far: true }]" 
          />
        <mdb-tabs 
          :active="0"
          pills 
          justify
          rounded
          outline="red"
          :links="[
            { text: 'San Francisco', icon: 'grin', far: true },
            { text: 'Tijuana', icon: 'users' },
            { text: 'Cracow', icon: 'thumbs-up' },
            { text: 'Rio de Janeiro', icon: 'coffee' }]" 
          />
      </section>
    </section>

    <section class="demo-section">
      <h4>Pills with content</h4>
      <section>
        <mdb-row>
          <mdb-col md="10" lg="8" xl="6">
            <mdb-tabs 
              :active="0"
              pills 
              gradient="purple"
              rounded
              :links="[
                { text: 'Fashion' },
                { text: 'Lifestyle' },
                { text: 'Beauty' },
                { text: 'Shop' }]" 
              :content="[
                `Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`,
                `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>`,
                `Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.`,
                `Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`]"
            />
          </mdb-col>
          <mdb-col md="10" lg="8" xl="6">
            <mdb-tabs 
              :active="0"
              pills 
              color="warning"
              card
              navClass="mb-4"
              :links="[
                { text: 'About' },
                { text: 'Features' },
                { text: 'Pricing' }]" 
              :content="[
                `Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`,
                `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>`,
                `Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.`,
                `Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`]"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Color animations</h4>
      <section>
        <mdb-tabs 
          :active="0"
          pills 
          justify
          color="blue-teal"
          :links="[
            { text: 'Fashion' },
            { text: 'Lifestyle' },
            { text: 'Beauty' },
            { text: 'Shop' }]" 
          />
        <mdb-tabs 
          :active="0"
          pills 
          justify
          rounded
          outline="purple-anm"
          :links="[
            { text: 'Madrid' },
            { text: 'Bari' },
            { text: 'Warsaw' },
            { text: 'Paris' }]" 
          />
        <mdb-tabs 
          :active="0"
          pills 
          justify
          rounded
          color="orange-anm"
          :links="[
            { text: 'Features' },
            { text: 'Pricing' },
            { text: 'Gadgets' },
            { text: 'Technology' }]" 
          />
      </section>
    </section>

    <section class="demo-section">
      <h4>Pills within a modal</h4>
      <section>
        <mdb-btn rounded color="default" @click.native="modal = true">launch modal register / login <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
        <mdb-modal :show="modal" @close="modal = false" cascade tabs>
          <mdb-tab pills justify color="primary" class="mt-4 mx-4">
            <mdb-tab-item :active="tabs==1" @click.native.prevent="tabs = 1"><mdb-icon icon="user" class="mr-1"/>Login</mdb-tab-item>
            <mdb-tab-item :active="tabs==2" @click.native.prevent="tabs = 2"><mdb-icon icon="user-plus" class="mr-1"/>Register</mdb-tab-item>
          </mdb-tab>
          <mdb-modal-body class="mx-3" v-if="tabs==1">
            <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
            <mdb-input label="Your password" icon="lock" type="password"/>
            <div class="mt-2 text-center">
              <mdb-btn color="info">Log in <mdb-icon icon="sign-in-alt" class="ml-1"/></mdb-btn>
            </div>
          </mdb-modal-body>
          <mdb-modal-footer center v-if="tabs==1">
            <div class="options text-center text-md-right mt-1">
              <p>Not a member? <a href="#" @click="tabs=2">Sign Up</a></p>
              <p>Forgot <a href="#">Password?</a></p>
            </div>
            <mdb-btn outline="info" class="ml-auto" @click.native="modal=false">Close</mdb-btn>
          </mdb-modal-footer>
          <mdb-modal-body class="mx-3" v-if="tabs==2">
            <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
            <mdb-input label="Your password" icon="lock" type="password" class="mb-5"/>
            <mdb-input label="Repeat password" icon="lock" type="password"/>
            <div class="mt-2 text-center">
              <mdb-btn color="info">Sign Up<mdb-icon icon="sign-in-alt" class="ml-1"/></mdb-btn>
            </div>
          </mdb-modal-body>
          <mdb-modal-footer center v-if="tabs==2">
            <div class="options text-center text-md-right mt-1">
              <p>Already have an account? <a href="#" @click="tabs=1">Log in</a></p>
            </div>
            <mdb-btn outline="info" class="ml-auto" @click.native="modal=false">Close</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
      </section>
    </section>

  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbTabs, mdbBtn, mdbModal, mdbTab, mdbTabItem, mdbModalBody, mdbInput, mdbModalFooter } from 'mdbvue';

export default {
  name: 'PillsPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbTabs,
    mdbBtn,
    mdbModal,
    mdbTab,
    mdbTabItem,
    mdbModalBody,
    mdbInput,
    mdbModalFooter
  },
  data() {
    return {
      modal: false,
      tabs: 1
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.pills-peach-gradient .nav-item .nav-link.active {
background: linear-gradient(40deg, #FFD86F, #FC6262);
}
.pills-blue-gradient .nav-item .nav-link.active {
background: linear-gradient(40deg, #45cafc, #303f9f);
}
.pills-purple-gradient .nav-item .nav-link.active {
background: linear-gradient(40deg, #ff6ec4, #7873f5);
}
.pills-aqua-gradient .nav-item .nav-link.active {
background: linear-gradient(40deg, #2096ff, #05ffa3);
}

.pills-rounded .nav-item .nav-link {
border-radius: 10em;
}
.pills-light-purple .nav-item .nav-link.active {
background-color: #ba68c8;
}

.pills-outline-red .nav-item .nav-link {
border: 2px solid #fff;
color: #666;
background-color: transparent;
}
.pills-outline-red .nav-item .nav-link:hover {
border: 2px solid #eee;
}
.pills-outline-red .nav-item .nav-link.active {
border: 2px solid #f44336;
color: #f44336;
}
.pills-outline-red .nav-item .nav-link.active:hover {
border: 2px solid #f44336;
color: #f44336;
}

.pills-outline-green .nav-item .nav-link {
border: 2px solid #fff;
color: #666;
background-color: transparent;
}
.pills-outline-green .nav-item .nav-link:hover {
border: 2px solid #eee;
}
.pills-outline-green .nav-item .nav-link.active {
border: 2px solid #4caf50;
color: #4caf50;
}
.pills-outline-green .nav-item .nav-link.active:hover {
border: 2px solid #4caf50;
color: #4caf50;
}

.pills-blue-teal .nav-item .nav-link.active {
background-color: #4fc3f7;
-webkit-animation-name: example; /* Safari 4.0 - 8.0 */
-webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
animation-name: example;
animation-duration: 4s;
}
/* Safari 4.0 - 8.0 */
@-webkit-keyframes example {
from {background-color: #4fc3f7;}
to {background-color: #009688;}
}

/* Standard syntax */
@keyframes example {
from {background-color: #4fc3f7;}
to {background-color: #009688;}
}

.pills-outline-purple-anm .nav-item .nav-link.active {
border: 2px solid #9c27b0;
color: #9c27b0;
background-color: transparent;
-webkit-animation-name: outline; /* Safari 4.0 - 8.0 */
-webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
animation-name: outline;
animation-duration: 4s;
}
/* Safari 4.0 - 8.0 */
@-webkit-keyframes outline {
from {border: 2px solid #9c27b0; color: #9c27b0;}
to {border: 2px solid #f48fb1; color: #f48fb1;}
}

/* Standard syntax */
@keyframes outline {
from {border: 2px solid #9c27b0; color: #9c27b0;}
to {border: 2px solid #f48fb1; color: #f48fb1;}
}

.pills-orange-anm .nav-item .nav-link.active {
background-color: #ffa000 ;
-webkit-animation-name: orange; /* Safari 4.0 - 8.0 */
-webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
animation-name: orange;
animation-duration: 4s;
}
/* Safari 4.0 - 8.0 */
@-webkit-keyframes orange {
from {background-color: #ffa000 ;}
to {background-color: #f44336;}
}

/* Standard syntax */
@keyframes orange {
from {background-color: #ffa000 ;}
to {background-color: #f44336;}
}
</style>
