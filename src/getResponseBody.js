const { convertToCase } = require('./convertToCase');
const { getErrors } = require('./getErrors');

const getResponseBody = (textToConvert, targetCase) => {
  const errors = getErrors(textToConvert, targetCase);

  if (errors.length) {
    return { errors };
  }

  const convertedResult = convertToCase(textToConvert, targetCase);

  return {
    ...convertedResult,
    originalText: textToConvert,
    targetCase,
  };
};

exports.getResponseBody = getResponseBody;
