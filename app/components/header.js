import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Icons from "../../assets/Icons";

const windowWidth = Dimensions.get('window').width;

let mywidth = "100%";

if (windowWidth > 600) {
    mywidth = 500;
};

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={Icons.menu.light} style={styles.headerIcons}/>
            <Text style={styles.title}>ensom</Text>
            <Image source={Icons.sun} style={styles.headerIcons}/>
        </View>
    );
};


const styles = StyleSheet.create({
    headerIcons: {
        height: windowWidth * 0.15,
        width: windowWidth * 0.15,
        padding: 20,
        margin: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    title: {
        fontFamily: "Sydney-Bold",
        fontSize: 40,
        marginTop: 27,
        alignItems: "center",
    },
});


export default Header;