// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "a" es convertida en "ai"
// La letra "e" es convertida en "enter"
// La letra "i" es convertida en "imes"
// La letra "o" es convertida en "ober"
// La letra "u" es convertida en "ufat"

// Requisitos:

// Debe funcionar solo con letras minúsculas
// No deben ser utilizados letras con acentos ni caracteres especiales
// Debe ser posible desencriptar una palabra encriptada a su versión original
// Por ejemplo: "gato" => "gaitober" gaitober" => "gato"

// Campos para inserción del texto que será encriptado o desencriptado.
// El resultado debe ser mostrado en la pantalla.

const KEYS = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}

const KEYS_REVERSE = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u'
}

const input = document.querySelector('input')
const output = document.getElementById('output')
const encryptButton = document.getElementById('encrypt')
const decryptButton = document.getElementById('decrypt')
const invertButton = document.getElementById('invert')

const encrypt = (text) => {
    const newText = text
        .split('')
        .map(char => KEYS[char] ? KEYS[char] : char)
        .join('')

    return newText
}

const decrypt = (text) => {
    const newText = text
        .replace(/ai|enter|imes|ober|ufat/g, match => KEYS_REVERSE[match])

    return newText


    // let newText = ''

    // for (let i = 0; i < text.length; i++) {
    //     if (text[i] === 'a' && text[i + 1] === 'i') {
    //         newText += 'a'
    //         i++
    //     } else if (text[i] === 'e' && text[i + 1] === 'n' && text[i + 2] === 't' && text[i + 3] === 'e' && text[i + 4] === 'r') {
    //         newText += 'e'
    //         i += 4
    //     } else if (text[i] === 'i' && text[i + 1] === 'm' && text[i + 2] === 'e' && text[i + 3] === 's') {
    //         newText += 'i'
    //         i += 3
    //     } else if (text[i] === 'o' && text[i + 1] === 'b' && text[i + 2] === 'e' && text[i + 3] === 'r') {
    //         newText += 'o'
    //         i += 3
    //     } else if (text[i] === 'u' && text[i + 1] === 'f' && text[i + 2] === 'a' && text[i + 3] === 't') {
    //         newText += 'u'
    //         i += 3
    //     } else {
    //         newText += text[i]
    //     }
    // }

    // return newText
}

encryptButton.addEventListener('click', () => {
    const text = input.value
    const encryptedText = encrypt(text)

    output.textContent = encryptedText
})

decryptButton.addEventListener('click', () => {
    const text = input.value
    const decryptedText = decrypt(text)

    output.textContent = decryptedText
})

invertButton.addEventListener('click', () => {
    const outputText = output.textContent
    input.value = outputText.trim()
})
