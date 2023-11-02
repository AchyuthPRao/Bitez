import React from 'react'
import {Link} from "react-router-dom";

const Restaurant = ({restaurant}) => {
  return (
      <div className="col-sm-12 col-md-6 col-lg-3 mx-6 " style={{marginTop: "20px"}}>
                <div className="card py-3 px-2 rounded-3 ">
                  <Link 
                    to={`/eats/stores/${restaurant._id}/menus`}
                    className="btn btn-block"
                    >
                    <img
                      className="card-img-top mx-auto"
                      src={restaurant.images[0].url}
                      alt={restaurant.name} 
                      ></img> 
                  </Link>

                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title d-flex justify-content-center align-items-center">{restaurant.name}</h5>
                        <p className="rest_address mx-3">{restaurant.address}</p>
                        <div className="ratings mx-auto mt-auto">
                            <div className="rating-outer" >
                              <div className="rating-inner" style={{width: `${(restaurant.ratings/5)*100}%`}}>

                              </div>
                            </div>
                            <span className="ratings">({restaurant.numOfReviews} reviews)</span>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Restaurant;
