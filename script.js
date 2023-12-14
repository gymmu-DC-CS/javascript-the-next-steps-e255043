export function exercise01(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      result.push("")
    } else if (currentElement === "E") {
      result.push("")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function exercise02(args) {
  return args.toUpperCase()
}

export function exercise03(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Should only include 'e'
    if (currentElement === "e") {
      count = count + 1
    }

    // Should only count 'E'
    else if (currentElement === "E") {
      count = count + 1
    }
  }
  return count
}

export function exercise04(args) {
  const input = args
  let count = 1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Check if the current character is a space
    if (currentElement === " ") {
      count = count + 1
    }
  }
  return count
}
export function exercise05(args) {
  const input = args
  const result = []
  let capitalLetters = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const asciiCode = currentElement.charCodeAt(0)
    if (asciiCode >= 65 && asciiCode <= 90) {
      return true
    }
  }

  return false
}
