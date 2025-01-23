import { render, screen, waitFor } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import { describe, it } from 'vitest';

import { MOCK_APP_LOAD_CONTEXT } from '../../__mocks__/app-load-context';
import IndexRoute from '../_index';

const renderRootIndexRoute = () => {
  const RootIndexRouteStub = createRoutesStub([{ path: '/', Component: IndexRoute }], MOCK_APP_LOAD_CONTEXT);

  return render(<RootIndexRouteStub />);
};

describe('Root Index Route', () => {
  it('should render index route', async () => {
    renderRootIndexRoute();

    await waitFor(() => screen.findByText('Welcome'));
  });
});
