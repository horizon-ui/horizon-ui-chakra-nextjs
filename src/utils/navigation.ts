import { IRoute } from "types/navigation";

// NextJS Requirement
export const isWindowAvailable = () => typeof window !== "undefined";

export const findCurrentRoute = (routes: IRoute[]): IRoute => {
  const foundRoute: IRoute = routes.find(
    (route) =>
      isWindowAvailable() &&
      window.location.href.indexOf(route.layout + route.path) !== -1 &&
      route
  );

  return foundRoute;
};

// ... other imports and code

export const getActiveRoute = (routes, id) => {
  if (typeof window === 'undefined') {
    return 'Default Brand Text';
  }

  let activeRoute = 'Default Brand Text';
  for (let i = 0; i < routes.length; i++) {
    if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
      activeRoute = routes[i].name;
      if (id) {
        activeRoute += ` (${id})`;
      }
      return activeRoute;
    }
  }
  return activeRoute;
};

export const getActiveNavbar = (routes) => {
  if (typeof window === 'undefined') {
    return false;
  }

  for (let i = 0; i < routes.length; i++) {
    if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
      return routes[i].secondary;
    }
  }
  return false;
};

// ... rest of the code

export const getActiveNavbarText = (routes: IRoute[]): string | boolean => {
  return getActiveRoute(routes) || false;
};
