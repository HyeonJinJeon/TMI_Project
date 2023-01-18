<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Scroll Spy</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/directives/scrollspy/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />

    <section class="demo-section">
      <h4>Tabs with Scrollspy</h4>
      <section>
        <mdb-tab
          tabs
          card
          justify
          color="default"
          class="mt-4 mx-4"
          v-mdb-scroll-spy="{ container: 'scroll-container', visible: 0.1 }"
        >
          <mdb-tab-item
            v-for="(section, i) in sections"
            :key="i"
            :href="`#${section.id}`"
            :active="tabs === i"
            @click.native="tabs = i"
            >{{ section.topic }}</mdb-tab-item
          >
        </mdb-tab>
        <div
          id="scroll-container"
          class="mt-5 mx-4"
          style="max-height: 300px; overflow-y: scroll;"
        >
          <div v-for="(section, i) in sections" :key="i" :id="section.id">
            <h3>{{ section.topic }}</h3>
            <p>{{ section.text }}</p>
          </div>
        </div>
      </section>
    </section>

    <section class="demo-section">
      <h4>MDB Scrollspy</h4>
      <section>
        <mdb-row>
          <mdb-col sm="4" lg="3">
            <mdb-navbar
              :toggler="false"
              class="z-depth-0"
              id="mdb-scrollspy-ex"
            >
              <mdb-navbar-nav
                vertical
                v-mdb-scroll-spy="{
                  container: 'mdb-scrollspy-container',
                  callback: 'setActiveLink',
                  visible: 0.2
                }"
                class="nav-pills default-pills"
              >
                <mdb-nav-item
                  href="#section-1"
                  :active="
                    nested === 0 || nested === 1 || nested === 2 || nested === 3
                  "
                  >Section 1</mdb-nav-item
                >
                <mdb-navbar-nav vertical>
                  <mdb-nav-item
                    :active="nested === 1"
                    class="ml-3 my-1"
                    href="#subsection-1a"
                    >Subsection 1A</mdb-nav-item
                  >
                  <mdb-nav-item
                    :active="nested === 2"
                    class="ml-3 my-1"
                    href="#subsection-1b"
                    >Subsection 1B</mdb-nav-item
                  >
                  <mdb-nav-item
                    :active="nested === 3"
                    class="ml-3 my-1"
                    href="#subsection-1c"
                    >Subsection 1C</mdb-nav-item
                  >
                </mdb-navbar-nav>

                <mdb-nav-item
                  href="#section-2"
                  :active="
                    nested === 4 || nested === 5 || nested === 6 || nested === 7
                  "
                  >Section 2</mdb-nav-item
                >
                <mdb-navbar-nav vertical>
                  <mdb-nav-item
                    :active="nested === 5"
                    class="ml-3 my-1"
                    href="#subsection-2a"
                    >Subsection 2A</mdb-nav-item
                  >
                  <mdb-nav-item
                    :active="nested === 6"
                    class="ml-3 my-1"
                    href="#subsection-2b"
                    >Subsection 2B</mdb-nav-item
                  >
                  <mdb-nav-item
                    :active="nested === 7"
                    class="ml-3 my-1"
                    href="#subsection-2c"
                    >Subsection 2C</mdb-nav-item
                  >
                </mdb-navbar-nav>
              </mdb-navbar-nav>
            </mdb-navbar>
          </mdb-col>

          <mdb-col sm="8" lg="9">
            <div
              class="z-depth-1"
              style="max-height: 325px; overflow-y: scroll;"
              id="mdb-scrollspy-container"
            >
              <div class="blue lighten-4 p-3">
                <h4 id="section-1">Section 1</h4>
                <p>
                  Ad leggings keytar, brunch id art party dolor labore.
                  Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                  farm-to-table bicycle rights whatever. Anim keffiyeh carles
                  cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                  irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                  minim qui you probably haven't heard of them et cardigan trust
                  fund culpa biodiesel wes anderson aesthetic. Nihil tattooed
                  accusamus, cred irony biodiesel keffiyeh artisan ullamco
                  consequat.
                </p>

                <div id="subsection-1a" class="red lighten-4 p-3 mt-3">
                  <h5>Subsection 1A</h5>
                  <p>
                    Ad leggings keytar, brunch id art party dolor labore.
                    Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                    farm-to-table bicycle rights whatever. Anim keffiyeh carles
                    cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                    irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                    minim qui you probably haven't heard of them et cardigan
                    trust fund culpa biodiesel wes anderson aesthetic. Nihil
                    tattooed accusamus, cred irony biodiesel keffiyeh artisan
                    ullamco consequat.
                  </p>
                </div>
                <div id="subsection-1b" class="green lighten-4 p-3 mt-3">
                  <h5>Subsection 1B</h5>
                  <p>
                    Ad leggings keytar, brunch id art party dolor labore.
                    Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                    farm-to-table bicycle rights whatever. Anim keffiyeh carles
                    cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                    irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                    minim qui you probably haven't heard of them et cardigan
                    trust fund culpa biodiesel wes anderson aesthetic. Nihil
                    tattooed accusamus, cred irony biodiesel keffiyeh artisan
                    ullamco consequat.
                  </p>
                </div>
                <div id="subsection-1c" class="indigo lighten-4 p-3 mt-3">
                  <h4>Subsection 1C</h4>
                  <p>
                    Ad leggings keytar, brunch id art party dolor labore.
                    Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                    farm-to-table bicycle rights whatever. Anim keffiyeh carles
                    cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                    irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                    minim qui you probably haven't heard of them et cardigan
                    trust fund culpa biodiesel wes anderson aesthetic. Nihil
                    tattooed accusamus, cred irony biodiesel keffiyeh artisan
                    ullamco consequat.
                  </p>
                </div>
              </div>
              <div class="blue lighten-4 p-3">
                <h4 id="section-2">Section 2</h4>
                <p>
                  Ad leggings keytar, brunch id art party dolor labore.
                  Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                  farm-to-table bicycle rights whatever. Anim keffiyeh carles
                  cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                  irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                  minim qui you probably haven't heard of them et cardigan trust
                  fund culpa biodiesel wes anderson aesthetic. Nihil tattooed
                  accusamus, cred irony biodiesel keffiyeh artisan ullamco
                  consequat.
                </p>

                <div id="subsection-2a" class="red lighten-4 p-3 mt-3">
                  <h5>Subsection 2A</h5>
                  <p>
                    Ad leggings keytar, brunch id art party dolor labore.
                    Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                    farm-to-table bicycle rights whatever. Anim keffiyeh carles
                    cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                    irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                    minim qui you probably haven't heard of them et cardigan
                    trust fund culpa biodiesel wes anderson aesthetic. Nihil
                    tattooed accusamus, cred irony biodiesel keffiyeh artisan
                    ullamco consequat.
                  </p>
                </div>
                <div id="subsection-2b" class="green lighten-4 p-3 mt-3">
                  <h5>Subsection 2B</h5>
                  <p>
                    Ad leggings keytar, brunch id art party dolor labore.
                    Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                    farm-to-table bicycle rights whatever. Anim keffiyeh carles
                    cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                    irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                    minim qui you probably haven't heard of them et cardigan
                    trust fund culpa biodiesel wes anderson aesthetic. Nihil
                    tattooed accusamus, cred irony biodiesel keffiyeh artisan
                    ullamco consequat.
                  </p>
                </div>
                <div id="subsection-2c" class="indigo lighten-4 p-3 mt-3">
                  <h4>Subsection 2C</h4>
                  <p>
                    Ad leggings keytar, brunch id art party dolor labore.
                    Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                    farm-to-table bicycle rights whatever. Anim keffiyeh carles
                    cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                    irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                    minim qui you probably haven't heard of them et cardigan
                    trust fund culpa biodiesel wes anderson aesthetic. Nihil
                    tattooed accusamus, cred irony biodiesel keffiyeh artisan
                    ullamco consequat.
                  </p>
                </div>
              </div>
            </div>
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Dotted scrollspy (v-mdb-scroll-spy directive)</h4>
      <section>
        <div class="dotted-scrollspy">
          <ul
            class="pl-0 clearfix d-none d-sm-flex flex-column"
            v-mdb-scroll-spy="{ visible: 1 }"
          >
            <li class="nav-item">
              <a class="nav-link" href="#dot-1"><span></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#dot-2"><span></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#dot-3"><span></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#dot-4"><span></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#dot-5"><span></span></a>
            </li>
          </ul>
        </div>
        <div id="dot-1" class="blue" style="height: 40vh;"></div>
        <div id="dot-2" class="blue lighten-1" style="height: 40vh;"></div>
        <div id="dot-3" class="blue lighten-2" style="height: 40vh;"></div>
        <div id="dot-4" class="blue lighten-3" style="height: 40vh;"></div>
        <div id="dot-5" class="blue lighten-4" style="height: 40vh;"></div>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbIcon,
  mdbCol,
  mdbNavbar,
  mdbNavbarNav,
  mdbNavItem,
  mdbTab,
  mdbTabItem,
  mdbScrollSpy
} from "mdbvue";

export default {
  name: "ScrollSpyProPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbCol,
    mdbNavbar,
    mdbNavbarNav,
    mdbNavItem,
    mdbTab,
    mdbTabItem
  },
  data() {
    return {
      tabs: 0,
      active: 1,
      nested: 1,
      activeLink: 0,
      scrollSpySectionsOffset: [],
      sections: [
        {
          id: "section1",
          topic: "section 1",
          text:
            "Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat."
        },
        {
          id: "section2",
          topic: "section 2",
          text:
            "Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat."
        },
        {
          id: "section3",
          topic: "section 3",
          text:
            "Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat. Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat."
        }
      ]
    };
  },
  methods: {
    setActive(i) {
      this.activeLink = i;
    },
    setActiveLink(i) {
      this.nested = i;
    }
  },
  directives: { mdbScrollSpy }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#mdb-scrollspy-ex .nav-item {
  width: 100%;
}

#mdb-scrollspy-ex a {
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.1rem;
  padding: 0 5px;
  margin-top: 3px;
  margin-bottom: 3px;
  color: black;
}

#mdb-scrollspy-ex li .active {
  font-weight: 600;
}

.mdb-scrollspy-ex-example {
  height: 200px;
}
</style>
