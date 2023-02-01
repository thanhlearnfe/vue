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
      <el-tab-pane label="Login">
        <el-form-item label="User" prop="username">
          <el-input v-model.number="ruleForm2.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm2.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')"
            >Login</el-button
          >
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane label="Register">
        <el-form-item label="User" prop="username">
          <el-input v-model.number="ruleForm2.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm2.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Check Password" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm2.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')"
            >Register</el-button
          >
        </el-form-item>
      </el-tab-pane>
    </el-tabs>
  </el-form>
</template>

<script  >
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
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
}
.close-form {
    position: absolute;
    top: 0;
    right: 0;
}
</style>
