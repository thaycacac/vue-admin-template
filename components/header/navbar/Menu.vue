<template>
  <div class="menu">
    <div class="wrapper-logo">
      <a-icon type="twitter" class="logo" />
    </div>
    <div class="list-menu">
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="mail">TRANG CHỦ</a-menu-item>
        <a-menu-item key="introduce">GIỚI THIỆU</a-menu-item>
        <a-menu-item key="nationwide">GIAO HÀNG TOÀN QUỐC</a-menu-item>
        <a-menu-item key="urban">GIAO HÀNG NỘI THÀNH</a-menu-item>
        <a-menu-item key="contact">LIÊN HỆ</a-menu-item>
        <!-- <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="setting" />Navigation Three - Submenu</span
        >
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
          >Navigation Four - Link</a
        >
        </a-menu-item>-->
      </a-menu>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail'],
    }
  },
}
</script>
<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .wrapper-logo {
    display: flex;
    align-items: center;
    .logo {
      font-size: 30px;
    }
  }
}
.ant-menu {
  background-color: #ea0000;
  color: #fff;
}
.ant-menu-horizontal {
  border-bottom: none;
}

.ant-menu-horizontal > .ant-menu-item:hover,
.ant-menu-horizontal > .ant-menu-submenu:hover,
.ant-menu-horizontal > .ant-menu-item-active,
.ant-menu-horizontal > .ant-menu-submenu-active,
.ant-menu-horizontal > .ant-menu-item-open,
.ant-menu-horizontal > .ant-menu-submenu-open,
.ant-menu-horizontal > .ant-menu-item-selected,
.ant-menu-horizontal > .ant-menu-submenu-selected {
  color: #fff;
  border-bottom: 2px solid #fff;
  font-weight: 500;
}
</style>
