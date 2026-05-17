import { useParams } from "react-router-dom";

function SingleBlogPage() {
  const { slug } = useParams();

  return (
    <div>
      <h1 className="text-4xl font-bold">
        Blog: {slug}
      </h1>
    </div>
  );
}

export default SingleBlogPage;