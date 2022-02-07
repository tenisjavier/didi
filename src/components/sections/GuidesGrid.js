import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// const GuidesGrid = ({ guias }) => {
//   return (
//     <section className="bg-orange-primary min-h-screen px-10 pt-48 2xl:px-80 ">
//       <div className="mb-4 flex w-full flex-wrap justify-center lg:justify-between ">
//         <h1 className="text-c text-4xl font-bold  text-white lg:text-left">
//           Guias para Socios Conductores
//         </h1>
//         <StaticImage
//           src="../../images/cl/cl-car-icon.png"
//           alt="icono auto"
//           className="mt-3 lg:mt-0"
//           width={200}
//         />
//       </div>
//       <div className="flex w-full flex-wrap justify-center lg:justify-between">
//         {guias.map((guia, index) => {
//           return (
//             <Link to={guia.slug}>
//               <div
//                 className="h-80 flex-shrink-0 cursor-pointer transition duration-150 hover:-translate-y-2 "
//                 key={index}
//               >
//                 <img
//                   src={guia.featuredImage.node.mediaItemUrl}
//                   alt=""
//                   className="h-52 w-96 rounded-lg object-cover shadow-lg "
//                 />
//                 <h1 className="mt-4 w-96 text-2xl font-bold text-white group-hover:text-blue-500">
//                   {guia.title}
//                 </h1>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default GuidesGrid;
