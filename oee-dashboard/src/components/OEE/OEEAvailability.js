import React from 'react';
import styled from 'styled-components';

const AvailabilityContainer = styled.div`
  padding: 20px;
  background: #f0f0f0;
  border-radius: 8px;
`;

const OEEAvailability = ({ value }) => (
  <AvailabilityContainer>
    <h2>Availability</h2>
    <p>{value}%</p>
  </AvailabilityContainer>
);

export default OEEAvailability;
