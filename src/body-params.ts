import { BodyEditor } from './editor'
import { BodyControlor } from './body'
import {
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
export type BodyParams = keyof typeof BodyParamsInit

function PushExecuteBodyParamsCommand(
    editor: BodyEditor,
    controlor: BodyControlor,
    name: BodyParams,
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
    paramElem.classList.add('threedopenpose_hidden')

    const oldValues = new Map<BodyParams, number>()

    Object.entries(BodyParamsInit).forEach(([_name, selector]) => {
        const name = _name as BodyParams
        const elem = paramElem.querySelector(selector)!
        addGradioSliderReleaseListener(elem, (value) => {
            if (!currentControlor) {
                return
            }
            const oldValue = oldValues.get(name)
            if (!oldValue) {
                return
            }
            if (Math.round(oldValue * 10) != Math.round(value * 10)) {
                PushExecuteBodyParamsCommand(
                    editor,
                    currentControlor,
                    name,
                    oldValue,
                    value
                )
                oldValues.set(name, value)
            }
        })
    })

    editor.RegisterEvent({
        select(controlor) {
            currentControlor = controlor
            console.log('select')
            Object.entries(BodyParamsInit).forEach(([_name, selector]) => {
                const name = _name as BodyParams
                const value = controlor[name]
                updateGradioSlider(paramElem.querySelector(selector)!, value)
                oldValues.set(name, value)
            })
            paramElem.classList.remove('threedopenpose_hidden')
        },
        unselect() {
            paramElem.classList.add('threedopenpose_hidden')
        },
    })
}

export function ChangeBodyParam(name: BodyParams, value: number) {
    if (!currentControlor) {
        return
    }
    currentControlor[name] = value
}
