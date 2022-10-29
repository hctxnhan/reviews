export default function Review({ review }) {
  return (
    <div className='relative bg-cyan-100 w-[500px] rounded-sm p-10 shadow-lg'>
      <div className='absolute transform top-0 left-[50%] -translate-x-[50%] translate-y-[-60%]'>
        <img
          className='w-[70px] h-[70px] object-center object-cover rounded-full shadow-md'
          src={review.image}
          alt={review.name}
        />
      </div>
      <div className=''>
        <p className='text-base font-semibold mb-2'>{review.text}</p>
        <p className='text-xs capitalize'>{review.name}</p>
        <p className='text-xs capitalize'>{review.job}</p>
      </div>
    </div>
  );
}
