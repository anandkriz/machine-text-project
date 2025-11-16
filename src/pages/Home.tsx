import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import Slider from '../components/slider';
import SkeletonCardLoader from '../components/SkeletonCardLoader';
import Header from '../components/Header';
import CountryCard from '../components/CountryCard';
import Footer from '../components/Footer';

import { fetchCountries, setPageCount } from '../redux/features/countrySlice';

const Home: React.FC = () => {
  const { countryList, loading, selectedRegion, currentPageCount } =
    useAppSelector((state) => state.country);

  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    dispatch(setPageCount());
  };

  const filteredByRegion = useMemo(() => {
    if (selectedRegion === 'all') return countryList;

    return countryList.filter(
      (country) =>
        country.region?.toLowerCase() === selectedRegion.toLowerCase()
    );
  }, [selectedRegion, countryList]);

  // Fetch Countries on Mount
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="container" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />

      <div className="d-flex text-center flex-column flex-md-row gap-2 my-4">
        <div
          className="flex-grow-1 lineFirst"
          style={{
            height: 3,
            background: '#3E3E3E',
            transform: 'translateY(8px)',
          }}
        />

        <h1
          className="fw-bold text-dark mb-0"
          style={{ fontSize: '2.5rem', letterSpacing: 3 }}
        >
          WELCOME
        </h1>

        <div
          className="flex-grow-1 lineFirst"
          style={{
            height: 3,
            background: '#3E3E3E',
            transform: 'translateY(34px)',
          }}
        />
      </div>

      <div className="row mb-4">
        <Slider />
      </div>

      <div className="row mt-3" id="country-cards">
        {loading && <SkeletonCardLoader />}

        {!loading &&
          filteredByRegion
            .slice(0, currentPageCount)
            .map((item, index) => (
              <CountryCard key={index} {...item} />
            ))}
      </div>

      {currentPageCount < filteredByRegion.length && (
        <button
          className="btn btn-dark load-more-btn my-4"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Home;
