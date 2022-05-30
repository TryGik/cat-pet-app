import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from '../components/Image';
import { selectCats, fetchCats, selectIsLoading } from '../store/catsSlice';
import { selectFavorites } from '../store/favoritesSlice';
import Paginate from '../components/Paginate';
import Loader from '../components/Loader';


const Home = () => {
    const isLoading = useSelector(selectIsLoading)
    const [currentPage, setCurrentPage] = React.useState(1);
    const [limitOnPage] = React.useState(12);

    const dispatch = useDispatch();
    const cats = useSelector(selectCats);
    const favorites = useSelector(selectFavorites);


    React.useEffect(() => {
        dispatch(fetchCats());
    }, [])

    const lastImgIndex = currentPage * limitOnPage;
    const firstlastImgIndex = lastImgIndex - limitOnPage;
    const currentImg = cats.slice(firstlastImgIndex, lastImgIndex);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    if (!isLoading) {
        return <Loader />
    }

    return (
        <>
            <div className='wrapper'>

                {currentImg && currentImg.map(image =>
                    <Image
                        favor={favorites.length !== 0 && favorites.includes(image.id) ? true : false}
                        key={image.id}
                        {...image}
                    />
                )}
            </div>
            <Paginate
                limitOnPage={limitOnPage}
                totalLimit={cats.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    )
}

export default Home