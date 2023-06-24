function GenerateNumberOfColorsInput() {
    // Clear previous inputs
    document.getElementById('inputdiv-clothes-per-color').innerHTML = ''

    const clothesPerColorInput = document.getElementById('inputdiv-clothes-per-color')
    const numberOfColors = document.getElementById('input-number-of-colors').value
    for(let i = 0; i < numberOfColors; ++i) {
        // Label HTML Element
        const colorLabel = document.createElement('label')
        colorLabel.htmlFor = 'color-input-' + (i + 1)
        colorLabel.innerHTML = 'Color ' + (i + 1)
        clothesPerColorInput.appendChild(colorLabel)

        // Input HTML Element
        const colorInput = document.createElement('input')
        colorInput.type = 'number'
        colorInput.placeholder = 'Enter number of clothes for color ' + (i + 1)
        colorInput.id = 'color-input-' + (i + 1)
        clothesPerColorInput.appendChild(colorInput)
        
        // Break HTML Element
        const breakElement = document.createElement('br')
        clothesPerColorInput.appendChild(breakElement)
    }    
}

function GenerateNumberOfTestsInputs() {
    // Clear previous inputs
    document.getElementById('inputdiv-number-of-tests').innerHTML = ''

    // Generate new inputs
    const numberOfTestsInput = document.getElementById('inputdiv-number-of-tests')
    const numberOfTests = document.getElementById('input-number-of-tests').value
    for(let i = 0; i < numberOfTests; ++i) {
        // Label HTML Element
        const testLabel = document.createElement('label')
        testLabel.htmlFor = 'test-input-' + (i + 1)
        testLabel.innerHTML = 'Test ' + (i + 1)
        numberOfTestsInput.appendChild(testLabel)

        // Input HTML Element
        const testInput = document.createElement('input')
        testInput.type = 'number'
        testInput.placeholder = 'Enter number of clothes for test ' + (i + 1)
        testInput.id = 'test-input-' + (i + 1)
        testInput.className = 'test-input'
        numberOfTestsInput.appendChild(testInput)

        // Break HTML Element
        const breakElement = document.createElement('br')
        numberOfTestsInput.appendChild(breakElement)
    }
}

function GenerateLayout() {
    // Clear previous results
    document.getElementById('results').innerHTML = ''

    // Get number of colors
    const numberOfColors = document.getElementById('input-number-of-colors').value

    // Get number of tests
    const numberOfTests = document.getElementById('input-number-of-tests').value
    
    // Get number of clothes per color
    const clothesPerColor = []
    for(let i = 0; i < numberOfColors; ++i) {
        clothesPerColor.push(document.getElementById('color-input-' + (i + 1)).value)
    }

    // Get number of clothes per test
    const clothesPerTest = []
    for(let i = 0; i < numberOfTests; ++i) {
        clothesPerTest.push(document.getElementById('test-input-' + (i + 1)).value)
    }

    // Generate layout
    for(let i = 0; i < numberOfTests; ++i) {
        const testLabel = document.createElement('h4')
        testLabel.innerHTML = 'Test ' + (i + 1) + ': ' + clothesPerTest[i] + ' clothes'
        document.getElementById('results').appendChild(testLabel)
        for(let j = 0; j < numberOfColors; ++j) {
            console.log(clothesPerTest[i], clothesPerColor[j])
            const numberOfPilePerColor = Math.floor(clothesPerColor[j] / clothesPerTest[i])
            const numberOfExtraPerColor = clothesPerColor[j] % clothesPerTest[i]
            const numberOfPileLabel = document.createElement('p')
            numberOfPileLabel.innerHTML = 'Test ' + (i + 1) + ' - Color ' + (j + 1) + ': ' + numberOfPilePerColor + ' pile(s)' + ' - ' + numberOfExtraPerColor + ' extra clothes'
            document.getElementById('results').appendChild(numberOfPileLabel)
        }
    }
}