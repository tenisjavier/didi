// codigo de tracking didi SEO y WEB
const gtmEvent = (eventName, params) => {
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
};

export default gtmEvent;
