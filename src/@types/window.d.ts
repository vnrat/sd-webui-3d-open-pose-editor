interface Window {
    threedopenpose: {
        onResize: (width: number, height: number) => void
        changeCameraNear: (value: number) => void
        changeCameraFar: (value: number) => void
        changeCameraFocalLength: (value: number) => void
        changeBodyParam: (name: string, value: number) => void
        detectImage: () => void
        setBackground: () => void
        saveScene: () => void
        loadScene: () => void
        restoreLastSavedScene: () => void
        undo: () => void
        redo: () => void
        randomPose: () => void
        copyBodyZ: () => void
        copyBodyX: () => void
        removeBody: () => void
        onChangeMoveMode: (value: boolean) => void
        onChangeOnlyHand: (value: boolean) => void
        onChangeEnablePreview: (value: boolean) => void
        makeImages: () => void
        sendTxt2img: (
            pose_image: string | null,
            pose_target: string,
            depth_image: string | null,
            depth_target: string,
            normal_image: string | null,
            normal_target: string,
            canny_image: string | null,
            canny_target: string
        ) => void
        sendImg2img: (
            pose_image: string,
            pose_target: string,
            depth_image: string,
            depth_target: string,
            normal_image: string,
            normal_target: string,
            canny_image: string,
            canny_target: string
        ) => void
        downloadImage: (image: string | null, name: string) => void
    }
}
