import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const youtube = <Icon name={'youtube'} size={40} color={'#d1313d'}/>
const spotify = <Icon name={'spotify'} size={40} color={'#7abf66'}/>
const telegram = <Icon name={'telegram'} size={40} color={'#24c0eb'}/>
const twitch = <Icon name={'twitch'} size={40} color={'#7037cd'}/>
const pinterest = <Icon name={'pinterest'} size={40} color={'#ff6b6b'}/>
const ProfileCard = () => {
    const user = {
        avatar: "https://wallpapercave.com/wp/wp1853827.jpg",
        coverPhoto: "https://wallpapercave.com/wp/wp13377986.png",
        name: "Silvia Quillupangui"
    }
    return (
        <View style={styles.container}>
            <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
            <View style={styles.avatarContainer}>
                <Image source={{uri: user.avatar}} style={styles.avatar}/>
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.youtube.com')
                }}>
                    {youtube}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://open.spotify.com/intl-es?')
                }}>
                    {spotify}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://web.telegram.org/k/')
                }}>
                    {telegram}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={()=>{
                Linking.openURL('https://www.twitch.tv')
                }}>
                    {twitch}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={()=>{
                Linking.openURL('https://www.pinterest.es/#top')
                }}>
                    {pinterest}
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center' //flex y grid
    },
    coverPhoto: {
        width: '100%',
        height: 300,
        resizeMode: 'cover'

    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -60
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 80,
        borderWidth: 10,
        borderColor: '#9a5071'
    },
    name: {
        marginTop: 30,
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 40,
        width: '80%',
        justifyContent: 'space-between'
    }
});
export default ProfileCard