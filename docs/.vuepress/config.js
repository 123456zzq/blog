module.exports = {
	title: '大Q前端进阶',
	description: '成长之旅',
	head: [ // 注入到当前页面的 HTML <head> 中的标签
		['link', { rel: 'icon', href: '/app.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
		// ['link', { rel: 'manifest', href: '/manifest.json' }],
		// ['link', { rel: 'apple-touch-icon', href: '/144.png' }],
	],
	base: '/', // 这是部署到github相关的配置
	markdown: {
		lineNumbers: false // 代码块显示行号
	},
	// sidebar: 'auto', // 自动生成侧边栏
	sidebarDepth: 0, // 侧边栏深度 默认为1 最大为2
	search: true, // 关闭搜索
	smoothScroll: true, // 开启页面滚动
	themeConfig: {
		nav: [ // 导航栏配置
			{ text: 'Home', link: '/' },
			// { text: '美食打卡', link: '/food/food/' },
			{ text: '每日一题', link: '/question/' },
			{ text: 'Js', link: '/js/' },
		],
		sidebar: {
			"/question/": [
				{
					title: " ",
					collapsable: false,
					children:["/question/"]
				},
				{
					title: "Array",
					collapsable: true,
					children: [
						{
							title: "数组去重",
							path: "/question/array/1"
						},
						{
							title: "数组扁平化",
							path: "/question/array/2"
						},
						{
							title: "数组原型方法",
							path: "/question/array/3"
						},
					],
				},
			],
			'/js/': [
				{
					title: 'JS基础',
					collapsable: false,
					children: [
						{
							title: "JS基础",
							path: "/js/1"
						},
						{
							title: "JavaScript核心原理",
							path: "/js/2"
						},
						{
							title: "设计模式/工程化",
							path: "/js/3"
						}
					]
				}
			],
		}
	}
}