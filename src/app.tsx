import { Routes, Route } from 'react-router';

import { SkipSelectPage } from '@app/pages/skip-select';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SkipSelectPage />} />
    </Routes>
  );
};
