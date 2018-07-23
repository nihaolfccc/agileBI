<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="scss" rel="stylesheet/scss">
	@import url("assets/css/reset.css");
	#app {
		height: 100%;
	}
	
	.transition {
		transition: .3s;
	}
	
	.opacity {
		opacity: 1;
	}
	
	.opacity:hover {
		opacity: .8;
	}
	
	.cursor-move {
		cursor: move;
	}
	/*按钮组件样式*/
	
	.el-btn {
		box-sizing: border-box;
		padding: 0 22px;
		height: 32px;
		line-height: 30px;
		text-align: center;
		font-size: 16px;
		border: 1px solid transparent;
		border-radius: 20px;
		transition: .3s;
		&:hover {
			opacity: .8;
		}
		&.save {
			width: 100px;
			padding: 0;
			color: white !important;
			border: none !important;
		}
		&.cancel {
			width: 100px;
			padding: 0;
		}
	}
	
	.theme-blue {
		.el-btn {
			background: url(assets/imgs/blue/btn_bg.png) no-repeat;
			background-size: 100% 100%;
			color: #496b98;
			&.save {
				background: url(assets/imgs/blue/bg_confirm.png) no-repeat;
				background-size: 100% 100%;
			}
		}
		::-webkit-scrollbar {
			width: 4px;
			height: 4px;
		}
		::-webkit-scrollbar-track-piece {
			background-color: transparent;
		}
		::-webkit-scrollbar-thumb {
			background-color: $configure-list-2;
		}
		::-webkit-scrollbar-thumb:hover {
			background-color: $configure-list-5;
		}
	}
	
	.theme-red {
		.el-btn {
			background-color: #fff3ef;
			color: #dd2a12;
			border: 1px solid #dd2a12;
			&.save {
				background: url(assets/imgs/red/bg_confirm.png) no-repeat;
				background-size: 100% 100%;
			}
		}
		::-webkit-scrollbar {
			width: 4px;
			height: 4px;
		}
		::-webkit-scrollbar-track-piece {
			background-color: transparent;
		}
		::-webkit-scrollbar-thumb {
			background-color: $configure-list-red-2;
		}
		::-webkit-scrollbar-thumb:hover {
			background-color: $configure-list-red-5;
		}
	}
	
	.theme-green {
		.el-btn {
			background-color: #effdf5;
			color: #009540;
			border: 1px solid #009540;
			&.save {
				background: url(assets/imgs/green/bg_confirm.png) no-repeat;
				background-size: 100% 100%;
			}
		}
		::-webkit-scrollbar {
			width: 4px;
			height: 4px;
		}
		::-webkit-scrollbar-track-piece {
			background-color: transparent;
		}
		::-webkit-scrollbar-thumb {
			background-color: $configure-list-green-2;
		}
		::-webkit-scrollbar-thumb:hover {
			background-color: $configure-list-green-5;
		}
	}
</style>