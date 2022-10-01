import { TouchableOpacity, Text } from "react-native";

const MainButton = (props) => {
    const { name, color, onPress, disabled, isValidation } = props;
    return <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={{
            backgroundColor: color,
            height: 50,
            justifyContent: 'center',
            width: '80%',
            marginHorizontal: '10%',
            borderRadius: 20,
            marginTop: 10,
            opacity: isValidation
        }}>
        <Text style={{
            color: 'black',
            alignSelf: 'center'
        }}>{name}</Text>
    </TouchableOpacity>
}

export default MainButton;