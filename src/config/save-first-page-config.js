const saveFirstPage = () => {
  const firstVisitedPage = localStorage.getItem("firstVisitedPage");
  const isBrowser = typeof window !== "undefined";

  if (!firstVisitedPage) {
    // console.log("No first page found");
    if (isBrowser) {
      const currentPage = window.location.pathname;
      localStorage.setItem("firstVisitedPage", currentPage);
    }
  } //else {
  //     console.log(window.localStorage.getItem("firstVisitedPage"));
  //   }
};

export default saveFirstPage;
