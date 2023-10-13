const { convertToCase } = require('./convertToCase');
const { getErrors } = require('./getErrors');

const getResponse = (textToConvert, targetCase) => {
  const errors = getErrors(textToConvert, targetCase);

  if (errors.length) {
    return { code: 400, data: { errors } };
  }

  const convertedResult = convertToCase(textToConvert, targetCase);

  return {
    code: 200,
    data: {
      ...convertedResult,
      originalText: textToConvert,
      targetCase,
    },
  };
};

exports.getResponse = getResponse;
