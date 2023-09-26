/**
 * This component has representation in CMS as `ImageCard`.<br />
 * It renders a heading with an image and description defined in CMS
 *
 * @packageDocumentation
 *
 * @see [Implementation](/storybook/?path=/story/components-molecules-advancedcomponent)
 *
 * ```jsx
 * import AdvancedComponent from '@molecules/AdvancedComponent';
 *
 * <AdvancedComponent
 *  image={{
 *    src: 'path/to/image',
 *    alt: 'alt for image',
 *  }}
 *  description="some description"
 *  heading={{
 *    title: 'Card title',
 *    children: 'quick introduction',
 *  }}
 * />
 * ```
 */

import type { ExampleComponentProps } from '@atoms/ExampleComponent';
import type { ReactElement } from 'react';

/**
 * defines text direction
 */

export interface AdvancedComponentProps {
  image: {
    /**
     * Path to an image
     */
    src: string;
    /**
     * Alternative text for an image
     */
    alt: string;
  };
  /**
   * description represented below an image
   */
  description: string;
  heading: ExampleComponentProps;
}

/**
 * @group Components
 */
export type AdvancedComponentType = (
  props: AdvancedComponentProps,
) => ReactElement;
