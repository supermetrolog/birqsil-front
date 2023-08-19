import {integer} from "vscode-languageserver-types";

export const getLevelPart = (hostname: string, level: integer): string => {
    const parts: string[] = hostname.split('.');
    return parts[parts.length - level];
}

export const getLastLevelPart  = (hostname: string): string => {
    const parts: string[] = hostname.split('.');
    return parts[0];
}