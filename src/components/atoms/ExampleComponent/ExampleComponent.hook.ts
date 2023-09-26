import type { UseExampleComponent } from '@atoms/ExampleComponent/ExampleComponent.types';

export const useExampleComponent: UseExampleComponent = title => {
  const sanitizeTitle = () => title.toLowerCase();

  return { sanitizedTitle: sanitizeTitle() };
};
