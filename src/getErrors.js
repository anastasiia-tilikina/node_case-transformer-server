/* eslint-disable max-len */
const messages = {
  textRequired: 'Text to convert is required. Correct request is: "/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
  toCaseRequired: '"toCase" query param is required. Correct request is: "/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
  toCaseInvalid: 'This case is not supported. Available cases: SNAKE, KEBAB, CAMEL, PASCAL, UPPER.',
};
const supportedCases = ['SNAKE', 'KEBAB', 'CAMEL', 'PASCAL', 'UPPER'];

const getErrors = (textToConvert, targetCase) => {
  const errors = [];
  const isValidCase = supportedCases.includes(targetCase);

  if (!textToConvert) {
    errors.push({ message: messages.textRequired });
  }

  if (!targetCase) {
    errors.push({ message: messages.toCaseRequired });
  }

  if (!isValidCase && targetCase) {
    errors.push({ message: messages.toCaseInvalid });
  }

  return errors;
};

exports.getErrors = getErrors;
