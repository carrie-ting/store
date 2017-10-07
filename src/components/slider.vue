<template>
	<div class="swiper-container">
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide v-for="(item,index) in sliderList" :key="index">
			<img :src="item.url">
			</swiper-slide>
			<div v-show="sliderList.length >1" class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper';
export default{
	name: 'slider',
	data(){
		return{
			swiperOption: {
                notNextTick: true,
                autoplay: 5000,
                pagination: '.swiper-pagination',
                slidesPerView: 'auto',
                centeredSlides: true,
                paginationClickable: true,
                spaceBetween: 30,
                onSlideChangeEnd: swiper => {
                    //这个位置放swiper的回调方法
                    this.page = swiper.realIndex + 1;
                    this.index = swiper.realIndex;
                }
            },
		    sliderList:[
		    {
		    	url:'static/img/slider/01.jpg',
		    	desc:''
		    },
		    {
		    	url:'static/img/slider/02.jpg',
		    	desc:''
		    },
		    {
		    	url:'static/img/slider/03.jpg',
		    	desc:''
		    },
		    {
		    	url:'static/img/slider/04.jpg',
		    	desc:''
		    },
		    {
		    	url:'static/img/slider/05.jpg',
		    	desc:''
		    }
		    ]
		}
	}
}
</script>
<style>
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #db192a !important;
}
	.swiper-container{
		width: 100%;
		height: 100%;
	}
	.swiper-container img{
		display: block;
		width: 100%;
		height: 100%;
	}
</style>