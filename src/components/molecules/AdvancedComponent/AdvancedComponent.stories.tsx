/**
 * @see All Controls types [here](https://storybook.js.org/docs/react/essentials/controls#annotation)
 */

import ExampleComponentStory from '@atoms/ExampleComponent/ExampleComponent.stories';
import { VARIANTS } from '@atoms/ExampleComponent/ExampleComponent.types';
import type { AdvancedComponentProps } from '@molecules/AdvancedComponent/AdvancedComponent.types';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { JSXElementConstructor } from 'react';

import { AdvancedComponent as AdvancedComponentBase } from './AdvancedComponent';

interface AdvancedComponentStoryProps
  extends Omit<AdvancedComponentProps, 'heading'> {
  headingText: string;
  headingChildren: string;
  headingVariant?: VARIANTS;
}

type AdvancedComponentStoryType = ComponentStory<
  JSXElementConstructor<AdvancedComponentStoryProps>
>;

export default {
  component: AdvancedComponentBase,
  argTypes: {
    description: {
      control: 'text',
    },
    image: {
      control: 'object',
    },
    headingChildren: {
      control: 'text',
      type: { name: 'string', required: true },
    },
    headingText: {
      control: 'text',
      type: { name: 'string', required: true },
    },
    headingVariant: ExampleComponentStory.argTypes?.variant,
    heading: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<AdvancedComponentStoryProps>>;

const AdvancedComponentStory: AdvancedComponentStoryType = ({
  description,
  image,
  headingText,
  headingChildren,
  headingVariant,
}: AdvancedComponentStoryProps) => (
  <AdvancedComponentBase
    description={description}
    image={image}
    heading={{
      title: headingText,
      children: headingChildren,
      variant: headingVariant,
    }}
  />
);

export const AdvancedComponent = AdvancedComponentStory.bind({});
AdvancedComponent.args = {
  description: 'This is very nice card',
  image: {
    src: 'https://storybook.js.org/5bb136f4eaffaea791f0f679ac69018c/addon-controls-args-variant-string.png',
    alt: 'image from storybook',
  },
  headingChildren: 'additional subtitle',
  headingText: 'Nice Card',
  headingVariant: VARIANTS.LTR,
};
