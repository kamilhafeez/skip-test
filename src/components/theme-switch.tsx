import { useCallback, useEffect, useState } from 'react';

import { SunIcon, MoonIcon } from '@app/components/icons';
import { Toggle } from '@app/components/toggle';

export const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme-mode') === 'dark');

  useEffect(() => {
    if (isDark) {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  }, [isDark]);

  const onToggle = useCallback(() => {
    setIsDark((state) => {
      const toggle = !state;
      localStorage.setItem('theme-mode', toggle ? 'dark' : 'light');
      return toggle;
    });
  }, []);

  return (
    <div className="inline-flex gap-2 items-center absolute top-3 right-3">
      <SunIcon className="w-6 h-6" />
      <Toggle onToggle={onToggle} checked={isDark} />
      <MoonIcon className="w-6 h-6" />
    </div>
  );
};
