import { Container } from "typedi";
import { LocateController } from "../../../Infrastructure/LocateController";
import { RouteFactory } from "../../Factory/RouteFactory";

const routeFactory = Container.get(RouteFactory);
export const locateRoute = [
  routeFactory.createPostRoute("/api/locate/add", "add", LocateController),
  routeFactory.createPostRoute(
    "/api/locate/getById",
    "getById",
    LocateController
  ),
  routeFactory.createGetRoute(
    "/api/locate/deleteLocate/:imei",
    "deleteLocate",
    LocateController
  ),
  routeFactory.createGetRoute(
    "/api/locate/liste",
    "getListe",
    LocateController
  ),
  routeFactory.createPostRoute("/api/locate/getD", "getD", LocateController),
  routeFactory.createPostRoute(
    "/api/fromMobile",
    "fromMobile",
    LocateController
  ),
];
