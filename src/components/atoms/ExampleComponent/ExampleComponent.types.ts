/**
 * This component has no representation in CMS.<br />
 * It represents basic entry with additional title as `<h1 />` element
 *
 * @packageDocumentation
 *
 * @see [Implementation](/storybook/?path=/story/components-atoms-examplecomponent)
 *
 * ```jsx
 * import ExampleComponent, { VARIANTS } from '@atoms/ExampleComponent';
 *
 * <ExampleComponent variant={VARIANTS.LTR} title="some nicely touched title">
 *    <p>
 *      Some stuff like
 *      <ul>
 *        <li>one</li>
 *        <li>two</li>
 *      </ul>
 *    </p>
 * </ExampleComponent>
 * ```
 */

import type { ReactElement } from 'react';

import type { Children } from '@/types/general';

/**
 * defines text direction
 */
export enum VARIANTS {
  /**
   * left to right
   */
  LTR = 'ltr',
  /**
   * right to left
   */
  RTL = 'rtl',
}

export interface ExampleComponentProps {
  /**
   * title to be represented as `<h1 />` element
   */
  title: string;
  /**
   * Any react children to be rendered below title
   */
  children: Children;
  /**
   * @defaultValue {@link VARIANTS.LTR}
   */
  variant?: VARIANTS;
}

/**
 * @group Components
 */
export type ExampleComponent = (props: ExampleComponentProps) => ReactElement;

/**
 * @group Hooks
 */
export type UseExampleComponent = (title: string) => {
  /**
   * lowercase title
   */
  sanitizedTitle: string;
};
