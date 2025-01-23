export const MODE: 'development' | 'production' =
  process.env.NODE_ENV === 'test' ? 'development' : (process.env.NODE_ENV as 'production');
export const IS_PRODUCTION_MODE = MODE === 'production';
