<template>
  <div id="app">
    <el-header height="auto">
      <!-- @select="handleSelect" -->
      <el-row type="flex" justify="center">
        <el-col class="header-bar" :span="20">
          <el-button
            @click="show = !show"
            :class="{barActive:show}"
            type="info"
            plain
            class="navbar-toggler"
            size="small"
          >
            <i class="fa fa-bars"></i>
          </el-button>
          <i class="fa fa-user"></i>
        </el-col>
        <el-col :class="{isShow:show}" class="header-content" :span="20">
          <el-menu
            :default-active="'1'"
            class="el-menu-demo"
            mode="horizontal"
            text-color="rgba(255, 255, 255, 0.6)"
            background-color="#343a40"
            active-text-color="rgba(255, 208, 75, 0.9)"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">分享地址</el-menu-item>
            <el-menu-item index="3">建议反馈</el-menu-item>
          </el-menu>
          <ul class="login">
            <li>
              <i class="fa fa-user"></i>
              &nbsp登录
            </li>
          </ul>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <div class="card-body">
        <div class="card-content">
          <ul class="card-list">
             <li>
              <p class="block-left">
                <img
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2980386340,3635916584&fm=26&gp=0.jpg"
                >
              </p>
              <div class="block-right break-all">
                <p>Q群分享：https://pan.baidu.com/mbox/homepage?short=smMH...</p>
                <p class="block-tip">小爱同学 25秒前</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  name: "App",
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style>
html {
  background: #dee2e6;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header {
  padding: 0 1.5rem;
  background-color: #343a40;
}
.el-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.el-col {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3.2rem;
  line-height: 3.2rem;
  color: rgba(255, 255, 255, 0.6);
}
.el-menu {
  height: 100%;
  border: 0 !important;
}
.el-menu--horizontal > .el-menu-item {
  height: 100%;
  line-height: inherit;
}
.el-header .fa {
  color: rgba(255, 255, 255, 0.6);
}
.login {
  height: 100%;
  cursor: pointer;
}
.login li {
  padding: 0 20px;
}
.navbar-toggler {
  padding: 0.5rem 0.7rem;
  background: transparent !important;
  display: flex;
  border-color: rgba(255, 255, 255, 0.5) !important;
}
.el-button--info.is-plain {
  color: #909399 !important;
}
.barActive.el-button--info.is-plain {
  color: #fff !important;
}
.header-bar {
  display: none;
}
.header-bar .fa-user {
  font-size: 1.1rem;
}
.isShow {
  display: block !important;
}
.break-all {
  word-break: break-all;
  word-wrap: break-word;
}
.el-container {
  display: flex;
  padding: 1rem;
  justify-content: center;
}
.card-body {
  flex: 1 1 auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 1rem 0.5rem;
}
.card-content {
  min-height: 15rem;
}
.card-list li {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid #e9ecef;
}
.card-list .block-left {
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.5rem;
}
.card-list .block-right {
  flex: 1;
  text-align: left;
  font-weight: bolder;
  font-size: 1rem;
}
.block-tip {
  font-weight: inherit;
  font-size: 0.8rem;
  color: #f56c6c;
  margin-top: 0.3rem;
}
.card-list img {
  width: 2.5rem;
}
@media (min-width: 576px) {
  .card-body {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .card-body {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .header-content {
    display: flex;
  }
  .card-body {
    max-width: 720px;
  }
}
@media (min-width: 1200px) {
  .card-body {
    max-width: 720px;
  }
}

@media (max-width: 576px) {
  .header-content,
  .header-bar {
    width: 100%;
  }
}
@media (max-width: 992px) {
  .header-content {
    display: none;
    flex-wrap: wrap;
  }
  .header-bar {
    display: flex;
  }
  .el-menu,
  .login {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-right: auto !important;
    flex-grow: 1;
    width: 100%;
  }
  .el-menu--horizontal > .el-menu-item,
  .login li {
    text-align: left;
    line-height: 2.5rem;
    border-bottom: 1px solid rgba(134, 142, 150, 0.3) !important;
  }
}
</style>
