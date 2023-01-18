<template>
  <div style="margin-top: -15px">
    <mdb-edge-header color="teal darken-2">
      <div class="category-page-background"></div>
    </mdb-edge-header>
    <mdb-container class="free-bird">
      <mdb-row>
        <mdb-col md="8" class="mx-auto">
          <mdb-jumbotron class="pt-4">
            <h2 class="pb-4">
              <mdb-icon icon="asterisk" class="text-danger mr-2" /><strong
                >Directives</strong
              >
            </h2>
            <h6 class="my-3">FREE</h6>
            <mdb-list-group>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/animate-on-scroll"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  Animate on Scroll <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/scrollspy"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  ScrollSpy <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/waves"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  Waves <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
            </mdb-list-group>
            <!-- PRO -->
            <mdb-list-group>
              <h6 class="my-3">PRO</h6>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/pro/click-outside"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  Click Outside <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/pro/clipboard"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  Clipboard <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/pro/dummy"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  Dummy <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/pro/hotkey"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  Hotkey <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/pro/infinite-scroll"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  Infinite Scroll <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/pro/input-mask"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  Input Mask <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/pro/intersect"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  Intersection Observer <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/pro/lazy-load"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  Lazy Load <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/pro/mutate"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  Mutation Observer <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/pro/resize"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  Resize <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/pro/scroll-lock"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  ScrollLock <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/pro/scrollspy"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  ScrollSpy <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/pro/smooth"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  Smooth Scroll <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/pro/sticky"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  StickyContent <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
              <mdb-nav-item
                class="list-group-item list-group-item-action"
                to="/directives/pro/touch"
              >
                <h5 class="justify-content-between d-flex align-items-center">
                  Touch <mdb-icon icon="angle-right" />
                </h5>
              </mdb-nav-item>
            </mdb-list-group>
            <!-- /PRO -->
          </mdb-jumbotron>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbIcon,
  mdbJumbotron,
  mdbNavItem,
  mdbListGroup,
  mdbEdgeHeader
} from "mdbvue";

export default {
  name: "AdvancedPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbJumbotron,
    mdbNavItem,
    mdbListGroup,
    mdbEdgeHeader
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

.category-page-background {
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background: url("https://mdbootstrap.com/wp-content/uploads/2016/11/mdb-pro-min-1.jpg")
    center;
  background-size: cover;
}

.example-components-list {
  padding-top: 20px;
}

.example-components-list li {
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #f7f7f7;
  transition: 0.3s;
}

.example-components-list h6 {
  padding: 20px 10px 5px 10px;
  color: grey;
}

.example-components-list li:hover {
  background-color: #fafafa;
}

.example-components-list i {
  float: right;
  padding-top: 3px;
}

.nav-link.navbar-link h5 {
  color: #212529;
}
</style>
