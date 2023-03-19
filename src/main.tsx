import { options } from './config'
import { BodyEditor } from './editor'
import { setFilePath } from './body'
import { AddScreenShotListener } from './image'
import { setBackgroundImage, uploadImage } from './util'
import { ChangeBodyParam, CreateBodyParamsControls } from './body-params'
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
        ChangeBodyParam('HeadSize', value)
    },
    onChangeNoseToNeck: (value: number) => {
        ChangeBodyParam('NoseToNeck', value)
    },
    onChangeShoulderWidth: (value: number) => {
        ChangeBodyParam('ShoulderWidth', value)
    },
    onChangeShoulderToHip: (value: number) => {
        ChangeBodyParam('ShoulderToHip', value)
    },
    onChangeArmLength: (value: number) => {
        ChangeBodyParam('ArmLength', value)
    },
    onChangeForearm: (value: number) => {
        ChangeBodyParam('Forearm', value)
    },
    onChangeUpperArm: (value: number) => {
        ChangeBodyParam('UpperArm', value)
    },
    onChangeHandSize: (value: number) => {
        ChangeBodyParam('HandSize', value)
    },
    onChangeHips: (value: number) => {
        ChangeBodyParam('Hips', value)
    },
    onChangeLegLength: (value: number) => {
        ChangeBodyParam('LegLength', value)
    },
    onChangeThigh: (value: number) => {
        ChangeBodyParam('Thigh', value)
    },
    onChangeLowerLeg: (value: number) => {
        ChangeBodyParam('LowerLeg', value)
    },
    onChangeFootSize: (value: number) => {
        ChangeBodyParam('FootSize', value)
    },
    detectImage: () => {
        if (!editor) {
            return
        }
        editor.DetectFromImage()
    },
    setBackground: async () => {
        const dataUrl = await uploadImage()
        setBackgroundImage(dataUrl)
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
    undo: () => {
        if (!editor) {
            return
        }
        editor.Undo()
    },
    redo: () => {
        if (!editor) {
            return
        }
        editor.Redo()
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
