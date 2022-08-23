<template>
	<a :href="vlink" class="sw-visual-1" :style="{background:'url('+ require(`@/assets/images/${vimg}`) + ')'}"></a>
</template>

<script>
export default {
	props: ['vlink', 'vimg']
}
</script>

<style>

</style>