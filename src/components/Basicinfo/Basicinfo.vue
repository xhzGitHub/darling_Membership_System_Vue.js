<template>
  <div class="basic_info">

    <div class="container">
      <div class="row">
        <div class="col-xs-10 col-sm-10 col-xs-offset-1 col-sm-offset-1">

          <!--头像-->
          <div class="avatar" style="padding: 0;">
            <img class="avatar_img" :src="headurl">
          </div>
          <!--用户名信息-->
          <div class="info">
            <div class="info_name">

              <div class="greeting">
                <span>尊敬的会员</span>
              </div>
              <div class="nickname">
                {{nickname}}
              </div>
              <div class="greeting" style="margin-left: -2vw;">ID:<span>{{memberid}}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
      name: "Basicinfo",
      props:{
        headurl: String,
        nickname: String,
        memberid: Number,
      }
    }
</script>

<style scoped>
  body{
    margin: 0;
    padding: 0;
    list-style: none-style;
    background-color: #fbfbfd;
  }

  .basic_info{
    height: 25vh;
  }

  .avatar{
    width: 50%;
    float: left;
    text-align: center;
    margin-top: 3vh;
  }

  .avatar_img{
    width:30vw;
    height: 30vw;
    border-radius: 50%;
    border: 1px solid white;
    margin-top: 5vh;
    margin-right: 4vw;
  }

  .info{
    width: 50%;
    float: left;
    margin-top: 8vh;
  }

  .info_name{
    text-align: center;
    height: 10vh;
  }

  .nickname{
    font-size: 5vh;
    font-family: "Microsoft YaHei UI";
    font-weight: bold;
    color:#27275f;
    letter-spacing: 0.3vw;
  }

  .greeting{
    font-size: 2.5vh;
    font-family: "Microsoft YaHei UI"  ;
    color: #565082;
    margin-top: 1vh;
    letter-spacing: 0.5vw;
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

  .toast_text div{
    color: gray;
    letter-spacing: 0.1vw;
    line-height: 3.5vh;
    font-size: 1.8vh;
    margin-top: -2vh;
    padding-bottom: 1vh;
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

</style>
