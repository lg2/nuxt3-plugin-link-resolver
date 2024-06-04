import linkResolverJSON from "~/assets/jsons/link-resolver.json";
const linkResolver = function (data) {
  let route = { ...linkResolverJSON[data.__typename] };
  if (route) {
    if (route.params) {
      const params = {};
      Object.entries(route.params).forEach((param) => {
        if (param[1].indexOf(".") > -1) {
          const split = param[1].split(".");
          params[param[0]] = data[split[0]][split[1]];
        } else {
          params[param[0]] = data[param[1]];
        }
      });
      route.params = params;
    }
    return route;
  } else {
    console.warn(
      "no route for : ",
      data,
      "in route",
      process.client && window.location.href
    );
    return {};
  }
};
export default linkResolver;
