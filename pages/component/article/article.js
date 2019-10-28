/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// pages/component/article/article.js
var app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    heroImage: '',
    parList:new Array,
    parimgList:new Array
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var idx=options.index;
    var himgPath=app.globalData.globalitemList[idx].image;
    var contentPath = app.globalData.globalitemList[idx].path;
    var paragraphs=new Array;

    this.setData({
      heroImage:himgPath,
    });

    wx.request({
      url: contentPath+".model.json",
      headers: {
        'Content-Type': 'application/json'
      },
      success: res => {
        paragraphs = res.data[":items"].root[":items"].responsivegrid[":items"].contentfragment.elements.main.paragraphs;

        //replace html tag and adding style to control the style in paragraph
        //Note: rpx doesn't work here
        /*paragraphs = ['<h1>this is a H1</h1>',];
        var i;
        for(i=0;i<paragraphs.length;i++){
          paragraphs[i] = paragraphs[i].replace(/<h1/i,'<h1 style="font-size:24px;"');
        };*/
        var tempList = res.data[":items"].root[":items"].responsivegrid[":items"].contentfragment[":items"];
        var i;
        var componentList=new Array;

        for(i=0;i<paragraphs.length;i++){
          var key='par'+(i+1);
          if (tempList.hasOwnProperty(key)){
            //there are components after current paragraph
              var imgList = new Array;
              var imgKey;
              //collect images after current paragrahp
              for (imgKey in tempList[key][":items"]) {
                var imgSrc = app.globalData.rootPath+tempList[key][":items"][imgKey].src;
                imgList.push(imgSrc);
              }
              if(imgList.length==0){
                componentList.push({ 
                  hasComponents: false, 
                  html: paragraphs[i]
                  });
              }else{
                componentList.push({
                  hasComponents: true,
                  html: paragraphs[i],
                  imageList: imgList
                })
              }
            
          }else{
            componentList.push({
               hasComponents: false,
               html: paragraphs[i]
               });
          }
        }
        
        this.setData({
          parList: componentList
        });
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})