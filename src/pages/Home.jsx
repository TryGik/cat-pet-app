import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from '../components/Image';
import { selectCats, fetchCats } from '../store/catsSlice';
import { setFavorites, removeFavorites, selectFavorites } from '../store/favoritesSlice';

const Home = () => {
    // const [images, setImages] = React.useState([])
    const dispatch = useDispatch();
    const cats = useSelector(selectCats);
    const favorites = useSelector(selectFavorites);

    // const [favor, setFavor] = React.useState(false)

    // const selectFavorite = () => {
    //     if (!favor) {
    //         setFavor({ url: url, id: id, favor: true }))
    //         setFavor(true);
    //     }
    // }

    React.useEffect(() => {
        dispatch(fetchCats());
    }, [])

    return (
        <div className='wrapper'>
            {cats && cats.map(image => <Image favor={favorites.length !== 0 && favorites.includes(image.id) ? true : false} key={image.id} {...image} />)}

        </div>

    )
}

export default Home