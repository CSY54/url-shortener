import { coerce, date, define, integer, object, string } from 'superstruct';
import isUrl from 'is-url';
import 'dotenv/config';

const toId = (value) => {
  if (!/^[A-Za-z0-9]+$/.test(value)) {
    return 0;
  }

  const id = atob(value);

  if (!/^[1-9][0-9]*$/.test(id)) {
    return 0;
  }

  return parseInt(id, 10);
};

const toResponseId = (value) => btoa(value).replaceAll('=', '');

const toShortUrl = (value) => `${process.env.URL}/${toResponseId(value)}`;

const redirectUrlId = coerce(integer(), string(), toId);

const url = define('url', (value) => {
  return isUrl(value) && value.length < 256;
});

const urlId = coerce(string(), integer(), (value) => value.toString());

const shortUrl = coerce(string(), integer(), toShortUrl);

const dateTime = coerce(date(), string(), (value) => new Date(value));

const redirectUrlDto = object({
  id: redirectUrlId,
});

const uploadUrlDto = object({
  url,
  expireAt: dateTime,
});

const responseDto = object({
  id: urlId,
  shortUrl,
});

export { redirectUrlDto, uploadUrlDto, responseDto };
