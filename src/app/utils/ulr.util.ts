import { URL_PATTERN } from "../constants/patterns.constant";

export function isValidURL(value: string) {
    return URL_PATTERN.test(
        value
    );
}
