<template>
  <div>
    <a @click="dialogFormVisible=true" class="user">
      <span class="transition">登录</span>
    </a>
    <el-dialog :visible.sync="dialogFormVisible" custom-class="BI-login" top="30vh" :modal-append-to-body="false" :show-close="false">
      <div class="login-tit">
        用户登录
      </div>
      <div class="login-main">
        <p>
          <i class="iconfont icon-yonghu icon-p"></i>
          <input type="text" placeholder="请输入用户名" id="user" v-model="userName" @keyup.enter='submit' />
        </p>
        <p>
          <i class="iconfont icon-mima-copy icon-p"></i>
          <input type="password" placeholder="请输入密码" id="password" v-model="password" @keyup.enter='submit' />
        </p>

      </div>
      <div class="login-footer">
        <p class="btn btn-confirm" @click="submit"></p>
        <p class="btn  btn-cancle"></p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { BIMsg } from "../../assets/js/tools.js";
export default {
  data() {
    return {
      dialogFormVisible: false,
      userName: "",
      password: ""
    };
  },
  methods: {
    submit() {
      if (!this.userName || !this.password) {
        BIMsg({
          message: "请输入用户名或密码",
          type: "info"
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.theme-blue {
  .user:hover,
  .login-tit,
  .icon-p {
    color: #1f9eff;
  }
  .login-main {
    input {
      border-bottom: 1px solid #1f9eff;
      color: #1f9eff;
    }
    input:focus {
      color: #1f9eff;
    }
  }
  .btn-confirm {
    background: url("../../assets/imgs/blue/login_blue_03.png") no-repeat;
  }
  .btn-cancle {
    background: url("../../assets/imgs/blue/login_blue_06.png") no-repeat;
  }
}
.theme-red {
  .user:hover,
  .login-tit,
  .icon-p {
    color: #da442f;
  }
  .login-main {
    input {
      border-bottom: 1px solid #fea188;
      color: #da442f;
    }
    input:focus {
      color: #da442f;
    }
  }
  .btn-confirm {
    background: url("../../assets/imgs/red/login_red_03.png") no-repeat;
  }
  .btn-cancle {
    background: url("../../assets/imgs/red/login_red_06.png") no-repeat;
  }
}

.theme-green {
  .user:hover,
  .login-tit,
  .icon-p {
    color: rgba(0, 169, 73, 0.75);
  }
  .login-main {
    input {
      border-bottom: 1px solid #afd1a6;
      color: rgba(0, 169, 73, 0.75);
    }
    input:focus {
      color: rgba(0, 169, 73, 0.75);
    }
  }
  .btn-confirm {
    background: url("../../assets/imgs/green/login_green_03.png") no-repeat;
  }
  .btn-cancle {
    background: url("../../assets/imgs/green/login_green_06.png") no-repeat;
  }
}

.user {
  color: #676767;
  font-size: 16px;
  padding: 15px 0;
}
.login-tit {
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}
.login-main {
  p {
    position: relative;
    .icon-p {
      width: 38px;
      position: absolute;
      top: 0px;
      font-size: 18px;
    }
    input {
      padding-left: 38px;
      width: 225px;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }
}
.login-footer {
  .btn {
    width: 265px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    border-radius: 16px;
    font-weight: 700;
    cursor: pointer;
    &:nth-child(1) {
      margin: 20px auto;
    }
    &:nth-child(2) {
      margin: 10px auto;
    }
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
