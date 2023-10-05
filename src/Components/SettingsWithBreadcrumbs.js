import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function LinkRouter(props) {
  return <RouterLink {...props} />;
}

function SettingsWithBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div>
      {/* Breadcrumbs for the "Settings" page */}
      <Breadcrumbs aria-label="breadcrumb">
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return last ? (
            <LinkRouter
              underline="hover"
              color="inherit"
              to={to}
              key={to}
            >
              {to === '/settings' ? 'Settings' : null}
            </LinkRouter>
          ) : (
            <LinkRouter
              underline="hover"
              color="inherit"
              to={to}
              key={to}
            >
              {to === '/settings' ? 'Settings' : null}
            </LinkRouter>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}

export default SettingsWithBreadcrumbs;
