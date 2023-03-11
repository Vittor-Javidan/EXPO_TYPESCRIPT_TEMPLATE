import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Page 2</Text>
            <Link
                href={"./"}
            >
                go back
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize:  16 ,  
    }
})