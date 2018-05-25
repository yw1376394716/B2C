<!-- 
	时间：2000.01.01
	作者： y_
	底部栏
-->
<template>
	<div class="footer">
		<div class="slogan">
			<div class='slogan_'>
				<img src="../../static/img/sheng.png">
				<span style="font-size: 20px;">XXXXXXXX</span></br>
				<span style="font-size: 16px;" class="span_s">省钱更省心</span>
			</div>			
			<div class='slogan_'>
				<img src="../../static/img/tui.png">
				<span style="font-size: 20px;">XXXXXXXX</span></br>
				<span style="font-size: 16px;" class="span_s">XXXXXXXX</span>
			</div>
			<div class='slogan_'>
				<img src="../../static/img/bao.png">
				<span style="font-size: 20px;">XXXXXXXX</span></br>
				<span style="font-size: 16px;" class="span_s">XXXXXXXX</span>				
			</div>
			<div class='slogan_'>
				<img src="../../static/img/u1095.png">	  	
				<span style="font-size: 20px;">XXXXXXXX</span></br>
				<span style="font-size: 16px;" class="span_s">XXXXXXXX</span>					
			</div>
		</div>
		<div class="footer_">
			<ul>
				<li>关于我们</li>
				<li>XXXXXX简介</li>
				<li>我们的资质</li>
				<li>法律声明</li>
				<li>网站地图</li>
			</ul>
			<ul>
				<li>联系我们</li>
				<li>门店信息</li>
				<li>意见反馈</li>
				<li>诚聘英才</li>
			</ul>
			<ul>
				<li>加盟合作</li>
				<li>商务合作</li>
				<li>旅游保险</li>
				<li>网站联盟</li>
			</ul>
			<ul>
				<li>售后服务</li>
				<li>退换货说明</li>
				<li>投诉建议</li>
				<li>举报电话</li>
				<li>000-888888</li>
			</ul>
			<ul>
				<li>订阅信息</li>
				<li><img src="../../static/img/u1149.jpg" width="120px" height="120px"></li>
			</ul>
		</div>
	</div>
</template>
<script>

</script>
<style scoped>
	.slogan{
		width: 100%;
		height: 80px;
		display: flex;
		justify-content:space-around;
		background-color: #23A9DE;
	}
	.slogan_{
		width: 260px;
		height: 56px;
		margin-top: 12px;
		color: white;
		position: relative;
	}
	.slogan_ img{
		width: 56px;
		height: 56px;
		vertical-align: top;
	}	
	.span_s{
		position: absolute;
		left: 61px;
		top: 38px;
	}
	.footer_{
		width: 100%;
		height: 180px;
		background: #CCC;
		display: flex;
		justify-content:space-around;			
	}
	.footer_ ul li{
		font-size: 16px;
		line-height: 30px;		
	}
	.footer_ ul li:nth-of-type(1){
		font-size: 20px;
		line-height: 50px;
		color: #666666;
	}
</style>