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
// pages/component/index.js
var app = getApp()
var common = require('../../utils/util.js')
Page({
  /**
   * Page initial data
   */
  data: {
      heroImage:'',
      itemList: new Array
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:4502/content/we-retail/language-masters/en/experience.model.json',
      headers: {
        'Content-Type': 'application/json'
      },
      success: res => {
        //console.log(res.data[":items"].root[":items"].hero_image.src);
        var imgpath = app.globalData.rootPath + res.data[":items"].root[":items"].hero_image.src;
        var arr = res.data[":items"].root[":items"].responsivegrid[":items"].list.items;
        var cntArticles = arr.length;
        var i;
        var pagewithpathList = new Array;
        var pagewithimageList=new Array;
        var pageList = new Array;

        for(i=0; i< cntArticles;i++){
          var node={
            title: arr[i].title,
            path: app.globalData.rootPath + arr[i].path
          }
          pagewithpathList.push(node);
        }
        
        for (i = 0; i < cntArticles; i++) {
          
          wx.request({
            url: pagewithpathList[i].path+".model.json",
            headers: {
              'Content-Type': 'application/json'
            },
            success: res => {
              var subpageImg = app.globalData.rootPath +res.data[":items"].root[":items"].hero_image.src;
              var subpagetitle = res.data["title"];
              var childNode = {
                title: subpagetitle,
                image: subpageImg
              }
              pagewithimageList.push(childNode);
              if (pagewithimageList.length == pagewithpathList.length){
                //console.log(pagewithpathList.length);
                //console.log(pagewithimageList.length);
                pageList = common.mergeList(pagewithpathList, pagewithimageList);
                //console.log(pageList);
                app.globalData.globalitemList=pageList;
                this.setData({
                  itemList: pageList,
                })
              }
            }
          })
        }

        this.setData({
           heroImage: imgpath,
        })
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