<template>
	<!-- 모바일 메뉴내용 -->
	<div class="mb-wrap">

		<a href="#" class="mb-close"></a>

		<div class="mb-sns">
			<ul class="mb-sns-list clearfix">
				<li>
					<a href="#">
						<img :src="require('@/assets/images/sns_blog.png')" alt="블로그">
					</a>
				</li>
				<li>
					<a href="#">
						<img :src="require('@/assets/images/sns_insta.png')" alt="인스타">
					</a>
				</li>
				<li>
					<a href="#">
						<img :src="require('@/assets/images/sns_facebook.png')" alt="페이스북">
					</a>
				</li>
			</ul>
		</div>

		<ul class="mb-menu">

			<li v-for="(item, index) in navData" :key="index">
				<a :href="item.url">{{item.title}}</a>
				<ul class="mb-submenu">
					<li v-for="(subitem, subindex) in item.subarr" :key="subindex">
						<a :href="subitem.suburl">{{subitem.subtitle}}</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>

</template>

<script>
	export default {

		props: ['navData'],
		setup() {

			return {

			}
		}
	}
</script>

<style scoped>
	/* 모바일 메뉴내용 */
	.mb-wrap {
		position: fixed;
		left: -320px;
		top: 0;
		display: block;
		width: 320px;
		height: 100vh;
		background-color: #fff;
		z-index: 99999;
		transition: left 0.5s;
	}

	.mb-wrap-open {
		left: 0;
	}

	.mb-close {
		position: absolute;
		right: 20px;
		top: 20px;
		display: block;
		width: 22px;
		height: 21px;
		background: url('@/assets/images/btn_close2.png') no-repeat center;
		z-index: 9;
	}

	.mb-sns {
		position: relative;
		display: block;
		padding: 20px 20px;
	}

	.mb-sns-list {
		position: relative;
		display: block;
	}

	.mb-sns-list li {
		position: relative;
		display: block;
		float: left;
		margin-right: 5px;
	}

	.mb-sns-list li a {
		position: relative;
		display: block;
	}

	.mb-menu {
		position: relative;
		display: block;
	}

	.mb-menu>li {
		position: relative;
		display: block;

		border-bottom: 1px solid #eee;
	}

	.mb-menu>li>a {
		position: relative;
		display: block;
		line-height: 50px;
		color: #222;
		font-size: 16px;
		padding-left: 20px;
		font-weight: 500;
	}

	.mb-menu>li>a::after {
		content: '';
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
		display: block;
		width: 13px;
		height: 9px;
		background: url('@/assets/images/lnb_bl.png') no-repeat center;
		transition: transform 0.5s;
	}

	.mb-icon-rot::after {
		transform: translateY(-50%) rotate(180deg) !important;
	}

	/* 포커스 유지 */
	.mb-menu-focus {
		color: #4abbc3 !important;
	}

	/* .mb-menu > li:hover > a {
  color: #4abbc3
}
.mb-menu > li:hover .mb-submenu{
  display: block;
} 
js로 클릭으로 바꿀꺼임*/

	.mb-submenu {
		position: relative;
		display: none;
		background-color: #f2f2f2;

	}

	.mb-submenu li {
		position: relative;
		display: block;
	}

	.mb-submenu li a {
		position: relative;
		display: block;
		font-size: 13px;
		color: #888;
		line-height: 40px;
		padding-left: 30px;
	}
</style>