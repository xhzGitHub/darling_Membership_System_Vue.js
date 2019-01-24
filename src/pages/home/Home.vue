<template>
  <div id="membership">
    <div class="bgMask"></div>

    <div class="top">

        <Basicinfo
          :headurl="headimgurl" :nickname="nickname" :memberid="memberid">
        </Basicinfo>

        <Centerinfo
          :rankid="rankid" :interval="interval" :balance="balance">
        </Centerinfo>

        <div class="container">
          <div class="row">
            <div class="col-xs-10 col-sm-10 col-xs-offset-1 col-sm-offset-1">
              <div class="container">
                <div class="row">
                  <div class="info_btn" style="padding-left: 0;" @click="routeToUpdateInfo">
                    <button class="i_btn">修改会员资料</button>
                  </div>

                  <div class="info_btn" style="padding-right: 0;" @click="routeToBodyInfo">
                    <button class="i_btn" >查看体型数据</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="parting"></div>

    <div class="bottom">
        <div class="privilege_title">
          <img src="./images/bottom-img.png" style="margin-right: 0vw;">
          <span>会员特权</span>
        </div>

        <div class="privilege_content">
          <div class="swiper-container" style="margin: 0;width: 100%;height: 33vh">
            <div class="swiper-wrapper" style="height: 25vh">
              <div class="swiper-slide sd1"></div>
              <div class="swiper-slide sd2"></div>
              <div class="swiper-slide sd3" ></div>
              <div class="swiper-slide sd4" ></div>
              <div class="swiper-slide sd5"></div>
              <div class="swiper-slide sd6" ></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

      </div>

  </div>
</template>

<script>
    import Basicinfo from '../../components/Basicinfo/Basicinfo'
    import Centerinfo from '../../components/Centerinfo/Centerinfo'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'

    export default {
      name: "Home",
      components: {
        Basicinfo,
        Centerinfo,
      },
      data(){
        return {
          swiperName: [
            'sd1','sd2','sd3','sd3','sd4','sd5','sd6'
          ]
        }
      },

      computed:{
        headimgurl(){
          return this.$store.state.headimgurl;
        },
        nickname(){
          return this.$store.state.nickname;
        },
        memberid(){
          return this.$store.state.fMemberID;
        },
        rankid(){
          return this.$store.state.fRankIDCN;
        },
        interval(){
          return this.$store.state.fPoints;
        },
        balance(){
          return this.$store.state.fBalance;
        }
      },

      methods:{
        routeToUpdateInfo(){
          console.log(1);
          // this.$router.replace('/userinfo')
        },
        routeToBodyInfo(){
          console.log(2);
          // this.$router.replace('/bodytypeinfo')
        }
      },

      mounted(){
        // 分发"获取用户信息"的ajax请求给store中的actions
        this.$store.dispatch('getUserInfo');

        // 创建swiper对象
        let mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal',
          loop: false,
          slidesPerView :2,
          spaceBetween:50,
          height:20,
          slideToClickedSlide: true,
          on:{},

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

          // 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        })
      },


    }
</script>

<style scoped>
  body{
    margin: 0;
    padding: 0;
    list-style: none-style;
    background-color: #fbfbfd;
  }

  .top{
    height: 58vh;
    border-bottom: 1px solid #dddedd;
    box-shadow: 1px 1px 5px #dddedd;
    background: url("./images/bgc.jpg");
    background-size: 100% auto;
    background-repeat: no-repeat;
  }

  .basic_info{
    /*margin-top: 2vh;*/
    height: 25vh;
    /*border-bottom:1px solid #c2c2c7;*/
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
    /*background-color: #8a6d3b;*/
  }

  .info_name{
    text-align: center;
    height: 10vh;
    /*background-color: #761c19;*/
  }

  .info_level, .info_integral, .info_balance{
    width: 33%;
    float: left;
    text-align: center;
    /*display: flex;*/
    /*justify-content: center;*/
  }

  .part_line{
    width: 90%;
    height: 1px;
    background-color: #dddedd;
    margin-left: 5vw;
    margin-top: 3vh;
  }

  .info_btn{
    width: 50%;
    /*background-color: #31b0d5;*/
    text-align: center;
    padding-top: 3vh;
  }

  .info_data{
    height: 12.5vh;
    margin-top: 5vh;
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

  .i_btn{
    margin-top: 1vh;
    height: 6.5vh;
    width: 35vw;
    border-radius: 1vh;
    background-color: #5769b5;
    color: white;
    font-family: SimHei;
    letter-spacing: 0.3vw;
    font-size: 2.2vh;
    border: none;
    box-shadow: 1px 1px 3px #7482be;
    outline: none;
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

  .underline{
    height: 0.5vh;
    width: 8vw;
    background-color: #565082;
    margin-left: 8vw;
    margin-top: 1vh;
  }

  .privilege_title{
    /*margin-top: 3vh;*/
    text-align: center;
    color: #2b2b62;
    font-size: 3vh;
    font-family: SimHei;
    letter-spacing: 0.2vw;
    /*margin-right: 60vw;*/
  }

  .privilege_title img{
    width: 6.2vw;
    height: auto;
    margin-bottom: 1vh;
  }

  .privilege_content{
    margin-left: 7vw;
    margin-top: 2vh;
  }

  .swiper-slide img{
    height: 12vh;
    width: 21vh;
    border-radius: 2vh;
    margin-top: 3vh;
  }

  .membershipID{
    padding-top: 1.5vh;
    padding-left: 1.5vh;
    color:#565082;
    font-family: "Microsoft YaHei";
  }

  .bottom{
    padding-top: 1.8vh;
    background-color: #f8f8f8;
  }

  .parting{
    background-color: #eaeaea;
    height: 1vh;
  }

  .sd1{
    background: url("./images/1.jpg");
    background-size: 100% auto;
    background-repeat: no-repeat;
    border-radius: 20px;
    box-shadow: 0 3px 5px gray;
  }

  .sd2{
    background: url("./images/2.jpg");
    background-size: 100% auto;
    background-repeat: no-repeat;
    border-radius: 20px;
    box-shadow: 0 3px 5px gray;
  }

  .sd3{
    background: url("./images/3.jpg");
    background-size: 100% auto;
    background-repeat: no-repeat;
    border-radius: 20px;
    box-shadow: 0 3px 5px gray;
  }

  .sd4{
    background: url("./images/4.jpg");
    background-size: 100% auto;
    background-repeat: no-repeat;
    border-radius: 20px;
    box-shadow: 0 3px 5px gray;
  }

  .sd5{
    background: url("./images/5.jpg");
    background-size: 100% auto;
    background-repeat: no-repeat;
    border-radius: 20px;
    box-shadow: 0 3px 5px gray;
  }

  .sd6{
    background: url("./images/6.jpg");
    background-size: 100% auto;
    background-repeat: no-repeat;
    border-radius: 20px;
    box-shadow: 0 3px 5px gray;
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

  .bgMask{
    height: 100vh;
    width: 100vw;
    background-color: gray;
    opacity: 0.5;
    position: absolute;
    z-index:10;
    display: none;
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

  .alert_img{
    background-size: 100% auto;
    background-repeat: no-repeat;
    /*height: 24vh;*/
    width: 100%;
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

  .sure{
    height: 10vh;
    background-color: #5769b5;
    color:white;
    width: 100%;
    text-align: center;
    font-size: 4vh;
    font-weight: bold;
    line-height: 10vh;
    letter-spacing: 0.6vw;
  }

  .loading{
    margin-top: 30vh;
  }

  .loading_circle{
    width: 10vh;
    height: auto;
  }

  .loading_tips{
    color: #aaaaaa;
    font-size: 3vh;
    letter-spacing: 0.2vw;
    font-family: "Microsoft YaHei";
  }
</style>
