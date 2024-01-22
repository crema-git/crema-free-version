import { inputsConfigs } from './InputRoutes';
import { dataDisplayConfigs } from './DataDisplayRoutes';
import { navigationConfigs } from './NavigationRoutes';
import { surfaceConfigs } from './SurfaceRoutes';
import { feedbackConfigs } from './FeedbackRoutes';
import { layoutConfigs } from './LayoutRoutes';
import { utilConfigs } from './UtillRoutes';
import { dataGridConfigs } from './DataGridRoutes';
import { labConfigs } from './LabRoutes';

export const muiComponentConfigs = [
  ...inputsConfigs,
  ...dataDisplayConfigs,
  ...navigationConfigs,
  ...surfaceConfigs,
  ...feedbackConfigs,
  ...layoutConfigs,
  ...utilConfigs,
  ...dataGridConfigs,
  ...labConfigs,
];
