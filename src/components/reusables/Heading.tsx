interface HeadingProps {
  title: string;
  description: string;
}
const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="text-left mb-8">
      <h1 className="text-4xl font-bold text-heading mb-4">{title}</h1>
      <p className="text-description text-lg">{description}</p>
    </div>
  );
};

export default Heading;
