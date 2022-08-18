import React from "react";
import { practiceqiita } from "../hooks/practiceqiita";
import { Qiitapracticelist } from "../components/Qiitapracticelist";

const QiitapracticePage: React.FC = () => {
  const { articles, errorMessage, isLoading, fetchArticles } = practiceqiita();

  return (
    <>
      <h1>Qiita</h1>
      <p>Qiita記事を50件　Reactで表示する</p>

      <button onClick={fetchArticles}>表示する</button>

      <Qiitapracticelist
        articles={articles}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </>
  );
};

export default QiitapracticePage;
