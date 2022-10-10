import { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native"
// import { colors, icons, fontSizes } from "../../constants/index"
import { categories } from '../data/productList'
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartItem = (props) => {
    // const { item, index, onChange } = props;
    // const [amount, setAmount] = useState(10);
    // const dataa = Object(categories);

    // const handleDelete = async () => {
    //     let cartData = await AsyncStorage.getItem("cartData");
    //     cartData = JSON.parse(cartData);
    //     let arr = [...cartData];
    //     arr.splice(index, 1);
    //     AsyncStorage.setItem("cartData", JSON.stringify(arr));
    //     onChange && onChange(arr);
    // };

    // const handleOnAdd = async () => {
    //     let cartData = await AsyncStorage.getItem("cartData");
    //     cartData = JSON.parse(cartData);
    //     let arr = [...cartData];
    //     arr[index].amount = amount + 1;
    //     AsyncStorage.setItem("cartData", JSON.stringify(arr));
    //     setAmount((val) => val + 1);
    //     onChange && onChange(arr);
    // };

    // const handleOnRemove = async () => {
    //     if(amount > 1 ) {
    //         let cartData = await AsyncStorage.getItem("cartData");
    //         cartData = JSON.parse(cartData);
    //         let arr = [...cartData];
    //         arr[index].amount = amount - 1;
    //         AsyncStorage.setItem("cartData", JSON.stringify(arr));
    //         setAmount((val) => val -1);
    //         onChange && onChange(arr);
    //     }
    // }

    return <TouchableOpacity style={{
        flexDirection: "row",
        marginBottom: 12,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        borderRadius: 20,
        backgroundColor: "#fff",
        padding: 6,
    }}>
        <View>

        </View>


        <TouchableOpacity
            // onPress={handleOnRemove}
            style={{
                backgroundColor: '#2FDBBC',
                borderRadius: 8
            }}>
            <Ionicons name="remove" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", marginHorizontal: 15 }}>
            {/* {amount} */}
        </Text>
        <TouchableOpacity
            // onPress={handleOnAdd}
            style={{
                backgroundColor: '#2FDBBC',
                borderRadius: 8
            }}>
            <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
            // onPress={handleDelete}
            style={{
                marginLeft: 25,
                marginRight: 6,
                justifyContent: "center",
            }}
        >
            <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
    </TouchableOpacity>

}

export default CartItem;