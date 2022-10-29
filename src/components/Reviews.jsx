import { useState } from 'react';
import Review from './Review';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
export default function Reviews({ reviews }) {
  const [current, setCurrent] = useState(0);

  const review = reviews[current];

  function handleClickForward() {
    let next = current + 1;
    next = next % reviews.length;
    console.log(current, next);
    setCurrent(next);
  }

  function handleClickBackward() {
    let next = current - 1 + reviews.length;
    next = next % reviews.length;
    console.log(current, next);

    setCurrent(next);
  }

  return (
    <div className='relative'>
      <button
        onClick={handleClickBackward}
        className='absolute -left-14 top-[50%] transform -translate-y-[50%] z-10 text-slate-700 hover:text-slate-600 hover:scale-150 transition active:-translate-x-2'
      >
        <IoIosArrowBack size='3rem' />
      </button>
      <Review key={review.id} review={review} />
      <button
        onClick={handleClickForward}
        className='absolute -right-14 top-[50%] transform -translate-y-[50%] z-10 text-slate-700 hover:text-slate-600 hover:scale-150 transition active:translate-x-2'
      >
        <IoIosArrowForward size='3rem' />
      </button>
    </div>
  );
}
