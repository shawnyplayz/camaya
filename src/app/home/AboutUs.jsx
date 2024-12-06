export default function AboutSection() {
  return (
    <div className="bg-gradient-to-r from-[#fffaf0] to-[#fdf2e9] py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-2">
          {/* Top Row */}
          <img
            src="/assets/home/aboutSection/arrow.svg" // Replace with actual image
            alt="Image 1"
            className="col-span-1 row-span-1 w-full h-auto rounded-lg"
          />
          <img
            src="/assets/home/aboutSection/arrow.svg"
            alt="Image 2"
            className="col-span-1 row-span-1 w-full h-auto rounded-lg"
          />
          <img
            src="/image3.jpg"
            alt="Image 3"
            className="col-span-1 row-span-2 w-full h-auto rounded-lg"
          />

          {/* Middle Row */}
          <img
            src="/image4.jpg"
            alt="Image 4"
            className="col-span-1 row-span-1 w-full h-auto rounded-lg"
          />
          <img
            src="/image5.jpg"
            alt="Image 5"
            className="col-span-1 row-span-1 w-full h-auto rounded-lg"
          />

          {/* Bottom Row */}
          <img
            src="/image6.jpg"
            alt="Image 6"
            className="col-span-1 row-span-1 w-full h-auto rounded-lg"
          />
          <img
            src="/image7.jpg"
            alt="Image 7"
            className="col-span-1 row-span-1 w-full h-auto rounded-lg"
          />
          <img
            src="/image8.jpg"
            alt="Image 8"
            className="col-span-1 row-span-1 w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            About Camaya Coast
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Nestled in the heart of Bataan, Camaya Coast offers a perfect blend
            of nature and modernity. Enjoy the beauty of pristine beaches,
            world-class amenities, and a vibrant community.
          </p>
          <button className="bg-yellow-500 text-white text-lg px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition">
            View Properties
          </button>
        </div>
      </div>
    </div>
  );
}
