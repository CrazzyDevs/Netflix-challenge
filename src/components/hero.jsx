export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-[5%] p-3 text-center">
      <h2 className="lg:text-6xl md:text-5xl text-4xl font-bold">
        Tech <span className="text-red-600">Tok</span> Community <span className="text-red-600">Project</span>
      </h2>
      <span className="lowercase text-xl mt-2 text-gray-50 italic">
        view projects made by web devs in the community 
      </span>
    </div>
  );
};
