const Heading = ({ title, description }) => {
  return (
    <div className="text-left mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-700 text-lg">{description}</p>
    </div>
  );
};

export default Heading;
