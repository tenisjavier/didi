import React from "react";
import { ContentfulRichTextGatsbyReference, RenderRichTextData } from "gatsby-source-contentful/rich-text";
import TermsAndConditionsContent from "../../TermsAndConditionsContent";

interface DiDiExpressPlusLegalProps {
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
}

const DiDiExpressPlusLegal = ({ content }: DiDiExpressPlusLegalProps) => {


  return (
    <TermsAndConditionsContent
      data={{
        contentfulLegal: { content }
      }}
    ></TermsAndConditionsContent>
  )
};

export default DiDiExpressPlusLegal;
