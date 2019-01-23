<template>
  <div id="login">

    <div id="register">
      <div class="container-fluid" style="padding: 0; width: 100%;">
        <div class="row" style="margin-right: 0;margin-left: 0;">
          <div class="card" style="padding: 0;">
            <div id="header" class="container">
              <div class="title1">注册</div>
              <div class="title2">欢迎来到成为搭灵会员的第一步</div>
            </div>

            <div id="card-register-bg">
              <div id="card-register-content">
                <form class="form1" action="https://darlinglook.com/cgi-bin/cgi_handler.py" method="get">
                  <!--输入手机号-->
                  <div class="inputing" id="phone_number" style="padding: 0;">
                    <div class="error_phoneNumber" v-show="errPhoneNum">
                      <span>请输入正确的手机号</span>
                    </div>

                    <div class="" style="padding-left: 0;">
                      <input type="text" name="query_type" value="3" hidden="true">
                      <input type="text" name="membership_query_type" value="send_sms_code" hidden="true">
                      <input class="input_phone_number" :class="{changeFontColor: unFillPhoneStatus}"  maxlength="11"
                             v-model="phoneNumber" @focus="unshowErrPhone" :placeholder="unFillInPhoneMsg">
                    </div>
                  </div>
                  <!--验证码-->
                  <div class="inputing" id="verify_codes">
                    <div>
                      <input class="input_verify_codes" ref="input_verify_codes" @focus="unshowErrCode"
                             v-model="code" :class="{changeFontColor: unFillCodeStatus}" :placeholder="unFillInCodeMsg">
                    </div>


                    <div class = "get_verify_code">
                      <input class="btn" id="send" type="button" @click.prevent="getCode" value="短信验证码" v-show="ifshowBtn">
                      <button class="btn" id="resend" disabled="disabled" v-show="!ifshowBtn">重新发送  {{countTime}}</button>
                    </div>

                  </div>
                  <!--显示验证码错误信息-->
                  <div class="errCode" v-if="errCode">
                    <span>验证码有误</span>
                  </div>

                  <input class="submitInput" type="button" value="注册" @click="login">

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {reqGetcode, reqVerifycode, reqGetUserBasicInfo} from "../../api/index";
    import axios from 'axios'

    export default {
      name: "Login",
      data(){
        return {
          phoneNumber: '',
          ifshowBtn: true,
          countTime: 10,
          code: '',
          errPhoneNum: false,
          errCode: false,
          unFillPhoneStatus: false,
          unFillCodeStatus: false,
        }
      },
      computed:{
        unFillInPhoneMsg(){
          return this.unFillPhoneStatus ? '请填写手机号':'手机号';
        },
        unFillInCodeMsg(){
          return this.unFillCodeStatus ? '请填写验证码':'输入6位短信验证码';
        },

      },
      methods:{
        async getCode(){
          this.ifshowBtn = false;
          if(!this.ifshowBtn){
            let timer = setInterval(()=>{
              if(this.countTime == 0){
                clearInterval(timer);
                this.ifshowBtn = true;
                this.countTime = 10;
              }
              this.countTime --;
            },1000)
          }
          // 发送跨域请求
          const result = await reqGetcode('send_sms_code',this.phoneNumber);

          if(result){
            console.log(result);
          }
        },

        async login(){
          let reg = /^[1][3,4,5,7,8][0-9]{9}$/;

          if(this.phoneNumber == ''){
            this.unFillPhoneStatus = true;
            return false;
          }else{
            if (!reg.test(this.phoneNumber)){
              this.errPhoneNum = true;
              return false;
            }else{
              this.errPhoneNum = false;
            }
          }

          if(this.code == ''){
            this.unFillCodeStatus = true;
            return false;
          }

          const result = await reqVerifycode('3', 'verify_sms_code',this.phoneNumber, this.code, 'oDSI91icP6QsWJkFZalVPFAXZgXU');
          console.log(result);
          if(result.status != 'success'){
            this.errCode = true;
          }else{
            // 跳转页面
          }
        },

        unshowErrPhone(){
          this.errPhoneNum = false;
          this.unFillPhoneStatus = false;
        },

        unshowErrCode(){
          this.unFillCodeStatus = false;
          this.errCode = false;
          console.log(this.$refs.input_verify_codes.placeholder);
        }
      },
      updated(){

      }
    }
</script>

<style scoped>
  body{
    margin: 0;
    padding: 0;
    /*text-decoration: none;*/
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
  }

  input{
    outline: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .container {
    margin: 0;
    padding: 0;
  }

  .card{
    height: 500px;
    width: 84%;
    margin: 10vh auto 0;
    border: none;
  }

  #card-register-bg{
    margin-top: 7vh;
  }

  .inputing{
    margin-top: 15px;
  }

  .accountSeperator{
    height: 30px;
    /*float: left;*/
    /*position: absolute;*/
    width: 1px;
    background-color: black;
    margin-top: 5px;
    /*margin-right: 10px;*/
  }

  .error_phoneNumber{
    position: absolute;
    /*margin-top: 10px;*/
    color:#f1403c;
    right:25px;
    z-index: 2;
  }
  .error_phoneNumber span{
    height: 50px;
    display: inline-block;
    line-height: 50px;
  }

  .input_verify_codes{
    width: 100%;
    height: 40px;
  }

  .input_phone_number,.input_verify_codes{
    /*width: 100%;*/
    height: 50px;
    padding-left: 2vw;
    /*border:none;*/
    border: 1px solid #cacaca;
    outline:none;
    z-index: 1;
    color: gray;
    /*font-size: 17px;*/
    /*color:red;*/
  }

  .input_phone_number{
    width: 100%;
  }

  .input_verify_codes{
    width: 60%;
    float: left;
  }

  .get_verify_code{
    width: 40%;
    display: inline-block;
  }

  .input_phone_number::-webkit-input-placeholder {
    color:#999999;
  }

  .input_verify_codes::-webkit-input-placeholder {
    color:#999999;
  }

  .changeFontColor::-webkit-input-placeholder{
    color:#f1403c;
  }

  .get_verify_code{
    width: 37%;
    margin-left: 2.5vw;
    height: 50px;
  }

  #send, #resend{
    float: left;
    width: 100%;
    height: 50px;
    background: none;
    border: 1px solid #cacaca;
    outline:none;
    z-index: 1;
    color: #4490f7;
    font-size: 1rem;
    border-radius: 0;
    padding: 0;
    border-radius: 6px;
  }


  #resend{
    color: gray;
  }

  .reGet{
    background:none;
    text-align: center;
    border: none;
    border-radius: 0px;
    cursor: pointer;
    margin-top: 5px;
    color: #175199;
  }

  .submitInput{
    width: 100%;
    height: 8vh;
    background: none;
    margin-top: 1vh;
    box-shadow: none;
    background-color: #4490f7;
    color:white;
    border: none;
    font-size: 18px;
    letter-spacing: 1vw;
    border-radius: 2px;
    font-weight: bold;
  }

  #header{
    padding: 0;
  }

  .title1{
    font-size: 7vh;
    /*font-weight: bold;*/
    letter-spacing: 1vw;
  }

  .title2{
    margin-top: 3.5vh;
    font-family: "Microsoft YaHei";
    color: #bcbcbc;
    font-size: 3vh;
    letter-spacing: 0.5vw;
  }

  .title3{
    margin-top: 0.5vh;
    font-family: "Microsoft YaHei";
    color: #bcbcbc;
    font-size: 2vh;
    letter-spacing: 0.5vw;
  }

  .focus_bar{
    height: 40px;
    background-color: #006bff;
    width: 2vw;
    position: absolute;
    float: left;
    visibility:hidden;
    margin-right: -2vw;
  }

  .input_phone_number:focus, .input_verify_codes:focus{
    border:1px solid #4490f7;
  }

  .after-send{
    /*color : #175199;*/
    background : none;
    border : none;
    cursor : pointer;
    marginTop : 5px;
    outline : none;
  }

  .errCode{
    color: red;
    float: left;
  }
</style>
