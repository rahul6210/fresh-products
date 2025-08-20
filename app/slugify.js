const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')  // Replace spaces and non-word characters with a single dash
    .replace(/^-+|-+$/g, '');   // Remove leading/trailing dashes
};

export default slugify;
