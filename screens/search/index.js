import { useState } from "react";
import {
    FlatList,
    Image,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { colors, fontSizes, icons } from "../../constants";
import { productListt } from '../../data/productList'


const Search = () => {

    const [searchText, setSearchText] = useState('');
    const categories = [
        "Nike Air Force 1",
        "Nike JORDAN 1",
        "Vans Old Skool 36 DX Anaheim Factory",
        "Vans Slip-On Deck Club",
        "Converse Chuck Taylor All Star"
      ];

    const fillteredShoes = productListt.filter((eachShoes) => eachShoes.details.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    // console.log(searchText);
    return (<View style={{
        flex: 1,
        marginTop: StatusBar.currentHeight + 10,
        backgroundColor: 'white'
    }}>
        <Text style={{
            color: "#2FDBBC",
            fontWeight: "bold",
            marginLeft: 20,
            fontSize: fontSizes.h3
        }}>Tìm kiếm </Text>
        <View>
            <Image
                style={{
                    position: 'absolute',
                    top: 12,
                    left: 20
                }}
                source={icons.search}
            />
            <TextInput
                placeholder="Nhập để tìm kiếm"
                onChangeText={(text) => {
                    setSearchText(text);
                }}
                style={{
                    height: 40,
                    borderRadius: 20,
                    borderWidth: 1,
                    paddingStart: 35,
                    marginHorizontal: 10,
                    marginBottom: 10
                }}
                value={searchText}
            />
            {searchText.trim().length > 0 || (
                <View>
                    <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10 }}>
                        GỢI Ý CHO BẠN
                    </Text>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        {categories.map((value, item) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setSearchText(value);
                                }}
                                style={{
                                    backgroundColor: "#f4f4f4",
                                    paddingHorizontal: 12,
                                    paddingVertical: 8,
                                    marginRight: 12,
                                    marginBottom: 12,
                                    borderRadius: 100,
                                }}
                                key={item}
                            >
                                <Text>{value}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            )}
        </View>
        {fillteredShoes.length > 0 ? <FlatList
            data={fillteredShoes}
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
            : <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: fontSizes.h2
                }}>No Shoes Found</Text>
            </View>
        }

    </View>
    )
}

export default Search;