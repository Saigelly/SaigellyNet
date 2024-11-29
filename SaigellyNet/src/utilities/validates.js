export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

export const required = (value) => {
    return value
        ? undefined
        : "Обязательное поле"
}

export const maxLength = (length) =>
    (value) => {
        return value && value.length > length
            ? `Максимальное число символов : ${length}`
            : undefined

    }