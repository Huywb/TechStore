import React from 'react'
import ReviewCard from './ReviewCard'

interface ReviewsClientProps {
  reviews: ReviewProps[]
}

interface ReviewProps{
  name: string,
  description:string,
  vote: number
}

const ReviewsClient:React.FC<ReviewsClientProps> = ({reviews}) => {
  return (
    <div className='flex flex-col w-full gap-2'>
      {
        reviews.map((review)=>(
        <ReviewCard  key={review.name} name={review.name} description={review.description} rate={review.vote}/>

        ))
      }
    </div>
  )
}

export default ReviewsClient
