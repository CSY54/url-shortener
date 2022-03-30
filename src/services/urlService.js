import { validate } from 'superstruct';

import { redirectUrlDto, uploadUrlDto } from '../dtos/urlDto.js';
import urlRepository from '../repositories/urlRepository.js';
import { isValidDate, isDateExpired } from '../utils.js';

const create = async (data) => {
  const [err, validated] = validate(data, uploadUrlDto, { coerce: true });

  if (err !== undefined) {
    return [err, undefined];
  }

  if (!isValidDate(validated.expireAt)) {
    return [new Error('Invalid date'), undefined];
  }

  if (isDateExpired(validated.expireAt)) {
    return [new Error('Time already expired'), undefined];
  }

  const rec = await urlRepository.create(validated);
  return [undefined, rec];
};

const findUrl = async (data) => {
  const [err, validated] = validate(data, redirectUrlDto, { coerce: true });

  if (err !== undefined) {
    return [err, undefined];
  }

  const rec = await urlRepository.findOne(validated);

  return [undefined, rec];
};

export default {
  create,
  findUrl,
};
