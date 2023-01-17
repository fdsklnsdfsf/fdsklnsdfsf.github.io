//首页顶部推荐文章轮播图
var ark_swiper = new Swiper("#ark-swiper-container", {
    direction: "horizontal", //横向切换
    loop: true,
    grabCursor : true,//鼠标悬停时显示抓手
    updateOnWindowResize: true,
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,//2秒切换一次
      pauseOnMouseEnter: true, //鼠标进入停止切换，离开恢复切换
    },
  });