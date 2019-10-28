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

function mergeList(pathList, imgList){
  var i,j;
  var arrRtn=new Array;

  for(i=0;i<pathList.length;i++){
    for(j=0;j<imgList.length;j++){
      if(pathList[i].title==imgList[j].title){
        var node={
          title:pathList[i].title,
          path:pathList[i].path,
          image:imgList[j].image
        }
        arrRtn.push(node);
        break;
      }
    }
  }
  return arrRtn;
}

module.exports = {
  mergeList: mergeList, 
}
