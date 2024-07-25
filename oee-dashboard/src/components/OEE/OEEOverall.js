import React from 'react';
import styled from 'styled-components';

const OverallContainer = styled.div`
  padding: 20px;
  background: #f0f0f0;
  border-radius: 8px;
`;

const OEEOverall = ({ performance, quality, availability }) => {
  const overallOEE = (performance * quality * availability) / 10000;
  return (
    <OverallContainer>
      <h2>Overall OEE</h2>
      <p>{overallOEE.toFixed(2)}%</p>
    </OverallContainer>
  );
};

export default OEEOverall;
