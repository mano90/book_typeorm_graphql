import { Container } from "typedi";
import { DeviceController } from "../../../Infrastructure/DeviceController";
import { RouteFactory } from "../../Factory/RouteFactory";

const routeFactory = Container.get(RouteFactory);
export const deviceRoute = [
  routeFactory.createPostRoute("/api/device/add", "add", DeviceController),
  routeFactory.createGetRoute(
    "/api/device/deleteDevice/:imei",
    "deleteDevice",
    DeviceController
  ),
  routeFactory.createGetRoute("/api/device/liste", "liste", DeviceController),
  routeFactory.createGetRoute("/api/check", "check", DeviceController),
];
