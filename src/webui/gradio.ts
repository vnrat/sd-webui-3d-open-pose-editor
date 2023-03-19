export const updateGradioSlider = (element: Element, value: number) => {
    const numberElem =
        element.querySelector<HTMLInputElement>('input[type=number]')!
    const rangeElem =
        element.querySelector<HTMLInputElement>('input[type=range]')!
    numberElem.value = value.toString()
    rangeElem.value = value.toString()
    element.dispatchEvent(new Event('input'))
    numberElem.dispatchEvent(new Event('input'))
    rangeElem.dispatchEvent(new Event('input'))
}

export const addGradioSliderChangeListener = (
    element: Element,
    listener: (value: number) => void
) => {
    const rangeElem =
        element.querySelector<HTMLInputElement>('input[type=range]')!
    rangeElem.addEventListener('input', () => {
        listener(Number(rangeElem.value))
    })
}

export const addGradioSliderReleaseListener = (
    element: Element,
    listener: (value: number) => void
) => {
    const numberElem =
        element.querySelector<HTMLInputElement>('input[type=number]')!
    const rangeElem =
        element.querySelector<HTMLInputElement>('input[type=range]')!
    numberElem.addEventListener('change', () => {
        listener(Number(numberElem.value))
    })
    rangeElem.addEventListener('change', () => {
        listener(Number(rangeElem.value))
    })
}

export const updateGradioImage = async (
    element: Element,
    url: string,
    name: string
) => {
    const blob = await (await fetch(url)).blob()
    const file = new File([blob], name)
    const dt = new DataTransfer()
    dt.items.add(file)

    const input = element.querySelector<HTMLInputElement>("input[type='file']")!
    element
        .querySelector<HTMLButtonElement>("button[aria-label='Clear']")
        ?.click()
    input.value = ''
    input.files = dt.files
    input.dispatchEvent(
        new Event('change', {
            bubbles: true,
            composed: true,
        })
    )
}

export const updateGradioCheckbox = (element: Element, value: boolean) => {
    const checkboxElem = element.querySelector<HTMLInputElement>(
        'input[type=checkbox]'
    )!
    checkboxElem.checked = value
    checkboxElem.dispatchEvent(new Event('change'))
}
