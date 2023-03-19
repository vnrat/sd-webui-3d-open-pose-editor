import html
import json
import pathlib

import gradio as gr
from modules import script_callbacks
from modules.shared import opts


def on_ui_tabs():
    root_path = pathlib.Path(__file__).resolve().parents[1]
    consts = {
        "handFbxPath": str(root_path / "models" / "hand.fbx"),
        "footFbxPath": str(root_path / "models" / "foot.fbx"),
        "posesPath": str(root_path / "src" / "poses" / "data.bin"),
    }
    with gr.Blocks(analytics_enabled=False) as blocks:
        gr.HTML(
            f"""
            <div id="threedopenpose_consts">{html.escape(json.dumps(consts))}</div>
            """,
            visible=False,
        )
        with gr.Row():
            with gr.Column(elem_id="threedopenpose_left_column"):
                with gr.Tab("Edit Openpose"):
                    make_images = gr.Button(
                        value="Generate Skeleton/Depth/Normal/Canny Map",
                        variant="primary",
                    )
                    with gr.Row():
                        width = gr.Slider(
                            label="Width",
                            minimum=64,
                            maximum=2048,
                            value=512,
                            step=64,
                            interactive=True,
                        )
                        height = gr.Slider(
                            label="Height",
                            minimum=64,
                            maximum=2048,
                            value=512,
                            step=64,
                            interactive=True,
                        )
                    with gr.Row():
                        undo = gr.Button(value="Undo")
                        redo = gr.Button(value="Redo")
                    with gr.Row():
                        detect_image = gr.Button(value="Detect From Image")
                        set_background = gr.Button(value="Add Background image")
                        random_pose = gr.Button(value="Set Random Pose")
                    with gr.Row():
                        save_scene = gr.Button(value="Save Scene")
                        load_scene = gr.Button(value="Load Scene")
                        restore_last_saved_scene = gr.Button(value="Restore Last Scene")
                    with gr.Row():
                        copy_body_z = gr.Button(value="Duplicate Skeleton (Z-axis)")
                        copy_body_x = gr.Button(value="Duplicate Skeleton (X-axis)")
                        remove_body = gr.Button(
                            value="Delete Selected Skeleton (D key)"
                        )
                    with gr.Row():
                        move_mode = gr.Checkbox(
                            label="Move Mode (X key)",
                            elem_id="threedopenpose_move_mode",
                        )
                        only_hand = gr.Checkbox(label="Only Hand")
                        enable_preview = gr.Checkbox(label="Show Preview", value=True)
                    with gr.Accordion(
                        label="Camera Parameters",
                        elem_id="threedopenpose_camera_params",
                        open=False,
                    ):
                        with gr.Row(variant="compact"):
                            camera_near = gr.Slider(
                                label="Camera Near",
                                elem_id="threedopenpose_camera_near",
                                minimum=0.1,
                                maximum=1000,
                                step=0.1,
                            )
                            camera_far = gr.Slider(
                                label="Camera Far",
                                elem_id="threedopenpose_camera_far",
                                minimum=0.1,
                                maximum=1000,
                                step=0.1,
                            )
                            camera_focal_length = gr.Slider(
                                label="Camera Focal Length",
                                elem_id="threedopenpose_camera_focal_length",
                                minimum=0.1,
                                maximum=100,
                                step=0.1,
                            )
                    with gr.Accordion(
                        label="Body Parameters",
                        elem_id="threedopenpose_body_params",
                    ):
                        with gr.Row(variant="compact"):
                            head_size = gr.Slider(
                                label="Head Size",
                                elem_id="threedopenpose_head_size",
                                minimum=0.1,
                                maximum=100,
                                step=0.1,
                            )
                            nose_to_neck = gr.Slider(
                                label="Nose To Neck",
                                elem_id="threedopenpose_nose_to_neck",
                                minimum=0.1,
                                maximum=100,
                                step=0.1,
                            )
                            shoulder_width = gr.Slider(
                                label="Shoulder Width",
                                elem_id="threedopenpose_shoulder_width",
                                minimum=0.1,
                                maximum=100,
                                step=0.1,
                            )
                            shoulder_to_hip = gr.Slider(
                                label="Shoulder To Hip",
                                elem_id="threedopenpose_shoulder_to_hip",
                                minimum=0.1,
                                maximum=100,
                                step=0.1,
                            )
                        with gr.Row(variant="compact"):
                            arm_length = gr.Slider(
                                label="Arm Length",
                                elem_id="threedopenpose_arm_length",
                                minimum=0.1,
                                maximum=100,
                                step=0.1,
                            )
                            forearm = gr.Slider(
                                label="Forearm",
                                elem_id="threedopenpose_forearm",
                                minimum=0.1,
                                maximum=100,
                                step=0.1,
                            )
                            upper_arm = gr.Slider(
                                label="Upper Arm",
                                elem_id="threedopenpose_upper_arm",
                                minimum=0.1,
                                maximum=100,
                                step=0.1,
                            )
                            hand_size = gr.Slider(
                                label="Hand Size",
                                elem_id="threedopenpose_hand_size",
                                minimum=0.1,
                                maximum=10,
                                step=0.1,
                            )
                        with gr.Row(variant="compact"):
                            hips = gr.Slider(
                                label="Hips",
                                elem_id="threedopenpose_hips",
                                minimum=0.1,
                                maximum=100,
                                step=0.1,
                            )
                            leg_length = gr.Slider(
                                label="Leg Length",
                                elem_id="threedopenpose_leg_length",
                                minimum=0.1,
                                maximum=200,
                                step=0.1,
                            )
                            thigh = gr.Slider(
                                label="Thigh",
                                elem_id="threedopenpose_thigh",
                                minimum=0.1,
                                maximum=100,
                                step=0.1,
                            )
                            lower_leg = gr.Slider(
                                label="Lower Leg",
                                elem_id="threedopenpose_lower_leg",
                                minimum=0.1,
                                maximum=100,
                                step=0.1,
                            )
                        with gr.Row(variant="compact"):
                            foot_size = gr.Slider(
                                label="Foot Size",
                                elem_id="threedopenpose_foot_size",
                                minimum=0.1,
                                maximum=10,
                                step=0.1,
                            )
                    gr.Markdown(
                        "Original: [Online 3D Openpose Editor](https://zhuyu1997.github.io/open-pose-editor/)"
                    )
                with gr.Tab("Send to ControlNet"):
                    with gr.Row():
                        send_t2i = gr.Button(value="Send to txt2img", variant="primary")
                        send_i2i = gr.Button(value="Send to img2img", variant="primary")
                    with gr.Row():
                        cn_max = opts.control_net_max_models_num
                        cn_dropdown_list = [str(i) for i in range(cn_max)]
                        cn_dropdown_list.insert(0, "-")
                        with gr.Column(variant="panel"):
                            pose_image = gr.Image(
                                label="Pose", elem_id="threedopenpose_pose_image"
                            )
                            with gr.Row():
                                pose_target = gr.Dropdown(
                                    label="ControlNet number",
                                    choices=cn_dropdown_list,
                                    value="0",
                                )
                                pose_download = gr.Button(value="Download")
                        with gr.Column(variant="panel"):
                            depth_image = gr.Image(
                                label="Depth", elem_id="threedopenpose_depth_image"
                            )
                            with gr.Row():
                                depth_target = gr.Dropdown(
                                    label="ControlNet number",
                                    choices=cn_dropdown_list,
                                    value="1" if cn_max >= 2 else "-",
                                )
                                depth_download = gr.Button(value="Download")
                        with gr.Column(variant="panel"):
                            normal_image = gr.Image(
                                label="Normal", elem_id="threedopenpose_normal_image"
                            )
                            with gr.Row():
                                normal_target = gr.Dropdown(
                                    label="ControlNet number",
                                    choices=cn_dropdown_list,
                                    value="2" if cn_max >= 3 else "-",
                                )
                                normal_download = gr.Button(value="Download")
                        with gr.Column(variant="panel"):
                            canny_image = gr.Image(
                                label="Canny", elem_id="threedopenpose_canny_image"
                            )
                            with gr.Row():
                                canny_target = gr.Dropdown(
                                    label="ControlNet number",
                                    choices=cn_dropdown_list,
                                    value="3" if cn_max >= 4 else "-",
                                )
                                canny_download = gr.Button(value="Download")
            with gr.Column(elem_id="threedopenpose_right_column"):
                gr.HTML(
                    """
                    <div style="position:relative;z-index:0">
                        <div id="threedopenpose_background"></div>
                        <canvas id="threedopenpose_canvas" width="512" height="512"></canvas>
                    </div>
                    """
                )

        width.change(None, [width, height], None, _js="window.threedopenpose.onResize")
        height.change(None, [width, height], None, _js="window.threedopenpose.onResize")

        camera_near.change(
            None, camera_near, None, _js="window.threedopenpose.onChangeCameraNear"
        )
        camera_far.change(
            None, camera_far, None, _js="window.threedopenpose.onChangeCameraFar"
        )
        camera_focal_length.change(
            None,
            camera_focal_length,
            None,
            _js="window.threedopenpose.onChangeCameraFocalLength",
        )

        head_size.change(
            None, head_size, None, _js="window.threedopenpose.onChangeHeadSize"
        )
        nose_to_neck.change(
            None, nose_to_neck, None, _js="window.threedopenpose.onChangeNoseToNeck"
        )
        shoulder_width.change(
            None,
            shoulder_width,
            None,
            _js="window.threedopenpose.onChangeShoulderWidth",
        )
        shoulder_to_hip.change(
            None,
            shoulder_to_hip,
            None,
            _js="window.threedopenpose.onChangeShoulderToHip",
        )
        arm_length.change(
            None, arm_length, None, _js="window.threedopenpose.onChangeArmLength"
        )
        forearm.change(None, forearm, None, _js="window.threedopenpose.onChangeForearm")
        upper_arm.change(
            None, upper_arm, None, _js="window.threedopenpose.onChangeUpperArm"
        )
        hand_size.change(
            None, hand_size, None, _js="window.threedopenpose.onChangeHandSize"
        )
        hips.change(None, hips, None, _js="window.threedopenpose.onChangeHips")
        leg_length.change(
            None, leg_length, None, _js="window.threedopenpose.onChangeLegLength"
        )
        thigh.change(None, thigh, None, _js="window.threedopenpose.onChangeThigh")
        lower_leg.change(
            None, lower_leg, None, _js="window.threedopenpose.onChangeLowerLeg"
        )
        foot_size.change(
            None, foot_size, None, _js="window.threedopenpose.onChangeFootSize"
        )

        undo.click(None, None, None, _js="window.threedopenpose.undo")
        redo.click(None, None, None, _js="window.threedopenpose.redo")
        detect_image.click(None, None, None, _js="window.threedopenpose.detectImage")
        set_background.click(
            None, None, None, _js="window.threedopenpose.setBackground"
        )
        save_scene.click(None, None, None, _js="window.threedopenpose.saveScene")
        load_scene.click(None, None, None, _js="window.threedopenpose.loadScene")
        restore_last_saved_scene.click(
            None, None, None, _js="window.threedopenpose.restoreLastSavedScene"
        )
        random_pose.click(None, None, None, _js="window.threedopenpose.randomPose")

        copy_body_z.click(None, None, None, _js="window.threedopenpose.copyBodyZ")
        copy_body_x.click(None, None, None, _js="window.threedopenpose.copyBodyX")
        remove_body.click(None, None, None, _js="window.threedopenpose.removeBody")

        move_mode.change(
            None, move_mode, None, _js="window.threedopenpose.onChangeMoveMode"
        )
        only_hand.change(
            None, only_hand, None, _js="window.threedopenpose.onChangeOnlyHand"
        )
        enable_preview.change(
            None,
            enable_preview,
            None,
            _js="window.threedopenpose.onChangeEnablePreview",
        )

        make_images.click(None, None, None, _js="window.threedopenpose.makeImages")
        send_t2i.click(
            None,
            [
                pose_image,
                pose_target,
                depth_image,
                depth_target,
                normal_image,
                normal_target,
                canny_image,
                canny_target,
            ],
            None,
            _js="window.threedopenpose.sendTxt2img",
        )
        send_i2i.click(
            None,
            [
                pose_image,
                pose_target,
                depth_image,
                depth_target,
                normal_image,
                normal_target,
                canny_image,
                canny_target,
            ],
            None,
            _js="window.threedopenpose.sendImg2img",
        )
        pose_download.click(
            None, pose_image, None, _js="window.threedopenpose.downloadPoseImage"
        )
        depth_download.click(
            None, depth_image, None, _js="window.threedopenpose.downloadDepthImage"
        )
        normal_download.click(
            None, normal_image, None, _js="window.threedopenpose.downloadNormalImage"
        )
        canny_download.click(
            None, canny_image, None, _js="window.threedopenpose.downloadCannyImage"
        )

    return [(blocks, "3D Openpose", "threedopenpose")]


script_callbacks.on_ui_tabs(on_ui_tabs)
