import React from "react";
import {Text,View,ImageBackground} from "react-native";
import styles from "./styles";
import StyleButton from "../StyledButton";

const CarItem = (props)=>{

    const {name,tagline,image ,taglineCTA}= props.car;

    return (
       
     <View style={styles.carContainer}>

     <ImageBackground source={image} style={styles.image}/>
     
     <View style={styles.titles}>
       <Text style={styles.title}>{name}</Text>
       <Text style={styles.subtitile}>{tagline}</Text>
       <Text style={styles.subtitileCTA}>{taglineCTA}</Text>
     </View>

    <View style={styles.buttonContainer}>
    <StyleButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />

        <StyleButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
    </View>

    </View> 
    );
}

export default CarItem;