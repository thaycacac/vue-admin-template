<template>
  <div class="top-menu">
    <div class="info-number">
      <span class="info-number-detail">
        CSKH:
        <span class="strong">097 5133 966</span>
      </span>
      <span class="info-number-detail">
        Kinh doanh:
        <span class="strong">038 8810 209 - 039 5783 585</span>
      </span>
      <span class="info-number-detail">
        <a href="#">Đăng nhập</a>
      </span>
      <span class="info-number-detail">
        <a href="#">Đăng ký</a>
      </span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.top-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  .info-number-detail {
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;

    &:not(:last-child) {
      border-right: 1px solid #fff;
    }
    .strong {
      font-weight: 500;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
  }
}
// .info {
//   font-size: 13px;

//   &__number {
//     color: #fff;

//     &__detail {
//       display: inline;
//       padding-left: 10px;
//       padding-right: 10px;

//       .strong {
//         font-weight: 500;
//         font-size: 15px;
//       }

//       &:not(:last-child) {
//         border-right: 1px solid #fff;
//       }
//     }
//   }

//   .btn-icon-menu {
//     font-size: 13px;
//     margin: 0 30px;
//   }

//   &__btn {
//     &--icon {
//       color: #fff;
//       font-size: 24px;
//     }
//   }
// }

// @media (max-width: 768px) {
//   .info {
//     display: none !important;
//   }
// }
</style>
