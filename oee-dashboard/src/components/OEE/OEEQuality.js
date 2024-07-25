import React from 'react';
import styled from 'styled-components';

const QualityContainer = styled.div`
  padding: 20px;
  background: #f0f0f0;
  border-radius: 8px;
`;

const OEEQuality = ({ value }) => (
  <QualityContainer>
    <h2>Quality</h2>
    <p>{value}%</p>
  </QualityContainer>
);

export default OEEQuality;
