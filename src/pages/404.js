// 404 page will redirect to the home page
import React from "react";
import { Link } from "gatsby";

export default function NotFoundPage() {
  return (
    <div>
      <h1>
        Page Not Found. Visit our Home Page{" "}
        <Link to="https://web.didiglobal.com"></Link>
      </h1>
    </div>
  );
}
