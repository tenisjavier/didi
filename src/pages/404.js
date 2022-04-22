// 404 page will redirect to the home page
import React, { useEffect } from "react";
import { navigate } from "gatsby";

export default function NotFoundPage() {
  useEffect(() => {
    navigate(`/cl/?redirect=${window.document.referrer}`); // redirecting to home page
  }, []);

  return (
    <div>
      <h1>(404) NotFound Page</h1>
    </div>
  );
}
