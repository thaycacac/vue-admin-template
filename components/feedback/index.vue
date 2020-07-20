<template>
  <section class="feedback">
    <a-row>
      <a-col :span="24" class="mt-4 pt-5 pb-4">
        <h1 class="title text-center">Mọi người nói gì về Thaycacac</h1>
      </a-col>
    </a-row>
    <a-row>
      <a-col>
        <Carousel />
      </a-col>
    </a-row>
  </section>
</template>
<script>
import Carousel from './Carousel'
export default {
  components: {
    Carousel,
  },
}
</script>
<style lang="scss" scoped>
.feedback {
  background: #f8f8f8;
  padding-top: 90px;
  padding-bottom: 90px;
  color: #000;
  .title {
    text-align: center;
    color: #76ccdd;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 1.5;
  }
}
</style>
