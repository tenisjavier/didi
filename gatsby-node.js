const driverInCityRoutes = require("./routes/driver-in-city-routes");
const placeRoutes = require("./routes/places-routes");
const placeInCityRoutes = require("./routes/places-in-city-routes");
const directionsRoutes = require("./routes/directions-routes");
const guidesRoutes = require("./routes/guides-routes");
const articlesRoutes = require("./routes/articles-routes");
const legalRoutes = require("./routes/legal-routes");
const neighbourhoodRoutes = require("./routes/neighbourhood-routes");
const repartidoresRoutes = require("./routes/repartidores-routes");
const redirects = require("./routes/redirects");

// Implement the Gatsby API “createPages”. This is called once the
// each route will import a ContentType List from Contentful

exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
  reporter,
}) => {
  await redirects.init(graphql, createRedirect);
  await driverInCityRoutes.init(graphql, createPage);
  await placeRoutes.init(graphql, createPage);
  await placeInCityRoutes.init(graphql, createPage);
  await directionsRoutes.init(graphql, createPage);
  await guidesRoutes.init(graphql, createPage);
  await articlesRoutes.init(graphql, createPage);
  await legalRoutes.init(graphql, createPage);
  await neighbourhoodRoutes.init(graphql, createPage);
  await repartidoresRoutes.init(graphql, createPage);
};
