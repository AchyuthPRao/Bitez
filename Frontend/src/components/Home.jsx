import React,{useEffect} from "react";
import {getRestaurants, sortByRatings, sortByReviews, toggleVegOnly
} from "../actions/restaurantAction";
import Restaurant  from "../components/Restaurant";
import Loader from "../components/layout/Loader";
import Message from "../components/Message";
import {useDispatch , useSelector} from "react-redux";
import CountRestaurant from "./CountRestaurant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const {keyword} = useParams();

  const {loading: restaurantsLoading,
  error:restaurantsError,
    restaurants,
    showVegOnly,
} = useSelector((state) => state.restaurants);

  useEffect(() => {
    if(restaurantsError){
      return alert.error(restaurantsError)
    }
    dispatch(getRestaurants(keyword));
  }, [dispatch,restaurantsError, keyword]);

  const handleSortByRatings = ()=>
  {
    dispatch(sortByRatings());
  };

  const handleSortByReviews = ()=>
  {
    dispatch(sortByReviews());
  };

  const handleToggleVegOnly = ()=>
  {
    dispatch(toggleVegOnly());
  };

  return (
    <>
     <CountRestaurant></CountRestaurant>
      {restaurantsLoading ? (
      <Loader />
      ): 
      restaurantsError ?
      (<Message variant= "danger"> {restaurantsError} </Message >) : (
        <>
        <section id="products" >
          <div className="sort">

          <button className="sort_veg p-3" onClick={handleToggleVegOnly}>
              {showVegOnly ? "Show All" : (
                  <>
                    Pure-Veg <FontAwesomeIcon icon={faCircle}  style={{ color: "#38842e", }} />
                  </>
              )}
          </button>

            <button className="sort_rev p-3" onClick={handleSortByReviews}>
              Sort By Reviews <FontAwesomeIcon icon={faArrowUpWideShort} size="s"/>
            </button>

            <button className="sort_rate p-3" onClick={handleSortByRatings}> 
              Sort By Ratings <FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} size="s"/>
            </button>
          </div>

          <div className="row mt-4 kard">
              {restaurants && restaurants.restaurants ? (
                restaurants.restaurants.map((restaurant) =>
                !showVegOnly || (showVegOnly && restaurant.isVeg)?
                (
                  <Restaurant key={restaurant._id} restaurant={restaurant} />
                ): null
                )
              ) : (
                <Message variant="info">No Restaurants Found.</Message>
              )}
            </div>
        </section>
        </>
        )}
    </>
    );
          }

export default Home;
