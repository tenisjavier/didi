import React from "react";

interface SectionLinkProps {
  link?: string;
}

const SectionLink = ({ link }: SectionLinkProps) => {
  return (
    <p>
      <a className="mb-5 text-lg" href={"tel:" + link}>
        {link}
      </a>
    </p>
  );
};

export default SectionLink;
