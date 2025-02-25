import { Link } from "react-router-dom";
import CardBlog from "../../components/CardBlog/CardBlog";
import usePosts from "../../hooks/usePosts";

export default function AllPost() {
  const { data } = usePosts();
  console.log(data);
  return (
    <div className="mx-4 my-10 md:mx-20 md:my-20">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
        {data?.map((item, index) => (
          <Link key={index} to={`/postDetails/${item._id}`}>
            <CardBlog post={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
