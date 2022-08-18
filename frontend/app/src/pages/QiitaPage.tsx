import React from "react";
import { useListQiitaArticles } from "../hooks/useListQiitaArticles";
import { ArticleList } from "../components/ArticleList";
import { SearchForm } from "../components/SearchForm";

const QiitaPage: React.FC = () => {
  const { articles, searchWord, errorMessage, isLoading, fetchArticles } =
    useListQiitaArticles();
  return (
    <>
      <h1>Qiita</h1>
      <p>QiitaAPIを用いたTODOアプリです。</p>

      <SearchForm fetchArticles={fetchArticles} />
      <ArticleList
        articles={articles}
        searchWord={searchWord}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </>
  );
};

export default QiitaPage;
