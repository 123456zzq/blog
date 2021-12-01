<style lang="stylus">
@media screen and (max-width: 500px) {
    .el-dialog{
		width:95% !important;
	}
	.el-dialog__body{
		padding:30px 0;
	}
	.el-form-item__label{
		width:50px !important;
	}
	.el-form-item__content{
		margin-left:50px !important;
	}
	.el-input{
		width:90% !important;
	}
}
</style>
<template>
	<div class="block">
		<div v-if="success">
			<div class="radio">
				排序：
				<el-radio-group v-model="reverse">
					<el-radio :label="true">倒序</el-radio>
					<el-radio :label="false">正序</el-radio>
				</el-radio-group>
			</div>
			<el-carousel :interval="4000" type="card">
				<el-carousel-item class="item-img" v-for="(item,index) in images" :key="index">
					<img :src="item.url" alt />
				</el-carousel-item>
			</el-carousel>
			<el-timeline :reverse="reverse">
				<el-timeline-item placement="top" v-for="(activity, index) in data" :key="index" :timestamp="activity.time">
					<el-card>
						<h4>{{activity.restaurantName}}</h4>
					</el-card>
				</el-timeline-item>
			</el-timeline>
		</div>
		<el-dialog class="dialog" title="美食记录访问密码" :visible.sync="dialogVisible"  @close="close">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="密码" prop="pass">
					<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
			<!-- <span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
			</span> -->
		</el-dialog>
	</div>
</template>

<script>
import eatlist from "./eatlist";
export default {
	data() {
		var validatePass = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("请输入密码"));
			} else {
				if (this.ruleForm.pass == "385368") {
					callback();
				} else {
					callback(new Error("不是吧不是吧..需要提示?"));
				}
			}
		};

		return {
			reverse: true,
			data: [],
			images: [],
			pass: [{ validator: validatePass, trigger: "blur" }],
			dialogVisible: false,
			success: false,
			ruleForm: {
				pass: ""
			},
			mmK:"",
			rules: {
				pass: [{ validator: validatePass, trigger: "blur" }]
			}
		};
	},
	created() {
		this.data = eatlist;
		for (var i = 1; i < 8; i++) {
			var item = i;
			this.images.push({
				url: require("../public/images/" + item + ".jpg")
			});
		}
		// sessionStorage.setItem('key', 'value');
		
		// 从sessionStorage获取数据
		var mmK = this.mmK;
		this.dialogVisible = !mmK;
		this.success = mmK;
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					this.dialogVisible = false;
					this.success = true;
					this.mmK = true;
				} else {
					return false;
				}
			});
		},
		close(){
			if(!this.success){
				setTimeout(()=>{
					this.submitForm("ruleForm");
					// this.dialogVisible = true;
				},500)
			}
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
	}
};
</script>