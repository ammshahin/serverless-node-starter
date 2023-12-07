export const easyResponse = (data = {}, statusCode = 500, message = '') => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
  };
  switch (statusCode) {
    case 200:
      return {
        statusCode,
        headers,
        body: JSON.stringify({
          data,
          message: message || 'Function Execution successful',
        }),
      };
    case 400:
      return {
        statusCode,
        headers,
        body: JSON.stringify({ error: message || 'Bad Request' }),
      };
    case 404:
      return {
        statusCode,
        headers,
        body: JSON.stringify({ error: message || 'Not Found' }),
      };
    case 500:
      return {
        statusCode,
        headers,
        body: JSON.stringify({
          error: data || null,
          message: message || 'Internal Server Error',
        }),
      };
    default:
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: data || null,
          message: 'Invalid status code',
        }),
      };
  }
};
