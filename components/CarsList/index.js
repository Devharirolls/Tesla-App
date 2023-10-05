import React from "react";
import {View,Text,FlatList,Dimensions} from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";

const CarList = () =>{
        return (
            <View style={styles.container}>
               <FlatList 
                data={cars}
                renderItem={({item})=><CarItem car={item}/>}
                snapToAlignment="start"
                showsHorizontalScrollIndicator={false}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
               />
            </View>
        )
}

export default CarList;


{/* <CarItem 
name={"Model 3"} 
tagline={"Order Online For"} 
taglineCTA={'Touchable Delivery'}
image={require('./assets/images/Model3.jpeg')}
/> */}