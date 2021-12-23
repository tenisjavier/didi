import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
const ArticleCard = () => {
    return ( 
        <div className="w-10/12 h-110 border-solid border-1 border-gray-500 lg:w-100 mb-12">
            <StaticImage 
            src="../images/article.jpg"
            className="w-full h-1/3 object-cover"/>
        </div>
     );
}
 
export default ArticleCard;