/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/**   第一个实例程序 **/

class BViewDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
     <Text style={{backgroundColor:'blue',height:30}}>第一个</Text>
        <Text style={{backgroundColor:'yellow',height:40}}>第二个</Text>
        <Text style={{backgroundColor:'green',height:50}}>第三个</Text>
        <Text style={{backgroundColor:'orange',height:60}}>第四个</Text>
        <Text style={{backgroundColor:'gray',height:70}}>第五个</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {

    //flex: 1,//占满整个屏幕。
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'red',
    //width :200,
    // height:200,
    //上边局
    marginTop: 20,
    //改变主轴的方向，默认是竖向
    flexDirection:'row',
    //设置主轴上的对齐方式
    justifyContent:'space-around',

    //设置侧轴的对齐方式
    alignItems:'center',

  },
  //
  //innerView:{
  //  //flex:1,
  //  backgroundColor:'yellow',
  //  width:20,
  //  height:100,
  //},
  //innerViewView:{
  //  width:200,
  // backgroundColor: 'green',
  //  height: 50,
  //
  //}

});

/*******------第二个实例demo-----*******/
class BViewDemo1 extends Component {
  render() {
    return (
        <View style={style1.container}>
          <Text style={{backgroundColor:'blue',width:80}}>第一个</Text>
          <Text style={{backgroundColor:'yellow',width:90}}>第二个</Text>
          <Text style={{backgroundColor:'green',width:100}}>第三个</Text>
          <Text style={{backgroundColor:'orange',width:110}}>第四个</Text>
          <Text style={{backgroundColor:'gray',width:120}}>第五个</Text>
        </View>
    );
  }
}
const  style1 = StyleSheet.create({
  container:{

    backgroundColor: 'red',
    //上边局
    marginTop: 20,
    //改变主轴的方向，默认是竖向
    flexDirection:'row',
    //设置主轴上的对齐方式
    justifyContent:'flex-start',

    //设置侧轴的对齐方式
    alignItems:'center',
//设置换行
    flexWrap:'wrap'
  }
});


/*******------第三个实例demo-----*******/
class BViewDemo2 extends Component {
  render() {
    return (
        <View style={style2.container}>
          <Text style={{backgroundColor:'blue',flex:1,alignSelf:'flex-end',height:20}}>第一个</Text>
          <Text style={{backgroundColor:'yellow',flex:2,height:70}}>第二个</Text>
          <Text style={{backgroundColor:'green',flex:2,height:60}}>第三个</Text>
          <Text style={{backgroundColor:'orange',flex:1,height:50}}>第四个</Text>
          <Text style={{backgroundColor:'gray',flex:2,height:40}}>第五个</Text>
        </View>
    );
  }
}
const  style2 = StyleSheet.create({
  container:{

    backgroundColor: 'red',
    //上边局
    marginTop: 20,
    //改变主轴的方向，默认是竖向
    flexDirection:'row',
    //设置主轴上的对齐方式
    justifyContent:'flex-start',

    //设置侧轴的对齐方式
    alignItems:'center',
//设置换行
    flexWrap:'wrap'
  }
});


/*******------第四个实例demo-----*******/
  //引入库文件
  var Dimensions = require('Dimensions');
class BViewDemo3 extends Component {
  render() {
    return (
        <View style={style3.container}>
    <Text>当前屏幕的宽度：{Dimensions.get('window').width}</Text>
          <Text>当前屏幕的高度：{Dimensions.get('window').height}</Text>
          <Text>当前屏幕的分辨率：{Dimensions.get('window').scale}</Text>
        </View>
    );
  }
}
const  style3 = StyleSheet.create({
  container:{

//    backgroundColor: 'red',
//    //上边局
//    marginTop: 20,
//    //改变主轴的方向，默认是竖向
//    flexDirection:'row',
//    //设置主轴上的对齐方式
//    justifyContent:'flex-start',
//
//    //设置侧轴的对齐方式
//    alignItems:'center',
////设置换行
//    flexWrap:'wrap'
    justifyContent:'center',
    alignItems:'center',
    flex:1
  }
});

/*******------第五个实例demo-----*******/
//引入库文件
var Dimensions = require('Dimensions');
class BViewDemo4 extends Component {
  render() {
    return (
        <View style={style4.container}>
          <Text>相对位置</Text>
          <View style={{height:130,backgroundColor: 'black',padding:100}}>
            <View style={style4.relative1}></View>
          </View>
          <Text>绝对位置</Text>
          <View style={{height: 130,backgroundColor:'red',padding:100}}>
            <View style={style4.absolute1}></View>
          </View>
          {/*<Text>当前屏幕的分辨率：{Dimensions.get('window').scale}</Text>*/}
        </View>
    );
  }
}
const  style4 = StyleSheet.create({
  container:{
    marginTop: 50,
  },

  relative1:{
    backgroundColor:'green',
    width:60,
    height:60,
    position:'relative',
    top: 50,
    left:150

  },
  absolute1:{
    backgroundColor:'orange',
    width:60,
    height:60,
    position:'absolute',
    top: 50,
    left:150
  }
});
/*******------第六个实例demo-----*******/
//引入库文件
var Dimensions = require('Dimensions');
class BViewDemo5 extends Component {
  render() {
    return (
        <View style={style5.container}>
          <Text>元素容器的第一个View组件，不设置宽度</Text>
          <View style={{height:30,backgroundColor: 'black'}}></View>
          <Text>元素容器的第一个View组件，设置宽度</Text>
          <View style={{height:30,backgroundColor: 'black',width:30}}></View>
          <Text>运用Flex布局，多个组件在一行显示</Text>
          <View style={{flexDirection:'row'}}>
            <View style={{height:30,backgroundColor: 'black',flex:1}}></View>
            <View style={{height:30,backgroundColor: 'red',flex:2}}></View>
            <View style={{height:30,backgroundColor: 'orange',flex:3}}></View>
            <View style={{height:30,backgroundColor: 'green',flex:4}}></View>
          </View>
          <Text>运用Flex布局，多个组件不在一行显示</Text>
          <View style={{flexDirection:'column'}}>
            <View style={{height:30,backgroundColor: 'black'}}></View>
            <View style={{height:30,backgroundColor: 'red'}}></View>
            <View style={{height:30,backgroundColor: 'orange'}}></View>
            <View style={{height:30,backgroundColor: 'green'}}></View>
          </View>
          </View>

    );
  }
}
const  style5 = StyleSheet.create({
  container:{
    marginTop: 50,
  },


});
/*******------第7个实例demo-----*******/

class BViewDemo6 extends Component {
  render() {
    return (
        <View style={style6.container}>
          <Text>水平居中</Text>
          <View style={{height:100,backgroundColor: 'green',alignItems:'center'}}>
            <View style={{height:30,backgroundColor: 'red',width:30}}>
            </View>
          </View>


          <Text>垂直居中</Text>
          <View style={{height:100,backgroundColor: 'green',justifyContent:'center'}}>
            <View style={{height:30,backgroundColor: 'red',width:30}}>
            </View>
          </View>

          <Text>水平--垂直居中</Text>
          <View style={{height:100,backgroundColor: 'green',alignItems:'center',justifyContent:'center'}}>
            <View style={{height:30,backgroundColor: 'red',width:30}}>
            </View>
          </View>
        </View>

    );
  }
}
const  style6 = StyleSheet.create({
  container:{

    marginTop: 50,
    //backgroundColor: 'yellow'
  },


});
/*******------第7个实例demo-----*******/

class BViewDemo7 extends Component {
  render() {
    return (
        <View style={style7.container}>
          <Text style={style7.textStyle} numberOfLines={5}>我是一只小小小小鸟，想要飞飞飞飞，却怎么也飞不高</Text>

        </View>

    );
  }
}
const  style7 = StyleSheet.create({
  container:{

    marginTop: 50,
    //backgroundColor: 'yellow'
  },
 textStyle:{
 backgroundColor:'red',
   color:'yellow',
   textAlign:'center',
   width:300,
   lineHeight:20,
   fontSize:20,
   letterSpacing:5,
   textDecorationLine:'line-through',
   textDecorationStyle:'double',
   textDecorationColor:'green',
   //textShadowRadius:'2',
   textShadowColor:'black',

 }

});
/*******------第8个实例demo-----*******/

class BViewDemo8 extends Component {
  render() {
    return (
        <View style={style7.container}>
          <Text style={style7.textStyle} numberOfLines={5}>我是一只小小小小鸟，想要飞飞飞飞，却怎么也飞不高</Text>

        </View>

    );
  }
}
const  style8 = StyleSheet.create({
  container:{

    marginTop: 50,
    //backgroundColor: 'yellow'
  },
  textStyle:{
    backgroundColor:'red',
    color:'yellow',
    textAlign:'center',
    width:300,
    lineHeight:20,
    fontSize:20,
    letterSpacing:5,
    textDecorationLine:'line-through',
    textDecorationStyle:'double',
    textDecorationColor:'green',
    //textShadowRadius:'2',
    textShadowColor:'black',

  }

});
AppRegistry.registerComponent('BViewDemo', () => BViewDemo7);

