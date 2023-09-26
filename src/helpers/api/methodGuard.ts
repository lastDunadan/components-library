/**
 * Function that checks if the request method can be handled by API endpoint
 *
 * @see [docs](https://nextjs.org/docs/api-routes/introduction)
 * @see [example](https://github.com/vercel/next.js/blob/canary/examples/api-routes-rest/pages/api/user/%5Bid%5D.ts)
 * @packageDocumentation
 */

import type { NextApiRequest, NextApiResponse } from 'next';

import { CORS_HEADER } from '@/consts/api';

/**
 * Available methods that are handled by methodGuard
 */
export type Method = 'GET' | 'HEAD' | 'PUT' | 'PATCH' | 'POST' | 'DELETE';

/**
 * Class that is used in `try/catch` block in API endpoint to check, if an error
 * that occured is caused by MethodGuard or other reason.
 */
export class MethodException {
  public message = 'Method not allowed';

  constructor(public status: number) {}
}

/**
 * @param req -
 * @param res -
 * @param allowedMethods -
 */
export const methodGuard = (
  req: NextApiRequest,
  res: NextApiResponse,
  allowedMethods: Array<Method>,
): void | never => {
  res.setHeader('Access-Control-Allow-Origin', CORS_HEADER);

  if (allowedMethods.includes(<Method>req.method?.toUpperCase())) {
    return;
  }

  res.setHeader('Allow', allowedMethods);
  throw new MethodException(405);
};
