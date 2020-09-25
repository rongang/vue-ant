<template>
  <a-layout>
    <a-layout-sider
      class="slider"
      theme="light"
      v-model="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo" @click="homeRoute">
        <h4 class="logotitle">
          <span v-show="collapsed"
            ><a-icon type="smile" theme="outlined"
          /></span>
          {{ collapsed ? "" : "Ant-Vue" }}
        </h4>
      </div>
      <a-menu
        theme="light"
        mode="inline"
        :default-selected-keys="defaultSelectedKeys"
        :default-open-keys="defaultOpenKeys"
      >
        <a-sub-menu key="general">
          <span slot="title">
            <a-icon type="fire" />
            <span>通用</span>
          </span>
          <a-menu-item key="/general/button"
            ><router-link to="/general/button" tag="div"
              >按钮</router-link
            ></a-menu-item
          >
          <a-menu-item key="/general/icon"
            ><router-link to="/general/icon" tag="div"
              >图标</router-link
            ></a-menu-item
          >
        </a-sub-menu>
        <a-menu-item key="/statement">
          <router-link to="/statement"
            ><a-icon type="sliders" /><span>状态管理</span></router-link
          >
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        class="contentHeader"
        style="background: #fff; padding: 0"
      >
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />

        <a-dropdown-button style="margin-right: 20px">
          个人中心
          <a-menu slot="overlay">
            <a-menu-item key="1">
              <a-icon type="contacts" />修改信息
            </a-menu-item>
            <a-menu-item key="2" @click="logout">
              <a-icon type="logout" />注销登录
            </a-menu-item>
          </a-menu>
          <a-icon slot="icon" type="user" />
        </a-dropdown-button>
      </a-layout-header>
      <div style="background-color: rgb(255 255 255)">
        <a-page-header
          :title="ContentTitle"
          @back="() => this.$router.go(-1)"
        />
      </div>
      <a-layout-content
        :style="{
          margin: '10px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: "baselayout",
  data() {
    return {
      collapsed: false,
      defaultSelectedKeys: [],
      defaultOpenKeys: [],
      ContentTitle: "",
    };
  },
  components: {
    // VueButton
  },
  watch: {
    $route: function () {
      this.updateRoute();
    },
  },
  created() {
    this.updateRoute();
  },
  methods: {
    homeRoute() {
      // this.$router.push("/home");
      // setTimeout(() => {
      //   location.reload()
      // }, 200);
      this.$router.replace({ path: "/reload" });
    },
    logout() {
      this.$router.push("/login");
    },
    updateRoute() {
      this.ContentTitle = this.$route.meta.title;
      if (this.$route.meta.type) this.defaultOpenKeys = [this.$route.meta.type];
      this.defaultSelectedKeys = [this.$route.path];
    },
  },
};
</script>
<style>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
.logotitle {
  font-size: 32;
  color: black;
  text-align: center;
  line-height: 32px;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  align-items: center;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.slider {
  height: 100vh;
  cursor: pointer;
}
.contentHeader {
  display: flex;
  justify-content: space-between;
}
</style>
