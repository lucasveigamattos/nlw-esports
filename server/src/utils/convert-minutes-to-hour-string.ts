function converMinutesToHourString(minutes: number): string {
    return `${Math.floor(minutes / 60)}:${minutes % 60}`
}

export default converMinutesToHourString