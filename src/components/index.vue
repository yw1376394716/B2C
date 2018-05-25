<!-- 
	时间：2000.01.01
	作者： y_
	首页
-->
<template>
	<div class="home">
		<div class="search c_clear">
			<img src="../../static/img/bzly_log.jpg" width="180px" height="96px" class="fl bzly_log">
			<div class="search_">
				<button>搜索</button></br>
				<span class="fl" style="color:red">台湾</span>
				<span class="fl">三亚</span>
				<span class="fl" style="color:red">巴厘岛</span>
				<span class="fl">日本</span>
				<span class="fl" style="color:red">泰国</span>
			</div>
			<img src="../../static/img/login_.jpg" width="208px" height="72px" class="fr login_png">
		</div>
		<ul class="nav">
			<li>首页</li>
			<li>出境游</li>
			<li>国内游</li>
			<li>周边游</li>
			<li>景点门票</li>
			<li>住宿酒店</li>
			<li>机票</li>
			<li>邮轮</li>
			<li>定制游</li>
			<li>签证</li>
		</ul>
		<div class="banner">
			<div class="nav_">
				<ul>
					<li>跟团游</li>
					<li>自由行</li>
					<li>当地玩乐</li>
					<li>景区门票</li>
					<li>酒店预订</li>
					<li>机票</li>
					<li>游轮</li>
					<li>签证</li>
				</ul>
			</div>
		</div>
	</div>

</template>
<script>


	
</script>
<style scoped>
	/* 搜索栏 */
	.bzly_log{
		margin-left: 120px;
	}
	.login_png{
		margin-top:24px;
		margin-right:90px
	}
	.search{
		text-align: center;
		position: relative;
		border: 1px solid #FFF;
	}
	.search_{
		width: 500px;
		height: 40px;
		line-height: 40px;
		border: 2px solid #23A9DE;
		text-align: right;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;	
		margin-top: 20px;
	}
	.search_ button{
		font-size: 20px;
		padding: 8px 30px;
		color: #fff;
		cursor:pointer;
		background-color: #23A9DE;
	}
	.search_ span{
		margin-right: 30px;
	}
	/* 导航栏 */
	.nav{  
		height: 50px;
		color: white;
		text-align: center;
		padding-left: 120px;
		background-color: #23A9DE;
	}
	.nav li{
		width: 90px;
		float: left;
		display: inline-block;
		line-height: 50px;
		cursor:pointer;
	}
	.nav li:hover{
		background-color: #3E6F90;
	}
	/* 轮播图 */
	.banner{
		/* width: 100%; */
		height: 540px;
		background: url(../../static/img/u2739.jpg) no-repeat;
		background-size:100% 100%;		
	}
	.nav_{
		width: 600px;
		height: 485px; 
		margin-left: 120px;
		background-color: #fff;
		border: 1px solid black;
	}
	.nav_ ul{
		width: 100px;
		text-align: center;
		background-color: #23A9DE;
	}
	.nav_ li{
		color: #fff;
		display: block;
		line-height: 50px;
	}
	.nav_ li:hover{
		color: #FF9900;
		cursor:pointer;
		background-color: #3E6F90;
	}	
</style>
