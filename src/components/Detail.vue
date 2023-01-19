<template>
  <div v-if="modal == true" class="black-bg">
    <div class="white-bg">
      <button class="closeBtn" @click="$emit('closeModal')">닫기</button>
      <!--      {{items}}-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {
    }
  },
  watch : {
  },
  props : {
    items: Array,
    modal : Boolean,
  }
}
</script>

<style>
#detail{
  position: absolute;
  z-index : 100;
  height: 50%;
}
body {
  margin : 0;
}
.black-bg {
  width: 50%; height: 50%;
  background: rgba(0,0,0,0.5);
  position: absolute; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  height: 100%;
  border-radius: 8px;
  padding: 20px;
}
.closeBtn {
  position: absolute;
  left: 49%;
  top: 85%;
}
</style>