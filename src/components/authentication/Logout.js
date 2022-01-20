import React from 'react';
import LogoutContent from 'components/authentication/LogoutContent';

import AuthCardLayout from 'layouts/AuthCardLayout';

const Logout = () => {
  return (
    <AuthCardLayout footer={false}>
      <div className="text-center">
        <LogoutContent layout="card" titleTag="h3" />
      </div>
    </AuthCardLayout>
  );
};

export default Logout;
