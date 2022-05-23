<template>
	<view class="home">
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item, index) in navs" :key="index" @click="navItmeClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">
				推荐商品
			</view>
			<goods-list :goods="hotGoods" />
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		components: {
			'goods-list': goodsList
		},
		data() {
			return {
				swipers: [],
				navs: [{
						icon: 'iconfont icon-ziyuan',
						title: '精品超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					},
				],
				hotGoods: [],
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		methods: {
			// 获取轮播图的数据
			async getSwipers() {
				// 没有使用封装接口
				// const res = await uni.request({
				// 	url: 'http://localhost:8082/api/getlunbo',
				// 	success: res => {
				// 		console.log(res)
				// 		if(res.data.status !== 0){
				// 			return uni.showToast({
				// 				title: '获取数据失败'
				// 			})
				// 		}
				// 		this.swipers = res.data.message;
				// 	}
				// })
				// 使用封装接口
				const res = await this.$myRequest({
					// url: '/api/getlunbo',
					url: '/api/public/v1/home/swiperdata',
				})
				this.swipers = res.message;
			},
			// 导航点击的处理函数
			navItmeClick(url) {
				uni.navigateTo({
					url,
				})
			},
			// 获取热门商品列表数据
			async getHotGoods() {
				const res = await this.$myRequest({
					url: '/api/public/v1/goods/search'
				})
				this.hotGoods = res.message.goods;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.nav {
			display: flex;

			.nav_item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background: $shop-color;
					border-radius: 50%;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}

				.icon-tupian {
					font-size: 45rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		.hot_goods {
			background: #eee;
			overflow: hidden;
			margin-top: 10px;

			.tit {
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background: #fff;
				margin: 7rpx 0;
			}
		}
	}
</style>
