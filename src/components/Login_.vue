<!-- 
	时间：2000.01.01
	作者： y_
	登陆中心
-->
<template>
    <div class="Login_ ">
        <div class="top c_clear">
			<img src="../../static/img/bzly_log.jpg" width="180px" height="96px" class="log fl">
            <div class="register fl">
                <span>登陆中心</span>
            </div>
            <div class="disembark fr">
                <img src="../../static/img/login_.jpg" width="208px" height="72px" class="fl" style="margin-top:24px;margin-right:90px">
            </div>
        </div>
		<div class="content">
			<div class="login_" v-show  = "flag">
				<template>
					<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
						<el-tab-pane label="普通登录" name="first">
							<el-input v-model="username" placeholder="邮箱/手机号/用户名" style="margin-top:50px"></el-input></br>
							<el-input v-model="password" placeholder="请输入密码" class="mar_t30"></el-input></br>
						</el-tab-pane>
						<el-tab-pane label="手机密码动态登录" name="second">
							<el-input v-model="phone" placeholder="手机号" style="margin-top:50px"></el-input></br>
							<el-input v-model="dynamicPassword" placeholder="请输入动态密码" class="dynamicPassword mar_t30"></el-input>
							<button class="acquire_p" @click="getDynamicPassword()">获取动态密码</button>
							</br>
						</el-tab-pane>
					</el-tabs>
				</template>	
				<template >
					<el-radio v-model="radio" label="1" style="width:210px;margin:15px 0px;">两周内自动登录</el-radio> <span style="color:#5EC3F0">忘记密码?</span>
				</template></br>	
				<button class="login_b" @click="loginFun()"> 登 录 </button></br>
				<span>免费<span style="color:#FF9933;display:inline-block;cursor:pointer;margin-top:2 0px"@click="goLogin()">注册</span>,立享会员优惠</span>	
				<img src="../../static/img/QRcode.png" width="60px" height="60px" class="QRcode" @click="flag = !flag" v-show  = "flag">
				<img src="../../static/img/u2965.png"  width="60px" height="60px" class="QRcode" @click="flag = !flag" v-show  = "!flag">				
			</div>

			<div class="login_" v-show  = "!flag">
				<span style="margin-top:20px;display:inline-block;font-size:18px">微信登录</span>
				<img src="../../static/img/QRcode.png" width="60px" height="60px" class="QRcode" @click="flag = !flag" v-show  = "flag">
				<img src="../../static/img/u2965.png"  width="60px" height="60px" class="QRcode" @click="flag = !flag" v-show  = "!flag">				
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
			flag: 'true',
			radio: 0,
			username: '',      		// 账号
			password: '',      		// 密码
			activeName2: 'first',	// tab切换
			phone:'',  				// 手机号
			dynamicPassword: '',	// 动态密码
        };
	},
    methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		},
		getDynamicPassword() {
			console.log('获取动态密码');
		},
		goLogin()  {					// 注册
			this.$router.push('/Login');
		},				
		loginFun() {					// 首页
			this.$router.push('/index');
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
	.mar_t30{
		margin-top:30px;
	}
	.content{
		/* width: 100%; */
		height: 540px;
		background: url(../../static/img/u2739.jpg) no-repeat;
		background-size:100% 100%;
		position: relative;
	}
	.login_{
		width: 300px;
		height: 450px;
		border: 1px solid #999;
		position: absolute;
		right: 200px;
		top: 37px;
		padding: 0 40px;
		background-color: #fff;
	}
	.login_b{
		width: 300px;
		height: 44px;
		line-height: 44px;
		text-align: center;
		font-size: 20px;
		color:#fff;
		background-color: #169BD5;
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
	.QRcode{
		position: absolute;
		right: 0px;
		bottom: 0px;
		cursor:pointer;
	}
	/* 手机动态密码登陆 */
	.login_ .dynamicPassword{
		width: 160px;
	}
	.acquire_p {
		width: 130px;
		padding: 10px 0;
		cursor:pointer;
	}
</style>
<style>
	.Login_ .el-input{
		width: 300px;
		display: inline-block;
	}
	.Login_ .el-input__inner{
		width: 300px;
		line-height: 44px;
	}
	.Login_ .el-tabs--card>.el-tabs__header,
	.Login_ .el-tabs--card>.el-tabs__header .el-tabs__nav{
		border: 0;
	}
	.Login_  .dynamicPassword .el-input__inner{
		width: 100%;
		display: inline-block;
	}
</style>