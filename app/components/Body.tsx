import React from "react";

const LandingBody: React.FC = () => {
  return (
    <div className="space-y-10 p-5">
      <section className="bg-blue-200 p-10 rounded-md shadow-md animate-fadeIn">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Our Landing Page
        </h1>
        <p className="mt-4 text-center">
          Explore the amazing features we offer.
        </p>
      </section>

      <section className="bg-green-200 p-10 rounded-md shadow-md animate-fadeIn delay-200">
        <h2 className="text-3xl font-bold text-center">Feature One</h2>
        <p className="mt-4 text-center">
          This is a brief description of the first feature.
        </p>
      </section>

      <section className="bg-yellow-200 p-10 rounded-md shadow-md animate-fadeIn delay-400">
        <h2 className="text-3xl font-bold text-center">Feature Two</h2>
        <p className="mt-4 text-center">
          This is a brief description of the second feature.
        </p>
      </section>
    </div>
  );
};

export default LandingBody;
