import React, { Component, useState,useEffect  } from 'react'
import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, View,FlatList,Image } from 'react-native'
import { Icon } from 'react-native-elements';
import CustomHeader from '../components/CustomHeader';
// import styles from '../styles/home'
import Colors from '../constants/Colors';
import CustomImage from '../components/CustomImage';
import { Dimensions } from 'react-native';
import CustomProduct from '../components/CustomProduct';
import CustomScrollSegment from '../components/CustomScrollSegment';
import CustomProductTwo from '../components/CustomProductTwo';
import CategoryImage from '../components/CategoryImage';
import CustomCart_Item from '../components/CustomCart_Item';
import { TouchableOpacity } from 'react-native-gesture-handler';
const defaultwidth = Dimensions.get('window').width;

const searchbarContainerStyle = {
    backgroundColor:Colors.baseColor,borderTopColor:Colors.baseColor,
    borderBottomColor:Colors.baseColor,paddingLeft:20,
    paddingRight:20,paddingTop:0
}

class MyOrdersScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            repeateItem:[
                { id: '1', image: require('../assets/images/food1.jpg'),  count:0 },
                { id: '2', image: require('../assets/images/food2.jpg'), count:0 },
                { id: '3', image: require('../assets/images/food3.jpg'),  count:0 },
                { id: '4', image: require('../assets/images/food4.jpg'), count:0 },
                { id: '5', image: require('../assets/images/food1.jpg'),  count:0 },
                { id: '6', image: require('../assets/images/food3.jpg'), count:0 },
                { id: '1', image: require('../assets/images/food1.jpg'),  count:0 },
                // { id: '2', image: require('../assets/images/food2.jpg'), count:0 },
                // { id: '3', image: require('../assets/images/food3.jpg'),  count:0 },
                // { id: '4', image: require('../assets/images/food4.jpg'), count:0 },
                // { id: '5', image: require('../assets/images/food1.jpg'),  count:0 },
                // { id: '6', image: require('../assets/images/food3.jpg'), count:0 },
            ],
            offersItem:[
                { id: '1', image: require('../assets/images/offer1.jpg'),  count:0 },
                { id: '2', image: require('../assets/images/offer2.jpg'), count:0 },
                { id: '3', image: require('../assets/images/offer3.jpg'),  count:0 }
            ],
            segmentItem:[
                {name:"ALL"},{name:"Blended Oil"},{name:"Edible Oil"},{name:"Groceries"}
            ],
            selected_segment_item:"ALL"

        }
    }


    promotioncontent=({item,index}) => (
        <View style={{paddingLeft:5,paddingRight:5,marginBottom:10,borderBottomWidth:0.2}}>
            <CustomCart_Item
                imageURL={item.image}
                imageHeight={null}
                imageWidth={null}
                itemName={"Special chicken biryani"}
                itemPrice={120}
                saveAmount={60}
                itemDiscount={50}
                enableCart={true}
                itemCount={5}
            />
        </View>

    )


    render(){
        return (
            <KeyboardAvoidingView style={styles.container}>
                {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
                <View style={[styles.mainView]}>
                    <View>
                        <CustomHeader 
                            title={'My Orders'} 
                            headerBackground={Colors.baseColor}
                            day="1 day ago" showBack={true} showCart={true} 
                            searchbarContainerStyle={searchbarContainerStyle} 
                            showSearchBar={false}
                            backClick={()=>{}}
                            menuClick={()=>{}}
                            cartClick={()=>{}}
                        />
                    </View>
                    <View>
                        <View style={{backgroundColor:'#FFF',marginBottom:10}}>
                            <View style={{padding:15,paddingTop:14,paddingBottom:14}}>
                                <Text style={{fontSize:16,letterSpacing:0.5,fontWeight:'700'}}>
                                    Manage your order
                                </Text>
                            </View>
                        </View>
                        
                        <View style={{backgroundColor:'#FFF',marginBottom:10,borderBottomWidth:0.2}}>
                            {/* Order Id details */}
                            <View style={{padding:15,paddingTop:14,paddingBottom:14}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text style={{fontSize:14,letterSpacing:0.5,fontWeight:'600',}}>
                                        Order Status
                                    </Text>
                                    <Text style={{fontSize:14,letterSpacing:0.5,fontWeight:'600',}}>
                                        Order ID
                                    </Text>
                                </View>

                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'column',justifyContent:'center',paddingTop:5}}>
                                        <Text style={{padding:5,paddingLeft:12,paddingRight:12,borderRadius:10, backgroundColor:Colors.button_background_1,color:Colors.whiteColor,fontSize:11,letterSpacing:0.5,fontWeight:'600'}}>Accepted</Text>
                                    </View>
                                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                                        <Text style={{fontSize:11,letterSpacing:0.5,fontWeight:'700'}}>
                                            OREDRID_98765
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/*Delivery details */}
                            <View style={{padding:15,paddingTop:0,paddingBottom:14}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text style={{fontSize:14,letterSpacing:0.5,fontWeight:'600',}}>
                                        Expected delivery
                                    </Text>
                                    <Text style={{fontSize:14,letterSpacing:0.5,fontWeight:'600',}}>
                                        Order Total
                                    </Text>
                                </View>

                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                                        <Text style={{fontSize:11,letterSpacing:0.5,fontWeight:'700'}}>
                                            2020-08-31 Monday
                                        </Text>
                                    </View>
                                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                                        <Text style={{fontSize:11,letterSpacing:0.5,fontWeight:'700'}}>
                                            OREDRID_98765
                                        </Text>
                                    </View>
                                </View>
                            </View>


                        </View>
 
                    </View>
                    <View style={{flex:1,marginBottom:10}}>
                        <FlatList
                            // horizontal={true}
                            data={this.state.repeateItem}
                            numColumns={1}
                            renderItem={this.promotioncontent}
                            showsHorizontalScrollIndicator={false}
                            // extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                            // contentContainerStyle={{justifyContent:"space-evenly",flexDirection:"row",width:Dimensions.get('window').width}}
                        />
                    </View>

                    <View style={{width:'100%',height:'10%',backgroundColor:'white'}}>
                        <View style={{backgroundColor:'#FFF'}}>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
                                <View onPress={()=>{alert("csdcbds")}}  style={{flex:1,backgroundColor:'black',height:40,margin:10,justifyContent:'center',borderRadius:10}}>
                                    <TouchableOpacity onPress={()=>{alert("Contact us clicked")}}
                                    style={{height:40,flexDirection:'column',width:'100%',justifyContent:'center'}}>
                                        <Text style={{color:'white',textAlign:'center'}}>Contact us</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1,backgroundColor:'green',height:40,margin:10,justifyContent:'center',borderRadius:10}}>
                                    <TouchableOpacity onPress={()=>{alert("View detals clicked")}}
                                    style={{height:40,flexDirection:'column',width:'100%',justifyContent:'center'}}>
                                        <Text style={{color:'white',textAlign:'center'}}>View Details</Text>
                                    </TouchableOpacity>
                                    
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </View>
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        marginTop:StatusBar.currentHeight,
        backgroundColor:Colors.background_1
    },
    mainView:{ flex:1,flexDirection:"column"},
  });
  

export default MyOrdersScreen;


{/* <View style={{backgroundColor:'#FFF',marginBottom:10,borderBottomWidth:0.2}}>
<View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={{flex:1,backgroundColor:'black'}}>
            <Text style={{color:'white'}}>Contact us</Text>
        </View>
        <View style={{flex:1,backgroundColor:'green'}}>
            <Text style={{color:'white'}}>Contact us</Text>
        </View>
</View>
</View> */}