import React from 'react';
import styled from 'styled-components/native';

export default function CenterView({ children }) {
  return <CustomView>{children}</CustomView>;
}

const CustomView = styled.View`
  padding: 24px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: '#F5FCFF';
`;
