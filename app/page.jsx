import Feed from "@components/Feed";
import StoryCard from "@components/StoryCard";

const Home = () => {
  return (
    <section className="w-full flex justify-center lg:gap-16 gap-8 md:flex-row flex-col">
      <Feed/>
      <StoryCard/>
    </section>
  );
};

export default Home;
