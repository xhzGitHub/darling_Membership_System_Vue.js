# 会员系统文档

## 1.1. 项目描述
1）此项目为搭建“搭灵”线下店的会员系统；

2）包括注册登录、用户信息填写、会员信息页、会员体型数据；

3）使用Vue全家桶+ES6+webpack等前端技术；

4）采用模块化、组件化、工程化的模式开发。

## 1.2. 界面功能
<img src="https://raw.githubusercontent.com/xhzGitHub/pictures/master/1.png?token=AjXIDaxm-kQ4A15qyBFfMds9SE-ZMHQGks5cRA1swA%3D%3D" style="width:200px">

<img src="https://raw.githubusercontent.com/xhzGitHub/pictures/master/2.png?token=AjXIDbO9W7mqNEzI6pC6ghuytZ8ox0f1ks5cRA3ZwA%3D%3D" style="width:200px">


<img src="https://raw.githubusercontent.com/xhzGitHub/pictures/master/3.png?token=AjXIDRgmLyIIcNeBAcI_9cuRpBL9quqVks5cRA4gwA%3D%3D" style="width:200px">

<img src="https://raw.githubusercontent.com/xhzGitHub/pictures/master/4.png?token=AjXIDZFX0r331cDIUuZaiYA8xpeSfcGpks5cRA4QwA%3D%3D" style="width:200px">


## 1.3. 技术选型
![](https://raw.githubusercontent.com/xhzGitHub/pictures/master/5.png?token=AjXIDRH_uSBn9tMkHPbOQOUa6FNhfcX2ks5cRA43wA%3D%3D)

## 1.4. 前端路由
![](https://raw.githubusercontent.com/xhzGitHub/pictures/master/6.png?token=AjXIDaTC1SG4I9VBOzlipSrIC5ws4Q-Vks5cRA5DwA%3D%3D) 
 

## 1.5. 项目API文档
## 1. 获取验证码
### 请求URL：
    https://darlinglook.com/cgi-bin/cgi_handler.py?query_type=3

### 示例：
[https://darlinglook.com/cgi-bin/cgi_handler.py?query_type=3&membership_query_type=send_sms_code&tel=18817325517&openid=oDSI91icP6QsWJkFZalVPFAXZgXU](https://darlinglook.com/cgi-bin/cgi_handler.py?query_type=3&membership_query_type=send_sms_code&tel=18817325517&openid=oDSI91icP6QsWJkFZalVPFAXZgXU)

### 请求方式：
	GET

### 参数类型：param

	|参数		         |是否必选       |类型     |说明
	|query_type              |Y       |number   |query类型
	|membership_query_type   |Y       |string   |需求内容
	|tel                     |Y       |number   |电话号码
    |openid                  |Y       |string   |微信唯一标识

### 返回示例：

	{
        "request": {
            "membership_query_type": "send_sms_code",
            "openid": "oDSI91icP6QsWJkFZalVPFAXZgXU",
            "query_type": "3",
            "remote_ip": "202.121.146.10",
            "remote_port": "34700",
            "session": "fcc7cb78-49b0-4b9b-9419-c65c421816e8",
            "tel": "18817325517"
    },
        "status": "success"
    }


## 2. 校验验证码
### 请求URL：
    https://darlinglook.com/cgi-bin/cgi_handler.py

### 示例：
[https://darlinglook.com/cgi-bin/cgi_handler.py](https://darlinglook.com/cgi-bin/cgi_handler.py?query_type=3&membership_query_type=verify_sms_code&tel=18817325517&sms_code=643257)

### 请求方式：
	POST

### 参数类型：param

    |参数		         |是否必选       |类型     |说明
	|query_type              |Y       |number   |query类型
	|membership_query_type   |Y       |string   |需求内容
	|tel                     |Y       |number   |电话号码
    |sms_code                |Y       |number   |验证码
    |openid                  |Y       |string   |微信唯一标识



### 返回示例：

	{
        "SET_COOKIE": {
            "openid": "oDSI91icP6QsWJkFZalVPFAXZgXU"
        },
        "request": {
            "membership_query_type": "verify_sms_code",
            "openid": "oDSI91icP6QsWJkFZalVPFAXZgXU",
            "query_type": "3",
            "remote_ip": "202.121.146.10",
            "remote_port": "28675",
            "session": "5819ceea-627a-4f04-8e16-d85e3dc6d8d7",
            "sms_code": "243765",
            "tel": "18817325517"
        },
        "status": "success"
    }

## 3. 上传用户信息
### 请求URL：
    https://darlinglook.com/cgi-bin/cgi_handler.py

### 示例：
https://darlinglook.com/cgi-bin/cgi_handler.py

### 请求方式：
	POST

### 参数类型：param

	|参数		         |是否必选       |类型     |说明
	|query_type              |Y       |number   |query类型
	|membership_query_type   |Y       |string   |需求内容
	|fName                   |Y       |string   |姓名
    |fBirthday               |Y       |number   |生日
    |fAddress                |Y       |string   |住址
    |fTopsSize               |Y       |string   |上衣尺码
    |fBottomsSize            |Y       |string   |下衣尺码
    |fShoesSize              |Y       |string   |穿鞋尺码
    |fFaceType               |N       |string   |脸型
    |fSkinColor              |N       |string   |皮肤
    |fHairColor              |N       |string   |发型
    |fHeight                 |N       |string   |身高
    |fWeight                 |N       |string   |体重
    |fProminentBody          |Y       |string   |体型特征
    |fShoesPreference        |Y       |string   |穿鞋喜好
    |fDressingStyle          |Y       |string   |穿衣风格
    |fDressingOccasion       |Y       |string   |穿衣喜好
    |fStylePreference        |Y       |string   |风格喜好
    |fCategoryPreference     |Y       |string   |品类喜好
    |fColorPreference        |Y       |string   |颜色喜好
    |fPatternPreference      |Y       |string   |花型喜好
    |fAccessoriesPreference  |Y       |string   |首饰喜好
    |fShoppingPreference     |Y       |string   |购物喜好
    |fWardrobeChoices        |Y       |string   |衣橱整理需求
    |fPurchaseChoices        |Y       |string   |陪购需求
    |fSalonChoices           |Y       |string   |线下沙龙需求
    |fChooseFaceType         |Y       |string   |脸型
    |fChooseBodyType         |Y       |string   |体型

### 返回示例：

	{
    "request": {
        "fAccessoriesPreference": "xx",
        "fAddress": "shanghai",
        "fBirthday": "19930808",
        "fBodyType": "xx",
        "fBottomsSize": "M",
        "fCategoryPreference": "xx",
        "fChooseBodyType": "xx",
        "fChooseFaceType": "xx",
        "fColorPreference": "xx",
        "fDressingOccasion": "xx",
        "fDressingStyle": "xx",
        "fFaceType": "xx",
        "fHairColor": "xx",
        "fHeight": "xx",
        "fName": "xiaohongze",
        "fPatternPreference": "xx",
        "fProminentBody": "xx",
        "fPurchaseChoices": "xx",
        "fSalonChoices": "xx",
        "fShoesPreference": "xx",
        "fShoesSize": "40",
        "fShoppingPreference": "xx",
        "fSkinColor": "xx",
        "fStylePreference": "xx",
        "fTopsSize": "M",
        "fWardrobeChoices": "xx",
        "fWeight": "xx",
        "membership_query_type": "update_membership_basic_info",
        "openid": "oDSI91icP6QsWJkFZalVPFAXZgXU",
        "query_type": "3",
        "remote_ip": "202.121.146.10",
        "remote_port": "59300",
        "session": "17b64327-29b8-4c9f-b222-47aa1badf2a9"
    },
    "status": "success"
    }




## 4. 获取用户基本信息
### 请求URL：
    https://darlinglook.com/cgi-bin/cgi_handler.py

### 示例：
[https://darlinglook.com/cgi-bin/cgi_handler.py?query_type=3&membership_query_type=get_basic_info&openid=oDSI91icP6QsWJkFZalVPFAXZgXU](https://darlinglook.com/cgi-bin/cgi_handler.py?query_type=3&membership_query_type=get_basic_info&openid=oDSI91icP6QsWJkFZalVPFAXZgXU)

### 请求方式：
	GET

### 参数类型：param

    |参数		         |是否必选       |类型     |说明
	|query_type              |Y       |number   |query类型
	|membership_query_type   |Y       |string   |需求内容
    |openid                  |Y       |string   |微信唯一标识



### 返回示例：

	{
        "fBalance": 66666,
        "fBir": null,
        "fBirLunar": null,
        "fCN": null,
        "fCreateTime": 1547961489,
        "fEN": null,
        "fID": 228,
        "fLastUpdateTime": "2019-01-20 13:18:09",
        "fMemberID": 20181030505,
        "fOpenID": "oDSI91icP6QsWJkFZalVPFAXZgXU",
        "fPoints": 888888,
        "fQQ": null,
        "fRankID": 3,
        "fRankIDCN": "白银会员",
        "fRankIDEN": "Silver Member",
        "fTel": "18817325517",
        "fTel1": "",
        "fValid": 1,
        "fWeChat": null,
        "headimgurl": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIHggzaoITY57bM0YE6kia2r883VValw09c4W8IE8W49l4o5GqcDrgNcfcRcrSm4cJfqumqMh5z0BA/132",
        "nickname": "肖鸿泽",
        "request": {
            "membership_query_type": "get_basic_info",
            "openid": "oDSI91icP6QsWJkFZalVPFAXZgXU",
            "query_type": "3",
            "remote_ip": "202.121.146.10",
            "remote_port": "5947",
            "session": "17b64327-29b8-4c9f-b222-47aa1badf2a9"
        },
        "sex": 1,
        "status": "success"
    }

## 5. 获取用户基本信息
### 请求URL：
    https://darlinglook.com/cgi-bin/cgi_handler.py

### 示例：
[https://darlinglook.com/cgi-bin/cgi_handler.py?query_type=3&membership_query_type=get_membership_basic_info&openid=oDSI91icP6QsWJkFZalVPFAXZgXU](https://darlinglook.com/cgi-bin/cgi_handler.py?query_type=3&membership_query_type=get_membership_basic_info&openid=oDSI91icP6QsWJkFZalVPFAXZgXU)

### 请求方式：
	GET

### 参数类型：param

    |参数		         |是否必选       |类型     |说明
	|query_type              |Y       |number   |query类型
	|membership_query_type   |Y       |string   |需求内容
    |openid                  |Y       |string   |微信唯一标识



### 返回示例：

	{
        "fAccessoriesPreference": "xx",
        "fAddress": "shanghai",
        "fBirthday": 19930808,
        "fBirthdayLunar": null,
        "fBodyType": "xx",
        "fBottomsSize": "M",
        "fCategoryPreference": "xx",
        "fChooseBodyType": "xx",
        "fChooseFaceType": "xx",
        "fColorPreference": "xx",
        "fCreateTime": "2019-01-20 13:31:48",
        "fDressingOccasion": "xx",
        "fDressingStyle": "xx",
        "fFaceType": "xx",
        "fHairColor": "xx",
        "fHeight": 0,
        "fLastUpdateTime": "2019-01-20 13:31:48",
        "fMemberID": 20181030505,
        "fName": "xiaohongze",
        "fPatternPreference": "xx",
        "fProminentBody": "xx",
        "fPurchaseChoices": "xx",
        "fSalonChoices": "xx",
        "fShoesPreference": "xx",
        "fShoesSize": "40",
        "fShoppingPreference": "xx",
        "fSkinColor": "xx",
        "fStylePreference": "xx",
        "fTel": "18817325517",
        "fTopsSize": "M",
        "fWardrobeChoices": "xx",
        "fWeight": 0,
        "request": {
            "membership_query_type": "get_membership_basic_info",
            "openid": "oDSI91icP6QsWJkFZalVPFAXZgXU",
            "query_type": "3",
            "remote_ip": "202.121.146.10",
            "remote_port": "40479"
        },
        "status": "success"
    }

## 6. 获取用户体型数据
### 请求URL：
    https://darlinglook.com/cgi-bin/cgi_handler.py

### 示例：
[https://darlinglook.com/cgi-bin/cgi_handler.py?query_type=3&membership_query_type=get_measure_info&openid=oDSI91icP6QsWJkFZalVPFAXZgXU](https://darlinglook.com/cgi-bin/cgi_handler.py?query_type=3&membership_query_type=get_measure_info&openid=oDSI91icP6QsWJkFZalVPFAXZgXU)

### 请求方式：
	GET

### 参数类型：param

    |参数		         |是否必选       |类型     |说明
	|query_type              |Y       |number   |query类型
	|membership_query_type   |Y       |string   |需求内容
    |openid                  |Y       |string   |微信唯一标识



### 返回示例：

	{
        "errmsg": "membership measure info empty",
        "request": {
            "membership_query_type": "get_measure_info",
            "openid": "oDSI91icP6QsWJkFZalVPFAXZgXU",
            "query_type": "3",
            "remote_ip": "202.121.146.10",
            "remote_port": "5710",
            "session": "5031e636-1b63-426e-8931-3e5c188ae31f"
        },
        "status": "failed"
    }