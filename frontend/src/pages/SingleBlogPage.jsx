import { useParams } from "react-router-dom";

function SingleBlogPage() {
  const { slug } = useParams();

  return (
    <>
      {/* Blog Header Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{slug}</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Published on July 18, 2024 by Alper Kamu</p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Main Content */}
            <div className="lg:w-2/3 lg:pr-12">
              <img className="w-full h-96 object-cover object-center rounded-lg mb-8" alt="blog" src="https://dummyimage.com/1200x600" />
              
              <div className="prose prose-lg max-w-none">
                <p className="mb-4 leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                
                <h2 className="text-2xl font-medium title-font text-gray-900 mb-4 mt-8">The Rise of Modern Design</h2>
                <p className="mb-4 leading-relaxed">Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag. Offal vinyl chicharrones hashtag pug retro copper mug.</p>
                
                <p className="mb-4 leading-relaxed">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                
                <h2 className="text-2xl font-medium title-font text-gray-900 mb-4 mt-8">Key Takeaways</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li className="leading-relaxed">Understanding the fundamentals of modern web design</li>
                  <li className="leading-relaxed">Implementing responsive layouts for all devices</li>
                  <li className="leading-relaxed">Creating accessible and user-friendly interfaces</li>
                  <li className="leading-relaxed">Optimizing performance for better user experience</li>
                </ul>
                
                <p className="mb-4 leading-relaxed">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 lg:pl-8 mt-12 lg:mt-0">
              {/* Author Card */}
              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <div className="flex items-center mb-4">
                  <img alt="author" className="w-16 h-16 rounded-full object-cover mr-4" src="https://dummyimage.com/100x100" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Alper Kamu</h3>
                    <p className="text-gray-500 text-sm">Senior Writer</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Passionate about technology and design. Sharing insights and experiences to help others learn and grow.</p>
              </div>

              {/* Related Posts */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Related Posts</h3>
                <div className="space-y-4">
                  <a className="block">
                    <h4 className="text-indigo-500 font-medium mb-1">The 400 Blows</h4>
                    <p className="text-gray-600 text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings.</p>
                  </a>
                  <a className="block">
                    <h4 className="text-indigo-500 font-medium mb-1">Shooting Stars</h4>
                    <p className="text-gray-600 text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings.</p>
                  </a>
                  <a className="block">
                    <h4 className="text-indigo-500 font-medium mb-1">Neptune</h4>
                    <p className="text-gray-600 text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings.</p>
                  </a>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-500 px-3 py-1 rounded-full text-sm">Technology</span>
                  <span className="bg-indigo-100 text-indigo-500 px-3 py-1 rounded-full text-sm">Design</span>
                  <span className="bg-indigo-100 text-indigo-500 px-3 py-1 rounded-full text-sm">Development</span>
                  <span className="bg-indigo-100 text-indigo-500 px-3 py-1 rounded-full text-sm">Tutorial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleBlogPage;