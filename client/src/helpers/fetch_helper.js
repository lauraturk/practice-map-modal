async function fetchConditions(location) {
  let conditionsResponse = await fetch('/api/v1/current_temp', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      long: location.lng,
      lat: location.lat
    })
  })

  let current = await conditionsResponse.json()

  return {
    condition: current.currently.icon,
    temp: current.currently.temperature,
    summary: current.currently.summary
  }
}

export default fetchConditions
