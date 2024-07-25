import React from 'react';
import styled from 'styled-components';

const PerformanceContainer = styled.div`
  padding: 20px;
  background: #f0f0f0;
  border-radius: 8px;
`;

const OEEPerformance = ({ value }) => (
  <PerformanceContainer>
    <h2>Performance</h2>
    <p>{value}%</p>
  </PerformanceContainer>
);

export default OEEPerformance;
