import { useEffect } from "react";
import { useParams } from "react-router-dom";

const LearnPage = () => {
  const { tech } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-20">
      <h1 className="text-2xl font-bold">Learning {tech}</h1>
      {/* You can render custom content here based on `tech` */}
    </div>
  );
};

export default LearnPage;
