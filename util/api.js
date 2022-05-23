// const BASE_URL = 'http://localhost:8082' // 本地服务
const BASE_URL = 'https://api-hmugo-web.itheima.net' // 测试环境

export const myRequest = (options) => {
	return new Promise((resolve, reject)=>{
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				if(res.data.meta.status !== 200){
					return uni.showToast({
						title: res.data.meta.msg
					})
				}
				resolve(res.data)
			},
			fail: (err) => {
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}