/**
 * @see All Controls types [here](https://storybook.js.org/docs/react/essentials/controls#annotation)
 */

import { VARIANTS } from '@atoms/ExampleComponent/ExampleComponent.types';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ExampleComponent as ExampleComponentBase } from './ExampleComponent';

export default {
  component: ExampleComponentBase,
  argTypes: {
    title: { control: 'text' },
    variant: {
      description: 'Defines text direction',
      options: [VARIANTS.LTR, VARIANTS.RTL],
      control: {
        type: 'inline-radio',
        labels: {
          [VARIANTS.LTR]: 'Left to right',
          [VARIANTS.RTL]: 'Right to left',
        },
      },
    },
    children: { control: 'text' },
  },
} as ComponentMeta<typeof ExampleComponentBase>;

const ExampleComponentStory: ComponentStory<typeof ExampleComponentBase> = ({
  title,
  children,
  variant,
}) => (
  <ExampleComponentBase title={title} variant={variant}>
    {children}
  </ExampleComponentBase>
);

export const ExampleComponent = ExampleComponentStory.bind({});
ExampleComponent.args = {
  title: 'Example title',
  variant: VARIANTS.LTR,
  children: 'Some stuff',
};
