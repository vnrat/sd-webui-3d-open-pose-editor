import { options } from './config'
import { BodyEditor } from './editor'
import { setFilePath } from './body'
import { AddScreenShotListener } from './image'
import { setBackgroundImage, uploadImage } from './util'
import {
    BodyParams,
    ChangeBodyParam,
    CreateBodyParamsControls,
} from './body-params'
import {
    updateGradioCheckbox,
    updateGradioImage,
    updateGradioSlider,
} from './webui/gradio'

let editor: BodyEditor | undefined
let canvasSize = [512, 512]

const init = () => {
    const consts = JSON.parse(
        gradioApp().querySelector('#threedopenpose_consts')!.textContent!
    )
    setFilePath(consts.handFbxPath, consts.footFbxPath, consts.posesPath)

    options.autoSize = false
    resize()
    editor = new BodyEditor(
        gradioApp().querySelector('#threedopenpose_canvas')!
    )

    CreateBodyParamsControls(editor)

    AddScreenShotListener((id, url, name) => {
        const imageElem = gradioApp().querySelector(
            `#threedopenpose_${id}_image`
        )!
        updateGradioImage(imageElem, url, name)
    })

    editor.loadBodyData()
}

const isTabActive = () => {
    const tab = gradioApp().querySelector<HTMLElement>('#tab_threedopenpose')
    return tab && tab.style.display != 'none'
}

const resize = () => {
    options.Width = canvasSize[0]
    options.Height = canvasSize[1]
}

const sendToControlNet = (
    element: Element,
    poseImage: string | null,
    poseTarget: string,
    depthImage: string | null,
    depthTarget: string,
    normalImage: string | null,
    normalTarget: string,
    cannyImage: string | null,
    cannyTarget: string
) => {
    const imageElems = element.querySelectorAll('div[data-testid="image"]')
    if (poseImage && poseTarget != '-') {
        updateGradioImage(imageElems[Number(poseTarget)], poseImage, 'pose.png')
    }
    if (depthImage && depthTarget != '-') {
        updateGradioImage(
            imageElems[Number(depthTarget)],
            depthImage,
            'depth.png'
        )
    }
    if (normalImage && normalTarget != '-') {
        updateGradioImage(
            imageElems[Number(normalTarget)],
            normalImage,
            'normal.png'
        )
    }
    if (cannyImage && cannyTarget != '-') {
        updateGradioImage(
            imageElems[Number(cannyTarget)],
            cannyImage,
            'canny.png'
        )
    }
}

window.threedopenpose = {
    onResize: (width: number, height: number) => {
        canvasSize = [width, height]
        resize()
    },
    changeCameraNear: (value: number) => {
        if (!editor) {
            return
        }
        editor.CameraNear = value
    },
    changeCameraFar: (value: number) => {
        if (!editor) {
            return
        }
        editor.CameraFar = value
    },
    changeCameraFocalLength: (value: number) => {
        if (!editor) {
            return
        }
        editor.CameraFocalLength = value
    },
    changeBodyParam: (name: string, value: number) => {
        ChangeBodyParam(name as BodyParams, value)
    },
    detectImage: () => {
        editor?.DetectFromImage()
    },
    setBackground: async () => {
        const dataUrl = await uploadImage()
        setBackgroundImage(dataUrl)
    },
    saveScene: () => {
        editor?.SaveScene()
    },
    loadScene: () => {
        editor?.LoadScene()
    },
    restoreLastSavedScene: () => {
        editor?.RestoreLastSavedScene()
    },
    undo: () => {
        editor?.Undo()
    },
    redo: () => {
        editor?.Redo()
    },
    randomPose: () => {
        editor?.SetRandomPose()
    },
    copyBodyZ: () => {
        editor?.CopyBodyZ()
    },
    copyBodyX: () => {
        editor?.CopyBodyX()
    },
    removeBody: () => {
        editor?.RemoveBody()
    },
    onChangeMoveMode: (value: boolean) => {
        if (!editor) {
            return
        }
        editor.MoveMode = value
    },
    onChangeOnlyHand: (value: boolean) => {
        if (!editor) {
            return
        }
        editor.OnlyHand = value
    },
    onChangeEnablePreview: (value: boolean) => {
        if (!editor) {
            return
        }
        editor.enablePreview = value
    },
    makeImages: () => {
        if (!editor) {
            return
        }
        editor.MakeImages()
        gradioApp()
            .querySelector('#threedopenpose_left_column')!
            .querySelectorAll('button')[1]
            .click()
    },
    sendTxt2img: (
        poseImage: string | null,
        poseTarget: string,
        depthImage: string | null,
        depthTarget: string,
        normalImage: string | null,
        normalTarget: string,
        cannyImage: string | null,
        cannyTarget: string
    ) => {
        const cnElem = gradioApp().querySelector(
            '#txt2img_script_container #controlnet'
        )!
        sendToControlNet(
            cnElem,
            poseImage,
            poseTarget,
            depthImage,
            depthTarget,
            normalImage,
            normalTarget,
            cannyImage,
            cannyTarget
        )
        switch_to_txt2img()
    },
    sendImg2img: (
        poseImage: string,
        poseTarget: string,
        depthImage: string,
        depthTarget: string,
        normalImage: string,
        normalTarget: string,
        cannyImage: string,
        cannyTarget: string
    ) => {
        const cnElem = gradioApp().querySelector(
            '#img2img_script_container #controlnet'
        )!
        sendToControlNet(
            cnElem,
            poseImage,
            poseTarget,
            depthImage,
            depthTarget,
            normalImage,
            normalTarget,
            cannyImage,
            cannyTarget
        )
        switch_to_img2img()
    },
    downloadImage: (image: string | null, name: string) => {
        if (!image) {
            return
        }
        const element = document.createElement('a')
        element.href = image
        element.download = name
        element.target = '_blank'
        element.click()
    },
}

onUiLoaded(() => {
    init()
})

onUiTabChange(() => {
    if (!editor) {
        return
    }
    if (isTabActive()) {
        editor.resume()
        const cameraElem = gradioApp().querySelector<HTMLElement>(
            '#threedopenpose_camera_params'
        )!
        updateGradioSlider(
            cameraElem.querySelector('#threedopenpose_camera_near')!,
            editor.CameraNear
        )
        updateGradioSlider(
            cameraElem.querySelector('#threedopenpose_camera_far')!,
            editor.CameraFar
        )
        updateGradioSlider(
            cameraElem.querySelector('#threedopenpose_camera_focal_length')!,
            editor.CameraFocalLength
        )
    } else {
        editor.pause()
    }
})

window.addEventListener('keydown', function (event) {
    if (!isTabActive()) {
        return
    }
    switch (event.code) {
        case 'KeyX':
            updateGradioCheckbox(
                gradioApp().querySelector('#threedopenpose_move_mode')!,
                true
            )
            break
        case 'KeyD':
            editor?.RemoveBody()
            break
    }
})

window.addEventListener('keyup', function (event) {
    if (!isTabActive()) {
        return
    }
    switch (event.code) {
        case 'KeyX':
            updateGradioCheckbox(
                gradioApp().querySelector('#threedopenpose_move_mode')!,
                false
            )
            break
    }
})
