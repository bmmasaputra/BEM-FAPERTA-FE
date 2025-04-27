import { useParams } from "react-router-dom";
import { configDotenv } from "dotenv";


const URL = 

const ArtikelDetail = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Artikel Detail Page</h1>
      <p>Article ID: {id}</p>
    </div>
  );
};

export default ArtikelDetail;
