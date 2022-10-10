import { StatusBar, Text, View } from "react-native";


const Profile = (props) => {
    return <View style={{
        flex: 100,
        marginTop: StatusBar.currentHeight + 10,
        backgroundColor: 'white'
    }}>
        <Text>
            This is screens profile
        </Text>
    </View>
}

export default Profile;