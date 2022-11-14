export function sum(a: number, b: number) {
    return a + b;
}

export function mult(a: number, b: number) {
    return a * b;
}

export function splitIntoWordld(sentense: string) {
    const words = sentense.toLowerCase().split(" ")

    return words.map(w => w.replace("!", ""))
}