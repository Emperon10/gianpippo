input.onButtonPressed(Button.A, function () {
    basic.showNumber(Environment.octopus_BME280(Environment.BME280_state.BME280_humidity))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C))
    basic.clearScreen()
})
for (let index = 0; index < 4; index++) {
	
}
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
})
