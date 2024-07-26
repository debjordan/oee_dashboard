import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OEEPerformance from './components/OEE/OEEPerformance';
import OEEQuality from './components/OEE/OEEQuality';
import OEEAvailability from './components/OEE/OEEAvailability';
import OEEOverall from './components/OEE/OEEOverall';
import apiService from './apiService';
const AppContainer = styled.div`
  padding: 40px;
  background: #e0e0e0;
`;

const App = () => {
  const [performance, setPerformance] = useState(85);
  const [quality, setQuality] = useState(90);
  const [availability, setAvailability] = useState(95);
  const [oeeRecords, setOeeRecords] = useState([]);
  
  useEffect(() => {
    const fetchOEERecords = async () => {
      try {
        const records = await apiService.getOEERecords();
        setOeeRecords(records);
        if (records.lenght > 0){
          setPerformance(records[0].performance);
          setQuality(records[0].quality);
          setAvailability(records[0].availability);
        }
      } catch (error) {
        console.error('Failed to fetch OEE records:', error);
      }
    };

    fetchOEERecords();
  }, []);

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
      <ul>
        {oeeRecords.map(record => (
          <li key={record.id}>
            Performance: {record.performance}, Quality: {record.quality}, Availability: {record.availability}
          </li>
        ))}
      </ul>
    </AppContainer>
  );
};

export default App;
