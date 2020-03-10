function verifyString(maybeStr: unknown): maybeStr is string {
    return typeof maybeStr === 'string'
}