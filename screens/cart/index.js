import { useState, useEffect } from "react";
import {
    FlatList,
    Image,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { MainButton, CartItem } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { colors, fontSizes, icons } from "../../constants";
const Cart = (props) => {
    // const isFocused = useIsFocused();
    // const [cartList, setcartList] = useState([]);


    // // const renderItem = ({ item, index }) => {
    // //     return <CartItem item={item} index={index} onChange={setcartList} />
    // // }

    // const getCartData = async () => {
    //     let cartData = await AsyncStorage.getItem("cartData");
    //     if (cartData) {
    //         cartData = JSON.parse(cartData);
    //     } else {
    //         cartData = [];
    //     }
    //     setcartList(cartData);
    // };

    // useEffect(() => {
    //     getCartData();
    // }, [isFocused]);
    // const renderItem = ({ item, index }) => {
    //     return <CartItem item={item} index={index} onChange={setcartList} />;
    // };

    return <View style={{
        flex: 1,
        marginTop: StatusBar.currentHeight + 10,
        backgroundColor: 'white'
    }}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'flex-end'
        }}>
            <Text
                style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: colors.main,
                    flex: 1,
                }}
            >
                GIỎ HÀNG
            </Text>
            <Text
                style={{
                    fontWeight: "bold",
                    fontSize: 16,
                }}
            >
                {"TỔNG: "}
            </Text>
            <Text
                style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: colors.main,
                }}
            >
                {/* {getTotal()} VND */}
            </Text>
        </View>

        <CartItem />
        <CartItem />
        <CartItem />


        {/* {cartList.length > 0 ? (
            <FlatList
                style={{ marginTop: 12 }}
                data={cartList}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
            />
        ) : (
            <View
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            >
                <Ionicons name="cart-outline" size={130} color="gray" />
                <Text style={{ color: "gray", fontSize: 20 }}>Giỏ hàng đang trống</Text>
            </View>
        )} */}
        <View style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            marginBottom: 5,
            marginTop: 5
        }}>
            <MainButton
                name='Thanh toán'
                color={colors.main}
                onPress={() => {
                    // setData();
                }}
                fontSizes={fontSizes.h3}
            />
        </View>
    </View>
}

export default Cart;