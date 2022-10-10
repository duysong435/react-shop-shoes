import { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    Keyboard,
    ScrollView,
    StatusBar,
    FlatList,
    TouchableOpacity
} from "react-native"
import { colors, icons, fontSizes } from "../../constants/index"
import AsyncStorage from '@react-native-async-storage/async-storage';

import { categories, productListt } from '../../data/productList'

const Home = (props) => {

    const [name, setName] = useState('Name');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserName')
                .then(
                    value => {
                        if (value != null) {
                            setName(value);
                        }
                    }
                )
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView
            stickyHeaderIndices={[2]}
            style={{
                backgroundColor: '#f8f9fa',
                flex: 1,
                marginTop: StatusBar.currentHeight + 10,


            }}>
            <Text style={{ marginTop: 20, fontSize: 22 }}>
                {`Chào, ${name}!`}
                {/* {`Chào,!`} */}
            </Text>
            <View
                style={{
                    backgroundColor: '#67E5CE',
                    padding: 20,
                    borderRadius: 12,
                    marginTop: 20,
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                        GIẢM
                    </Text>
                    <Text
                        style={{
                            color: '#000',
                            fontWeight: 'bold',
                            fontSize: 24,
                        }}
                    >
                        {' 50% '}
                    </Text>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                        CHO NGƯỜI MỚI
                    </Text>
                </View>
                <Text
                    style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 10,
                        marginTop: 30,
                    }}
                >
                    SỰ DỤNG CODE NÀY
                </Text>
                <Text
                    style={{
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: 24,
                    }}
                >
                    NEW50
                </Text>
            </View>
            <View style={{
                marginTop: 20,
                marginBottom: 20,
                backgroundColor: 'white'
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    marginBottom: 12,
                }}>Sản phẩm HOT</Text>
                <FlatList
                    data={categories}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => {
                        return <TouchableOpacity
                            onPress={() => {

                            }}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 1,
                                marginHorizontal: 5,
                                borderRadius: 10,
                                borderColor: colors.main,
                                marginBottom: 10
                            }}
                        >
                            <Image style={{
                                width: 80,
                                height: 60,
                                resizeMode: 'contain',
                                margin: 10
                            }}
                                source={item.img}
                            />
                            <Text style={{
                                fontSize: fontSizes.h4,
                                color: colors.main
                            }}>{item.name}</Text>
                        </TouchableOpacity>
                    }}
                />
            </View>
            <Text style={{
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 12,
            }}>Danh sách sản phẩm</Text>

            <ScrollView horizontal={true} >
                <FlatList
                    data={productListt}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return <TouchableOpacity
                            onPress={() => {

                            }}
                            style={{
                                flex: 0.5,
                                borderWidth: 1,
                                marginTop: 5,
                                marginBottom: 1,
                                marginLeft: 5,
                                marginRight: 5,
                                width: 186
                            }}
                        >
                            <Image style={{
                                width: '100%',
                                height: 185,
                                resizeMode: 'contain',
                            }}
                                source={item.img}
                            />
                            <Text style={{
                                fontSize: fontSizes.h4,
                                color: colors.main,
                                alignSelf: 'center'
                            }}>{item.details}</Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{
                                    paddingStart: 10,
                                    color: '#c30005'
                                }}>{item.price}$</Text>
                                <Text style={{
                                    paddingEnd: 10
                                }}>Đã bán {item.sold}</Text>
                            </View>
                        </TouchableOpacity>
                    }}
                />
            </ScrollView>
        </ScrollView>
    );
}

export default Home;