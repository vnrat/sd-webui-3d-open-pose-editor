const events = new EventTarget()

export function AddScreenShotListener(
    listener: (id: string, url: string, name: string) => void
) {
    events.addEventListener('screenshot', (e) => {
        const detail = (e as CustomEvent).detail
        listener(detail.id, detail.url, detail.name)
    })
}

export function SetScreenShot(id: string, url: string, name: string) {
    const detail = {
        id: id,
        url: url,
        name: name,
    }
    events.dispatchEvent(new CustomEvent('screenshot', { detail }))
}
