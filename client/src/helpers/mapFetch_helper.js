async function fetchLocations(location) {
  const cityState = location.indexOf(',') !== -1 ? location.split(',').map(word => word.trim()):
  location.split(' ').map(word => word.trim())
  let locationResponse = await fetch('/api/v1/map_location', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      city: cityState[0],
      state: cityState[1]
    })
  })

  let newLocation = await locationResponse.json()

  return {
    lat: newLocation.features[0].center[1],
    lng: newLocation.features[0].center[0],
  }
}

export default fetchLocations;
