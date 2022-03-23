import { useQuery } from 'react-query';
import axiosinstance from '_services/AxiosInstance';

let API_URI = process.env.REACT_APP_API_URI;

const fetchRolePermissions = roleName => {
  return axiosinstance.get(
    `${API_URI}/User/GetPermissions?RoleName=${roleName}`
  );
};

export const useRolePermissionsData = roleName => {
  return useQuery(
    ['role-permissions', roleName],
    () => fetchRolePermissions(roleName),
    {
      cacheTime: 600000, // 60 min
      staleTime: 300000, // 30 min
      refetchOnMount: false,
      refetchOnWindowFocus: false
    }
  );
};

export const fetchExtensionRole = authCtx => {
  if (authCtx.isAuthenticated) {
    return authCtx?.account?.idTokenClaims?.extension_Role || '';
  } else {
    console.log(`Error - isAuthenticated: ${authCtx?.isAuthenticated}`);
    return '';
  }
};
