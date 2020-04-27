import esmock from './esmock.js';

/**
 * @param {string} url
 * @param {object} context
 * @param {string} context.format
 * @param {function} defaultGetSource
 * @returns {object} response
 * @returns {string|buffer} response.source
 */
export async function getSource(url, context, defaultGetSource) {
  console.log(url, context);
  const { format } = context;
  
  if (esmock.contains())
  /*
  if (someCondition) {
    // For some or all URLs, do some custom logic for retrieving the source.
    // Always return an object of the form {source: <string|buffer>}.
    return {
      source: '...'
    };
  }
  */
  // Defer to Node.js for all other URLs.
  return defaultGetSource(url, context, defaultGetSource);
}

