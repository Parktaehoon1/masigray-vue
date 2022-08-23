<template>
	
	<!-- 모바일 가림막 -->
	<div class="mb-dim"></div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 모바일 가림막 */
.mb-dim{
  position: fixed;
  left: 0;
  top: 0;
  display: none;
  z-index: 9998;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.7);
}
</style>