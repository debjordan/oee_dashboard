import React, { useState } from 'react';
import styled from 'styled-components';
import OEEPerformance from './components/OEE/OEEPerformance';
import OEEQuality from './components/OEE/OEEQuality';
import OEEAvailability from './components/OEE/OEEAvailability';
import OEEOverall from './components/OEE/OEEOverall';

const AppContainer = styled.div`
  padding: 40px;
  background: #e0e0e0;
`;

const App = () => {
  const [performance, setPerformance] = useState(85);
  const [quality, setQuality] = useState(90);
  const [availability, setAvailability] = useState(95);

  return (
    <AppContainer>
      <h1>OEE Dashboard</h1>
      <OEEPerformance value={performance} />
      <OEEQuality value={quality} />
      <OEEAvailability value={availability} />
      <OEEOverall
        performance={performance}
        quality={quality}
        availability={availability}
      />
    </AppContainer>
  );
};

export default App;
