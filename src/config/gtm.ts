// codigo de tracking didi SEO y WEB

let dataLayer = [{}];
const gtmEvent = (
  eventName: string,
  params?: { [key: string]: string | undefined }
) => {
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    dataLayer.push({
      event: eventName,
      ...params,
    });
  }
};

export default gtmEvent;
