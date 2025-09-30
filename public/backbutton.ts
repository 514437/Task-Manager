const pushState = (): void => {
  history.pushState(null, null, location.href);
};

window.addEventListener('popstate', (): void => {
  pushState();
});