export function publicPath(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}

export function routePath(path) {
  const normalizedPath = `/${path.replace(/^\/+/, '')}`;
  return import.meta.env.BASE_URL === '/' ? normalizedPath : `${import.meta.env.BASE_URL}#${normalizedPath}`;
}

export function navigateTo(path) {
  window.history.pushState({}, '', routePath(path));
  window.dispatchEvent(new PopStateEvent('popstate'));
}
