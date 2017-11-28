const TEMPLATED_FILENAME_PATTERN = /[^<]*(%([^%]*)%).*/g;

function transformTemplatedName(src, templateProps = {}) {
  let matches = Object.create(null);
  let match;

  while ((match = TEMPLATED_FILENAME_PATTERN.exec(src))) {
    matches[match[2]] = match[1];
  }

  if (matches) {
    for (match in matches) {
      if (!templateProps[match]) {
        throw new Error(
          `The ${match} property is not present in the templateProps`
        );
      }

      src = src.replace(new RegExp(matches[match], 'g'), templateProps[match]);
    }
  }

  return src;
}

module.exports = {
  transformTemplatedName,
};
