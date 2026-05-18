import { Link } from "react-router-dom";
import blogData from "../data/blog-mockData.json";

function BlogPage() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">

          {
            blogData.posts.map((post) => (
              <div key={post.id} className="py-8 px-4 lg:w-1/3">
                <Link to={`/blog/${post.slug}`} className="h-full flex items-start">
                  <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                      {/* post.date = "2025-10-13" */}
                      {post.date.split('-')[1]}
                    </span>
                    <span className="font-medium text-lg text-gray-800 title-font leading-none">{post.date.split('-')[2]}</span>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1 uppercase">{post.categories[0]}</h2>
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{post.title}</h1>
                    <p className="leading-relaxed mb-5">{post.excerpt}</p>
                    <div className="inline-flex items-center">
                      <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                      <span className="flex-grow flex flex-col pl-3">
                        <span className="title-font font-medium text-gray-900">{post.author}</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  );
}

export default BlogPage;