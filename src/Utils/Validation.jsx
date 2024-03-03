export const requiredField = (value) => {
    if (value) return undefined;
    return 'It is required field'
}

export const maxLenCreator = (maxLen) => (value) => {
    if (value.length > maxLen) return `Max lenght is ${maxLen}`
    return undefined;
}

export const minLenCreator = (minLen) => (value) => {
    if (value.length < minLen) return `Min lenght is ${minLen}`
    return undefined;
}