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

const input = document.querySelector('textarea')
const output = document.getElementById('output')
const encryptButton = document.getElementById('encrypt')
const decryptButton = document.getElementById('decrypt')
const copyInput = document.getElementById('copy-input')
const copyOutput = document.getElementById('copy-output')

const encrypt = (text) => {
    return text
        .split('')
        .map(char => KEYS[char] ? KEYS[char] : char)
        .join('')
}

const decrypt = (text) => {
    return text
        .replace(/ai|enter|imes|ober|ufat/g, match => KEYS_REVERSE[match])
}

const validateInput = (text) => {
    if (!text) {
        window.alert('Ingrese un texto para encriptar o desencriptar')
        return false
    }

    if (text.split('').some(char => !char.match(/[a-z]/))) {
        window.alert('Solo se permiten letras minúsculas sin acentos ni caracteres especiales')
        return false
    }

    return true

}

encryptButton.addEventListener('click', () => {
    const text = input.value

    if (!validateInput(text)) {
        return
    }

    output.textContent = encrypt(text)
})

decryptButton.addEventListener('click', () => {
    const text = input.value

    if (!validateInput(text)) {
        return
    }

    output.textContent = decrypt(text)
})

const copyToClipboard = (text) => {
    if (text) {
        navigator.clipboard.writeText(text)
        window.alert('Texto copiado en el portapapeles')
    }
}

copyInput.addEventListener('click', () => {
    copyToClipboard(input.value)
})

copyOutput.addEventListener('click', () => {
    copyToClipboard(output.textContent.trim())
})
