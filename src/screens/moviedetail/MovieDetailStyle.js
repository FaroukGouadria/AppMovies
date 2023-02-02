import {StyleSheet} from 'react-native';
import {COLOR} from "../../appconstants/Colors";

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    imageView: {
        height: 270, 
        resizeMode: 'stretch'
    },
    secondContainer: {
        flex: 1, 
        paddingHorizontal: 9,
         marginTop: 8
    },
    title: {
        fontSize: 26, 
        color: COLOR.black, 
        fontWeight: 'bold',
        alignSelf:'center',
        margin:20,
        padding:10
    },
    thirdContainer: {
        flexDirection: 'row', 
        marginTop: 8,
        padding:3
    },
    infoTitle: { 
        fontSize: 18, 
        color: 'red', 
        fontWeight: '400', 
        marginBottom: 20 },

    infoTitleData: {
        fontSize: 14, 
        color: COLOR.black, 
        fontWeight: 'bold',},

    fourthContainer: {
        flex: 1
    },
    description: {
        marginTop: 15, 
        fontSize: 24, 
        color: '#dc2430', 
        fontWeight: 'bold',
        padding:10,
        alignSelf:'center'
    },
    flatListContainer: {
        flex: 1, marginTop: 4
    },
    movieItemContainer: {margin: 4},
    descriptionText:{
        fontSize:20,
        color:COLOR.black,
        marginTop:18,
        fontWeight:'500'


    }
    
});
export default styles;