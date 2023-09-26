# Creating new Visual Components
Every new component should be placed in `/src/components/[atomic-design-level]`. Directory structure should look like this:

```
src
|-- components
  |--atoms
    |-- NewComponent
      |-- index.ts
      |-- NewComponent.tsx
      |-- NewComponent.styled.ts
      |-- NewComponent.stories.tsx
      |-- NewComponent.mocks.ts
      |-- NewComponent.types.ts
      |-- NewComponent.hook.ts
```

You can develop new component using storybook by running:

```bash
npm run storybook
```

and then go to `http://localhost:6006/`

## NewComponent.types.ts
This file should contain all constants and types and tsDoc for every type/interface/enum<br>
Every type/interface/enum has to be exported for documentation generation purposes

~~~typescript
/**
 * This component has representation in CMS as `LinkButton`.
 * @packageDocumentation
 *
 * @see [Implementation](/storybook/?path=/story/components-atoms-newcomponent)
 * 
 * ```jsx
 * import NewComponent, { VARIANTS } from '@atoms/NewComponent';
 * 
 * <NewComponent variant={VARIANTS.PRIMARY} />
 * ```
 */

/**
 * Color scheme for a component
 */
import type { ReactElement } from 'react';

export enum VARIANTS {
  /**
   * primary color as background, secondary as text
   */
  PRIMARY,
  /**
   * secondary color as background, primary as text
   */
  SECONDARY,
};

/**
 * Hook used in New Component
 */
export type UseNewComponent = () => {
  /**
   * info about what the state is holding
   */
  someState: string;
  /**
   * info about mutation function
   * @param newValue
   */
  mutateState: (newValue: string) => void;
}

export interface NewComponentProps {
  /**
   * @see {@link VARIANTS}
   * @defaultValue {@link VARIANTS.PRIMARY}
   */
  variant: VARIANTS;
  image: {
    src: string;
    alt: string;
  }
}

export type NewComponentType = (props: NewComponentProps) => ReactElement;
~~~

## NewComponent.hook.ts
This file should contain all logic used by the component. If the component has no logic, only represents data in a
correct visual way, this file can be omitted.
```typescript
import { useState, useEffect } from 'react';
import { UseNewComponent } from './NewComponent.types';

export const useNewComponent: UseNewComponent = () => {
  const [someState, setSomeState] = useState<string>(null);
  
  const mutateState = (newValue: string) => {
    setSomeState(prevState => prevState + newValue);
  };
  
  useEffect(() => {
    console.info('state changed');
  }, [someState]);
  
  return {
    someState,
    mutateState,
  };
};
```

## NewComponent.styled.ts
This file should contain all styled components used in New Component
~~~typescript
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const Button = styled.button`
  border-radius: 50%;
`;
~~~

## NewComponent.tsx
This file should contain only the appearance of the component<br />
Props has to be destructured in function parameters brackets
```typescript jsx
import React, { ReactElement } from 'react';
import { useNewComponent } from './NewComponent.hook';
import { Wrapper, Button } from './NewComponent.styled';
import { VARIANTS, NewComponentType } from './NewComponent.types';

export const NewComponent: NewComponentType = ({ variant }) => {
  const { someState, mutateState } = useNewComponent();
  
  return (
    <Wrapper>
      {variant}
      <Button onClick={(): void => mutateState(23)}>
        {someState}
      </Button>
    </Wrapper>
  );
};
```

## index.ts
This file should contain all exports needed to be imported to use this component.<br />
Main Component has to be exported as default
```typescript
export { NewComponent as default } from './NewComponent';
export { VARIANTS } from './NewComponent.types';
export type { NewComponentProps } from './NewComponent.types';
```

## NewComponent.mocks.ts
If your component story need some large mocked data, it should be declared here
```typescript
import type { NewComponentProps } from './NewComponent.types';

export const SomeLargeObjectToMock: NewComponentProps = {...};
```

## NewComponent.stories.tsx
This file contains story with new Component in storybook. The title for a story is generated automatically
based on directory the component is placed. i.e. an atom component will get a title `Components>Atoms>[story_function_name]`<br />
It should also contain controls for every prop the component uses.<br />
In this file you can create different logic, new styled components or types that are needed to properly describe a story
but it's not used in any other implementation

```typescript jsx
import type { JSXElementConstructor } from 'react';
import { NewComponent as NewComponentBase } from './NewComponent';
import type { NewComponentProps } from './NewComponent.types';
import { VARIANTS } from './NewComponent.types';
import { ComponentMeta, ComponentStory } from '@storybook/react';

interface NewComponentStoryProps extends Omit<NewComponentProps, 'image'> {
  imageSource: string;
  imageAlt: string;
}

type NewComponentStoryType = ComponentStory<JSXElementConstructor<NewComponentStoryProps>>;

export default {
  component: NewComponentBase,
  argTypes: {
    variant: {
      options: [VARIANTS.PRIMARY, VARIANTS.SECONDARY],
      control: {
        type: 'inline-radio',
        labels: {
          [VARIANTS.PRIMARY]: 'primary',
          [VARIANTS.SECONDARY]: 'secondary',
        },
      },
    },
    imageSource: {
      control: 'text',
      type: { name: 'string', required: true },
    },
    imageAlt: {
      control: 'text',
      type: { name: 'string', required: true },
    },
    image: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<NewComponentStoryProps>>;

const NewComponentStory: NewComponentStoryType = ({
  variant,
  imageSource,
  imageAlt,
}) => (
  <NewComponentBase variant={variant} image={{ src: imageSource, alt: imageAlt }} />
);

export const NewComponent = NewComponentStory.bind({});
NewComponent.args = {
  variant: VARIANTS.PRIMARY,
  imageSource: 'path/to/image',
  imageAlt: 'alternative text',
};
```
