import { inputsConfigs } from "./InputRoutes";
import { dataDisplayConfigs } from "./DataDisplayRoutes";
import { navigationConfigs } from "./NavigationRoutes";
import { surfaceConfigs } from "./SurfaceRoutes";
import { feedbackConfigs } from "./FeedbackRoutes";

export const muiComponentConfigs = [
  ...inputsConfigs,
  ...dataDisplayConfigs,
  ...navigationConfigs,
  ...surfaceConfigs,
  ...feedbackConfigs,
];
