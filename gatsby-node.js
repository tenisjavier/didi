const driverInCityRoutes = require("./routes/driver-in-city-routes");
const guidesRoutes = require("./routes/guides-routes");
const articlesRoutes = require("./routes/articles-routes");
const legalRoutes = require("./routes/legal-routes");
const faqsRoutes = require("./routes/faqs-routes");
const redirects = require("./routes/redirects");
const cityRoutes = require("./routes/food-city-routes");
const featuresRoutes = require("./routes/features-routes");
const partnersRoutes = require("./routes/partners-routes");
const productsRoutes = require("./routes/products-routes");
const requirementsRoutes = require("./routes/requirements-routes");
const offersRoutes = require("./routes/offers-routes");

// Implement the Gatsby API “createPages”. This is called once the
// each route will import a ContentType List from Contentful

exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
  reporter,
}) => {
  await redirects.init(graphql, createRedirect);
  await driverInCityRoutes.init(graphql, createPage);
  await guidesRoutes.init(graphql, createPage);
  await articlesRoutes.init(graphql, createPage);
  await legalRoutes.init(graphql, createPage);
  await faqsRoutes.init(graphql, createPage);
  await cityRoutes.init(graphql, createPage);
  await featuresRoutes.init(graphql, createPage);
  await partnersRoutes.init(graphql, createPage);
  await productsRoutes.init(graphql, createPage);
  await requirementsRoutes.init(graphql, createPage);
  await offersRoutes.init(graphql, createPage);
};
