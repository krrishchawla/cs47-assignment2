import { View, Text, Image, StyleSheet, Dimensions, ImageBackground } from "react-native";
import Icons from "../../assets/Icons";

import Profiles from "../../assets/Profiles";

const windowWidth = Dimensions.get('window').width;

let mywidth = "100%";

if (windowWidth > 600) {
    mywidth = 500;
};

const Body = () => {
    return (
        <View style={styles.bodyStyle}>
            <ImageBackground source={Profiles.mtl.image} style={styles.imageStyle} imageStyle={styles.imageStyle}>
                <Text style={styles.textStyle1}>{Profiles.mtl.name}</Text>
                <Text style={styles.textStyle2}>{Profiles.mtl.caption}</Text>
            </ImageBackground>
            <View style={styles.box}>
                <Text style={styles.textStyle3}>My hottest take</Text>
                <View style={styles.soundStyle}>
                    <Image source={Icons.player.light} style={styles.playButton}></Image>
                    <Image source={Icons.audioWave.light} style={styles.waveForm}></Image>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    bodyStyle: {
        flex : 1,
        alignItems: "center",
        margin: 25,
        resizeMode: 'contain',
    },
    imageStyle: {
        width: mywidth,
        height: undefined,
        aspectRatio: 1/1.1,
        borderRadius: 10,
        justifyContent: "space-between",
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            height: 5,
            width: 0
        },
    },
    textStyle1: {
        fontSize: 30,
        fontFamily: "Sydney",
        color : '#fff',
        padding: 10,
    },
    textStyle2: {
        fontSize: 20,
        fontFamily: "Sydney",
        color : '#fff',
        padding: 10,
    },
    textStyle3: {
        fontSize: 30,
        fontFamily: "Sydney",
        color : '#000',
        paddingLeft : 20,
        paddingTop : 20,
    },
    box: {
        backgroundColor: "#fff",
        aspectRatio: 2.5/1,
        width: mywidth,
        height: undefined,
        margin: 30,
        borderRadius: 25,
        shadowColor: "#000000",
        shadowOpacity: 0.4,
        shadowRadius: 4,
        shadowOffset: {
            height: 5,
            width: 0
        },
    },
    soundStyle: {
        flexDirection: "row",
        alignItems: "center",
    },
    playButton: {
        width: 50,
        height: 50,
        marginLeft : 20,
        marginTop : 10,
    },
    waveForm: {
        height : "70%",
        width : "70%",
        resizeMode: 'contain',
        padding : 10,
        marginRight : 20,
        marginLeft:10,
        marginTop : 10,
    },
});


export default Body;