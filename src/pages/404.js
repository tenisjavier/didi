// 404 page will redirect to the home page
import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout sb={false}>
      <h1>
        Page Not Found. Visit our
        <a href="https://web.didiglobal.com">Home Page</a>
      </h1>
    </Layout>
  );
}
