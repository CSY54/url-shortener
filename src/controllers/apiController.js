import { create, StructError } from 'superstruct';

import urlService from '../services/urlService.js';
import { errorDto } from '../dtos/errorDto.js';
import { responseDto } from '../dtos/urlDto.js';

const uploadUrl = async (req, res) => {
  const { url, expireAt } = req.body;

  const [err, data] = await urlService.create({ url, expireAt });

  if (err !== undefined) {
    if (err instanceof StructError) {
      res.status(400).json(
        create(
          {
            message: `Key ${err.key} error: ${err.value}`,
          },
          errorDto,
        ),
      );
    } else {
      res.status(400).json(
        create(
          {
            message: err.message,
          },
          errorDto,
        ),
      );
    }
    return;
  }

  res.status(200).json(
    create(
      {
        id: data.id,
        shortUrl: data.id,
      },
      responseDto,
    ),
  );
};

export default {
  uploadUrl,
};
