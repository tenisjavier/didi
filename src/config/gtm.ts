// codigo de tracking didi SEO y WEB

const gtmEvent = (
  eventName: string,
  params?: { [key: string]: string | undefined }
) => {
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    // @ts-ignore
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
};

export default gtmEvent;
