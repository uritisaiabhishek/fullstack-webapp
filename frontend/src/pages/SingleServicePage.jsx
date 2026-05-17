import { useParams } from "react-router-dom";

function SingleServicePage() {
  const { slug } = useParams();

  return (
    <div>
      <h1 className="text-4xl font-bold">
        Service: {slug}
      </h1>
    </div>
  );
}

export default SingleServicePage;