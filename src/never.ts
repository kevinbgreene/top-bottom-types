const stringOrNum: string | number = "I can't be a never"

if (typeof stringOrNum === 'string') {
    console.log('I am a string')
} else if (typeof stringOrNum === 'number') {
    console.log('I am a number')
} else {
    const _exhaustiveCheck: never = stringOrNum
    throw new Error(`Unknown type ${_exhaustiveCheck}`)
}

function fail(msg: string): never {
    throw new Error(msg)
}