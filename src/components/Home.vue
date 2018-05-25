<template>
  <div id="app">
    <!-- 顶部 -->
    <VHeader></VHeader>
    <!-- 操作主体区 -->
    <div class="content">
        <router-view> </router-view> 
    </div>
    <!-- 底部 -->
    <VFooter></VFooter>
	<VRight class="Vright"></VRight>
  </div>
</template>

<script>

import VFooter from '@/components/Footer'
import VHeader from '@/components/Header'
import VRight  from '@/components/Right'
// import axios from 'axios';
// import qs from 'qs';

export default {
 	 name: 'app',
 	 components: { 
		VHeader,
		VFooter,
		VRight,
 	 },
	methods: {
	
	},
	mounted: function(){
	
	}
}
</script>
<style scoped>
	#app{
		position: relative;
	}
	.Vright{
		width: 40px;
		position: absolute;
		top: 0px;
		right: 0px;
	}
</style>