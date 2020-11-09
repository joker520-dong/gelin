import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 10,
		goods: [],
		arr: [],

		tp: '',
		xiaoshuo: [[{
			name: '雪鹰领主', label: '原价：￥31.9',
			icon: require("../src/assets/tp/lunbotu/vip/xuanhui/1.jpg"),
		}, {
			name: '奥术神座', label: '原价：￥41.9',
			icon: require("../src/assets/tp/lunbotu/vip/xuanhui/2.jpg"),
		}, {
			name: '完美世界', label: '原价：￥31.9',
			icon: require("../src/assets/tp/lunbotu/vip/xuanhui/3.jpg"),
		}, {
			name: '放开那个女巫', label: '原价：￥37.8',
			icon: require("../src/assets/tp/lunbotu/vip/xuanhui/4.jpg"),
		}, {
			name: '诡秘支柱', label: '原价：￥37.8',
			icon: require("../src/assets/tp/lunbotu/vip/xuanhui/5.jpg"),
		}], [{
			name: '九星毒奶', label: '原价：￥32.9',
			icon: require("../src/assets/tp/lunbotu/vip/kehuan/1.jpg"),
		}, {
			name: '吞噬星空', label: '原价：￥41.9',
			icon: require("../src/assets/tp/lunbotu/vip/kehuan/2.jpg"),
		}, {
			name: '学霸的黑科技系统', label: '原价：￥31.9',
			icon: require("../src/assets/tp/lunbotu/vip/kehuan/3.jpg"),
		}, {
			name: '无限曙光', label: '原价：￥37.8',
			icon: require("../src/assets/tp/lunbotu/vip/kehuan/4.jpg"),
		}, {
			name: '师士传说', label: '原价：￥37.8',
			icon: require("../src/assets/tp/lunbotu/vip/kehuan/5.jpg"),
		}], [{
			name: '跑吧！梅洛斯', label: '原价：￥20.9',
			icon: require("../src/assets/tp/lunbotu/vip/wenxue/1.jpg"),
		}, {
			name: '基督山伯爵', label: '原价：￥17.9',
			icon: require("../src/assets/tp/lunbotu/vip/wenxue/2.jpg"),
		}, {
			name: '三国演义', label: '原价：￥13',
			icon: require("../src/assets/tp/lunbotu/vip/wenxue/3.jpg"),
		}, {
			name: '茶花女', label: '原价：￥8.99',
			icon: require("../src/assets/tp/lunbotu/vip/wenxue/4.jpg"),
		}, {
			name: '人间失格', label: '原价：￥9.99',
			icon: require("../src/assets/tp/lunbotu/vip/wenxue/5.jpg"),
		}], [{
			name: '这个修士很危险', label: '原价：￥20.9',
			icon: require("../src/assets/tp/lunbotu/vip/wuxiaxianxia/1.jpg"),
		}, {
			name: '凡人修仙传', label: '原价：￥17.9',
			icon: require("../src/assets/tp/lunbotu/vip/wuxiaxianxia/2.jpg"),
		}, {
			name: '小李飞刀', label: '原价：￥13',
			icon: require("../src/assets/tp/lunbotu/vip/wuxiaxianxia/3.jpg"),
		}, {
			name: '诛仙', label: '原价：￥8.99',
			icon: require("../src/assets/tp/lunbotu/vip/wuxiaxianxia/4.jpg"),
		}, {
			name: '天下第九', label: '原价：￥9.99',
			icon: require("../src/assets/tp/lunbotu/vip/wuxiaxianxia/5.jpg"),
		}], [{
			name: '琅琊榜', label: '原价：￥26.9',
			icon: require("../src/assets/tp/lunbotu/vip/qingchun/1.jpg"),
		}, {
			name: '神医废材妃', label: '原价：￥17.9',
			icon: require("../src/assets/tp/lunbotu/vip/qingchun/2.jpg"),
		}, {
			name: '花娇', label: '原价：￥13',
			icon: require("../src/assets/tp/lunbotu/vip/qingchun/3.jpg"),
		}, {
			name: '山茶文具店', label: '原价：￥18.99',
			icon: require("../src/assets/tp/lunbotu/vip/qingchun/4.jpg"),
		}, {
			name: '第一侯0', label: '原价：￥9.99',
			icon: require("../src/assets/tp/lunbotu/vip/qingchun/5.jpg"),
		}], [{
			name: '检察方的罪人', label: '原价：￥19.2',
			icon: require("../src/assets/tp/lunbotu/vip/xuanyituili/1.jpg"),
		}, {
			name: '大唐狄公案', label: '原价：免费',
			icon: require("../src/assets/tp/lunbotu/vip/xuanyituili/2.jpg"),
		}, {
			name: '深夜书屋', label: '原价：￥13',
			icon: require("../src/assets/tp/lunbotu/vip/xuanyituili/3.jpg"),
		}, {
			name: '鬼吹灯', label: '原价：￥18.99',
			icon: require("../src/assets/tp/lunbotu/vip/xuanyituili/4.jpg"),
		}, {
			name: '福尔摩斯探案', label: '原价：￥9.99',
			icon: require("../src/assets/tp/lunbotu/vip/xuanyituili/5.jpg"),
		}], [{
			name: '官居一品', label: '原价：￥19.2',
			icon: require("../src/assets/tp/lunbotu/vip/nan/1.jpg"),
		}, {
			name: '手术直播间', label: '原价：免费',
			icon: require("../src/assets/tp/lunbotu/vip/nan/2.jpg"),
		}, {
			name: '谍影风云', label: '原价：￥13',
			icon: require("../src/assets/tp/lunbotu/vip/nan/3.jpg"),
		}, {
			name: '英雄联盟', label: '原价：￥18.99',
			icon: require("../src/assets/tp/lunbotu/vip/nan/4.jpg"),
		}, {
			name: '庆余年', label: '原价：￥9.99',
			icon: require("../src/assets/tp/lunbotu/vip/nan/5.jpg"),
		}], [{
			name: '重生之将门毒后', label: '原价：￥19.2',
			icon: require("../src/assets/tp/lunbotu/vip/nv/1.jpg"),
		}, {
			name: '花娇', label: '原价：免费',
			icon: require("../src/assets/tp/lunbotu/vip/nv/2.jpg"),
		}, {
			name: '今天先败一个亿', label: '原价：￥13',
			icon: require("../src/assets/tp/lunbotu/vip/nv/3.jpg"),
		}, {
			name: '最强弃仙', label: '原价：￥18.99',
			icon: require("../src/assets/tp/lunbotu/vip/nv/4.jpg"),
		}, {
			name: '朱门贤妻', label: '原价：￥9.99',
			icon: require("../src/assets/tp/lunbotu/vip/nv/5.jpg"),
		}],],
		zuoye: [
			[
				{
					timu: "玄幻奇幻",
					icon: require("../src/assets/tp/lunbotu/vip/xuanhui/1.jpg"),
					title: "雪鹰领主",
					label: "我吃西红柿",
				},
				{

					icon: require("../src/assets/tp/lunbotu/vip/xuanhui/2.jpg"),
					title: "奥数神座",
					label: "爱潜水的乌贼",
				},
				{

					icon: require("../src/assets/tp/lunbotu/vip/xuanhui/3.jpg"),
					title: "完美世界",
					label: "辰东",
				},
			],
			[
				{
					timu: "科幻小说",
					icon: require("../src/assets/tp/lunbotu/vip/kehuan/1.jpg"),
					title: "九星毒奶",
					label: "育",
				},
				{

					icon: require("../src/assets/tp/lunbotu/vip/kehuan/2.jpg"),
					title: "吞噬星空",
					label: "我吃西红柿",
				},
				{

					icon: require("../src/assets/tp/lunbotu/vip/kehuan/3.jpg"),
					title: "学霸的黑科技系统",
					label: "晨星LL",
				},
			],
			[
				{
					timu: "文学作品",
					icon: require("../src/assets/tp/lunbotu/vip/wenxue/1.jpg"),
					title: "跑吧梅洛斯",
					label: "太宰治",
				},
				{

					icon: require("../src/assets/tp/lunbotu/vip/kehuan/2.jpg"),
					title: "基督山伯爵",
					label: "Alexandre",
				},
				{

					icon: require("../src/assets/tp/lunbotu/vip/kehuan/3.jpg"),
					title: "三国演义",
					label: "（明）罗贯中",
				},
			], [
				{
					timu: "武侠仙侠",
					icon: require("../src/assets/tp/lunbotu/vip/wuxiaxianxia/2.jpg"),
					title: "凡人修仙传",
					label: "忘语",
				},
				{

					icon: require("../src/assets/tp/lunbotu/vip/wuxiaxianxia/4.jpg"),
					title: "诛仙",
					label: "萧鼎",
				},
				{

					icon: require("../src/assets/tp/lunbotu/vip/wuxiaxianxia/5.jpg"),
					title: "天下老九",
					label: "鹅是老五",
				},
			],

		],     //小说主页面的值
		shuju: [
			[
				{
					timu: "治疗心灵的作品",
					tp: require("../src/assets/tp/lunbotu/vip/index/1.jpg"),
					title: "好好分手",
					labe: "安慰记店长",
				},
				{
					tp: require("../src/assets/tp/lunbotu/vip/index/2.jpg"),
					title: "挽回爱情",
					labe: "穆木",
				},
				{
					tp: require("../src/assets/tp/lunbotu/vip/index/3.jpg"),
					title: "高情商",
					labe: "张萌",
				},
				{
					tp: require("../src/assets/tp/lunbotu/vip/index/4.jpg"),
					title: "爱情总是不尽人意",
					labe: "简单心理",
				},
			],
			[
				{
					timu: "相见恨晚历史书",
					tp: require("../src/assets/tp/lunbotu/vip/index/5.jpg"),
					title: "朱元璋",
					labe: "度阴山",
				},
				{
					tp: require("../src/assets/tp/lunbotu/vip/index/6.jpg"),
					title: "简读中国史",
					labe: "张宏杰",
				},
				{
					tp: require("../src/assets/tp/lunbotu/vip/index/7.jpg"),
					title: "历史的温度",
					labe: "张玮等",
				},
				{
					tp: require("../src/assets/tp/lunbotu/vip/index/8.jpg"),
					title: "血腥的盛唐",
					labe: "王觉仁",
				},
			],
		],   //会员页面的值
		dushu: [
			[
				{
					timu: "主编推荐",
					tp: require("../src/assets/tp/lunbotu/vip/dushuhui/1.jpg"),
					title: "向上生长",
					labe: "九边",
				},
				{
					tp: require("../src/assets/tp/lunbotu/vip/dushuhui/2.jpg"),
					title: "盐",
					labe: "孙频",
				},
				{
					tp: require("../src/assets/tp/lunbotu/vip/dushuhui/3.jpg"),
					title: "大学四年",
					labe: "Lachel等",
				},

			],
			[
				{
					timu: "本周新书",
					tp: require("../src/assets/tp/lunbotu/vip/dushuhui/4.jpg"),
					title: "价格的发现",
					labe: "[美]保罗 米尔",
				},
				{
					tp: require("../src/assets/tp/lunbotu/vip/dushuhui/5.jpg"),
					title: "小大夫",
					labe: "王小枪",
				},
				{
					tp: require("../src/assets/tp/lunbotu/vip/dushuhui/6.jpg"),
					title: "半个小时漫画科学史",
					labe: "陈磊等",
				},

			],
		],   //读书会 页面的值
		on: true,
		gshuju: [],// 这个是关注
		num:0,
		zazhi:[],
		zazhi1:[]
	},
	mutations: {
		"increase": function (state) {
			state.count++
		},
		reduce(state, step) {
			//只能存放两个参数,第一个为state ,第二个自定义
			state.count -= step;
		},
		tupian(state, data) {
			state.tp = data
		},
		jieshou(state, data) {

			state.arr = data
		},
		yingcang() {
			this.state.on = false

		},
		retp() {
			this.state.tp = ''
			this.state.on = true
		},
		guanzhu(state, data) {
			state.num++
			state.gshuju.push(data)
	
		},
		reguanzhu(state, data){
			state.num--
			state.gshuju.splice(data,1)
		},
		zazhi(state, data){
			state.zazhi = data
		},
		zazhi1(state, data){
			state.zazhi1 = data
			console.log(state.zazhi1)
		},

		addToCar(state, data) {
			var flag = false;
			// 如果你之前已经添加过该商品,则只需要添加其数量即可
			state.goods.forEach(function (item) {
				if (item.id == data.id) {
					item.n += data.n;
					flag = true;
					alert("商品的ID相同，值增加数量");
					return;
				}
			});
			if (!flag) {
				state.goods.push(data)
			}
		}
	},
	actions: {
		increase(context) {
			context.commit('increase');
		},
		"reduce"({
			commit
		}) {
			commit("reduce", 2);
		},
		addToCar({
			commit
		}, data) {
			commit('addToCar', data)
		}
	},
	getters: {
		increase(state) {
			return state.count;
		},
		getLists(state) {
			return state.goods
		}
	}
})
