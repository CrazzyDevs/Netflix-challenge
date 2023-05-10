import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Hero } from "./hero";

export default function Cards({ data }) {
  return (
    <main>
      <Hero />
      <div className="w-[80%] mx-auto p-5 mt-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-10 place-items-center justify-center">
          {data.map(({ id, name }) => (
            <Link
              to={`/${name}`}
              key={id}
              className="lg:w-[300px] md:w-[200px] w-[250px] h-[250px] mx-auto border border-[#82EFEA] rounded-[30px] cursor-pointer hover:bg-[#82EFEA] hover:text-black transition-all durtaion-300 shadow-lg  items-center justify-center"
            >
              <div className="flex flex-col gap-3 items-center justify-center h-full">
                <p className="mb-2 text-center text-3xl">
                  {name}&apos;s project
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

Cards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
