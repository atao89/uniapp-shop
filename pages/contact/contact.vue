<template>
	<view class="contact">
		<image class="img" src="https://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
		<view class="info">
			<view @click="phone">联系电话：400-618-9090（ 点击拨打 ）</view>
			<view>联系地址：湖北省武汉市东湖高新区关东街道关南社区一期7栋</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :scale="scale" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 114.439,
				latitude: 30.482586,
				scale: 13,
				markers: [{
					id: 1,
					longitude: 114.439,
					latitude: 30.482586,
					iconPath: '../../static/sign.png',
					width: 30,
					height: 30,
				}]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber: '400-618-9090'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view {
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
