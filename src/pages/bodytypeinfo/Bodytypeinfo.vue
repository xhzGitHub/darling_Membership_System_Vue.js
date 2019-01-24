<template>
  <div id="bodyinfo">
    <div class="top">

      <div class="navigationbar">
        <span class="glyphicon glyphicon-menu-left navigationbar_icon" aria-hidden="true"></span>
        <span class="title1">我的体型数据库</span>
      </div>

    </div>

    <div class="toust">保存体型成功~</div>

    <div class="bottom">

      <ul class="bodydata_ul">
        <li class="bodydata_li">
          <div class="body_data">
            <div class="bodydata_title">
              胸围
            </div>
            <span class="glyphicon glyphicon-menu-right data_icon" aria-hidden="true"></span>
            <div class="data_number">
              88
            </div>
          </div>

          <div class="body_method">
            <img  class="method_img" src="./images/bust_width.png">
            <div class="method_text">
              <span class="method_title">测量方法</span>
              <span class="method_content">
                            测量胸围, 以BP点（即乳点bustpoint）为测点，用软皮尺水平测量胸部最丰满处一周。
                            </span>
            </div>
          </div>
        </li>
        <li class="bodydata_li">
          <div class="body_data">
            <div class="bodydata_title">
              腰围
            </div>

            <span class="glyphicon glyphicon-menu-right data_icon" aria-hidden="true"></span>

            <div class="data_number">
              88
            </div>
          </div>
          <div class="body_method">
            <img  class="method_img" src="./images/waist_width.png">
            <div class="method_text">
              <span class="method_title">测量方法</span>
              <span class="method_content">
                                测量腰围，用软尺贴着皮肤，在肚脐眼下方2-3cm的水平位置围上一圈(此处为裤腰围)。
                            </span>
            </div>
          </div>
        </li>
        <li class="bodydata_li">
          <div class="body_data">
            <div class="bodydata_title">
              臀围
            </div>

            <span class="glyphicon glyphicon-menu-right data_icon" aria-hidden="true"></span>

            <div class="data_number">
              88
            </div>
          </div>
          <div class="body_method">
            <img  class="method_img" src="./images/hip_width.png">
            <div class="method_text">
              <span class="method_title">测量方法</span>
              <span class="method_content">
                                测量臀围，软尺贴着身体，在胯骨凸起的水平位置围上一圈，即测量臀部最突出的一圈。
                            </span>
            </div>
          </div>
        </li>
        <li class="bodydata_li">
          <div class="body_data">
            <div class="bodydata_title">
              肩宽
            </div>

            <span class="glyphicon glyphicon-menu-right data_icon" aria-hidden="true"></span>

            <div class="data_number">
              88
            </div>
          </div>
          <div class="body_method">
            <img  class="method_img" src="./images/shoulder_width.png">
            <div class="method_text">
              <span class="method_title">测量方法</span>
              <span class="method_content">
                                测量肩宽，让另外一人用软尺从你的背后量，从一边肩骨到另一边肩骨的直线距离，测量时软尺要拉直，不能贴着身体。
                            </span>
            </div>
          </div>
        </li>
        <li class="bodydata_li">
          <div class="body_data">
            <div class="bodydata_title">
              袖长
            </div>

            <span class="glyphicon glyphicon-menu-right data_icon" aria-hidden="true"></span>

            <div class="data_number">
              88
            </div>
          </div>
          <div class="body_method">
            <img  class="method_img" src="./images/sleeve_length.png">
            <div class="method_text">
              <span class="method_title">测量方法</span>
              <span class="method_content">
                                测量袖长，测量从肩部上缝线到手腕末端的长度，要让卷尺触碰到你的腕骨。
                            </span>
            </div>
          </div>
        </li>
        <li class="bodydata_li">
          <div class="body_data">
            <div class="bodydata_title">
              前衣长
            </div>

            <span class="glyphicon glyphicon-menu-right data_icon" aria-hidden="true"></span>

            <div class="data_number">
              88
            </div>
          </div>
          <div class="body_method">
            <img  class="method_img" src="./images/front_length.png">
            <div class="method_text">
              <span class="method_title">测量方法</span>
              <span class="method_content">
                                测量前衣长，从肩颈点向下垂直量至大拇指指尖，手臂偏长或偏短的人需根据实际情况增减。
                            </span>
            </div>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>

    export default {
        name: "Bodytypeinfo"
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .top{
    /*height: 150px;*/
    height: 10.5vh;
    width: 100%;
    background:linear-gradient(#4252a4, #2e4bb5);
    box-shadow: 0px 1px 5px gray;
    position: fixed;
    top:0;
    left:0;
    z-index: 1;
  }

  .navigationbar{
    margin-top: 2vh;
    /*margin-left: 4vw;*/
    width: 100%;
    text-align: center;
  }

  .navigationbar_icon{
    font-size: 1.5em;
    color:white;
    float: left;
    margin-top: 1.5vh;
    left:3vw;
  }

  .top_title{
    margin-top: 1.5vh;
    width: 100%;
    text-align: center;
  }

  .title1{
    color:white;
    font-size: 4.5vh;
    font-family: "Microsoft YaHei UI Light";
    letter-spacing: 1vw;
    /*margin-left: 12vw;*/
  }

  .bottom{
    margin-top: 14.5vh;
  }

  .bodydata_li{
    height: auto;
    width: 100%;
    background-color: #ffffff;
    border-top: 1px solid #e3e2e2;
    /*border-bottom: 1px solid #e3e2e2;*/
  }

  .body_data{
    height: 11vh;
    width: 100%;
    padding: 3vh 5vw;
    /*border-top: 1px solid #e3e2e2;*/
  }

  .bodydata_title{
    font-size: 3vh;
    color:#3f4fa6;
    font-family: "Microsoft YaHei UI";
    float:left;
    line-height: 5vh;
    font-weight: bold;
  }


  .data_number{
    font-size: 3vh;
    color:#232e6c;
    font-family: "Microsoft YaHei UI";
    float:right;
    font-weight: bold;
    margin-right: 6vw;
    line-height: 5vh;
  }

  .data_icon{
    font-size: 1.5em;
    color:#e5e5e5;
    right: 3%;
    padding-top: 0.8vh;
    position: absolute;
  }

  .data_icon2{
    font-size: 1.5em;
    color:#e5e5e5;
    float: right;
    padding-top: 0.8vh;
    position: absolute;
  }

  .body_method{
    height: 33vh;
    width: 100%;
    background-color: #f8f6f6;
    border-top: 1px solid #e3e2e2;
    display: none;
  }

  .method_img{
    width: 40%;
    height: auto;
    margin-top: 3vh;
    margin-left: 3vw;
    /*float: left;*/
  }

  .method_text{
    width: 45%;
    height: 25vh;
    float: right;
    margin-top: 3vh;
    margin-right: 3vw;
  }

  .method_title{
    font-size: 2.5vh;
    font-weight: bold;
    color: #232e6c;
    font-family: "Microsoft YaHei UI";
  }

  .method_content{
    display: inline-block;
    margin-top: 3vh;
    color: #232e6c;
    font-size: 2.2vh;
    font-family: "Microsoft YaHei UI";
    letter-spacing: 0.5vw;
    line-height: 4vh;
  }

</style>
