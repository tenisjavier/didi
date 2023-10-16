const saveFirstPage = () => {
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    const firstVisitedPage = localStorage.getItem("firstVisitedPage");
    if (!firstVisitedPage) {
      const currentPage = window.location.pathname;
      localStorage.setItem("firstVisitedPage", currentPage);
    }
  }
};

export default saveFirstPage;
