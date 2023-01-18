<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Color Combination </strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/css/color-combination/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr class="mb-4" />

    <section class="demo-section">
      <h4>Primary color</h4>
      <section>
        <mdb-row>
          <mdb-col md="4" class="mt-4">
            <div class="palette">
              <div class="deep-purple accent-4">
                <h6 class="h6">Deep-purple accent-4</h6>
                <p>#6200ea</p>
              </div>
              <div class="deep-purple darken-4">
                <h6 class="h6">Deep-purple darken-4</h6>
                <p>#304ffe</p>
              </div>
              <div class="deep-purple accent-1">
                <h6 class="h6">Deep-purple accent-1</h6>
                <p>#b388ff</p>
              </div>
            </div>
          </mdb-col>
          <mdb-col md="6" class="mt-4">
            <mdb-card>
              <mdb-card-header
                class="deep-purple darken-4 white-text text-right p-2"
              >
                <mdb-icon fab class="px-2" icon="facebook-f" size="sm" />
                <mdb-icon fab class="px-2" icon="twitter" size="sm" />
                <mdb-icon fab class="px-2" icon="instagram" size="sm" />
              </mdb-card-header>
              <mdb-navbar
                dark
                color="deep-purple accent-4"
                hamburger
                expand="xl"
              >
                <mdb-navbar-brand>
                  Analytics
                </mdb-navbar-brand>
                <mdb-navbar-toggler> </mdb-navbar-toggler>
              </mdb-navbar>
              <mdb-card-body>
                <mdb-card-title>Alie Corporation</mdb-card-title>
                <mdb-card-text>NYSE: AZHC • Oct 16, 1:45PM</mdb-card-text>
                <div class="d-flex justify-content-between mb-2">
                  <p class="display-4 align-self-end">887.32</p>
                  <p class="align-self-end pb-2">887.02 (.03%)</p>
                </div>
                <mdb-bar-chart :data="data" :options="options" :height="200" />

                <mdb-btn
                  tag="a"
                  floating
                  icon="plus"
                  class="deep-purple accent-1 float-right"
                  iconClass="black-text"
                />
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Secondary color</h4>
      <section>
        <mdb-row>
          <mdb-col md="4" class="mt-4">
            <div class="palette">
              <div class="deep-purple accent-4">
                <h6 class="h6">Deep-purple accent-4</h6>
                <p>#6200ea</p>
              </div>
              <div class="deep-purple darken-4">
                <h6 class="h6">Deep-purple darken-4</h6>
                <p>#304ffe</p>
              </div>
              <div class="teal accent-3">
                <h6 class="h6">Teal accent-3</h6>
                <p>#1de9b6</p>
              </div>
            </div>
          </mdb-col>
          <mdb-col md="6" class="mt-4">
            <mdb-card>
              <mdb-card-header
                class="deep-purple darken-4 white-text text-right p-2"
              >
                <mdb-icon fab class="px-2" icon="facebook-f" size="sm" />
                <mdb-icon fab class="px-2" icon="twitter" size="sm" />
                <mdb-icon fab class="px-2" icon="instagram" size="sm" />
              </mdb-card-header>
              <mdb-navbar
                dark
                color="deep-purple accent-4"
                hamburger
                expand="xl"
              >
                <mdb-navbar-brand>
                  Analytics
                </mdb-navbar-brand>
                <mdb-navbar-toggler> </mdb-navbar-toggler>
              </mdb-navbar>
              <mdb-card-body>
                <mdb-card-title>Alie Corporation</mdb-card-title>
                <mdb-card-text>NYSE: AZHC • Oct 16, 1:45PM</mdb-card-text>
                <div class="d-flex justify-content-between mb-2">
                  <p class="display-4 align-self-end">887.32</p>
                  <p class="align-self-end pb-2">887.02 (.03%)</p>
                </div>
                <mdb-bar-chart :data="data" :options="options" :height="200" />

                <mdb-btn
                  tag="a"
                  floating
                  icon="plus"
                  class="teal accent-3 float-right"
                  iconClass="black-text"
                />
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Alternative colors</h4>
      <section>
        <mdb-row>
          <mdb-col md="4" class="mt-4">
            <div class="palette">
              <div class="yellow darken-1 accent-4">
                <h6 class="h6">Yellow darken-1</h6>
                <p>#fdd835</p>
              </div>
              <div class="indigo accent-4">
                <h6 class="h6">Indigo accent-4</h6>
                <p>##304ffe</p>
              </div>
            </div>
          </mdb-col>
          <mdb-col md="6" class="mt-4">
            <mdb-card class="yellow darken-1">
              <mdb-card-body>
                <mdb-card-title
                  tag="h2"
                  transparent
                  style="color: #304ffe"
                  class="font-weight-bold p-2"
                >
                  <mdb-icon icon="code" class="red-text mr-2" />MDB
                </mdb-card-title>
                <mdb-card-title class="text-center font-weight-bold p-4"
                  >Choose topic which interests you</mdb-card-title
                >
                <mdb-container>
                  <mdb-row class="mt-4">
                    <mdb-col lg="6">
                      <mdb-card class="flex-row">
                        <mdb-view
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                          imageClass="card-img-64"
                        >
                          <mdb-mask overlay="pink-strong" />
                        </mdb-view>
                        <mdb-card-body class="font-weight-bold">
                          Gaming
                        </mdb-card-body>
                      </mdb-card>
                    </mdb-col>
                    <mdb-col lg="6">
                      <mdb-card class="flex-row">
                        <mdb-view
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                          imageClass="card-img-64"
                        >
                          <mdb-mask overlay="pink-strong" />
                        </mdb-view>
                        <mdb-card-body class="font-weight-bold">
                          Music
                        </mdb-card-body>
                      </mdb-card>
                    </mdb-col>
                  </mdb-row>
                  <mdb-row class="mt-4">
                    <mdb-col lg="6">
                      <mdb-card class="flex-row">
                        <mdb-view
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                          imageClass="card-img-64"
                        >
                          <mdb-mask overlay="pink-strong" />
                        </mdb-view>
                        <mdb-card-body class="font-weight-bold">
                          Illustration
                        </mdb-card-body>
                      </mdb-card>
                    </mdb-col>
                    <mdb-col lg="6">
                      <mdb-card class="flex-row">
                        <mdb-view
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                          imageClass="card-img-64"
                        >
                          <mdb-mask overlay="pink-strong" />
                        </mdb-view>
                        <mdb-card-body class="font-weight-bold">
                          Photography
                        </mdb-card-body>
                      </mdb-card>
                    </mdb-col>
                  </mdb-row>
                  <mdb-row class="mt-4">
                    <mdb-col lg="6">
                      <mdb-card class="flex-row">
                        <mdb-view
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(21).jpg"
                          imageClass="card-img-64"
                        >
                          <mdb-mask overlay="pink-strong" />
                        </mdb-view>
                        <mdb-card-body class="font-weight-bold">
                          Architecture
                        </mdb-card-body>
                      </mdb-card>
                    </mdb-col>
                    <mdb-col lg="6">
                      <mdb-card class="flex-row">
                        <mdb-view
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                          imageClass="card-img-64"
                        >
                          <mdb-mask overlay="pink-strong" />
                        </mdb-view>
                        <mdb-card-body class="font-weight-bold">
                          Technology
                        </mdb-card-body>
                      </mdb-card>
                    </mdb-col>
                  </mdb-row>
                </mdb-container>
                <mdb-btn
                  class="indigo accent-4 float-right mt-4"
                  icon="gem"
                  far
                  floating
                  tag="a"
                />
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <mdb-row class="mt-4">
          <mdb-col md="10">
            <mdb-card class="indigo accent-4">
              <mdb-card-body>
                <mdb-card-title
                  tag="h2"
                  transparent
                  class="font-weight-bold p-2 white-text"
                >
                  <mdb-icon icon="code" class="red-text mr-2" />MDB<mdb-icon
                    icon="user"
                    class="float-right"
                  />
                </mdb-card-title>
                <mdb-row class="justify-content-center">
                  <mdb-col md="6" class="mt-4">
                    <mdb-card testimonial>
                      <mdb-card-up>
                        <img
                          src="https://mdbootstrap.com/img/Photos/Others/photo2.jpg"
                          class="img-fluid"
                        />
                      </mdb-card-up>
                      <mdb-card-avatar color="white" class="mx-auto"
                        ><img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                          class="rounded-circle"
                      /></mdb-card-avatar>
                      <mdb-card-body style="color: #304ffe">
                        <mdb-card-title>PAINTING</mdb-card-title>
                        <p class="black-text font-weight-bold">
                          Lorem ipsum dolor sit consectetur adipisicing elit
                        </p>
                        <mdb-icon fab icon="youtube" /> 123
                      </mdb-card-body>
                    </mdb-card>
                  </mdb-col>
                  <mdb-col md="6" class="mt-4">
                    <mdb-card testimonial>
                      <mdb-card-up>
                        <img
                          src="https://mdbootstrap.com/img/Photos/Others/photo9.jpg"
                          class="img-fluid"
                        />
                      </mdb-card-up>
                      <mdb-card-avatar color="white" class="mx-auto"
                        ><img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg"
                          class="rounded-circle"
                      /></mdb-card-avatar>
                      <mdb-card-body style="color: #304ffe">
                        <mdb-card-title>DESIGN</mdb-card-title>
                        <p class="black-text font-weight-bold">
                          Similique voluptas neque ab possimus nobis
                        </p>
                        <mdb-icon fab icon="youtube" /> 98
                      </mdb-card-body>
                    </mdb-card>
                  </mdb-col>
                </mdb-row>

                <mdb-row class="justify-content-center">
                  <mdb-col md="6" class="mt-4">
                    <mdb-card testimonial>
                      <mdb-card-up>
                        <img
                          src="https://mdbootstrap.com/img/Photos/Others/img (45).jpg"
                          class="img-fluid"
                        />
                      </mdb-card-up>
                      <mdb-card-avatar color="white" class="mx-auto"
                        ><img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg"
                          class="rounded-circle"
                      /></mdb-card-avatar>
                      <mdb-card-body style="color: #304ffe">
                        <mdb-card-title>TECHNOLOGY</mdb-card-title>
                        <p class="black-text font-weight-bold">
                          Itaque soluta sed atum culpa dolorum
                        </p>
                        <mdb-icon fab icon="youtube" /> 165
                      </mdb-card-body>
                    </mdb-card>
                  </mdb-col>
                  <mdb-col md="6" class="mt-4">
                    <mdb-card testimonial>
                      <mdb-card-up>
                        <img
                          src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg"
                          class="img-fluid"
                        />
                      </mdb-card-up>
                      <mdb-card-avatar color="white" class="mx-auto"
                        ><img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg"
                          class="rounded-circle"
                      /></mdb-card-avatar>
                      <mdb-card-body style="color: #304ffe">
                        <mdb-card-title>ARCHITECTURE</mdb-card-title>
                        <p class="black-text font-weight-bold">
                          Quidem veniam qui aut dignissimos
                        </p>
                        <mdb-icon fab icon="youtube" /> 74
                      </mdb-card-body>
                    </mdb-card>
                  </mdb-col>
                </mdb-row>

                <div class="white-text m-5 px-5 d-flex justify-content-between">
                  <mdb-icon icon="cogs" size="2x" />
                  <mdb-icon icon="heart" style="color: #fdd835" size="2x" />
                  <mdb-icon icon="search" size="2x" />
                </div>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Pink theme</h4>
      <section>
        <mdb-row>
          <mdb-col md="4" class="mt-4">
            <div class="palette">
              <div class="pink">
                <h6 class="h6">Pink</h6>
                <p>#e91e63</p>
              </div>
            </div>
          </mdb-col>
          <mdb-col md="6" class="mt-4">
            <mdb-flipping-card
              :flipped="flipped"
              style="max-width: 22rem; height: 500px;"
            >
              <mdb-card class="face front" style="height: 500px;" testimonial>
                <mdb-card-up>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/images/18.jpg"
                    class="img-fluid"
                  />
                </mdb-card-up>
                <mdb-avatar circle class="mx-auto white"
                  ><img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg"
                    class="rounded-circle"
                /></mdb-avatar>
                <mdb-card-body>
                  <mdb-card-title tag="h6" class="pink-text"
                    >PHOTOGRAPHY</mdb-card-title
                  >
                  <mdb-card-title class="font-weight-bold"
                    >Similique totam inventore numquam ipsa sed</mdb-card-title
                  >
                  <mdb-card-text class="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati aut rem beatae quidem a reprehenderit accusamus
                    maxime voluptatem. Quo, adipisci, eius dolorum atque
                    necessitatibus cupiditate aliquam inventore eligendi quaerat
                    odio praesentium
                  </mdb-card-text>
                  <mdb-btn
                    icon="redo-alt"
                    tag="a"
                    floating
                    color="pink"
                    @click="flipped = true"
                  />
                </mdb-card-body>
              </mdb-card>
              <mdb-card class="face back text-center" style="height: 500px;">
                <mdb-card-body>
                  <h4 class="font-weight-bold">About me</h4>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                    dolores nihil quae in mollitia asperiores ut rerum
                    repellendus, voluptatum eum, officia laudantium quaerat?
                  </p>
                  <hr />
                  <ul class="list-inline py-2">
                    <li class="list-inline-item">
                      <mdb-btn
                        size="sm"
                        tag="a"
                        floating
                        color="pink"
                        fab
                        icon="facebook-f"
                      />
                    </li>
                    <li class="list-inline-item">
                      <mdb-btn
                        size="sm"
                        tag="a"
                        floating
                        color="pink"
                        fab
                        icon="twitter"
                      />
                    </li>
                    <li class="list-inline-item">
                      <mdb-btn
                        size="sm"
                        tag="a"
                        floating
                        color="pink"
                        fab
                        icon="google-plus-g"
                      />
                    </li>
                    <li class="list-inline-item">
                      <mdb-btn
                        size="sm"
                        tag="a"
                        floating
                        color="pink"
                        fab
                        icon="linkedin-in"
                      />
                    </li>
                  </ul>
                  <a class="rotate-btn" @click="flipped = false">
                    <mdb-icon class="pr-2" icon="undo" />Click here to rotate
                    back
                  </a>
                </mdb-card-body>
              </mdb-card>
            </mdb-flipping-card>
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Light theme</h4>
      <section>
        <mdb-row>
          <mdb-col md="4" class="mt-4">
            <div class="palette ">
              <div class="red lighten-5 black-text">
                <h6 class="h6">Red lighten-5</h6>
                <p>#ffebee</p>
              </div>
              <div class="brown darken-4">
                <h6 class="h6">Brown darken-4</h6>
                <p>#3e2723</p>
              </div>
              <div class="red lighten-4 black-text">
                <h6 class="h6">Red lighten-4</h6>
                <p>#ffcdd2</p>
              </div>
            </div>
          </mdb-col>
          <mdb-col md="6" lg="5" class="mt-4">
            <mdb-card style="color: #3e2723">
              <mdb-card-header class="red lighten-4 text-right p-2">
                <mdb-icon fab class="px-2" icon="facebook-f" size="sm" />
                <mdb-icon fab class="px-2" icon="twitter" size="sm" />
                <mdb-icon fab class="px-2" icon="instagram" size="sm" />
              </mdb-card-header>
              <mdb-navbar color="red lighten-5">
                <mdb-navbar-brand>
                  <h6 class="h6 mb-0">
                    <mdb-icon icon="gem" far class="mr-1" /> SHOP
                  </h6>
                </mdb-navbar-brand>
                <mdb-navbar-nav right>
                  <mdb-nav-item>
                    <mdb-icon icon="search" />
                  </mdb-nav-item>
                </mdb-navbar-nav>
              </mdb-navbar>
              <mdb-card-body>
                <mdb-container class="text-center">
                  <mdb-row>
                    <mdb-col>
                      <mdb-view
                        src="https://mdbootstrap.com/img/Photos/Others/img (31).jpg"
                        rounded
                        class="z-depth-1"
                      >
                        <mdb-mask overlay="white-slight" />
                      </mdb-view>
                      <h6 class="font-weight-bold mt-4">Skateboard</h6>
                      <p>$64</p>
                    </mdb-col>
                    <mdb-col>
                      <mdb-view
                        src="https://mdbootstrap.com/img/Photos/Others/img (30).jpg"
                        rounded
                        class="z-depth-1"
                      >
                        <mdb-mask overlay="white-slight" />
                      </mdb-view>
                      <h6 class="font-weight-bold mt-4">Red Cap</h6>
                      <p>$15</p>
                    </mdb-col>
                  </mdb-row>
                  <mdb-row>
                    <mdb-col>
                      <mdb-view
                        src="https://mdbootstrap.com/img/Photos/Others/food3.jpg"
                        rounded
                        class="z-depth-1"
                      >
                        <mdb-mask overlay="white-slight" />
                      </mdb-view>
                      <h6 class="font-weight-bold mt-4">Fruit Porridge</h6>
                      <p>$3</p>
                    </mdb-col>
                    <mdb-col>
                      <mdb-view
                        src="https://mdbootstrap.com/img/Photos/Others/img (29).jpg"
                        rounded
                        class="z-depth-1"
                      >
                        <mdb-mask overlay="white-slight" />
                      </mdb-view>
                      <h6 class="font-weight-bold mt-4">Orange Cocktail</h6>
                      <p>$10</p>
                    </mdb-col>
                  </mdb-row>
                </mdb-container>
                <div class="d-flex justify-content-between align-items-end">
                  <div>
                    <mdb-btn
                      icon="share-alt"
                      transparent
                      flat
                      class="p-0"
                      iconClass="fa-lg"
                    />
                    <mdb-btn
                      icon="question-circle"
                      far
                      transparent
                      flat
                      class="p-0"
                      iconClass="fa-lg"
                    />
                  </div>
                  <mdb-btn
                    tag="a"
                    floating
                    icon="shopping-basket"
                    class="red lighten-4"
                    iconClass="brown-darken-text"
                  />
                </div>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Dark theme</h4>
      <section>
        <mdb-row>
          <mdb-col md="4" class="mt-4">
            <div class="palette">
              <div class="pink darken-4">
                <h6 class="h6">Pink darken-4</h6>
                <p>#880e4f</p>
              </div>
              <div class="pink accent-4">
                <h6 class="h6">Pink accent-4</h6>
                <p>#c51162</p>
              </div>
              <div class="red">
                <h6 class="h6">Red</h6>
                <p>##e53935</p>
              </div>
            </div>
          </mdb-col>
          <mdb-col md="6" lg="5" class="mt-4">
            <mdb-card class="pink darken-4 mdb-pink-darken-form">
              <mdb-card-body>
                <mdb-card-title class="white-text text-center p-2 font-weight-bold">SIGN UP</mdb-card-title>
                <mdb-input
                  icon="user"
                  far
                  iconClass="white-text pink darken-4"
                  label="First name"
                  labelClass="white-text pink darken-4"
                />
                <mdb-input
                  icon="hand-point-right"
                  far
                  iconClass="white-text pink darken-4"
                  label="Last name"
                  labelClass="white-text pink darken-4"
                />
                <mdb-input
                  type="email"
                  icon="envelope"
                  far
                  iconClass="white-text pink darken-4"
                  label="Email"
                  labelClass="white-text pink darken-4"
                />
                <mdb-input
                  type="password"
                  icon="star"
                  far
                  iconClass="white-text pink darken-4"
                  label="Password"
                  labelClass="white-text pink darken-4"
                  small="At least 8 characters and 1 digit"
                />
              </mdb-card-body>
              <div class="white rounded-top p-4 text-center">
                <mdb-btn outline="red" block rounded>Sign in</mdb-btn>
                <p class="small mt-3 mb-1">or sign up with:</p>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <mdb-btn
                      class="p-0 mx-1"
                      size="lg"
                      flat
                      transparent
                      style="color: #c51162"
                      fab
                      icon="facebook-f"
                    />
                  </li>
                  <li class="list-inline-item">
                    <mdb-btn
                      class="p-0 mx-1"
                      size="lg"
                      flat
                      transparent
                      style="color: #c51162"
                      fab
                      icon="twitter"
                    />
                  </li>
                  <li class="list-inline-item">
                    <mdb-btn
                      class="p-0 mx-1"
                      size="lg"
                      flat
                      transparent
                      style="color: #c51162"
                      fab
                      icon="google-plus-g"
                    />
                  </li>
                  <li class="list-inline-item">
                    <mdb-btn
                      class="p-0 mx-1"
                      size="lg"
                      flat
                      transparent
                      style="color: #c51162"
                      fab
                      icon="linkedin-in"
                    />
                  </li>
                </ul>
                <hr />

                <p class="small">By clicking <i>Sign up</i> you agree to our <a href="#" style="color: #c51162">terms of service</a></p>
              </div>
            </mdb-card>
          </mdb-col>
        </mdb-row>
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
  mdbFlippingCard,
  mdbCard,
  mdbCardBody,
  mdbCardHeader,
  mdbBarChart,
  mdbBtn,
  mdbCardTitle,
  mdbCardText,
  mdbCardUp,
  mdbCardAvatar,
  mdbNavbar,
  mdbNavbarToggler,
  mdbNavbarBrand,
  mdbNavbarNav,
  mdbNavItem,
  mdbView,
  mdbMask,
  mdbAvatar,
  mdbInput
} from "mdbvue";

export default {
  name: "ColorCombination",
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbCol,
    mdbFlippingCard,
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbBarChart,
    mdbBtn,
    mdbCardTitle,
    mdbCardText,
    mdbCardUp,
    mdbCardAvatar,
    mdbNavbar,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbNavbarNav,
    mdbNavItem,
    mdbView,
    mdbMask,
    mdbAvatar,
    mdbInput
  },
  data() {
    return {
      flipped: false,
      data: {
        labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM"],
        datasets: [
          {
            fill: false,
            borderColor: "#673ab7",
            pointBackgroundColor: "#673ab7",
            data: [881, 882, 883, 884, 887, 885, 0],
            backgroundColor: "#311b92"
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        elements: {
          line: {
            tension: 0.0
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                padding: 15,
                height: 30
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 5,
                padding: 15,
                min: 880,
                max: 890
              }
            }
          ]
        }
      }
    };
  }
};
</script>

<style scoped>
.palette {
  display: flex;
  height: 100%;
  flex-direction: column;
  color: white;
  font-weight: 600;
  font-size: 1rem;
}

.palette div {
  height: 100%;
  padding: 10px;
}

</style>
<style>
.mdb-pink-darken-form input {
  color: white !important;
}

.mdb-pink-darken-form input:focus {
  border-color: white !important;
  box-shadow: 0 1px 0 0 white !important;
}

.mdb-pink-darken-form small {
  color: white !important;
}

.brown-darken-text {
  color: #3e2723 !important;
}
</style>
