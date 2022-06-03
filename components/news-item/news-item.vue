<template>
	<view>
		<view class="news_item" v-for="item in list" :key="item.goods_id" @click="navigator(item.goods_id)">
			<image :src="item.goods_small_logo"></image>
			<view class="right">
				<view class="tit">{{item.goods_name}}</view>
				<view class="info">
					<text>发表时间：{{item.add_time | formatDate}}</text>
					<text>浏览：{{item.goods_price}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['list'],
		filters: {
			formatDate(date) {
				var date = new Date(date * 1000); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear();
				var M = (date.getMonth() + 1).toString().padStart(2, 0);
				var D = date.getDate().toString().padStart(2, 0);
				var h = date.getHours().toString().padStart(2, 0);
				var m = date.getMinutes().toString().padStart(2, 0);
				var s = date.getSeconds().toString().padStart(2, 0);
				return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
			}
		},
		methods: {
			navigator(id){
				this.$emit('goDetail', id);
			}
		}
	}
</script>

<style lang="scss">
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
</style>
