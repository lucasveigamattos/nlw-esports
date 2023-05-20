function convertHourStringToMinutes(hourString: string): number {
    const [hour, minutes] = hourString.split(":").map(Number)
    return hour * 60 + minutes
}

export default convertHourStringToMinutes