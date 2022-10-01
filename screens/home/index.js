import { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    Keyboard,
    ScrollView,
    StatusBar,
    FlatList
} from "react-native"
import { colors, icons, fontSizes } from "../../constants/index"
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = (props) => {

    const [name, setName] = useState('Name');

    useEffect(() => {
       getData();
    }, []);

    const getData = () => {
        try{
            AsyncStorage.getItem('UserName')
                .then(
                    value => {
                        if(value != null ){
                            setName(value);
                        }
                    }
                )
        }catch(error){
            console.log(error);
        }
    }

    return (
        <ScrollView
            style={{
                backgroundColor: '#fff',
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
            <View style={{ marginTop: 20 }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    marginBottom: 12,
                }}>Đồ uống HOT</Text>
                {/* <FlatList
                // data={data}
                // horizontal
                // showsHorizontalScrollIndicator={true}
                // keyExtractor={(item, index) => item + index}
                // renderItem={renderItem}
                /> */}
            </View>
        </ScrollView>
    );
}

export default Home;