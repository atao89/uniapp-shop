<template>
	<view class="news_detail">
		<swiper indicator-dots>
			<swiper-item v-for="(item,index) in newsDetail.pics" :key="item.goods_id+index">
				<image :src="item.pics_big_url"></image>
			</swiper-item>
		</swiper>
		<view class="info">
			<view class="price">
				￥{{newsDetail.goods_price}}
			</view>
			<view class="name">
				{{newsDetail.goods_name}}
			</view>
		</view>
		<view class="line"></view>
		<view class="attribute">
			<view>货号：{{newsDetail.goods_number}}</view>
			<view>重量：{{newsDetail.goods_weight}}</view>
		</view>
		<view class="line"></view>
		<div class="description" v-html="newsDetail.goods_introduce"></div>
		<view class="goods-carts">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components: {
			uniGoodsNav
		},
		data() {
			return {
				newsDetail: {},
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				],
			}
		},
		onLoad(options) {
			this.getNewsDetail(options.id)
		},
		methods: {
			// 获取详情数据
			async getNewsDetail(id) {
				const res = await this.$myRequest({
					url: '/api/public/v1/goods/detail?goods_id=' + id
				})
				this.newsDetail = res.message;
			},
			onClick(e) {
				// uni.showToast({
				// 	title: `点击${e.content.text}`,
				// 	icon: 'none'
				// })
				if (e.index == 2) {
					uni.switchTab({
						url: '/pages/cart/cart?id=' + this.newsDetail.goods_id
					})
				}
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>

<style lang="scss">
	.news_detail {
		swiper {
			width: 750rpx;
			height: 750rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.info {
			.price {
				color: $shop-color;
				font-size: 36rpx;
				margin: 20rpx 0 5rpx 0;
			}

			.name {
				font-size: 28rpx;
				line-height: 50rpx;
				padding-top: 10rpx;
				padding-bottom: 15rpx;
			}
		}

		.line {
			width: 750rpx;
			height: 10rpx;
			background: #eee;
		}

		.attribute {
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 70rpx;
		}

		.description {
			margin-top: 10rpx;
			// padding-bottom: 50px;
		}

		.goods-carts {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: column;
			position: fixed;
			left: 0;
			right: 0;
			/* #ifdef H5 */
			left: var(--window-left);
			right: var(--window-right);
			/* #endif */
			bottom: 0;
		}
	}
</style>
