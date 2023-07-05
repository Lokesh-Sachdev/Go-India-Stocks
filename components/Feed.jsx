import feedData from "@utils/feedData";
import Post from "./Post";
import { FiSearch } from "react-icons/fi";

const Feed = () => {

  return (
    <div className="xl:w-1/2">
        <h3 className=' sm:block hidden text-2xl text-red-600 uppercase font-bold'>
            Discussion Forum
        </h3>
        <h5 className="text-black font-bold">
            Filters
        </h5>
      {/* Filter */}
      <div className="flex flex-wrap gap-3 bg-white p-3 my-3 rounded shadow-[0_5px_15px_rgb(0,0,0,0.35)]">
        <button className='post_tag bg-red-500'>Sector 1</button>
        <button className='post_tag bg-blue-500'>Sector 2</button>
        <button className='post_tag bg-yellow-500'>Sector 3</button>
      {/* Search Input */}
        <div className="flex p-1 rounded-2xl shadow-inner items-center bg-[#d1d1d1]">
          <FiSearch 
            size={20}
            />
          <input
           className="text-center bg-[#d1d1d1]"
           type="text" 
           placeholder="Search Here..." />
        </div>
      </div>


      {/* Feed Posts */}
      <div className=" rounded md:overflow-auto md:h-[70vh]">
      {feedData.map((post, index) => (
        <Post
          key={index}
          authorName={post.authorName}
          tag={post.tag}
          content={post.content}
        />
      ))}
      </div>
    </div>
  );
};

export default Feed;
