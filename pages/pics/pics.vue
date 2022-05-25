<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view :class="{'active': currentIndex == index}" v-for="(item, index) in cates" :key="item.cat_id"
				@click="changeTab(item, index)">{{item.cat_name}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in rightData" :key="item.id">
				<image :src="item.imgUrl">
				</image>
				<view class="title">{{item.title}}{{item.title}}{{item.title}}{{item.title}}{{item.title}}</view>
			</view>
			<text v-if="noData">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				currentIndex: 0,
				rightData: [],
				noData: false,
			}
		},
		onLoad() {
			this.getPics();
		},
		methods: {
			async getPics() {
				const res = await this.$myRequest({
					url: '/api/public/v1/categories'
				})
				this.cates = res.message;
				this.getRightData(this.cates[0].cat_id);
			},
			changeTab(item, index) {
				this.currentIndex = index;
				this.getRightData(item.cat_id);
			},
			// 获取右侧数据
			async getRightData(id) {
				const res = await this.$myRequest({
					url: '/api/public/v1/categories'
				})
				let list = [];
				res.message.filter(item => item.cat_id == id)
					.map(item => item.children)[0]
					.map(item => {
						if (item.children) {
							item.children.map(itm => {
								list.push({
									id: itm.cat_id,
									title: itm.cat_name,
									imgUrl: itm.cat_icon,
								})
							});
						}
					})[0]
				if (list.length === 0) {
					this.noData = true;
				}
				this.rightData = list;
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;

		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-bottom: 1px solid #eee;
			}

			.active {
				background: $shop-color;
				color: #fff;
			}
		}

		.right {
			width: 530rpx;
			height: 100%;
			margin: 10rpx auto;

			.item {
				width: 520rpx;
				height: 520rpx;
				border-radius: 5px;

				image {
					width: 520rpx;
					height: 460rpx;
				}

				.title {
					height: 60rpx;
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
