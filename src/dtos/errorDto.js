import { string, object } from 'superstruct';

const errorDto = object({
  message: string(),
});

// eslint-disable-next-line import/prefer-default-export
export { errorDto };
