import { useEffect } from "react";

const useTitlePage = (title: string) => {
  useEffect(() => {
    document.title = `Simple Todo | ${title}`;
  }, []);
};

export default useTitlePage;
