import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOps } from '../../redux/auth';

export default function LocatinTocen() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(location.search);
  }, [location]);

  if (location.pathname === '/api/training') {
    const paramMap = {};
    location.search
      .substring(location.search.indexOf('?') + 1)
      .split('&')
      .forEach(function (val) {
        var param = val.split('=');
        paramMap[param[0]] = param[1];
      });

    // console.log(paramMap);

    dispatch(authOps.loginGoogle(paramMap));
    return paramMap.token;
  }
}