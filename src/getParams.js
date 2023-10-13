const getParams = (url) => {
  const [textToConvert, searchParams] = url.slice(1).split('?');
  const targetCase = new URLSearchParams(searchParams).get('toCase');

  return [textToConvert, targetCase];
};

exports.getParams = getParams;
