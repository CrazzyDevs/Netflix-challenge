import PropTypes from "prop-types";
import { BsLink45Deg, BsGithub, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Details = ({ data }) => {
  const { name, image, Technology, Struggles, viewLink, viewCode, Time } = data;

  return (
    <main className="w-[90%] mx-auto">
      <Link to="/" className="mt-5">
        <button className="inline-flex lg:p-3 p-2 mt-6 hover:bg-white hover:text-black transition-all duration-300 items-center justify-center gap-2 animate-pulse border rounded-xl shadow-md">
          <span>
            <BsArrowLeft />
          </span>
        </button>
      </Link>
      <div className="w-[80%] mx-auto p-5">
        <h1 className="text-3xl font-bold text-center">{name}&apos;s Task</h1>
        <img
          src={image}
          alt="task image"
          className="rounded-xl shadow-md lg:w-full lg:h-full mx-auto mt-5"
        />
        <div className="mt-5 lg:flex lg:justify-between md:flex md:justify-between grid gap-5 items-center p-3">
          <div className="lg:text-[18px] text-[15px] flex flex-col gap-3 font-bold">
            Technologies used
            <span className="text-[13px] lg:text-[15px] font-normal italic">
              {" "}
              {Technology}
            </span>
          </div>

          <div className="flex flex-col gap-5 items-start">
            <a
              href={viewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-gray-500 hover:underline"
            >
              View site
              <span>
                <BsLink45Deg />
              </span>
            </a>
            <a
              href={viewCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-gray-500 hover:underline"
            >
              View code
              <span>
                <BsGithub />
              </span>
            </a>
          </div>
        </div>

        <div className="gap-3 p-3 grid mt-3">
          <div className="lg:text-[18px] text-[15px] flex flex-col items-start gap-3 font-bold">
            Time Spent
            <span className="text-[13px] lg:text-[15px] font-normal italic">
              {Time}
            </span>
          </div>

          <div className="lg:text-[18px] text-[15px] flex flex-col gap-3 mt-3 items-start font-bold">
            Tell us struggles you went through just to get this set up
            <span className="text-[13px] lg:text-[15px] font-normal italic">
              {Struggles}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

Details.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    Technology: PropTypes.string.isRequired,
    Struggles: PropTypes.string.isRequired,
    Time: PropTypes.string.isRequired,
    viewLink: PropTypes.string.isRequired,
    viewCode: PropTypes.string.isRequired,
  }).isRequired,
};
