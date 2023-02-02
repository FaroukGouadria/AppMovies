import React, {useEffect,useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Loading from '../../components/loading/Loading';
import styles from './MovieDetailStyle'
import {FlatList, Image, Text, TouchableOpacity, View, ScrollView} from "react-native";
import {Constants} from "../../appconstants/AppConstants";
import {getMovieDetail} from '../../redux/reducer/moviedetail'
import LinearGradient from 'react-native-linear-gradient';
import { ApiUrls } from '../../networks/ApiUrls';

const MovieDetail = ({route}) => {
    const { movieId } = route.params
    console.log({movieId})
    //communicate with redux
    const dispatch = useDispatch();
    const[isLoading,setLoading]=useState(true)
    const {isLoadings, movieDetail} = useSelector(state => state.movieDetailReducer);
    const [movie,setMovie]=useState([]);
    const getFilms = async () => {
        try {
            const response = await fetch(`${ApiUrls.MOVIE}/${movieId}?api_key=${Constants.API_KEY}`);
            const json = await response.json();
            console.log(json)
            setMovie(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    // Api call
    useEffect(() => {
        dispatch(getMovieDetail({movieId}))
        getFilms();
    }, [])


    // main view with loading while api call is going on
    return isLoading ? <Loading/> : (
        
        <LinearGradient colors={['#cc2b5e', '#ee9ca7', '#753a88']}  style={styles.mainView}>
        <Image
            style={styles.imageView}
            source={{
                uri: `${Constants.IMAGE_URL}${movie?.poster_path}`,
            }}/>
            <View style={styles.secondContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={styles.thirdContainer}>
                <View style={styles.fourthContainer}>
                    <Text style={styles.infoTitle}>Language</Text>
                    <Text style={styles.infoTitleData}>{movie.original_language.toUpperCase()}</Text>
                </View>
                <View style={styles.fourthContainer}>
                    <Text style={styles.infoTitle}>Rating</Text>
                    <Text style={styles.infoTitleData}>{movie.vote_average}</Text>
                </View>
                <View style={styles.fourthContainer}>
                    <Text style={styles.infoTitle}>Release Date</Text>
                    <Text style={styles.infoTitleData}>{movie.release_date}</Text>
                </View>
            </View>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descriptionText}>{movie.overview}</Text>
        </View>
    </LinearGradient>)
}
export default MovieDetail