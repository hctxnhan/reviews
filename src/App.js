import Reviews from './components/Reviews';
import reviews from './data';
export default function App() {
  return (
    <div className='font-inter-tight min-h-screen flex justify-center items-center'>
      <div>
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
}
