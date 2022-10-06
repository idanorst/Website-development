// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector)
    if (element) {
        return element
    } else {
        throw new Error('Something went wrong, make sure that ${selector} exists or is typed correctly.')
    }
}


// Open "Velkommen"-dropdown
const velkommenDropDown = selectElement('#velkommen-drop-down')

const toggleVelkommenMenu = () => {
    const dropDownMenu = selectElement('#drop-down-velkommen')
    dropDownMenu.classList.toggle('activated')
    velkommenDropDown.classList.toggle('activated')
}

velkommenDropDown.addEventListener('mouseover', toggleVelkommenMenu)

// Open "Mer"-dropdown
const merDropDown = selectElement('#mer-drop-down')

const toggleMerMenu = () => {
    const dropDownMenu = selectElement('#drop-down-mer')
    dropDownMenu.classList.toggle('activated')
    merDropDown.classList.toggle('activated')
}

merDropDown.addEventListener('mouseover', toggleMerMenu)


/* TODO: Change from 'onclick' to 'onmouseover' */
window.onclick = function(event) {
    if (!event.target.matches('.drop-down-velkommen')) {
        console.log('Clicked outside')
        let dropdowns = document.getElementsByClassName("drop-down-velkommen")
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropDown = dropdowns[i]
            if (openDropDown.classList.contains('activated')) {
                openDropDown.classList.remove('activated')
            }
        }
    }
    if (!event.target.matches('.drop-down-mer')) {
        let dropdowns = document.getElementsByClassName("drop-down-mer")
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropDown = dropdowns[i]
            if (openDropDown.classList.contains('activated')) {
                openDropDown.classList.remove('activated')
            }
        }
    }
}
/* 
// Open "Mer"-dropdown
const merDropDown = selectElement('#mer-drop-down')

const toggleMerMenu = () => {
    const dropDownMenu = selectElement('#drop-down-mer')
    dropDownMenu.classList.toggle('activated')
    merDropDown.classList.toggle('activated')
}

merDropDown.addEventListener('mouseover', toggleMerMenu) */


/* // TODO: Change from 'onclick' to 'onmouseover' 
window.onclick = function(event) {
    if (!event.target.matches('.drop-down-mer')) {
        let dropdowns = document.getElementsByClassName("drop-down-mer")
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropDown = dropdowns[i]
            if (openDropDown.classList.contains('activated')) {
                openDropDown.classList.remove('activated')
            }
        }
    }
} */
