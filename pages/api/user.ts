import type { NextApiHandler } from 'next';

import { MethodException, methodGuard } from '@/helpers/api/methodGuard';
import type { GetUserResponse } from '@/types/swagger';

const handler: NextApiHandler<GetUserResponse> = async (req, res) => {
  try {
    await methodGuard(req, res, ['GET']);

    if (!req.query?.id) {
      res.status(400).end('Missing user ID');
      return;
    }

    const userId = parseInt(req.query.id as string, 10);

    if (userId > 100) {
      res.status(404).end('User not found');
      return;
    }

    res.status(200).json({
      id: userId,
      name: 'John Doe',
      hobbies: ['swimming', 'skating', 'skiing'],
    });
  } catch (e) {
    if (e instanceof MethodException) {
      res.status(e.status).end(e.message);
      return;
    }

    res.status(500).end(e);
  }
};

export default handler;
