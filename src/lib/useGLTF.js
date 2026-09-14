import { useGLTF as dreiUseGLTF } from '@react-three/drei'

dreiUseGLTF.setDecoderPath('/draco/')

export const useGLTF = dreiUseGLTF
