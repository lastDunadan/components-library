import ExampleComponent from '@atoms/ExampleComponent';

import type { AdvancedComponentType } from './AdvancedComponent.types';

export const AdvancedComponent: AdvancedComponentType = ({
  heading,
  image,
  description,
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '250px' }}>
    <ExampleComponent {...heading} />
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <img {...image} />
    <p>{description}</p>
  </div>
);
