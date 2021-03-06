//import a libraries for making a component
import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Dimensions,Image
} from 'react-native';
const defaultwidth = Dimensions.get('window').width/2.7;
const defaultHeight = Dimensions.get('window').width/3.4;

const CustomProduct = ({imageHeight,imageWidth,imageURL,clickAddtoCart,removeProduct,addProduct,itemCount})=> {
    console.log("itemCount :", itemCount)
    return (
        <View 
            style={[styles.mainContainer,{width:imageWidth ? imageWidth : defaultwidth}]}
        >
            <Image
                style={{width:imageWidth?imageWidth :defaultwidth,height:imageHeight?imageHeight :defaultHeight,}}
                // source={{
                //     uri: imageURL,
                // }}
                source={imageURL}
                resizeMode="cover"
            />
            <View style={{padding:3}}>
                <Text style={{fontSize:13,fontWeight:'bold'}}>Veg Chowmin</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:13,fontWeight:'bold'}}>Rs. 40</Text>
                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                        <Text style={{opacity:0.4,fontSize:12,paddingRight:7}}>Rs. 150</Text>
                        <Text style={{position:'absolute',textAlign:"center",width:'90%'}}>--------</Text>
                    </View>
                    
                </View>
                <Text style={{fontSize:13,fontWeight:'bold',color:'green',paddingTop:5}}>You save $10</Text>
            </View>
            
            <View style={{padding:3,flexDirection:'row',justifyContent:'center'}}>
                {!itemCount || itemCount  < 1 ?
                    <TouchableOpacity 
                    onPress={clickAddtoCart}
                    style={{width:'100%',paddingTop:5,paddingLeft:10,paddingRight:10,marginBottom:5}}
                    >
                        <View style={{backgroundColor:'green',borderRadius:5}}>
                            <Text style={{fontSize:11,padding:7,color:'white',textAlign:'center'}}>Add to Cart </Text>
                        </View>
                    </TouchableOpacity>
                :
                
                    <View style={{width:'100%',paddingTop:5,paddingLeft:10,paddingRight:10,marginBottom:5,flexDirection:'row',justifyContent:"space-between"}}>
                        <TouchableOpacity 
                        onPress={removeProduct}
                        style={{flex:1,backgroundColor:'green',flexDirection:'column',justifyContent:'center',borderTopLeftRadius:5,borderBottomLeftRadius:5}}>
                            <Text style={{textAlign:'center',paddingTop:4,paddingBottom:3,fontSize:15,fontSize:16,color:'#FFF',fontWeight:'bold'}}>-</Text>
                        </TouchableOpacity>
                        <View style={{flex:1,backgroundColor:'white',flexDirection:'column',justifyContent:'center'}}>
                            <Text style={{textAlign:'center'}}>{itemCount}</Text>
                        </View>
                        <TouchableOpacity 
                        onPress={addProduct}
                        style={{flex:1,backgroundColor:'green',flexDirection:'column',justifyContent:'center',borderTopRightRadius:5,borderBottomRightRadius:5}}>
                            <Text style={{textAlign:'center',paddingTop:4,paddingBottom:3,fontSize:15,fontSize:16,color:'#FFF',fontWeight:'bold'}}>+</Text>
                        </TouchableOpacity>

                    </View>

                }




            </View>

        </View>


        // </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    mainContainer:{
        flexDirection:'column',
        //borderWidth:1,
        paddingTop:0,
        backgroundColor:'#DEE1E6'
    },
    opacityView:{
        position:'absolute',
        backgroundColor:'#000',
        opacity:0.3,
        flexDirection:'column',
        justifyContent:'center'
    },
    opacityTextView:{
        position:'absolute',
        flexDirection:'column',
        justifyContent:'center'
    },
    opacityText:{
        textAlign:'center',
        padding:15,
        color:'#FFF',
        fontWeight:'bold'
    }
    
})
//make the component available to other parts of the app
export default CustomProduct;
