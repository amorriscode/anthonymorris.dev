import { IoIosStar } from 'react-icons/io';

function BookRating({ rating }: { rating: number }) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(IoIosStar);
  }

  return (
    <>
      {stars.map((Star, i) => <Star key={i} className="inline" />)}
    </>
  )
}

export default BookRating;