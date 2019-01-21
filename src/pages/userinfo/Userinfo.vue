<template>
  <div id="userinfo">
    <div id="inputinfo">

      <div class="container-fluid" style="padding: 0; width: 100%;">
        <div class="row" style="margin-right: 0;margin-left: 0;">
          <div class="card col-xs-10 col-sm-10 col-xs-offset-1 col-sm-offset-1" style="padding: 0;">

            <div class="container" style="z-index: 1000;"></div>
            <div class="top">
              <div class="title1">
                第二步
              </div>
              <div class="title2">
                完成以下会员基础信息
              </div>
            </div>

            <div class="bottom">
              <form method="post" action="">
                <div class="inputdiv">
                  <div class="input_title">
                    姓名 <span class="must">(必填)</span>
                  </div>

                  <input class="input_content" id="input_name" type="text" name ="fName" placeholder="请输入姓名">

                </div>

                <div class="inputdiv">
                  <div class="input_title">
                    生日
                    <span class="must">(必填)</span>
                    <!--<span class="optional">(选填)</span>-->
                  </div>

                  <table class="ui-date-bg" style="width: 100%;">
                    <tr>
                      <td class="ui-date-slectdate " >
                        <input id="nowDate" value="" class="ui-date-scroll ui-date-txt ui-date-input input_content"
                               name ="fBirthday" placeholder="请输入生日" readonly/>
                        <!--<span id="nowDate" class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>-->
                      </td>
                    </tr>
                  </table>

                  <!--<input class="input_content" type="text" name ="birthday" >-->
                </div>

                <div class="inputdiv">
                  <div class="input_title">
                    上装尺码
                    <!--<span class="must">(必填)</span>-->
                    <span class="optional">(选填)</span>
                  </div>

                  <!--<div class="form-item item-line">-->
                  <!--<div class="pc-box">-->
                  <!--<input type="hidden" name="bank_id" id="bankId" value="">-->
                  <!--<input type="text" id="showBank" class="input_content input_topsize" name ="fTopsSize" placeholder="请输入上装尺码">-->
                  <!--</div>-->
                  <!--</div>-->

                  <input class="input_content" id="input_topsize" type="text" name ="top_size" placeholder="请输入上装尺码">
                </div>

                <div class="inputdiv" id="bottom_size">
                  <div class="input_title">
                    下装尺码
                    <!--<span class="must">(必填)</span>-->
                    <span class="optional">(选填)</span>
                  </div>

                  <input type="text" id="input_bottomsize" class="input_content input_bottomsize" name ="fBottomsSize" placeholder="请输入下装尺码">

                </div>

                <div class="inputdiv">
                  <div class="input_title">
                    穿鞋尺码
                    <span class="optional">(选填)</span>
                    <!--<span class="must">(必填)</span>-->
                  </div>

                  <input class="input_content" id="input_shoesize" type="text" name ="fShoesSize" placeholder="请输入穿鞋尺码">
                </div>

                <div class="inputdiv" id="address">
                  <div class="input_title">
                    地址
                    <span class="optional">(选填)</span>
                  </div>

                  <input class="input_content" id="input_address" type="text" name ="fAddress" placeholder="请输入常住地址">
                </div>

                <div id="111" class="research_entrance">
                  填写调研问卷
                </div>

                <div class="research_content">
                  <div class="research_fill">
                    <div class="question">
                      1. 选择您的突出体型:
                    </div>
                    <div style="margin-bottom: 5vh;">
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fProminentBody" value="肩">
                        <span class="demo--answer"></span>肩
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fProminentBody" value="胸">
                        <span class="demo--answer"></span>胸
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fProminentBody" value="腰">
                        <span class="demo--answer"></span>腰
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fProminentBody" value="腹">
                        <span class="demo--answer"></span>腹
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fProminentBody" value="臀">
                        <span class="demo--answer"></span>臀
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fProminentBody" value="腿">
                        <span class="demo--answer"></span>腿
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fProminentBody" value="大臂">
                        <span class="demo--answer"></span>大臂
                      </label>
                      <label class="options_block">
                        其它
                        <input class="else_input" type="text" name="fProminentBody" value="">
                      </label>
                    </div>
                  </div>

                  <div class="research_fill">
                    <div class="question">
                      2. 选择您的穿鞋风格
                    </div>
                    <div name="" class="options" style="margin-bottom: 10vh;">
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fShoesPreference" value="高跟鞋">
                        <span class="demo--answer"></span>高跟鞋
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fShoesPreference" value="中跟鞋">
                        <span class="demo--answer"></span>中跟鞋
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fShoesPreference" value="平跟鞋">
                        <span class="demo--answer"></span>平跟鞋
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fShoesPreference" value="运动鞋">
                        <span class="demo--answer"></span>运动鞋
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fShoesPreference" value="凉鞋">
                        <span class="demo--answer"></span>凉鞋
                      </label>
                      <label class="options_block">
                        其它
                        <input class="else_input" type="text" name="shoes_preference" value="">
                      </label>
                    </div>
                  </div>
                  <div class="research_fill">
                    <div class="question">
                      3. 选择您的穿衣风格
                    </div>
                    <div name="" class="options" style="margin-bottom: 10vh;">
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fDressingStyle" value="淑女风">
                        <span class="demo--answer"></span>淑女风
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fDressingStyle" value="休闲风">
                        <span class="demo--answer"></span>休闲风
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fDressingStyle" value="优雅风">
                        <span class="demo--answer"></span>优雅风
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fDressingStyle" value="简约风">
                        <span class="demo--answer"></span>简约风
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fDressingStyle" value="中性风">
                        <span class="demo--answer"></span>中性风
                      </label>
                      <label class="options_block">
                        其它
                        <input class="else_input" type="text" name="fDressingStyle" value="">
                      </label>
                    </div>
                  </div>
                  <div class="research_fill">
                    <div class="question">
                      4. 选择您的常用穿衣场合
                    </div>
                    <div name="" class="options" style="margin-bottom: 10vh;">
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fDressingOccasion" value="办公">
                        <span class="demo--answer"></span>办公
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fDressingOccasion" value="度假">
                        <span class="demo--answer"></span>度假
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fDressingOccasion" value="约会">
                        <span class="demo--answer"></span>约会
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fDressingOccasion" value="聚餐">
                        <span class="demo--answer"></span>聚餐
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fDressingOccasion" value="应酬">
                        <span class="demo--answer"></span>应酬
                      </label>
                      <label class="options_block">
                        <!--<input class="demo&#45;&#45;radio" type="radio" name="prominent_body_type" value="else">-->
                        <!--<span class="demo&#45;&#45;answer"></span>-->
                        其它
                        <input class="else_input" type="text" name="fDressingOccasion" value="">
                      </label>
                    </div>
                  </div>
                  <div class="research_fill">
                    <div class="question">
                      5. 选择您的风格喜欢
                    </div>
                    <div name="" class="options" style="margin-bottom: 10vh;">
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fStylePreference" value="淑女风">
                        <span class="demo--answer"></span>淑女风
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fStylePreference" value="通勤风">
                        <span class="demo--answer"></span>通勤风
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fStylePreference" value="优雅风">
                        <span class="demo--answer"></span>优雅风
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fStylePreference" value="简约风">
                        <span class="demo--answer"></span>简约风
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fStylePreference" value="中性风">
                        <span class="demo--answer"></span>中性风
                      </label>
                      <label class="options_block">
                        其它
                        <input class="else_input" type="text" name="fStylePreference" value="">
                      </label>
                    </div>
                  </div>
                  <div class="research_fill">
                    <div class="question">
                      6. 选择您的品类喜好
                    </div>
                    <div name="" class="options" style="margin-bottom: 10vh;">
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fCategoryPreference" value="裙装">
                        <span class="demo--answer"></span>裙装
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fCategoryPreference" value="裤装">
                        <span class="demo--answer"></span>裤装
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fCategoryPreference" value="风衣">
                        <span class="demo--answer"></span>风衣
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fCategoryPreference" value="衬衫">
                        <span class="demo--answer"></span>衬衫
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fCategoryPreference" value="小西装">
                        <span class="demo--answer"></span>小西装
                      </label>
                      <label class="options_block">
                        其它
                        <input class="else_input" type="text" name="fCategoryPreference" value="">
                      </label>
                    </div>
                  </div>
                  <div class="research_fill">
                    <div class="question">
                      7. 选择您的颜色喜好
                    </div>
                    <div name="" class="options" style="margin-bottom: 10vh;">
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fColorPreference" value="百搭(黑/白)">
                        <span class="demo--answer"></span>百搭(黑/白)
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fColorPreference" value="中色(灰/咖)">
                        <span class="demo--answer"></span>中色(灰/咖)
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fColorPreference" value="冷色(蓝/紫)">
                        <span class="demo--answer"></span>冷色(蓝/紫)
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fColorPreference" value="暖色(红/黄)">
                        <span class="demo--answer"></span>暖色(红/黄)
                      </label>
                    </div>
                  </div>
                  <div class="research_fill">
                    <div class="question">
                      8. 选择您的花纹喜好
                    </div>
                    <div name="" class="options" style="margin-bottom: 10vh;">
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fPatternPreference" value="纯色">
                        <span class="demo--answer"></span>纯色
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fPatternPreference" value="条纹">
                        <span class="demo--answer"></span>条纹
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fPatternPreference" value="格子">
                        <span class="demo--answer"></span>格子
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fPatternPreference" value="印花">
                        <span class="demo--answer"></span>印花
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fPatternPreference" value="蕾丝">
                        <span class="demo--answer"></span>蕾丝
                      </label>
                      <label class="options_block">
                        其它
                        <input class="else_input" type="text" name="fPatternPreference" value="">
                      </label>
                    </div>
                  </div>
                  <div class="research_fill">
                    <div class="question">
                      9. 选择您的配饰喜好
                    </div>
                    <div name="" class="options" style="margin-bottom: 10vh;">
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fAccessoriesPreference" value="帽子">
                        <span class="demo--answer"></span>帽子
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fAccessoriesPreference" value="首饰">
                        <span class="demo--answer"></span>首饰
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fAccessoriesPreference" value="围巾">
                        <span class="demo--answer"></span>围巾
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fAccessoriesPreference" value="包包">
                        <span class="demo--answer"></span>包包
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fAccessoriesPreference" value="皮带">
                        <span class="demo--answer"></span>皮带
                      </label>
                      <label class="options_block">
                        其它
                        <input class="else_input" type="text" name="fAccessoriesPreference" value="">
                      </label>
                    </div>
                  </div>
                  <div class="research_fill">
                    <div class="question">
                      10. 选择您的购物喜好
                    </div>
                    <div name="" class="options" style="margin-bottom: 10vh;">
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fShoppingPreference" value="整套搭配购买">
                        <span class="demo--answer"></span>整套搭配购买
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fShoppingPreference" value="非整套搭配购买">
                        <span class="demo--answer"></span>非整套搭配购买
                      </label>
                    </div>
                  </div>
                  <div class="research_fill">
                    <div class="question">
                      11. [需求]上门服务整理衣橱
                    </div>
                    <div name="" class="options" style="margin-bottom: 10vh;">
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fWardrobeChoices" value="非常愿意">
                        <span class="demo--answer"></span>非常愿意
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fWardrobeChoices" value="考虑一下">
                        <span class="demo--answer"></span>考虑一下
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fWardrobeChoices" value="残忍拒绝">
                        <span class="demo--answer"></span>残忍拒绝
                      </label>
                    </div>
                  </div>
                  <div class="research_fill">
                    <div class="question">
                      12. [需求]专业搭配师陪同购物
                    </div>
                    <div name="" class="options" style="margin-bottom: 10vh;">
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fPurchaseChoices" value="非常愿意">
                        <span class="demo--answer"></span>非常愿意
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fPurchaseChoices" value="考虑一下">
                        <span class="demo--answer"></span>考虑一下
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fPurchaseChoices" value="残忍拒绝">
                        <span class="demo--answer"></span>残忍拒绝
                      </label>
                    </div>
                  </div>
                  <div class="research_fill">
                    <div class="question">
                      13. [需求]希望开展以下哪种线下沙龙
                    </div>
                    <div name="" class="options" style="margin-bottom: 10vh;">
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fSalonChoices" value="服装搭配">
                        <span class="demo--answer"></span>服装搭配
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fSalonChoices" value="化妆美发">
                        <span class="demo--answer"></span>化妆美发
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fSalonChoices" value="插花茶艺">
                        <span class="demo--answer"></span>插花茶艺
                      </label>
                      <label class="options">
                        <input class="demo--radio" type="radio" name="fSalonChoices" value="读书会">
                        <span class="demo--answer"></span>读书会
                      </label>
                      <label class="options_block">
                        其它
                        <input class="else_input" type="text" name="fSalonChoices" value="">
                      </label>
                    </div>
                  </div>
                </div>

                <div class="inputdiv" style="height: 12vh">

                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
      <div class="save">
        <button class="savebtn">进入会员页面</button>
      </div>

    </div>

  </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
  #inputinfo{
    width: 90%;
    margin: 0 auto;
    border: none;
  }

  .top{
    padding-top: 3vh;
  }

  .card{
    border: none;
  }

  .title1{
    font-size: 7vh;
    letter-spacing: 1vw;
  }

  .title2{
    padding-top: 3vh;
    font-size: 4vh;
    font-family: "Microsoft YaHei";
    color: #bcbcbc;
    letter-spacing: 0.5vw;
  }

  .bottom{
    padding-top: 5vh;
  }

  .inputdiv{
    padding-bottom: 2.5vh;
    width: 100%;
    height: auto;
  }

  .input_title{
    padding-bottom: 1vh;
    font-family: "Microsoft YaHei";
    font-size: 3vh;
    color:#868686;
  }

  /*.input_title::after{*/
  /*content:'*';*/
  /*color: red;*/
  /*}*/

  .input_content{
    width: 100%;
    background-color: #efefef;
    border-radius: 1vh;
    border: none;
    padding: 2.5vh;
    outline: none;
    font-size: 2.5vh;
    color: #999999;
    /*height: 3vh;*/
  }

  .input_content:focus{
    width: 100%;
    background-color: white;
    border-radius: 1vh;
    border: 1px solid #1875e9;
    padding: 2.5vh;
    outline: none;
    font-size: 2.5vh;
    color: #999999;
    /*height: 3vh;*/
  }

  .input_content::-webkit-input-placeholder {
    color:#999999;
  }

  .save{
    width: 100%;
    /*height: 12vh;*/
    background-color: white;
    position: fixed;
    /*left:2.5vw;*/
    bottom: 0;
    z-index:2;
  }

  .savebtn{
    width: 90%;
    border: none;
    border-radius: 1vh;
    background-color: #1875e9;
    /*background-color: #868686;*/
    font-size: 3vh;
    font-weight: bold;
    letter-spacing: 0.5vw;
    color: white;
    height: 10vh;
    margin-bottom: 2vh;
  }

  .no-write{
    border: 1px solid red;
    background-color: white;
  }

  .must{
    color:red;
    font-size: 2.3vh;
    font-family: "Microsoft YaHei";
  }

  .optional{
    color:#aaaaaa;
    font-size: 2.3vh;
    font-family: "Microsoft YaHei";
  }

  .research_entrance{
    color:#1875e9;
    font-size: 2.5vh;
    font-family: "Microsoft YaHei";
    letter-spacing: 0.5vw;
    text-decoration: underline;
    margin-bottom: 5vh;
    margin-top: 3vh;
  }

  .research_content{
    display: none;
  }

  .question{
    font-size: 3vh;
    font-family: "Microsoft YaHei";
    color:#868686;
  }

  .options{
    margin:10px 15px 5px 0;
    display:inline-block;
    font-family: "Microsoft YaHei";
    font-weight: normal;
    font-size: 2.5vh;
    color:#868686;
  }

  .options_block{
    margin:10px 15px 5px 0;
    display:block;
    font-family: "Microsoft YaHei";
    font-weight: normal;
    font-size: 2.5vh;
    color:#868686;
  }

  .demo--radio{
    display: none;
  }

  .demo--answer{
    background-color: #fff;
    border:2px solid rgba(0,0,0,0.15);
    border-radius:100%;
    display:inline-block;
    height:30px;
    margin-right:5px;
    margin-top:-1px;
    vertical-align:middle;
    width:30px;
    line-height:1;

  }

  .demo--radio:checked + .demo--answer:after{
    background-color:#4ad962;
    border-radius:100%;
    content:"";
    display:inline-block;
    height:10px;
    margin-left:8px;
    margin-top:8px;
    width:10px
  }

  .demo--checkbox.demo--answer,.demo--radio:checked + .demo--checkbox.demo--answer:after{
    border-radius:0
  }

  .demo--radio:checked + .demo--answer{
    border:2px solid #4ad962;
  }

  .else_input{
    border:none;
    border-bottom:1px solid #868686 ;
    width: 50%;
    outline: none;
    padding-left: 3vw;
  }

</style>
