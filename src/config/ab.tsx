//* EXPERIMENT A/B
import gtmEvent from "./gtm";

const ab = (aVersionName: string, bVersionName: string, ls: string) => {
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    //? if was in a past experiment delete ls
    if (window.localStorage.getItem("test_version"))
      window.localStorage.removeItem("test_version");

    //? Only in Mexico HomePage run the test

    const test_version = window.localStorage.getItem(ls);

    //? if is a new user with no ls
    if (!test_version) {
      let group = Math.random();
      window.localStorage.setItem(ls, aVersionName);

      //? Im in B version
      if (group < 0.5) {
        window.localStorage.setItem(ls, bVersionName);
        gtmEvent(`ab-landing`, {
          version: "b",
          versionName: bVersionName,
        });
        return "b";
      } else {
        window.localStorage.setItem(ls, aVersionName);
        gtmEvent(`ab-landing`, {
          version: "a",
          versionName: aVersionName,
        });
        return "a";
      }
    }

    //? if is a old user and B version
    if (test_version === bVersionName) {
      gtmEvent(`ab-landing`, {
        version: "b",
        versionName: bVersionName,
      });
      return "b";
    }
    if (test_version === aVersionName) {
      gtmEvent(`ab-landing`, {
        version: "a",
        versionName: aVersionName,
      });
      return "a";
    }
  }

  return null;
};

export { ab };
