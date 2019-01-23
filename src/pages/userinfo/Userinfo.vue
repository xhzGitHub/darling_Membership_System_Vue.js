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
                <!--绘制必填项-->
                <ul>
                  <li v-for="prop in mustFillData">
                    <div class="inputdiv">
                      <div class="input_title">
                        {{prop.title}} <span class="must" v-if="prop.ifRequire">(必填)</span>
                      </div>

                      <input class="input_content" id="input_name" v-model="prop.datas.value" name ="fName" :placeholder="prop.placeholder">
                    </div>
                  </li>
                </ul>

                <div id="111" class="research_entrance" ref="research_entrance" @click="showResearch">
                  填写调研问卷
                </div>

                <ul class="research_content" v-show="ifResearch">

                    <li v-for="props in researchContent">
                      <div class="research_fill">
                        <div class="question">
                          {{props.title}}
                        </div>
                        <ul style="margin-bottom: 5vh;">
                          <li v-for="prop in props.options">
                            <label class="options">
                              <input class="demo--radio" type="radio" :name="props.name" :value="prop" v-model="props.value">
                              <span class="demo--answer"></span>{{prop}}
                            </label>
                          </li>
                          <!--用于清除浮动-->
                          <p class="clear"></p>
                          <label class="options_block">
                            其它
                            <input class="else_input" type="text" name="fProminentBody">
                          </label>

                        </ul>
                      </div>
                    </li>

                </ul>

                <div class="inputdiv" style="height: 12vh"></div>
              </form>
            </div>

          </div>
        </div>
      </div>
      <div class="save">
        <button class="savebtn" @click.prevent="postUserData">进入会员页面</button>
      </div>

    </div>

  </div>
</template>

<script>
    import {reqUpdateUserInfo} from "../../api";

    export default {
      name: "Login",

      data(){
        return {
          // 必选栏
          mustFillData: [
            {
              title: '姓名',
              ifRequire: true,    // 是否必选
              placeholder: '请输入姓名',
              datas: {
                text: 'fName',
                value: ''
              }
            },
            {
              title: '生日',
              ifRequire: true,
              placeholder: '请输入生日',
              datas: {
                text: 'fBirthday',
                value: ''
              }
            },
            {
              title: '上装尺码',
              ifRequire: false,
              placeholder: '请输入上装尺码',
              datas: {
                text: 'fTopsSize',
                value: ''
              }
            },
            {
              title: '下装尺码',
              ifRequire: false,
              placeholder: '请输入下装尺码',
              datas: {
                text: 'fBottomsSize',
                value: ''
              }
            },
            {
              title: '穿鞋尺码',
              ifRequire: false,
              placeholder: '请输入穿鞋尺码',
              datas: {
                text: 'fShoesSize',
                value: ''
              }
            },
            {
              title: '地址',
              ifRequire: false,
              placeholder: '请输入地址',
              datas: {
                text: 'fAddress',
                value: ''
              }
            }
          ],

          ifResearch: false,  // 是否显示调研问卷

          researchContent: [
            {
              title: '1. 选择您的突出体型:',
              name: 'fProminentBody',
              value: '',
              options: [
                '肩', '胸', '胸', '腹', '臀', '腿', '大臂'
              ]
            },
            {
              title: '2. 选择您的穿鞋风格:',
              name: 'fShoesPreference',
              value: '',
              options: [
                '高跟鞋', '中跟鞋', '平跟鞋', '运动鞋', '凉鞋'
              ]
            },
            {
              title: '3. 选择您的穿衣风格:',
              name: 'fDressingStyle',
              value: '',
              options: [
                '淑女风', '休闲风', '优雅风', '简约风', '中性风'
              ]
            },
            {
              title: '4. 选择您的常用穿衣场合:',
              name: 'fDressingOccasion',
              value: '',
              options: [
                '办公', '度假', '约会', '聚餐', '应酬'
              ]
            },
            {
              title: '5. 选择您的风格喜欢:',
              name: 'fStylePreference',
              value: '',
              options: [
                '淑女风', '通勤风', '优雅风', '简约风', '中性风'
              ]
            },
            {
              title: '6. 选择您的品类喜好:',
              name: 'fCategoryPreference',
              value: '',
              options: [
                '裙装', '裤装', '风衣', '衬衫', '小西装'
              ]
            },
            {
              title: '7. 选择您的颜色喜好:',
              name: 'fColorPreference',
              value: '',
              options: [
                '百搭(黑/白)', '中色(灰/咖)', '冷色(蓝/紫)', '暖色(红/黄)'
              ]
            },
            {
              title: '8. 选择您的花纹喜好:',
              name: 'fPatternPreference',
              value: '',
              options: [
                '纯色', '条纹', '格子', '印花', '蕾丝'
              ]
            },
            {
              title: '9. 选择您的配饰喜好:',
              name: 'fAccessoriesPreference',
              value: '',
              options: [
                '帽子', '首饰', '围巾', '包包', '皮带'
              ]
            },
            {
              title: '10. 选择您的购物喜好:',
              name: 'fShoppingPreference',
              value: '',
              options: [
                '整套搭配购买', '非整套搭配购买'
              ]
            },
            {
              title: '11. [需求]上门服务整理衣橱:',
              name: 'fWardrobeChoices',
              value: '',
              options: [
                '非常愿意', '考虑一下', '残忍拒绝'
              ]
            },
            {
              title: '12. [需求]专业搭配师陪同购物:',
              name: 'fPurchaseChoices',
              value: '',
              options: [
                '非常愿意', '考虑一下', '残忍拒绝'
              ]
            },
            {
              title: '13. [需求]希望开展以下哪种线下沙龙:',
              name: 'fSalonChoices',
              value: '',
              options: [
                '服装搭配', '化妆美发', '插花茶艺', '读书会'
              ]
            },
          ],
        }
      },
      methods: {
        showResearch(){
          this.ifResearch = ! this.ifResearch;
          // 由于research内容还未生成，如果不延迟操作，是无法立即进行滚动的
          setTimeout(()=>{
            window.scrollTo(0,730);
          },100)
        },

        async postUserData(){
          // 将所有要上传的数据进行封装，并上传

          // basic_info 是非交互数据
          let userData = {},
              basic_info = {
                query_type: '3',
                membership_query_type: 'update_membership_basic_info',
                openid: 'oDSI91icP6QsWJkFZalVPFAXZgXU',
                fFaceType: '',
                fBodyType: '',
                fSkinColor: '',
                fHairColor: '',
                fHeight: '',
                fWeight: '',
                fChooseFaceType: '',
                fChooseBodyType: '',
              };

          // 遍历储存如对象
          for(var prop in basic_info){
            if(!userData[prop]){
              userData[prop] = basic_info[prop];
            }
          }
          // 遍历储存 交互数据（即页面中需要用户填写的）
          if(((this.mustFillData)[0].datas.value == '') || ((this.mustFillData)[1].datas.value == '')){
            console.log('failed');
            return false;
          }else{

            for(var prop in this.mustFillData){
              if(!userData[this.mustFillData[prop].datas.text]){
                userData[this.mustFillData[prop].datas.text] = this.mustFillData[prop].datas.value;
              }
            }

            for(var prop in this.researchContent){
              if(!userData[this.researchContent[prop].name]){
                userData[this.researchContent[prop].name] = this.researchContent[prop].value;
              }
            }
            // 发送请求提交数据
            let result = await reqUpdateUserInfo(userData);
            if(result.status == 'success'){
              // 跳转页面
              console.log(result);
            }
          }
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }

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
    /*display: none;*/
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
    float: left;
    color:#868686;
  }

  .clear{
    clear: both;
    height: 0px;
    width: 0px;
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
