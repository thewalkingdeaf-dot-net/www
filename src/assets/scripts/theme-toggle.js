const storageKey = 'theme-preference';
const lightLabel = '{{ meta.themeSwitch.light }}';
const darkLabel = '{{ meta.themeSwitch.dark }}';

const theme = {
  value: getColorPreference()
};

window.onload = () => {
  const darkThemeToggle = document.querySelector('#dark-theme-toggle');
  const lightThemeToggle = document.querySelector('#light-theme-toggle');
  const switcher = document.querySelector('[data-theme-switcher]');

  if (!switcher) {
    return;
  }

  switcher.removeAttribute('hidden');
  reflectPreference();

  darkThemeToggle.addEventListener('click', () => onClick('dark'));
  lightThemeToggle.addEventListener('click', () => onClick('light'));

  darkThemeToggle.setAttribute('aria-pressed', theme.value === 'dark');
  lightThemeToggle.setAttribute('aria-pressed', theme.value === 'light');
};

// sync with system changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({matches: isDark}) => {
    theme.value = isDark ? 'dark' : 'light';
    setPreference();
  });

function onClick(themeValue) {
  theme.value = themeValue;
  document
    .querySelector('#dark-theme-toggle')
    .setAttribute('aria-pressed', themeValue === 'dark');
    document
    .querySelector('#light-theme-toggle')
    .setAttribute('aria-pressed', themeValue === 'light');
  setPreference();
}

function getColorPreference() {
  if (localStorage.getItem(storageKey)) {
    return localStorage.getItem(storageKey);
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}

function setPreference() {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild.setAttribute('data-theme', theme.value);
  document.querySelector('#light-theme-toggle')?.setAttribute('aria-label', lightLabel);
  document.querySelector('#dark-theme-toggle')?.setAttribute('aria-label', darkLabel);
}

// set early so no page flashes / CSS is made aware
reflectPreference();
