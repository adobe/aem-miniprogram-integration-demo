# aem-miniprogramdemo

### Introduction

WeChat is the absolute dominant social platform in China. WeChat mini-program is the application running within WeChat.
This demo is to prove AEM can be the single place to manage contents for all the important channels, including WeChat mini-program.
This sample code is using AEM Content Fragment to synchronize content from AEM to WeChat mini-program.

### Prerequuisite for Setup this Demo

1.We use Experience pages on We.Retail sample sites to demo the content synchronizing between AEM and WeChat mini-program. You should have We.Retail sites installed on your AEM.
  
2.Make sure you already have Content Fragment configured properly. 
You can verify the interface by access the json data of any article under Experience.
  
3.Download the WeChat mini-program development IDE and setup your testing account by following the instructions here.
https://developers.weixin.qq.com/miniprogram/en/dev/

### Usage

Step1. Start your AEM author instance and login
  
Step2. Download the sample code and open it in WeChat mini-program IDE
By here, if everything goes properly, you should be able to see the Experience page displayed in the mini-program simulator on the left side of the IDE.
  
You might have error message which says 
"http://localhost:4502不在一下request合规域名列表中，请参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"
This is caused by lack of ICP in our testing environment.
To fix this error in testing environment, you can open the project settings and check the option of "Does not verify valid domain names, web-view(business domain names), TLS versions and HTTPS certificates".

### Demo Steps

You can edit the content in AEM author instance and then refresh the mini-program, the updated content should be synchronized into mini-program automatically.
  
You can add or delete any articles under Experience and then check the mini-program to demo the content synchonization.

### Note 
Mini-program developer should be aware of the structure of the json data exported through AEM Content Service API. If the page structure is changed, the mini-program developer should be notified.
(The contentfragment node in Experience Page template of your We.Retail might be "content_fragment". In that case, please change it to "contentfragment".)
