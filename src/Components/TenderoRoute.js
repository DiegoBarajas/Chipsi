import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Store } from '../Store';

export default function TenderoRoute({ children }) {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return userInfo && userInfo.isTendero ? children : <Navigate to="/login" />;
}