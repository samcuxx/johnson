const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4">Hi, I'm SamCux</h1>
        <p className="text-xl mb-6">
          Crafting elegant web experiences and solving complex problems with
          technology.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/about"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
