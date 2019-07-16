import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {fetchGet} from './http/HttpUtils';

export class HomeScreen extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        fetchGet('https://wanandroid.com/wxarticle/chapters/json')
        .then((resText)=>{
            console.log(`resText=${resText}`)
        })
        .catch((e)=>{
            console.log(`error=${e}`)
        })
    }
    componentDidMount(){
console.log('componentDidMount')
}
componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
    
}
shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
}
componentWillUpdate(){
    console.log('componentWillUpdate')
    
}
componentDidUpdate(){
    console.log('componentDidUpdate')
    
}
componentWillUnmount(){
    console.log('componentWillUnmount')

    }
    render() {
        console.log('render')
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default HomeScreen
