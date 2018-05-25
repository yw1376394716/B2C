<!-- 
	时间：2000.01.01
	作者： y_
	注册
-->
<template>
    <div class="Login ">
        <div class="top c_clear">
			<img src="../../static/img/bzly_log.jpg" width="180px" height="96px" class="log fl">
            <div class="register fl">
                <span>欢迎注册</span>
            </div>
            <div class="disembark fr">
                <span>已有宝中账号?</span>
				<button @click="goLogin_()" style="background-color:#CCC;color:black;padding:0 25px;font-size:16px"> 登 陆 </button>
            </div>
        </div>
		<div class="procedure">
			<el-steps :active="active" finish-status="success"  align-center>
				<el-step title="步骤 1" description="填写注册信息"></el-step>
				<el-step title="步骤 2" description="设置密码"></el-step>
				<el-step title="步骤 3" description="注册成功"></el-step>
			</el-steps>					
		</div>
		<div class="login"  v-show="active=='0'">  					  
			<label class="mar_t20">手机号码: </label>
			<el-input v-model="phone" placeholder="请输入手机号"></el-input></br>
			<label class="mar_t20">验证码: </label>
			<el-input v-model="verificationCode" placeholder="不区分大小写"></el-input>
			<button>看不清,换一换</button></br>
			<label class="mar_t20">校验码: </label> 
			<el-input v-model="checkCode"></el-input>
			<button>获取动态密码</button>
			<!-- <button>60秒后重发</button>
			<button>重新发送</button> -->
			</br>
			<template >
				<el-radio v-model="radio" label="1" style="width:305px;margin:15px 80px;">我已阅读同意<span style="color:#23A8DD">《陕西宝中旅游服务条款》</span></el-radio>
			</template>			
			<el-button  @click="next()" class="nextStep"> 下 一 步 </el-button>
		</div>
		<div class="login setPassword" v-show="active=='1'">		 				 
			<label class="mar_t20">登录密码: </label> 
			<el-input v-model="phone"></el-input>
			<span>请输入正确的的密码(密码长度是6位)</span></br>

			<label class="mar_t20">确认密码: </label> 
			<el-input v-model="phone"></el-input>	
			<el-button  @click="next()" class="nextStep" style="margin-top:100px"> 下 一 步 </el-button>		
		</div>
		<div class="succeed"  v-show="active=='2'">					 
			<div class="succed_t">
				<img src="../../static/img/sheng.png" style="vertical-align: middle;" width="100px" height="90px" >
				<span style="font-size:40px">恭喜您，已注册成功</span><br/>
				<span style="margin-left:103px;">为了保障，你的账户安全，请尽快完成 <span style="color:#FF9900;font-size:20px">邮箱验证!</span></span><br/>
			</div>
			<div class="succed_b">
				<span style="margin-left:40px"><span style="color:green">40S</span>后自动跳转到您之前浏览的页面，您也可以点击</span>
				<button class="smallButton" style="background-color:#23A9DE">立即跳转</button>
			</div>
		</div>
		<div class="slogan">
			<div class='slogan_'>
				<img src="../../static/img/sheng.png">
				<span style="font-size: 20px;">专业旅行服务</span></br>
				<span style="font-size: 16px;" class="span_s">省钱更省心</span>
			</div>			
			<div class='slogan_'>
				<img src="../../static/img/tui.png">
				<span style="font-size: 20px;">极速退款服务</span></br>
				<span style="font-size: 16px;" class="span_s">特殊情况影响出行,保证退款</span>
			</div>
			<div class='slogan_'>
				<img src="../../static/img/bao.png">
				<span style="font-size: 20px;">贴心服务保障</span></br>
				<span style="font-size: 16px;" class="span_s">抵制售卖虚假旅游产品</span>				
			</div>
			<div class='slogan_'>
				<img src="../../static/img/u1095.png">	  	
				<span style="font-size: 20px;">专职客服服务</span></br>
				<span style="font-size: 16px;" class="span_s">24小时陪伴,全年无休</span>					
			</div>
		</div>
		<div class="footer">
			<span>关于我们</span><span class="line_f">|</span><span>联系我们</span><span class="line_f">|</span><span>门店信息</span><span class="line_f">|</span><span>意见反馈</span><span class="line_f">|</span><span>诚聘英才</span><span class="line_f">|</span><span>加盟合作</span><span class="line_f">|</span><span>旅游度假资质</span>
		</div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return{
			phone: '',  			// 手机号码
			verificationCode: '',   // 验证码
			checkCode: '',  		// 校验码
			radio: '0',			    // 单选框
			active: 0,				// 进度条(步骤)
        };
	},
	methods: {
		next() {
			if (this.active++ > 2) this.active = 0;
			console.log(this.active);
		},
		goLogin_() {
			this.$router.push('/Login_');
		}
	}
}
</script>
<style scoped>
	.Login{
		width: 100%;
		height: 100%;
	}
	.top{
		height: 96px;
		line-height: 96px;		
	}
	.log {
		margin-left: 110px;
	}
	.register{
		font-size: 20px;
		height: 96px;
		line-height: 96px;
		color: #999999;
	}
	.disembark{
		margin-right: 20px;
	}
	.procedure{
		width: 70%;
		margin-left: 15%;

	}
	/* 填写注册信息 */
	.login{
		width: 500px;
		height: 380px;
		/* border: 1px solid black; */
		/* position: absolute; */
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		margin-top: 80px;
	}
	/* 设置密码 */
	.setPassword{
		width: 700px;
		height: 380px;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		margin-top: 80px;	
	}
	/* 注册成功 */
	.succeed{
		width: 700px;
		height: 300px;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		margin-top: 140px;	
		padding-top:20px;
		padding-left: 90px;
		border: 1px solid #CCCCCC; 	
	}
	.succed_b{
		width: 70%;
		margin-top: 50px;
		padding-top: 30px;
		border-top: 1px  dashed #999999;
	}
	.login label{
		width: 80px;
		height: 42px;
		line-height: 42px;
		text-align: right;
		display: inline-block;
	}
	.mar_t20{
		margin-top:20px;
	}
	button{
		padding-left:5px; 
		padding-right:5px; 
		margin-left: 10px;
		background-color: #CCCCCC;
		cursor:pointer ;
		height: 44px;
	}	
	.nextStep{
		width: 300px;
		height: 42px;
		color: white;
		margin-left: 80px;
		font-weight: 700;
		font-size: 19px;
		background-color:#23A9DE;
	}
	.slogan{
		width: 100%;
		height: 80px;
		display: flex;
		margin-top: 100px;
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
	.footer{
		line-height: 40px;
		text-align: center;
		background-color: #CCCCCC;
	}
	.line_f{
		margin-left: 10px;
		margin-right: 10px;
	}
</style>
<style>
	.Login .el-input{
		width: 300px;
		display: inline-block;
	}
	.Login .el-input__inner{
		width: 300px;
		line-height: 42px;
	}
</style>

