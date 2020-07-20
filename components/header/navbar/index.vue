<template>
  <div>
    <div class="top-menu">
      <a-row type="flex" justify="center">
        <a-col :span="16">
          <information />
        </a-col>
      </a-row>
    </div>
    <div class="menu">
      <a-row type="flex" justify="center">
        <a-col :span="16">
          <Menu />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import Information from './Information'
import Menu from './Menu'

export default {
  components: {
    Information,
    Menu,
  },
}
</script>

<style lang="scss" scoped>
.top-menu {
  background: #959699;
  height: 50px;
  padding: 0 15px;
}
.menu {
  background-color: #ea0000;
  color: #fff;
}
</style>
