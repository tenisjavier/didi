import React, { ReactElement, ReactNode } from "react";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "react-slugify";

interface optionsInterface {
  renderMark: {
    [key: string]: (key: ReactNode) => ReactElement;
  };
  renderNode: {
    [key: string]: (node: any, children: any) => ReactElement;
  };
}

const options: optionsInterface = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className={"my-14 text-center text-3xl font-bold"}>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 id={slugify(children)} className={"my-12 text-2xl font-bold pt-20"}>
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className={"my-12 text-center text-xl font-bold text-orange-primary"}>
        {children}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className={"my-12 text-center text-lg"}>{children}</h6>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <p className={""}>{children}</p>,
    [BLOCKS.TABLE]: (node) => {
      return (
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm overflow-hidden my-8">
            <table className="table-fix text-base text-gray-primary border-collapse">
              {node.content.map((row: any, index: any) =>
                row.content[0].nodeType === "table-header-cell" ? (
                  <thead key={index}>
                    <tr className="font-bold text-lg bg-gray-light">
                      {row.content.map((cell: any, index: any) => (
                        <th
                          key={index}
                          className="border-2 border-gray-light border-solid  py-6"
                        >
                          {cell.content[0].content[0].value}
                        </th>
                      ))}
                    </tr>
                  </thead>
                ) : (
                  <tbody key={index}>
                    <tr className="border-2 border-gray-light border-solid">
                      {row.content.map((cell: any, index: any) => (
                        <td
                          key={index}
                          className="border-2 border-gray-light border-solid p-4"
                        >
                          {cell.content[0].content.length > 1 &&
                          cell.content[0].content[1].nodeType ===
                            "hyperlink" ? (
                            <a
                              href={cell.content[0].content[1].data.uri}
                              className="text-orange-primary"
                            >
                              {cell.content[0].content[1].content[0].value}
                            </a>
                          ) : (
                            cell.content[0].content[0].value
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                )
              )}
            </table>
          </div>
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      if (node.data.uri.includes("https://www.youtube.com/watch?v=")) {
        const videoId = node.data.uri.substring(
          node.data.uri.lastIndexOf("v=") + 2
        );
        return (
          <div className="flex justify-center">
            <iframe
              className="mt-8 w-full lg:w-1/2 h-72 "
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      }
      return (
        <a className="text-orange-primary break-all" href={node.data.uri}>
          {node.content[0].value}
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      if (!node.data.target) return <div></div>;
      const { gatsbyImageData, title } = node.data.target;
      if (title.includes("didiImage")) {
        if (gatsbyImageData.width === 300 && gatsbyImageData.height === 600) {
          gatsbyImageData.width = 150;
          gatsbyImageData.height = 300;
        }
        if (gatsbyImageData.width === 150 && gatsbyImageData.height === 150) {
          gatsbyImageData.width = 100;
          gatsbyImageData.height = 100;
        }
        if (gatsbyImageData.width === 300 && gatsbyImageData.height === 300) {
          gatsbyImageData.width = 200;
          gatsbyImageData.height = 200;
        }
      }
      if (title === "guia_mp_repartidor1" || title === "guia_mp_repartidor3") {
        //2917x4700
        gatsbyImageData.width = 400;
        gatsbyImageData.height = 650;
      }
      if (title === "guia_mp_repartidor2") {
        //2917x6600
        gatsbyImageData.width = 400;
        gatsbyImageData.height = 905;
      }
      if (title === "guia_mp_restaurante1") {
        //2917x6100
        gatsbyImageData.width = 400;
        gatsbyImageData.height = 844;
      }
      if (
        title === "guia_mp_restaurante2" ||
        title === "guia_mp_restaurante3"
      ) {
        //2917x5500
        gatsbyImageData.width = 400;
        gatsbyImageData.height = 755;
      }
      if (title === "guia_mp_restaurante4" || title === "guia_mp_repartidor4") {
        //2917x4100-4200
        gatsbyImageData.width = 400;
        gatsbyImageData.height = 570;
      }
      if (title === "qr-mach") {
        gatsbyImageData.width = 250;
        gatsbyImageData.height = 250;
      }
      return (
        <div className="my-12 flex w-full justify-center mx-auto">
          <GatsbyImage
            className="max-w-xl md:max-w-4xl"
            image={getImage(gatsbyImageData)!}
            alt={title}
          ></GatsbyImage>
        </div>
      );
    },
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="mx-1 my-6">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ul className="mx-1 my-6">{children}</ul>
    ),
  },
};

interface RichContentProps {
  richContent: RenderRichTextData<ContentfulRichTextGatsbyReference>;
}

const RichContent = ({ richContent }: RichContentProps): any => {
  return renderRichText(richContent, options);
};

export default RichContent;
