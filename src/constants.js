export const LANGUAGES = [
  {
    value: `pt_BR`,
    label: `portuguese`,
  },
  {
    value: `en_US`,
    label: `english`,
  },
  {
    value: `es`,
    label: `spanish`,
  },
];

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  REDIRECT: 302,
  NOTMODIFIED: 304,
  BADREQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  NOTACCEPTABLE: 406,
  INTERNAL_SERVER_ERROR: 500,
  BADGATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
};

export const IS_PRODUCTION = process.env.NODE_ENV === `production`;
