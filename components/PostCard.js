import Link from "next/link";

export default function PostCard(props){
    const {post} = props;
    return(
        <Link href={`/recipe/${post.slug}`} className="unstyled">
            <div className="postCard">
                <h3>{post.title}</h3>
                <p>{post.bio}</p>
                <div className="statsConatiner">
                    <div>
                        <h5>Prep Time</h5>
                        <p>{post.prep_time}</p>
                    </div>
                    <div>
                        <h5>Cook Time Time</h5>
                        <p>{post.cook_time}</p>
                    </div>
                </div>

            </div>
        </Link>
    )
}