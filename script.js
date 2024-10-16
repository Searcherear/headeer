function calculatePressure() {
    const force = document.getElementById('force').value;
    const area = document.getElementById('area').value;

    if (area > 0) {
        const pressure = force / area;
        document.getElementById('pressureResult').innerHTML = `Pressure = ${pressure.toFixed(2)} Pascals (N/m²)`;
    } else {
        document.getElementById('pressureResult').innerHTML = 'Area must be greater than 0!';
    }
}
