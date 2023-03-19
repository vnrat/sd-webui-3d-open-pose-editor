import { BodyEditor } from './editor'
import { BodyControlor } from './body'
import {
    addGradioSliderChangeListener,
    addGradioSliderReleaseListener,
    updateGradioSlider,
} from './webui/gradio'

const BodyParamsInit = {
    HeadSize: '#threedopenpose_head_size',
    NoseToNeck: '#threedopenpose_nose_to_neck',
    ShoulderWidth: '#threedopenpose_shoulder_width',
    ShoulderToHip: '#threedopenpose_shoulder_to_hip',
    ArmLength: '#threedopenpose_arm_length',
    Forearm: '#threedopenpose_forearm',
    UpperArm: '#threedopenpose_upper_arm',
    HandSize: '#threedopenpose_hand_size',
    Hips: '#threedopenpose_hips',
    LegLength: '#threedopenpose_leg_length',
    Thigh: '#threedopenpose_thigh',
    LowerLeg: '#threedopenpose_lower_leg',
    FootSize: '#threedopenpose_foot_size',
}

function PushExecuteBodyParamsCommand(
    editor: BodyEditor,
    controlor: BodyControlor,
    name: keyof typeof BodyParamsInit,
    oldValue: number,
    value: number
) {
    console.log(oldValue, value)
    const cmd = {
        execute: () => {
            controlor[name] = value
        },
        undo: () => {
            controlor[name] = oldValue
        },
    }
    cmd.execute()
    editor.pushCommand(cmd)
}

let currentControlor: BodyControlor | null = null

export function CreateBodyParamsControls(editor: BodyEditor) {
    const paramElem = gradioApp().querySelector<HTMLElement>(
        '#threedopenpose_body_params'
    )!

    Object.entries(BodyParamsInit).forEach(([_name, selector]) => {
        const name = _name as keyof typeof BodyParamsInit
        let oldValue = 0
        let changing = false
        const elem = paramElem.querySelector(selector)!
        addGradioSliderChangeListener(elem, (value) => {
            if (currentControlor) {
                // the first time
                if (changing == false) oldValue = currentControlor[name]
                changing = true
                currentControlor[name] = value
            }
        })
        addGradioSliderReleaseListener(elem, (value) => {
            if (
                currentControlor &&
                oldValue != 0 &&
                Math.round(oldValue * 10) != Math.round(value * 10)
            ) {
                changing = false
                PushExecuteBodyParamsCommand(
                    editor,
                    currentControlor,
                    name,
                    oldValue,
                    value
                )
                oldValue = value
            }
        })
    })

    paramElem.classList.add('threedopenpose_hidden')

    editor.RegisterEvent({
        select(controlor) {
            currentControlor = controlor
            console.log('select')
            Object.entries(BodyParamsInit).forEach(([_name, selector]) => {
                const name = _name as keyof typeof BodyParamsInit
                updateGradioSlider(
                    paramElem.querySelector(selector)!,
                    controlor[name]
                )
            })
            paramElem.classList.remove('threedopenpose_hidden')
        },
        unselect() {
            paramElem.classList.add('threedopenpose_hidden')
        },
    })
}

export function ChangeBodyParam(
    name: keyof typeof BodyParamsInit,
    value: number
) {
    if (!currentControlor) {
        return
    }
    currentControlor[name] = value
}
