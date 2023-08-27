const textFormatter = {
    ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
}
const dateFormatter = {
    locale(date: string, locale: Intl.LocalesArgument, options: Intl.DateTimeFormatOptions = {}) {
        const localDate: Date = new Date(date);
        return localDate.toLocaleString(locale, options);
    }
}

export default {
    currency(number: number|null, lang: string = 'ru', defaultValue: string = '(not set)', options: Intl.NumberFormatOptions = {}) {
        if (number === null) {
            return defaultValue;
        }

        const defaultOptions: Intl.NumberFormatOptions = {
            style: 'currency',
            currency: 'RUB',
            ...options
        };
        return new Intl.NumberFormat(lang, defaultOptions).format(number);
    },
    number(number, lang: string = 'ru', defaultValue: string = '(not set)', options: Intl.NumberFormatOptions = {}) {
        if (number === null) {
            return defaultValue;
        }

        return new Intl.NumberFormat(lang, options).format(number);
    },
    text() {
        return textFormatter;
    },
    date() {
        return dateFormatter;
    }
};