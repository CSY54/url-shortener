import { create } from 'superstruct';

import urlService from '../services/urlService.js';
import { isDateExpired } from '../utils.js';
import { errorDto } from '../dtos/errorDto.js';

const redirectUrl = async (req, res) => {
  const { urlId } = req.params;

  const [err, data] = await urlService.findUrl({ id: urlId });

  if (err !== undefined) {
    res.status(500).json();
    return;
  }

  if (data === null || isDateExpired(data.expireAt)) {
    res.status(404).json(
      create(
        {
          message: 'Link not found or expired',
        },
        errorDto,
      ),
    );
    return;
  }

  res.redirect(302, data.originalUrl);
};

export default {
  redirectUrl,
};
