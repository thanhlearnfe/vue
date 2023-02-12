<template>
    <el-form
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="120px"
      class="demo-ruleForm"
    v-show="isShow"
    >
    <el-button type="danger" class="close-form" @click="sendMessage">X</el-button>
      <el-tabs type="card" @tab-click="handleClick">
        <el-tab-pane label="Đăng Nhập">
          <el-form-item label="Tài khoản" prop="username">
            <el-input v-model.number="ruleForm2.username"></el-input>
          </el-form-item>
          <el-form-item label="Mật Khẩu" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm2.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')"
              >Đăng Nhập</el-button
            >
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="Đăng Ký">
          <el-form-item label="Tài Khoản" prop="username">
            <el-input v-model.number="ruleForm2.username"></el-input>
          </el-form-item>
          <el-form-item label="Mật Khẩu" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm2.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Nhập lại mật khẩu" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm2.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')"
              >Đăng Ký</el-button
            >
          </el-form-item>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </template>
  
  <script  >
  export default {
    props: ['isShow'],
    data() {
      var checkUserName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("Please input the username"));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("Please input the password"));
        } else {
          if (this.ruleForm2.checkPass !== "") {
            this.$refs.ruleForm2.validateField("checkPass");
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("Please input the password again"));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error("Two inputs don't match!"));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: "",
          checkPass: "",
          username: "",
          activeName: "first",
        },
        rules2: {
          pass: [{ validator: validatePass, trigger: "blur" }],
          checkPass: [{ validator: validatePass2, trigger: "blur" }],
          username: [{ validator: checkUserName, trigger: "blur" }],
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert("submit!");
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      sendMessage() {
        this.$emit('isShow', false);
      }
    },
  };
  </script>
  <style scoped>
  .el-form {
    background: #fff;
    padding: 20px 30px;
    width: 700px;
    padding: 20px 30px;
    position: fixed;
    top: 30%;
    margin-left: 30%;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
    z-index: 2;
  }
  .close-form {
      position: absolute;
      top: 0;
      right: 0;
  }
  </style>
  