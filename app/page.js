import Image from "next/image";
import getPostMetaData from "@/utils/getPostMetaData";
import PostCard from "@/components/PostCard";

export default function Home() {

  const postMetaData = getPostMetaData('recipes');


  return (
    <main>
      <div className="postsContainer">
        {postMetaData.map((post, postIndex) => {
          return (
            <PostCard key={postIndex} post={post} />
          )
        })}
      </div>
      
    </main>
  );
}
