<template>
	<view class="news">
		<news-item :list="newsList" @goDetail="goDetail"></news-item>
	</view>
</template>

<script>
	import NewsItem from '../../components/news-item/news-item.vue'
	export default {
		components: {
			'news-item': NewsItem
		},
		data() {
			return {
				newsList: [],
			}
		},
		onLoad() {
			this.getNews();
		},
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: '/api/public/v1/goods/search'
				})
				this.newsList = [];
				res.message.goods.forEach(item => {
					if (item.goods_small_logo) {
						this.newsList.push(item);
					}
				})
			},
			goDetail(id){
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id=' + id
				})
			},
		}
	}
</script>

<style lang="scss">
	.news {
		.news_item {
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid $shop-color;

			image {
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;
			}

			.right {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 15rpx;

				.tit {
					font-size: 30rpx;
				}

				.info {
					font-size: 24rpx;

					text:nth-child(2) {
						margin-left: 30rpx;
					}
				}
			}
		}
	}
</style>
