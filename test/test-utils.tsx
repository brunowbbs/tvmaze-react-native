import React from 'react';
import {render, RenderResult} from '@testing-library/react-native';

import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {queries: {cacheTime: Infinity}},
});

export const renderWithQuery = (children: React.ReactNode): RenderResult =>
  render(
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
  );
