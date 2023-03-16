import { options } from './config'
import { BodyEditor } from './editor'
import { type BodyControlor } from './body'
import { AddScreenShotListener } from './image'
import { uploadImage } from './util'

let editor: BodyEditor | undefined
let currentControlor: BodyControlor | undefined
let canvasSize = [512, 512]

const init = () => {
    options.autoSize = false
    resize()
    editor = new BodyEditor(
        gradioApp().querySelector('#threedopenpose_canvas')!
    )

    const paramElem = gradioApp().querySelector<HTMLElement>(
        '#threedopenpose_body_params'
    )!
    paramElem.classList.add('threedopenpose_hidden')

    editor.RegisterEvent({
        select(controlor) {
            currentControlor = controlor
            updateGradioSlider(
                paramElem.querySelector('#threedopenpose_head_size')!,
                controlor.HeadSize
            )
            updateGradioSlider(
                paramElem.querySelector('#threedopenpose_nose_to_neck')!,
                controlor.NoseToNeck
            )
            updateGradioSlider(
                paramElem.querySelector('#threedopenpose_shoulder_width')!,
                controlor.ShoulderWidth
            )
            updateGradioSlider(
                paramElem.querySelector('#threedopenpose_shoulder_to_hip')!,
                controlor.ShoulderToHip
            )
            updateGradioSlider(
                paramElem.querySelector('#threedopenpose_arm_length')!,
                controlor.ArmLength
            )
            updateGradioSlider(
                paramElem.querySelector('#threedopenpose_forearm')!,
                controlor.Forearm
            )
            updateGradioSlider(
                paramElem.querySelector('#threedopenpose_upper_arm')!,
                controlor.UpperArm
            )
            updateGradioSlider(
                paramElem.querySelector('#threedopenpose_hand_size')!,
                controlor.HandSize
            )
            updateGradioSlider(
                paramElem.querySelector('#threedopenpose_hips')!,
                controlor.Hips
            )
            updateGradioSlider(
                paramElem.querySelector('#threedopenpose_leg_length')!,
                controlor.LegLength
            )
            updateGradioSlider(
                paramElem.querySelector('#threedopenpose_thigh')!,
                controlor.Thigh
            )
            updateGradioSlider(
                paramElem.querySelector('#threedopenpose_lower_leg')!,
                controlor.LowerLeg
            )
            updateGradioSlider(
                paramElem.querySelector('#threedopenpose_foot_size')!,
                controlor.FootSize
            )
            paramElem.classList.remove('threedopenpose_hidden')
        },
        unselect() {
            paramElem.classList.add('threedopenpose_hidden')
        },
    })

    AddScreenShotListener((id, url, name) => {
        const imageElem = gradioApp().querySelector(
            `#threedopenpose_${id}_image`
        )!
        updateGradioImage(imageElem, url, name)
    })

    editor.loadBodyData()
}

const updateGradioSlider = (element: Element, value: number) => {
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

const updateGradioImage = async (
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

const updateGradioCheckbox = (element: Element, value: boolean) => {
    const checkboxElem = element.querySelector<HTMLInputElement>(
        'input[type=checkbox]'
    )!
    checkboxElem.checked = value
    checkboxElem.dispatchEvent(new Event('change'))
}

const isTabActive = () => {
    const tab = gradioApp().querySelector<HTMLElement>('#tab_threedopenpose')
    return tab && tab.style.display != 'none'
}

const resize = () => {
    options.Width = canvasSize[0]
    options.Height = canvasSize[1]
}

const downloadImage = (url: string, name: string) => {
    const element = document.createElement('a')
    element.href = url
    element.download = name
    element.target = '_blank'
    element.click()
}

const sendToControlNet = (
    element: Element,
    pose_image: string | null,
    pose_target: string,
    depth_image: string | null,
    depth_target: string,
    normal_image: string | null,
    normal_target: string,
    canny_image: string | null,
    canny_target: string
) => {
    const imageElems = element.querySelectorAll('div[data-testid="image"]')
    if (pose_image && pose_target != '-') {
        updateGradioImage(
            imageElems[Number(pose_target)],
            pose_image,
            'pose.png'
        )
    }
    if (depth_image && depth_target != '-') {
        updateGradioImage(
            imageElems[Number(depth_target)],
            depth_image,
            'depth.png'
        )
    }
    if (normal_image && normal_target != '-') {
        updateGradioImage(
            imageElems[Number(normal_target)],
            normal_image,
            'normal.png'
        )
    }
    if (canny_image && canny_target != '-') {
        updateGradioImage(
            imageElems[Number(canny_target)],
            canny_image,
            'canny.png'
        )
    }
}

window.threedopenpose = {
    onResize: (width: number, height: number) => {
        canvasSize = [width, height]
        resize()
    },
    onChangeCameraNear: (value: number) => {
        if (!editor) {
            return
        }
        editor.CameraNear = value
    },
    onChangeCameraFar: (value: number) => {
        if (!editor) {
            return
        }
        editor.CameraFar = value
    },
    onChangeCameraFocalLength: (value: number) => {
        if (!editor) {
            return
        }
        editor.CameraFocalLength = value
    },
    onChangeHeadSize: (value: number) => {
        if (!currentControlor) {
            return
        }
        currentControlor.HeadSize = value
    },
    onChangeNoseToNeck: (value: number) => {
        if (!currentControlor) {
            return
        }
        currentControlor.NoseToNeck = value
    },
    onChangeShoulderWidth: (value: number) => {
        if (!currentControlor) {
            return
        }
        currentControlor.ShoulderWidth = value
    },
    onChangeShoulderToHip: (value: number) => {
        if (!currentControlor) {
            return
        }
        currentControlor.ShoulderToHip = value
    },
    onChangeArmLength: (value: number) => {
        if (!currentControlor) {
            return
        }
        currentControlor.ArmLength = value
    },
    onChangeForearm: (value: number) => {
        if (!currentControlor) {
            return
        }
        currentControlor.Forearm = value
    },
    onChangeUpperArm: (value: number) => {
        if (!currentControlor) {
            return
        }
        currentControlor.UpperArm = value
    },
    onChangeHandSize: (value: number) => {
        if (!currentControlor) {
            return
        }
        currentControlor.HandSize = value
    },
    onChangeHips: (value: number) => {
        if (!currentControlor) {
            return
        }
        currentControlor.Hips = value
    },
    onChangeLegLength: (value: number) => {
        if (!currentControlor) {
            return
        }
        currentControlor.LegLength = value
    },
    onChangeThigh: (value: number) => {
        if (!currentControlor) {
            return
        }
        currentControlor.Thigh = value
    },
    onChangeLowerLeg: (value: number) => {
        if (!currentControlor) {
            return
        }
        currentControlor.LowerLeg = value
    },
    onChangeFootSize: (value: number) => {
        if (!currentControlor) {
            return
        }
        currentControlor.FootSize = value
    },
    setBackground: async () => {
        const dataUrl = await uploadImage()
        const div = gradioApp().querySelector<HTMLElement>(
            '#threedopenpose_background'
        )!

        if (div) div.style.backgroundImage = `url(${dataUrl})`
    },
    saveScene: () => {
        if (!editor) {
            return
        }
        editor.SaveScene()
    },
    loadScene: () => {
        if (!editor) {
            return
        }
        editor.LoadScene()
    },
    restoreLastSavedScene: () => {
        if (!editor) {
            return
        }
        editor.RestoreLastSavedScene()
    },
    randomPose: () => {
        if (!editor) {
            return
        }
        editor.SetRandomPose()
    },
    copyBodyZ: () => {
        if (!editor) {
            return
        }
        editor.CopyBodyZ()
    },
    copyBodyX: () => {
        if (!editor) {
            return
        }
        editor.CopyBodyX()
    },
    removeBody: () => {
        if (!editor) {
            return
        }
        editor.RemoveBody()
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
        pose_image: string | null,
        pose_target: string,
        depth_image: string | null,
        depth_target: string,
        normal_image: string | null,
        normal_target: string,
        canny_image: string | null,
        canny_target: string
    ) => {
        const cnElem = gradioApp().querySelector(
            '#txt2img_script_container #controlnet'
        )!
        sendToControlNet(
            cnElem,
            pose_image,
            pose_target,
            depth_image,
            depth_target,
            normal_image,
            normal_target,
            canny_image,
            canny_target
        )
        switch_to_txt2img()
    },
    sendImg2img: (
        pose_image: string,
        pose_target: string,
        depth_image: string,
        depth_target: string,
        normal_image: string,
        normal_target: string,
        canny_image: string,
        canny_target: string
    ) => {
        const cnElem = gradioApp().querySelector(
            '#img2img_script_container #controlnet'
        )!
        sendToControlNet(
            cnElem,
            pose_image,
            pose_target,
            depth_image,
            depth_target,
            normal_image,
            normal_target,
            canny_image,
            canny_target
        )
        switch_to_img2img()
    },
    downloadPoseImage: (image: string | null) => {
        if (!image) {
            return
        }
        downloadImage(image, 'pose.png')
    },
    downloadDepthImage: (image: string | null) => {
        if (!image) {
            return
        }
        downloadImage(image, 'depth.png')
    },
    downloadNormalImage: (image: string | null) => {
        if (!image) {
            return
        }
        downloadImage(image, 'normal.png')
    },
    downloadCannyImage: (image: string | null) => {
        if (!image) {
            return
        }
        downloadImage(image, 'canny.png')
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
            if (!editor) {
                return
            }
            editor.RemoveBody()
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
