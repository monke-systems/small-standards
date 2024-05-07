import type * as http from 'http';

export type ActuatorRouteHandler = (
  req: http.IncomingMessage,
  res: http.ServerResponse,
) => void;

export type Actuator = {
  registerRoute: (path: string, handler: ActuatorRouteHandler) => void;
};
