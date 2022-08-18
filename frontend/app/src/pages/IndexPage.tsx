import React from "react";
import { Link } from "react-router-dom";

const IndexPage: React.FC = () => {
  return (
    <>
      <h1>API図鑑</h1>
      <p>API図鑑では、APIを用いたアプケーションを紹介します。</p>
      <Link to="rails">RailsAPI</Link>
      <br></br>
      <Link to="Qiita">QiitaAPI</Link>
    </>
  );
};

export default IndexPage;
