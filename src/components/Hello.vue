<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <button @click="resetCheck" class="reset">重置</button>
    <ul class="content">
      <li
        v-for="(item,index) in list"
        :isCheck="checkArr[index]"
        :class="{active:checkArr[index]}"
        @click="tabClick($event,index)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  data() {
    return {
      list: [{ name: "test1" }, { name: "test2" }, { name: "test3" }],
      checkArr: []
    };
  },
  name: "App",
  components: {
    HelloWorld
  },
  mounted() {
    // this.init()
  },
  methods: {
    init(){
      this.checkArr = this.list.map(()=>{
        return false
      })
    },
    tabClick(event, index) {
      this.$set(this.checkArr, index, !this.checkArr[index])
    },
    resetCheck(){
      this.init()
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content li {
  float: left;
  list-style: none;
  padding: 10px 20px;
  border: 1px solid #000;
  cursor: pointer;
}
.active {
  background: #349ea0;
}
</style>
