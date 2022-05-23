<template>
	<view class="good_list">
		<goods-list :goods="goodsList" />
		<view class="isOver" v-if="flag">
			-----我是有底线的-----
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
				pagenum: 1,
				goodsList: [],
				flag: false,
			}
		},
		onLoad() {
			this.getGoodsList();
		},
		onReachBottom() {
			if (this.goodsList.length < this.pagenum * this.pagenum) {
				return this.flag = true
			}
			this.pagenum++;
			this.getGoodsList();
		},
		onPullDownRefresh() {
			this.pagenum = 1;
			this.goodsList = [];
			this.flag = false;
			setTimeout(() => {
				this.getGoodsList(() => {
					uni.stopPullDownRefresh()
				});
			}, 1000);
		},
		methods: {
			// 获取商品列表的数据
			async getGoodsList(callBack) {
				const res = await this.$myRequest({
					url: '/api/public/v1/goods/search?pagenum=' + this.pagenum + '&pagesize=10'
				})
				this.goodsList = [...this.goodsList, ...res.message.goods];
				callBack && callBack();
			}
		}
	}
</script>

<style lang="scss">
	.good_list {
		background: #eee;
	}

	.isOver {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 28rpx;
	}
</style>
