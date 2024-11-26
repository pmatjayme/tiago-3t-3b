const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
}

export {getCSS}