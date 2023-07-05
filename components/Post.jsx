import Image from "next/image";
import { AiOutlineEye, AiOutlineHeart, AiOutlineShareAlt} from 'react-icons/ai'
import { BiComment } from "react-icons/bi";

const Post = ({ authorName, tag, content }) => {

    const getTagColor = () => {
        switch (tag) {
          case 'Sector 1':
            return '#ef4444';
          case 'Sector 2':
            return '#3b82f6';
          case 'Sector 3':
            return '#eab308';
          default:
            return 'gray'; 
        }
      };

    return (
      <div className="bg-white mb-2 rounded shadow-[0_5px_15px_rgb(0,0,0,0.35)]">
        {/* Author Info */}
        <div className="flex gap-4 items-center py-2 px-4">
          <Image 
          src="/assets/images/profile.jpg"
          width={25}
          height={25}
          alt="Author Icon" />
          <span>{authorName}</span>
          <span className="post_tag" style={{backgroundColor: getTagColor()}}>{tag}</span>
        </div>
  
        <p className=' ps-14'>{content}</p>
  
  
        <div className=" flex">
          <button className="post_btn">
            <AiOutlineHeart/>
          </button>
          <button className="post_btn">
            <AiOutlineEye/>
          </button>
          <button className="post_btn">
            <BiComment/>
          </button>
          <button className="post_btn">
            <AiOutlineShareAlt/>
          </button>
        </div>
      </div>
    );
  };
  
  export default Post;