export function getLastLabel(breadcrumbs) {
  const lastBreadCrumb = breadcrumbs[breadcrumbs.length - 1].label;
  return lastBreadCrumb;
};

export function pluralise(number) {
  return number > 1 ? 's' : '';
};

export function formatName(string) {
  const decamelize = string.replace(/([a-z])([A-Z][a-z])/g, "$1 $2");
  const newString = decamelize.replace(/_/g, ' ');
  return newString.trim();
};