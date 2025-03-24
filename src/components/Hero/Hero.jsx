import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero -mt-20">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold bg-clip-text">Welcome to <span className="bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">ByteBlaze</span></h1>
          <p className="py-6">
            ByteBlaze is the bridge between the complex world of technology{" "}
            <br /> and the curious minds eager to understand it
          </p>

          <div className="flex gap-2 justify-center">
            <Link to="/blogs" className="btn cursor-pointer btn-primary">
              Read Blogs
            </Link>
            <Link to="/bookmarks" className="btn cursor-pointer btn-primary">
              Bookmarks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
