import { useEffect, useState } from "react"
import Username from "./Username"

function Reviews({data, ratings})  {

    let filteredReviews = ratings.filter((review) => {
        return review.clothes_id == data.id 
    })
      
    let reviews = filteredReviews.map((review) => {
        return (
            <div className="review">
            <Username reviewID={review.user_id} />
            <p>{review.rating}/5</p>
            <p>{review.comment}</p>
            </div>
        )
      })

    return(
        <div>
        {reviews}
        </div>
    )
}

export default Reviews