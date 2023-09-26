import type { ExampleComponent as ExampleComponentType } from './ExampleComponent.types';
import { VARIANTS } from './ExampleComponent.types';

export const ExampleComponent: ExampleComponentType = ({
  title,
  children,
  variant = VARIANTS.LTR,
}) => (
  <div style={{ direction: variant }}>
    <h1>{title}</h1>
    {children}
  </div>
);
