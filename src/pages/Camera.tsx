import { Camera as ExpoCamera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { stylesCamera } from './styles';


export default function Camera() {
    const [type, setType] = useState(CameraType.front);
    const [permission, requestPermission] = ExpoCamera.useCameraPermissions();

    if (!permission) {
        return (
            <View style={stylesCamera.container}>
                <Text style={{ color: 'red' }}>
                    Autorize a câmera para usar!
                </Text>
            </View>
        )
    }

    if (!permission.granted) {
        return (
            <View style={stylesCamera.container}>
                <Text style={{ textAlign: 'center' }}>
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraType() {
        setType((current) => (
            current === CameraType.back ? CameraType.front : CameraType.back
        ));
    }

    return (

        <View style={stylesCamera.container}>
            <ExpoCamera style={stylesCamera.camera} type={type}>
                <View style={stylesCamera.buttonContainer}>
                    <TouchableOpacity
                        style={stylesCamera.button}
                        onPress={toggleCameraType}>
                        <Text style={stylesCamera.text}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </ExpoCamera>
        </View>
    );

}