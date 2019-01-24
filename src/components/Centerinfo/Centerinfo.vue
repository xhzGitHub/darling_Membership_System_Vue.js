<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-10 col-sm-10 col-xs-offset-1 col-sm-offset-1">

        <div class="container toast_card" style="">
          <div class="row">
            <div class="toast col-xs-8 col-sm-8 col-xs-offset-2 col-sm-offset-2">
              <img src="./images/nodata.jpg" alt="" class="toast_img">
              <div class="toast_text">
                <div>
                  抱歉，没有在“数据仓库”中找到您的量体信息！
                  DARLING线下店提供免费测量服务。
                </div>
              </div>
              <div class="toast_btn">
                <button>我知道了</button>
              </div>
            </div>
          </div>
        </div>

        <div class="alert-bg">
          <div class="alert-text">注册成功</div>
          <div class="container">
            <div class="row">
              <button class="alert-btn col-xs-10 col-sm-10 col-xs-offset-1 col-sm-offset-1">重新登录</button>
            </div>
          </div>
        </div>

        <div class="info_data">
          <div class="container">
            <ul class="row" style="text-align: center">

              <li class="items" v-for="prop in info">
                <div :class="prop.classname" style=" margin-top: 0.6vh;padding: 0;">
                  <div>
                    <span class="info_content" style="font-size: 2.5vh">{{prop.value}}</span>
                  </div>
                  <div>
                    <span class="info_title">{{prop.title}}</span>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Centerinfo",
      props: {
        rankid: String,
        interval: Number,
        balance: Number,
      },
      // 此处一定要用computed属性，不能使用data，因为data无法在挂载后显示props的参数
      computed: {
          info(){
            return [
              {
                title: '会员等级',
                value: this.rankid,
                classname: 'info_level',
              },
              {
                title: '会员积分',
                value: this.interval,
                classname: 'info_integral',

              },
              {
                title: '会员余额',
                value: this.balance,
                classname: 'info_balance',
              },
            ]
          }
      },
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .info_level, .info_integral, .info_balance{
    width: 100%;
    float: left;
    text-align: center;
  }

  .info_data{
    height: 12.5vh;
    margin-top: 5vh;
  }

  .info_content{
    color:#27275f;
    font-family: SimHei;
    letter-spacing: 0.1vw;
    font-weight: bold;
    font-family: "Microsoft YaHei UI";
  }

  .info_title{
    color:#565082;
    line-height: 25px;
  }

  .items{
    width: 33%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .privilege_title img{
    width: 6.2vw;
    height: auto;
    margin-bottom: 1vh;
  }

  .swiper-slide img{
    height: 12vh;
    width: 21vh;
    border-radius: 2vh;
    margin-top: 3vh;
  }

  .toast_card{
    display: none;
    position: absolute;
    margin-left: 15px;
    margin-top: 0vh;
    z-index: 11;
    left:0;
  }

  .toast{
    border-radius: 5%;
    background-color: white;
    height: auto;
    position: absolute;
    text-align: justify;
    border: 1px solid #bfbfbf;
  }

  .toast_text{
    width: 100%;
    height: auto;
  }

  .toast_img{
    width: 100%;
  }

  .toast_text div{
    color: gray;
    letter-spacing: 0.1vw;
    line-height: 3.5vh;
    font-size: 1.8vh;
    margin-top: -2vh;
    padding-bottom: 1vh;
  }

  .toast_btn{
    text-align: center;
    padding-top: 1vh;
    padding-bottom: 2vh;
  }

  .toast_btn button{
    width: 80%;
    height: 5vh;
    border-radius: 3px ;
    border: none;
    outline: none;
    box-shadow: none;
    background-color: #5769b5;
    color: white;
    letter-spacing: 0.1vh;
  }

  .alert-bg{
    height: 110px;
    width: 150px;
    position: absolute;
    z-index: 99;
    padding: 0;
    left:20vw;
    top:10vh;
    border-radius: 10px;
    overflow: hidden;
    background-color: white;
    display: none;
  }

  .alert-text{
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 3vh;
    letter-spacing: 0.5vw;
  }

  .alert-btn{
    width: 80%;
    height:35px;
    background: none;
    border: none;
    background-color: #5769b5;
    border-radius: 1vh;
    font-size: 2.5vh;
    letter-spacing: 0.5vw;
    color: #fff;
  }
</style>
