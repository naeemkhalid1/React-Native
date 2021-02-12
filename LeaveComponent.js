import React, { Component } from 'react';
import{Image, StyleSheet, Text, View,TouchableOpacity,Button,SafeAreaView } from 'react-native';
import logo from './assets/boy.png';
class CountDownTimer extends Component{
    constructor(props){
        super(props)
        this.state={
            timer:10,
        }
    }
componentDidMount(){
    
        this.interval=setInterval(
            () => this.setState((prState)=> ({ timer: prState.timer - 1 })),
            10000
          );
    }
componentDidUpdate(){
        if(this.state.timer === 0){ 
            this.props.setToIntial()
            clearInterval(this.interval);
            }
        
    
  }
  
  componentWillUnmount(){
    clearInterval(this.interval);
  }
render(){
     const{item,onDeclineLeave,onReset}=this.props;
    return(
        <SafeAreaView style={{marginTop:20}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'space-between'}} key={item} >
            <Text style={{marginBottom:20,}}>{this.state.timer} {item}</Text>
            <Image   source={logo} style={{width:200, height:200, justifyContent:'center'}}/>
        
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:100}}>
       
        <View style={{width:100, marginRight:10,}}>
          <Button  title='Proceed'  onPress={()=>onDeclineLeave()}></Button>
          </View>
          <View style={{width:80,marginBottom:10}}>
        <Button  title='Reset'  onPress={()=>onReset()} style={{width:18, marginTop:30,}}></Button>
        </View>
          </View> 
        </SafeAreaView>
    )
}


}
export default CountDownTimer ;