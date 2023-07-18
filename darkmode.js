class DarkMode {
  static get enabled() {
    const mode = localStorage.getItem('mode');
    return mode === 'dark' || (mode !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  static toggle() {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') localStorage.setItem('mode', 'light');
    else if (mode === 'light') localStorage.removeItem('mode');
    else localStorage.setItem('dark');
    return DarkMode.enabled;
  }
}
