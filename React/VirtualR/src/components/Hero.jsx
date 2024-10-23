import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="text-lg text-neutral-500 mx-w-4xl text-center mt-10 ">
        Empower your creativity and bring your VR app ideas to life with our
        intutive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md"
        >
          Start for Free
        </a>
        <a href="#" className="border rounded-md py-2 px-3 mx-3">
          Documentation
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center my-10 gap-10">
        <video autoPlay loop muted className="w-full lg:w-1/2 rounded-lg border max-w-md lg:max-w-full border-orange-400 mx-2">
          <source src={video1} type="video/mp4" />
          Your browser doesn't support the video tag
        </video>
        <video autoPlay loop muted className="max-w-md lg:max-w-full  w-full lg:w-1/2 rounded-lg border border-orange-400 mx-2">
          <source src={video2} type="video/mp4" />
          Your browser doesn't support the video tag
        </video>
      </div>
    </div>
  );
};

export default Hero;
