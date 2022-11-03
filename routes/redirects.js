// @desc: Create Redirects
// @return: null
const redirectsInit = async (graphql, createRedirect) => {
  createRedirect({
    fromPath: `/test1`,
    toPath: `/tes2`,
    isPermanent: true,
  });
};

module.exports.init = redirectsInit;
