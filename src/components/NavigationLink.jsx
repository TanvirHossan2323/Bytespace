import { navigateTo, routePath } from '../utils/publicPaths.js';

export default function NavigationLink({ to, onClick, children, ...props }) {
  function handleClick(event) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      props.target
    ) {
      return;
    }

    event.preventDefault();
    navigateTo(to);
  }

  return <a href={routePath(to)} onClick={handleClick} {...props}>{children}</a>;
}
