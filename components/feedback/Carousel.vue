<template>
  <div>
    <a-carousel arrows>
      <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;">
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px;">
        <a-icon type="right-circle" />
      </div>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      peopleSay: [
        {
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          avatar:
            'https://cms.eforealifestyle.com/wp-content/uploads/2018/10/632f64f.jpg',
          name: 'Manh Tran',
        },
        {
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          avatar:
            'https://cms.eforealifestyle.com/wp-content/uploads/2018/10/632f64f.jpg',
          name: 'Manh Tran',
        },
        {
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          avatar:
            'https://cms.eforealifestyle.com/wp-content/uploads/2018/10/632f64f.jpg',
          name: 'Manh Tran',
        },
        {
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          avatar:
            'https://cms.eforealifestyle.com/wp-content/uploads/2018/10/632f64f.jpg',
          name: 'Manh Tran',
        },
      ],
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    nextSlide() {
      this.$refs.feedbackCarousel.goToPage(
        this.$refs.feedbackCarousel.getNextPage()
      )
    },
    prevSlide() {
      this.$refs.feedbackCarousel.goToPage(
        this.$refs.feedbackCarousel.getPreviousPage()
      )
    },
  },
}
</script>
