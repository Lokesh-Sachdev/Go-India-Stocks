import storiesData from '@utils/storiesData';

const StoryCard = () => {

 const cardsArray = Array.from({ length: 8 }, () => ({ ...storiesData[0] }));

  return (
    <div id='market' className=' flex flex-col items-start xl:w-1/2'>
        <h3 className='sm:block hidden text-2xl text-red-600 uppercase font-bold mb-5'>
            Market Stories
        </h3>
        <div className="container mx-auto my-4 grid gap-4 lg:grid-cols-2">
        {cardsArray.map((card, index) => 
        (
            <div key={index} className="relative max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
            {/* Card Image */}
                 <img className="w-full h-48 object-cover" src={card.imageUrl} alt="Card" />

                    {/* Text Overlay */}
                <div className="absolute inset-0 flex items-end justify-center ">
                        <div className="flex-center w-full px-8 py-1 bg-black opacity-50 rounded-lg">
                        <p className=" text-base text-white font-bold">{card.description}</p>
                        </div>
                </div>
            </div>
        )
        )}
        </div>
    </div>
  );
};

export default StoryCard;
