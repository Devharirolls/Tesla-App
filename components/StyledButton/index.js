// import React from "react";
// import { Text,View,Pressable } from "react-native";
// import styles from "./style";


// const StyleButton = (props)=>{

//     const type = props.type;
//     const content = props.content;
//     const onPress = props.onPress;
//     const backgroundColor = type === 'primary' ? '#171A20CC' :'#FFFFFFA6';
//     const textColor = type === 'primary' ? '#FFFFFFA6' : '#171A20CC';

//     return(
//         <View style={styles.container}>
//             <Pressable  
//             style={[styles.button ,{backgroundColor:backgroundColor}]}
//             onPress={()=>{
//                 console.log('hi therre');
//             }}
//             >
//                 <Text style={[styles.text , {color:textColor}]}>{content}</Text>
//             </Pressable>
//         </View>
//     );
// }

// export default StyleButton;


import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style';

const StyleButton = (props) => {

  const { type, content, onPress } = props;

  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyleButton;