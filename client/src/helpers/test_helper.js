import fetchMock from 'fetch-mock';

export const resolveAfter2Seconds = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

export const mockFetchCalls = () => {
  fetchMock.post('/api/v1/current_temp', {
    status: 200,
    body: {
    "latitude": 40.016457,
    "longitude": -105.285884,
    "timezone": "America/Denver",
    "offset": -6,
    "currently": {
        "time": 1503165091,
        "summary": "Clear",
        "icon": "clear-day",
        "nearestStormDistance": 3,
        "nearestStormBearing": 183,
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 83.29,
        "apparentTemperature": 83.29,
        "dewPoint": 38.52,
        "humidity": 0.2,
        "windSpeed": 3.6,
        "windGust": 12.35,
        "windBearing": 228,
        "visibility": 10,
        "cloudCover": 0.01,
        "pressure": 1009.88,
        "ozone": 298.85,
        "uvIndex": 9
      }
    }  
  });
};
