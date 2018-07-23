<template>
	<div class="configuration">
		<ul class="configuration-list">
			<li class="fl" v-for="(item, index) in configurationList" :key="index">
				<div class="img-wrap fl" :class="{'active': configurationName==item.name}" @click="goPage(item.name)">
					<img class="img" :src="item.src" />
					<img class="img-selected" :src="item.srcSelected" />
				</div>
				<img class="img-arrow fl" src="../assets/imgs/red/step-arrow.png" v-if="(configurationList.length-1)!=index" />
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "configuration",
		components: {},
		data: function() {
			return {
				configurationList: [{
					  name: 'dataMatching',
						src: require('../assets/imgs/red/step1.png'),
						srcSelected: require('../assets/imgs/red/step1-selected.png')
					},
					{
						name: 'dataClassify',
						src: require('../assets/imgs/red/step2.png'),
						srcSelected: require('../assets/imgs/red/step2-selected.png')
					},
					{
						name: '',
						src: require('../assets/imgs/red/step3.png'),
						srcSelected: require('../assets/imgs/red/step3-selected.png')
					},
					{
						name: 'dataAssociation',
						src: require('../assets/imgs/red/step4.png'),
						srcSelected: require('../assets/imgs/red/step4-selected.png')
					},
					{
						name: 'businessMatching',
						src: require('../assets/imgs/red/step5.png'),
						srcSelected: require('../assets/imgs/red/step5-selected.png')
					},
					{
						name: 'templateMatching',
						src: require('../assets/imgs/red/step6.png'),
						srcSelected: require('../assets/imgs/red/step6-selected.png')
					}
				]
			}
		},
		computed: {
			configurationName() {
				return this.$store.state.configurationName
			},
		},
		watch: {

		},
		methods: {
			goPage(name, index){
				this.$store.commit('changeConfigurationName', name)
				this.$router.push({
					name: name
				});
			}
		},
		created() {

		},
		mounted() {
			
		}
	};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.configuration {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 1600px;
		height: 140px;
		background: url(../assets/imgs/red/configuration_bg.png);
	}
	
	.configuration-list {
		>li {
			.img-wrap {
				width: 227px;
				height: 131px;
				cursor: pointer;
				&:hover, &.active {
					.img {
						display: none;
					}
					.img-selected {
						display: block;
					}
				}
				img {
					width: 100%;
					height: 100%;
				}
				.img-selected {
					display: none;
				}
			}
			.img-arrow {
				margin-top: 78px;
			}
		}
	}
	/*.theme-red {
		.configuration {
			background: url(../assets/imgs/red/configuration_bg.png);
		}
	}*/
</style>