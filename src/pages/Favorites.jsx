import React from 'react'
import { useSelector } from 'react-redux';
import { selectFavorites } from '../store/favoritesSlice';
import Image from '../components/Image';
import { selectCats } from '../store/catsSlice';

const Favorites = () => {
    const [favorites, setFavorites] = React.useState([])
    const cats = useSelector(selectCats)
    const favoritesId = useSelector(selectFavorites);

    React.useEffect(() => {
        const favoritesArr = cats.filter((item) => favoritesId.includes(item.id));
        setFavorites(favoritesArr)
    }, [])

    return (
        <div className='wrapper'>
            {favorites && favorites.map(image => <Image favor={true} key={image.id} {...image} />)}
        </div>
    )
}

export default Favorites