import { useParams } from "react-router-dom";

const LearnPage = () => {
  const { tech } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Learning {tech}</h1>
      {/* You can render custom content here based on `tech` */}
    </div>
  );
};

export default LearnPage;
