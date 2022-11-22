import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import RichContent from "../RichContent";

export interface ColumnsSectionProps {
  line: any[];
  sectionID?: string;
}

const ColumnSectionImageText = ({
  line,
  sectionID
}: ColumnsSectionProps) => {
  return (
    <section id={sectionID} className={`py-12`}>
      <div className={`md:flex md:flex-cols text-center md:justify-center md:items-start grid grid-col-1`}>
        {line.map((col) => {
          return (
              <div>
                {col?.title && <p>{col.title}</p>}
                {col?.image && 
                  <GatsbyImage
                    className="max-w-xs"
                    image={col.image.gatsbyImageData}
                    alt=""
                  />
                }
                {col?.content && 
                  <div className="px-4">
                    <RichContent richContent={col.content}></RichContent>
                  </div>
                }
              </div>
            )
          })}
        </div>
    </section>
  );
};

export default ColumnSectionImageText;