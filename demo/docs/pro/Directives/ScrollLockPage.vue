<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Scroll Lock Directive</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/directives/scroll-lock/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="demo-section">
        <h4>Modal example</h4>
        <section>
          <mdb-btn color="grey" @click.native="showModal = true" class="my-3"
            >Launch modal & lock the screen</mdb-btn
          >
          <div class="py-5">
            <p>
              Porttitor lacus luctus accumsan tortor posuere ac. Pretium aenean
              pharetra magna ac placerat vestibulum lectus mauris. Dui ut ornare
              lectus sit amet est placerat in. Scelerisque viverra mauris in
              aliquam sem fringilla ut morbi tincidunt. Odio morbi quis commodo
              odio. Augue ut lectus arcu bibendum at varius vel. Cras adipiscing
              enim eu turpis egestas. Placerat in egestas erat imperdiet sed.
              Sit amet consectetur adipiscing elit duis tristique sollicitudin
              nibh sit. Purus viverra accumsan in nisl nisi. Sollicitudin ac
              orci phasellus egestas tellus rutrum. Nisi porta lorem mollis
              aliquam. Nec tincidunt praesent semper feugiat nibh sed pulvinar
              proin.
            </p>
            <p>
              Quisque egestas diam in arcu cursus euismod. Arcu non odio euismod
              lacinia at quis risus sed vulputate. Mattis nunc sed blandit
              libero volutpat. Pretium nibh ipsum consequat nisl. Auctor elit
              sed vulputate mi. Venenatis urna cursus eget nunc scelerisque
              viverra mauris. Lacus sed turpis tincidunt id aliquet. Nam at
              lectus urna duis convallis convallis tellus id. Magna sit amet
              purus gravida quis. Donec ultrices tincidunt arcu non sodales.
            </p>
            <p>
              Id leo in vitae turpis massa sed elementum tempus egestas.
              Tristique senectus et netus et malesuada. Euismod quis viverra
              nibh cras pulvinar mattis. Mattis pellentesque id nibh tortor id
              aliquet lectus proin. Placerat vestibulum lectus mauris ultrices
              eros in cursus turpis. Lacus vestibulum sed arcu non odio euismod
              lacinia at. Feugiat scelerisque varius morbi enim nunc. Habitant
              morbi tristique senectus et netus et malesuada. Velit laoreet id
              donec ultrices tincidunt arcu. Gravida dictum fusce ut placerat
              orci.
            </p>
          </div>
          <mdb-modal
            :show="showModal"
            @close="showModal = false"
            scrollable
            removeBackdrop
          >
            <mdb-modal-header>
              <mdb-modal-title
                >Scrolling the window is now disabled</mdb-modal-title
              >
            </mdb-modal-header>
            <mdb-modal-body v-mdb-scroll-lock.y>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </mdb-modal-body>
            <mdb-modal-footer>
              <mdb-btn color="secondary" @click.native="showModal = false"
                >Close & unlock scrolling</mdb-btn
              >
            </mdb-modal-footer>
          </mdb-modal>
        </section>
      </section>
      <section class="demo-section">
        <h4>Click the button to toggle screen lock</h4>
        <section>
          <div
            style="height: 400px; position: relative;"
            v-mdb-scroll-lock.y="lock"
          >
            <mdb-btn
              @click.native="lock = !lock"
              floating
              tag="a"
              :bottom="30"
              :right="25"
              :icon="lock ? 'lock' : 'lock-open'"
              color="grey"
              size="lg"
              style="position: absolute; bottom: 10px; right: 10px;"
            ></mdb-btn>
            <div style="overflow-y: scroll; height: 100%;">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Laoreet non curabitur gravida arcu ac tortor dignissim convallis
                aenean. Id venenatis a condimentum vitae sapien pellentesque.
                Amet nulla facilisi morbi tempus iaculis urna id. Pellentesque
                adipiscing commodo elit at imperdiet dui accumsan sit. Cursus
                euismod quis viverra nibh cras. Non consectetur a erat nam at
                lectus urna duis convallis. Et sollicitudin ac orci phasellus
                egestas. Viverra nibh cras pulvinar mattis nunc sed blandit.
                Commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
                Semper risus in hendrerit gravida rutrum quisque non tellus. Id
                consectetur purus ut faucibus pulvinar elementum integer enim.
              </p>
              <p>
                Commodo sed egestas egestas fringilla phasellus. Arcu non
                sodales neque sodales ut etiam sit. Cras sed felis eget velit
                aliquet sagittis id consectetur purus. Ac tortor dignissim
                convallis aenean et tortor at. Felis eget nunc lobortis mattis.
                Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus
                urna. Amet commodo nulla facilisi nullam. Neque ornare aenean
                euismod elementum nisi quis eleifend. Est sit amet facilisis
                magna etiam tempor orci eu lobortis. Rutrum quisque non tellus
                orci ac auctor. Tincidunt id aliquet risus feugiat in ante.
                Morbi tristique senectus et netus et. Nunc scelerisque viverra
                mauris in aliquam sem fringilla ut morbi. Amet venenatis urna
                cursus eget nunc scelerisque viverra mauris in.
              </p>
              <p>
                Ultrices dui sapien eget mi proin sed libero enim. Semper
                feugiat nibh sed pulvinar proin gravida hendrerit. Commodo odio
                aenean sed adipiscing diam. Maecenas ultricies mi eget mauris
                pharetra et ultrices. Sit amet cursus sit amet dictum. Sit amet
                consectetur adipiscing elit ut aliquam purus. Donec et odio
                pellentesque diam volutpat. Phasellus egestas tellus rutrum
                tellus pellentesque eu tincidunt tortor aliquam. Sagittis orci a
                scelerisque purus semper eget duis at tellus. Mi tempus
                imperdiet nulla malesuada pellentesque elit eget. Eget nullam
                non nisi est sit amet facilisis magna etiam. Volutpat commodo
                sed egestas egestas fringilla phasellus faucibus. Convallis
                tellus id interdum velit. Viverra vitae congue eu consequat ac.
                Tristique nulla aliquet enim tortor at auctor urna. Elementum eu
                facilisis sed odio morbi quis commodo odio aenean. Odio
                facilisis mauris sit amet massa vitae tortor condimentum.
              </p>
              <p>
                Porttitor lacus luctus accumsan tortor posuere ac. Pretium
                aenean pharetra magna ac placerat vestibulum lectus mauris. Dui
                ut ornare lectus sit amet est placerat in. Scelerisque viverra
                mauris in aliquam sem fringilla ut morbi tincidunt. Odio morbi
                quis commodo odio. Augue ut lectus arcu bibendum at varius vel.
                Cras adipiscing enim eu turpis egestas. Placerat in egestas erat
                imperdiet sed. Sit amet consectetur adipiscing elit duis
                tristique sollicitudin nibh sit. Purus viverra accumsan in nisl
                nisi. Sollicitudin ac orci phasellus egestas tellus rutrum. Nisi
                porta lorem mollis aliquam. Nec tincidunt praesent semper
                feugiat nibh sed pulvinar proin.
              </p>
              <p>
                Quisque egestas diam in arcu cursus euismod. Arcu non odio
                euismod lacinia at quis risus sed vulputate. Mattis nunc sed
                blandit libero volutpat. Pretium nibh ipsum consequat nisl.
                Auctor elit sed vulputate mi. Venenatis urna cursus eget nunc
                scelerisque viverra mauris. Lacus sed turpis tincidunt id
                aliquet. Nam at lectus urna duis convallis convallis tellus id.
                Magna sit amet purus gravida quis. Donec ultrices tincidunt arcu
                non sodales.
              </p>
              <p>
                Id leo in vitae turpis massa sed elementum tempus egestas.
                Tristique senectus et netus et malesuada. Euismod quis viverra
                nibh cras pulvinar mattis. Mattis pellentesque id nibh tortor id
                aliquet lectus proin. Placerat vestibulum lectus mauris ultrices
                eros in cursus turpis. Lacus vestibulum sed arcu non odio
                euismod lacinia at. Feugiat scelerisque varius morbi enim nunc.
                Habitant morbi tristique senectus et netus et malesuada. Velit
                laoreet id donec ultrices tincidunt arcu. Gravida dictum fusce
                ut placerat orci.
              </p>
              <p>
                Est placerat in egestas erat imperdiet sed. Amet commodo nulla
                facilisi nullam vehicula ipsum a arcu. Etiam erat velit
                scelerisque in dictum non consectetur. Id aliquet risus feugiat
                in ante metus dictum at tempor. Viverra mauris in aliquam sem
                fringilla. Sit amet commodo nulla facilisi. Lectus urna duis
                convallis convallis tellus id interdum. Ut etiam sit amet nisl
                purus in. Facilisi morbi tempus iaculis urna. Condimentum id
                venenatis a condimentum vitae sapien pellentesque habitant. Nisl
                rhoncus mattis rhoncus urna neque. Egestas sed sed risus
                pretium. Vitae aliquet nec ullamcorper sit. Eu tincidunt tortor
                aliquam nulla. Amet massa vitae tortor condimentum lacinia.
                Faucibus scelerisque eleifend donec pretium. Habitant morbi
                tristique senectus et.
              </p>
              <p>
                Dui sapien eget mi proin sed. A diam maecenas sed enim ut sem
                viverra aliquet. Ornare massa eget egestas purus. Velit
                dignissim sodales ut eu sem integer vitae justo. Commodo odio
                aenean sed adipiscing. Arcu risus quis varius quam. Lacus sed
                turpis tincidunt id aliquet risus feugiat in. At volutpat diam
                ut venenatis tellus in metus vulputate eu. A diam sollicitudin
                tempor id eu nisl. Duis tristique sollicitudin nibh sit amet.
                Lectus magna fringilla urna porttitor rhoncus dolor purus. Sit
                amet facilisis magna etiam tempor orci eu lobortis. Ut etiam sit
                amet nisl purus in mollis nunc. Adipiscing elit pellentesque
                habitant morbi tristique senectus et. Tristique senectus et
                netus et malesuada fames ac turpis. Vel pharetra vel turpis nunc
                eget lorem dolor. Mauris ultrices eros in cursus turpis massa
                tincidunt dui ut.
              </p>
            </div>
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
  mdbBtn,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbScrollLock
} from "mdbvue";

export default {
  name: "ScrollLockPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter
  },
  data() {
    return {
      showModal: false,
      lock: false
    };
  },
  directives: { mdbScrollLock }
};
</script>

<style scoped></style>
