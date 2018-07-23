<template>
	<div class="sql_content">
		<div class="from">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="123px" size="mini" class="demo-ruleForm">
				<el-form-item label="主机名或IP地址" prop="myIP">
					<el-input v-model.trim="ruleForm.myIP"></el-input>
				</el-form-item>
				<el-form-item label="端口" prop="myPort">
					<el-input v-model.number="ruleForm.myPort"></el-input>
				</el-form-item>
				<el-form-item label="用户名" prop="myUserName">
					<el-input v-model="ruleForm.myUserName"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="myPassWold">
					<el-input v-model="ruleForm.myPassWold"></el-input>
				</el-form-item>
				<transition-group  
					name="custom-classes-transition"
					mode="in-out"
				    enter-active-class="animated fadeInDown">
					<el-form-item v-if="dataObj.id == 1" label="数据库名/实例名" prop="myDatabase" key="1">
						<el-input v-model="ruleForm.myDatabase"></el-input>
					</el-form-item>
					<el-form-item v-else-if="dataObj.id == 3 || dataObj.id == 4" label="服务器或SID" prop="myPicked" key="2">
						<el-radio-group v-model="ruleForm.myPicked">
							<el-radio label="1">SID</el-radio>
							<el-radio label="0">服务器名</el-radio>
						</el-radio-group>
						<el-input v-model="ruleForm.mySid" class="call"></el-input>
					</el-form-item>
					<el-form-item label="选择模式" prop="name" v-if="dataObj.id == 4" key="3">
						<i class="selset_data">
							<span></span>
							<a>选择并连接模式</a>
						</i>
					</el-form-item>			
				</transition-group>
			</el-form>
		</div>
	</div>
</template>

<script>
	import {BIMsg} from '../../assets/js/tools.js'
  	import {postDataAllocationRight,getDataAllocationRight} from "@/api/index.js"
	export default {
		data() {
			return {
				ruleForm: {
					myIP:'', //ip地址
					myPort: "",//端口
					myUserName: "", //用户名
					myPassWold: "", //密码
					myDatabase: "", //数据库名、实例名
					mySid: "", //用在了服务器或sid那个单选宽后面的那个input框中
					mySidAndName: "", //服务器或sid
					myPicked: "",//用在了单选那里
					myPattern: "",
				},
				rules: {
					myIP: [{required: true,message: '请输入内容',trigger: 'blur'}],
					myPort: [{required: true,message: '请输入内容',trigger: 'blur'},{
						type:"number",message:"端口必须为数字",trigger: 'blur'
					}],
					myUserName: [{required: true,message: '请输入内容',trigger: 'blur'}],
					myPassWold: [{required: true,message: '请输入内容',trigger: 'blur'}],
					myDatabase: [{required: true,message: '请输入内容',trigger: 'blur'}],
					mySid: [{required: true,message: '请输入内容',trigger: 'blur'}],
					mySidAndName: [{required: true,message: '请输入内容',trigger: 'blur'}],
					myPattern: [{required: true,message: '请输入内容',trigger: 'blur'}],
					myPicked: [{required: true,message: '请输入内容',trigger: 'blur'}]
				},
				whetherTest:false,
			}
		},
		props: {
			dataObj: {
				type: Object
			},
		},
		computed: {
		},
		components: {
		},
		methods: {
			submitForm(formName) { //测试连接
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
					getDataAllocationRight({ 
				        	dsAddr: this.ruleForm.myIP, //主机名或ip地址
				        	dsPort:this.ruleForm.myPort,//端口
				        	dbUser:this.ruleForm.myUserName,//用户名
				        	dbPwd:this.ruleForm.myPassWold,//密码
				        	dbName:this.ruleForm.myDatabase, //数据库名称
				        	dbKeyNum:Number(this.ruleForm.myPicked),//连接标识
				        	dbKeyVal:this.ruleForm.mySid,//连接的key val
				        	dsType:this.dataObj.id == 1 ? 2 : this.dataObj.id == 3 ? 1 : this.dataObj.id == 4 ? 3 : "",//类型是MySQL还是什么  1-oracle，2-Mysql 3-Sqlserver
				        })
					    .then(data => {
					    	if(data.code==200){
			     				this.$parent.disState=false //父级保存按钮的使用
			     				this.whetherTest = true
						    	BIMsg({
					              message:data.message,
					              type:'info'
						       })
					    	}else{
					    		BIMsg({
					              message:data.error_type,
					              type:'info'
						       })
					    	}
					    })
					    .catch(err => {
					    	BIMsg({
			                  message:err.message,
			                })
					    });
		         } else {
		            return false;
		          }
		        });
		    },
		    submitFormAdd(){//增加数据源
		    	if(this.whetherTest){
			    	postDataAllocationRight({
			    		dsAddr: this.ruleForm.myIP, //主机名或ip地址
			        	dsPort:this.ruleForm.myPort,//端口
			        	dbUser:this.ruleForm.myUserName,//用户名
			        	dbPwd:this.ruleForm.myPassWold,//密码
			        	dbName:this.ruleForm.myDatabase, //数据库名称
			        	dbKeyNum:this.ruleForm.myPicked,//连接标识
			        	dbKeyVal:this.ruleForm.mySid,//连接的key val
			        	dsType:this.dataObj.id == 1 ? 2 : this.dataObj.id == 3 ? 1 : this.dataObj.id == 4 ? 3 : "",//类型是MySQL还是什么  1-oracle，2-Mysql 3-Sqlserver
			        	dsName:this.dataObj.id == 1 ? "mySQL" : this.dataObj.id == 3 ? "oracle" : this.dataObj.id == 4 ? "Sqlserver" : "",//类型是MySQL还是什么  1-oracle，2-Mysql 3-Sqlserver
			    	})
			    	.then(data=>{
			    		if(data.code==200){
			    			this.emptyForm()
			    			this.$parent.disState=true
					    	BIMsg({
				              message:data.message,
				              type:'info'
					        })
					    	console.log(data)
				    	}else{
				    		BIMsg({
				              message:data.error_type,
				              type:'info'
					        })
				    	}
			    	})
			    	.catch(err=>{
			    		BIMsg({
			    			message:err.message
			    		})
			    	})
		    	}else{
		    		BIMsg({
		    			message:"请先测试连接"
		    		})
		    	}
		    },
		    emptyForm(){//清空内容，并重置表单
		    	this.ruleForm.myIP="";
				this.ruleForm.myPort="";
				this.ruleForm.myUserName="";
				this.ruleForm.myPassWold="";
				this.ruleForm.myDatabase="";
				this.ruleForm.mySid="";
				this.ruleForm.mySidAndName="";
				this.ruleForm.myPattern="";
				this.ruleForm.myPicked="";
				this.$refs.ruleForm.resetFields();
		    },

		    
		},
		watch:{
			dataObj:{
				handler(newValue, oldValue) {
					if(newValue){
						this.emptyForm()
					}
				},
				deep: true
			},
			ruleForm:{
				handler(newValue, oldValue) {
					if(newValue){
						this.whetherTest = false
					}
				},
				deep: true
			}
		},
		created() {
			
		},
		mounted() {
			this.$on('mysqldata',(formName)=>{
                this.submitForm(formName);
            });
            this.$on('mysqldataAdd',()=>{
                this.submitFormAdd();
            });
            
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.sql_content{
		width: 100%;
		.from{
			width: 919px;
			padding-top: 152px;
			margin:auto;
			.el-form-item{
				
			}
		}
		.option{
			margin-top: 46px;
			text-align: center;
			button{
				width: 100px;
				height: 32px;
				line-height: 32px;
				font-size: 16px;
				border-radius: 20px;
				text-align: center;
			}
			.test{
				margin-right: 60px;
				color:#FFFFFF;
			}
			.next{
				color:#4a6c98;
			}
		}
	}
	@-webkit-keyframes fadeInDown {
	  from {
	    opacity: 0;
	    -webkit-transform: translate3d(0, -100%, 0);
	    transform: translate3d(0, -100%, 0);
	  }
	
	  to {
	    opacity: 1;
	    -webkit-transform: translate3d(0, 0, 0);
	    transform: translate3d(0, 0, 0);
	  }
	}
	
	@keyframes fadeInDown {
	  from {
	    opacity: 0;
	    -webkit-transform: translate3d(0, -100%, 0);
	    transform: translate3d(0, -100%, 0);
	  }
	
	  to {
	    opacity: 1;
	    -webkit-transform: translate3d(0, 0, 0);
	    transform: translate3d(0, 0, 0);
	  }
	}
	
	.fadeInDown {
	  -webkit-animation-name: fadeInDown;
	  animation-name: fadeInDown;
	}
	
	.animated {
	  -webkit-animation-duration: 1s;
	  animation-duration:1s;
	  -webkit-animation-fill-mode: both;
	  animation-fill-mode: both;
	}
	
	.animated.infinite {
	  -webkit-animation-iteration-count: infinite;
	  animation-iteration-count: infinite;
	}
	.theme-red{
		
	}
	.theme-blue{
		
	}
	.theme-green{
		
	}
</style>