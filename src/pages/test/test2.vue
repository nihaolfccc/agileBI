<template>
	<div class="test2">
		<btn v-for="(item, index) in buttons" :key="index" :item="item" @click.native="item.fn"></btn>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import btn from '@/components/buttons/btn'
	
	export default {
		components: {
			btn
		},
		data() {
			return {
				buttons: [{
						name: "制作报告",
						iconName: "icon-zhizuo",
						fn: () => {
							this.goProduceReport()
						}
					},
					{
						name: '收藏',
						iconName: 'icon-shoucang3',
						fn: () => {
							this.collectReport()
						}
					},
					{
						name: '导出',
						iconName: 'icon-daochu',
						fn: () => {
							this.$root.exportEcharts()
						}
					},
				],
			};
		},
		computed: {
			//...mapState(["buttons"]),
		},
		methods: {
			
		}
	};
</script>