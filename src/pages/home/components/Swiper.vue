<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data: function() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/c161c77f88748519c1f507423c1cdc73.jpg_750x200_6842d08c.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.swiper-img {
  width: 100%;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26.25%;
  background: #eee;
}

.wrapper >>> .swiper-pagination-bullet-active {
  opacity: 1;
  background: #fff;
}
</style>
