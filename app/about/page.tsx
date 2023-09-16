import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-40">
        <div className="container mx-auto text-center py-16">
          <h1 className="text-5xl font-bold py-8">Welcome to BlogMania</h1>
          <p className="text-xl py-8">
            Your Ultimate Source for Blogging Insights
          </p>
        </div>
      </section>

      {/* About Us Content */}
      <section className="bg-gray-100 py-12">
        <div className="container  flex items-center justify-between flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8 lg:py-16">
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              BlogMania is a passionate community of bloggers and writers
              dedicated to sharing their expertise and experiences with the
              world. We believe in the power of words to inspire, educate, and
              entertain.
            </p>
          </div>
          <div className="md:w-1/4 mt-6 md:mt-0">
            <img
              src="data:image/png;base64,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" // Replace with your image path
              alt="Team at BlogMania"
              className="rounded-lg shadow-md w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="bg-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Blogging Tips</h3>
            <p className="text-gray-700 leading-relaxed">
              Explore our expert tips and strategies to take your blogging game
              to the next level.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Tech Insights</h3>
            <p className="text-gray-700 leading-relaxed">
              Stay updated with the latest tech trends and innovations from our
              tech enthusiasts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Lifestyle Stories</h3>
            <p className="text-gray-700 leading-relaxed">
              Dive into lifestyle stories that inspire, motivate, and bring
              positivity to your life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
