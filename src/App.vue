<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <ul class="content">
      <li
        v-for="(item,index) in list"
        :isCheck="item.isCheck"
        :class="{active:item.isCheck}"
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
      list: [
        { name: "test1", isCheck: false },
        { name: "test2", isCheck: false },
        { name: "test3", isCheck: false }
      ]
    };
  },
  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    tabClick(event, index) {
      this.list[index].isCheck = !this.list[index].isCheck;
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
.active{
  background: #349ea0;
}
</style>
