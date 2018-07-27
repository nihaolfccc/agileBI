<template>
	<div class="listigature_padd">
		<div class="jtk-bootstrap jtk-bootstrap-wide">
			<div class="jtk-page-container">
				<div class="jtk-container">
					<script type="jtk" id="tmplTable">
						<div class="table node">
							<div class="name">
								<span>${name}</span>
							</div>
							<ul class="table-columns">
								<r-each in="columns">
									<r-tmpl id="tmplColumn" />
								</r-each>
							</ul>
						</div>
					</script>
					<script type="jtk" id="tmplColumn">
						<li class="table-column table-column-type-${datatype}" primary-key="${primaryKey}" data-port-id="${id}">
							<div><span>${id}</span></div>
							<jtk-source port-id="${id}" scope="${datatype}" filter=".table-column-delete, .table-column-delete-icon, span, .table-column-edit, .table-column-edit-icon" filter-exclude="true"  class="cover"/>
							<jtk-target port-id="${id}" scope="${datatype}" />
						</li>
					</script>
					<div class="jtk-demo-main" id="jtk-demo-dbase">
						<div class="jtk-demo-canvas">
							<div class="miniview"></div>
							<div class="add_cancel_none">
								<button class="add_none el-btn save">保存</button>
								<button class="cance_none el-btn cancel">取消</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import '../../assets/js/jsplumbtoolkit.js'
	export default {
		porps:{
			
		},
		data() {
			return {
				dataList:sessionStorage.getItem("jsPlumbDataTwo")?JSON.parse(sessionStorage.getItem("jsPlumbDataTwo")) : {
					"nodes": [{
							"id": "book",
							"name": "企业信息",
							"type": "table",
							"columns": [{
									"id": "企业ID",
									"name": "我是企业ID的名字",
									"datatype": "integer",
									"primaryKey": true
								},
								{
									"id": "企业名称",
									"datatype": "varchar"
								},
								{
									"id": "企业地址",
									"datatype": "varchar"
								},
								{
									"id": "主营业务",
									"datatype": "varchar"
								}
							]
						},
						{
							"id": "book_author",
							"name": "投资情况",
							"type": "table",
							"columns": [{
									"id": "投资方名称",
									"datatype": "integer"
								},
								{
									"id": "被投资方名称",
									"datatype": "integer"
								},
								{
									"id": "投资金额",
									"datatype": "integer"
								},
								{
									"id": "到账时间",
									"datatype": "integer"
								}
							]
						},
						{
							"id": "author",
							"name": "商业服务",
							"type": "table",
							"columns": [{
									"id": "代码",
									"datatype": "integer",
									"primaryKey": true
								},
								{
									"id": "名称",
									"datatype": "varchar"
								},
								{
									"id": "标志位",
									"datatype": "varchar"
								},
								{
									"id": "类别",
									"datatype": "varchar"
								}
							]
						},
						{
							"id": "publisher",
							"name": "部门信息",
							"type": "table",
							"columns": [{
									"id": "员工id",
									"datatype": "integer",
									"primaryKey": true
								},
								{
									"id": "员工名称",
									"datatype": "varchar"
								},
								{
									"id": "员工年龄",
									"datatype": "varchar"
								},
								{
									"id": "员工职位",
									"datatype": "varchar"
								},
								{
									"id": "所在门店",
									"datatype": "varchar"
								}
							]
						},
						{
							"id": "book_publisher",
							"name": "地区",
							"type": "table",
							"columns": [{
									"id": "地区代号",
									"datatype": "integer"
								},
								{
									"id": "省",
									"datatype": "integer"
								},
								{
									"id": "市",
									"datatype": "integer"
								},
								{
									"id": "县",
									"datatype": "integer"
								}
							]
						},
						{
							"id": "book_pdd",
							"name": "投资情况",
							"type": "table",
							"columns": [{
									"id": "投资方名字",
									"datatype": "integer"
								},
								{
									"id": "被投资方名称",
									"datatype": "integer"
								},
								{
									"id": "投资金额",
									"datatype": "integer"
								},
								{
									"id": "到账时间",
									"datatype": "integer"
								}
							]
						}
					],
					"edges": []
				}
			}
		},
		components: {},
		computed: {
			themeColor() {
				return this.$store.state.themeColor;
			},
		},
		watch: {

		},
		methods: {
			jsPlumbToolkitList() {
				var _this = this;
				var falg = false;
				$(".jtk-lasso").remove(); //分配给鼠标的套索 每次进入都会增加 ，先删除一遍
				jsPlumbToolkit.ready(function() {
					var idFunction = function(n) {
						return n.id;
					};
					var typeFunction = function(n) {
						return n.type;
					};
					var mainElement = document.querySelector("#jtk-demo-dbase"),
//						addName = $(".add_and_no"),
						addName = document.querySelector(".add_cancel_none"),
						canvasElement = mainElement.querySelector(".jtk-demo-canvas"),
						miniviewElement = mainElement.querySelector(".miniview"),
						controls = mainElement.querySelector(".controls");
					var toolkit = jsPlumbToolkit.newInstance({ //识别表格列
						idFunction: idFunction,
						typeFunction: typeFunction,
						edgeFactory: function(params, data, callback) { //边缘工厂
							callback(data);
						},
						portExtractor: function(data, node) { //识别端口节点  就是下面的子节点
							return data.columns || [];
						},
						portUpdater: function(data, node, ports) { //节点数据和端口数据同步
							return jsPlumb.extend(data, {
								columns: jsPlumbToolkitUtil.map(ports, function(p) {
									return p.data;
								})
							});
						},
						beforeConnect: function(source, target) { //限制连接
							return source !== target && source.getNode() !== target.getNode();
						}
					});

					var renderer = window.renderer = toolkit.render({
						container: canvasElement,
						enableWheelZoom: false, //是否启用缩放
						view: {
							nodes: {
								"table": {
									template: "tmplTable",
								},
							},
							edges: {
								"default": { //端点的颜色样式？  一开始就连接的默认样式 或者叫连接上的默认样式？
									anchor: ["Left", "Right"],
									Anchors: ["Right", "Left"],
									connector: "Flowchart",
									paintStyle: {
										fill: _this.themeColor,
										stroke: _this.themeColor
									}, // the endpoint's appearance
									hoverPaintStyle: {
										fill: _this.themeColor,
										stroke: _this.themeColor
									},
									ConnectionsDetachable: false, //禁止鼠标拖动连线分离
									deleteEndpointsOnDetach: false, //禁止鼠标拖动连线分离
									detachable: false, //禁止鼠标拖动连线分离
									edgeType: "common", // 从这个端口类型连接的连接的类型
									maxConnections: -1, // no limit on connections
									events: {
										"click": function(params) {
											toolkit.removeEdge(params.edge); //删除连线
											refreshData()
										}
									},
//									dropOptions: { //用于配置元素的drop行为 就是鼠标点击和划入是如果能连接就显示背景
//										hoverClass: "drop-hover"
//									},
									overlays: [
										["Arrow", {
											location: 1,
											visible: true,
											width: 11,
											length: 11,
										}],
										["Label", { //连线上的label
											location: 0.5,
											id: "label",
											cssClass: "aLabel",
										}]
									]
								}
							},
							ports: {
								"default": { //端点的颜色样式？  一开始就连接的默认样式 或者叫连接上的默认样式？
									template: "tmplColumn",
									anchor: ["Left", "Right"],
									Anchors: ["Right", "Left"],
									paintStyle: {
										fill: "",
										stroke: ""
									}, // the endpoint's appearance
									hoverPaintStyle: {
										fill: "",
										stroke: ""
									},
									edgeType: "common", // 从这个端口类型连接的连接的类型
									maxConnections: -1, // no limit on connections
//									dropOptions: { //用于配置元素的drop行为 就是鼠标点击和划入是如果能连接就显示背景
//										hoverClass: "drop-hover"
//									},
									overlays: [
										["Arrow", {
											location: 1,
											visible: true,
											width: 11,
											length: 11
										}]
									],
									allowLoopback: false, // 布尔值，指示是否可以对此类型的节点（从节点到它自己的连接）进行“环回”连接。默认为true。请注意，如果您有一个节点上有一些端口，则仍可以从其中一个端口创建到该节点的连接。为了防止这种情况，使用allowNodeLoopback:false。
									allowNodeLoopback: false, // 布尔值，指示是否可以在给定节点上的任何连接点之间建立“环回”连接。例如，您可能有一个本身可连接到其他节点的节点，其上可以单独连接的端口。将此参数设置为false可防止从该节点到其自身或其任何端口或从其任何端口到其他某个端口建立的任何连接。

								}
							}
						},
						//Absolute  绝对布局
		            	// Circular  圆；循环的
						//Hierarchical  分层机构，分层的
						// Spring  随机布局
						layout: {
							type: "Spring",
							parameters: {
								padding: [20, 100]
							}
						},
						events: {
							edgeAdded: function(params) { //拖动连线时所产生的开始端口和结束端口
								if(params.addedByMouse) {
									//console.log(params.edge)
									//_editEdge(params.edge, true);  //调用对话框
									toolkit.updateEdge(params.edge);
									refreshData()
								}
							},
							canvasClick: function(e) {
								toolkit.clearSelection();
							},
							nodeMoveStart:function(node){
								falg = true
			                	//移动前的节点
			                },
							nodeMoveEnd:function(node){
								if(falg){
									//移动后的新位置
									refreshData()
				                	//移动后节点位置 	
			                	}
			                },
						 	mouseout: function(params) {
								//console.log(params, params.scope, params.getData);
								if (!params.getData && $('.jtk-drag-active').length>0) {
									$('.table-column-type-' + params.scope).addClass('drop-hover')
								}
							},
							mouseup: function(params) {
								//console.log(params);
								$('.table-column').removeClass('drop-hover')
							},
						},
						consumeRightClick: false,
						zoomToFit: false
					});
					jsPlumb.on(addName, "tap", ".add_none", function() { //保存 所拿到的数据  拿到有连接点的数据  当前连接的原始数据  
						refreshData()
					});
					toolkit.load({
						data:sessionStorage.getItem("jsPlumbDataTwo")?JSON.parse(sessionStorage.getItem("jsPlumbDataTwo")) :_this.dataList
					});	
					
					function refreshData(){ //如果一个接口可以在这调用函数
						renderer.storePositionsInModel();
						var data = toolkit.exportData();
//						console.log(data)
	                	sessionStorage.setItem("jsPlumbDataTwo", JSON.stringify(data))
					}
				});
			}

		},
		mounted() {
			this.jsPlumbToolkitList()
		},
	}
</script>

<style>
	@import url("../../assets/css/jsplumbtoolkit-defaults.css");
	@import url("../../assets/css/jsplumbtoolkit-demo.css");
	@import url("../../assets/css/app.css");
</style>
<style scoped lang="scss" rel="stylesheet/scss">
	/*.listigature_padd {
		padding: 20px 50px!important;
	}*/

</style>