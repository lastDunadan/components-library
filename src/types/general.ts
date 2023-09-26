import type { ReactElement, ReactNode } from 'react';

export type Children =
  | ReactNode
  | Array<ReactNode>
  | ReactElement
  | Array<ReactElement>;

declare global {
  /*
   If you want to add types declaration based on 3rd party services
   describe the object as needed and remove eslint-disable and ts-ignore
   */

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  type Window = object;
}

export interface PageProps {
  id: string;
}
