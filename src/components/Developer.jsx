import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useEffect, useMemo, useRef } from 'react';

const developerModelPath = '/models/animations/developer.glb'
const animationPaths = {
  idle: '/models/animations/idle.fbx',
  victory: '/models/animations/victory.fbx',
  clapping: '/models/animations/clapping.fbx',
  salute: '/models/animations/salute.fbx',
}

const Developer= ({animationName ='idle', ...props}) =>{
    const group = useRef();
  const { nodes, materials } = useGLTF(developerModelPath);

  const { animations: idleAnimations } = useFBX(animationPaths.idle)
  const { animations: victoryAnimations } = useFBX(animationPaths.victory)
  const { animations: clappingAnimations } = useFBX(animationPaths.clapping)
  const { animations: saluteAnimations } = useFBX(animationPaths.salute)

  const animations = useMemo(() => (
    [
      [idleAnimations, 'idle'],
      [victoryAnimations, 'victory'],
      [clappingAnimations, 'clapping'],
      [saluteAnimations, 'salute'],
    ]
      .map(([clips, name]) => {
        const clip = clips[0]?.clone()
        if (clip) clip.name = name
        return clip
      })
      .filter(Boolean)
  ), [clappingAnimations, idleAnimations, saluteAnimations, victoryAnimations])

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions[animationName]
    if (!action) return undefined

    action.reset().fadeIn(0.5).play()

    return () => action.fadeOut(0.5)
  }, [actions, animationName])
  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.AvatarBody.geometry}
        material={materials.AvatarBody}
        skeleton={nodes.AvatarBody.skeleton}
      />
      <skinnedMesh
        name="AvatarEyelashes"
        geometry={nodes.AvatarEyelashes.geometry}
        material={materials.AvatarEyelashes}
        skeleton={nodes.AvatarEyelashes.skeleton}
        morphTargetDictionary={nodes.AvatarEyelashes.morphTargetDictionary}
        morphTargetInfluences={nodes.AvatarEyelashes.morphTargetInfluences}
      />
      <skinnedMesh
        name="AvatarHead"
        geometry={nodes.AvatarHead.geometry}
        material={materials.AvatarHead}
        skeleton={nodes.AvatarHead.skeleton}
        morphTargetDictionary={nodes.AvatarHead.morphTargetDictionary}
        morphTargetInfluences={nodes.AvatarHead.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.AvatarLeftCornea.geometry}
        material={materials.AvatarLeftCornea}
        skeleton={nodes.AvatarLeftCornea.skeleton}
      />
      <skinnedMesh
        geometry={nodes.AvatarLeftEyeball.geometry}
        material={materials.AvatarLeftEyeball}
        skeleton={nodes.AvatarLeftEyeball.skeleton}
      />
      <skinnedMesh
        geometry={nodes.AvatarRightCornea.geometry}
        material={materials.AvatarRightCornea}
        skeleton={nodes.AvatarRightCornea.skeleton}
      />
      <skinnedMesh
        geometry={nodes.AvatarRightEyeball.geometry}
        material={materials.AvatarRightEyeball}
        skeleton={nodes.AvatarRightEyeball.skeleton}
      />
      <skinnedMesh
        name="AvatarTeethLower"
        geometry={nodes.AvatarTeethLower.geometry}
        material={materials.AvatarTeethLower}
        skeleton={nodes.AvatarTeethLower.skeleton}
        morphTargetDictionary={nodes.AvatarTeethLower.morphTargetDictionary}
        morphTargetInfluences={nodes.AvatarTeethLower.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.AvatarTeethUpper.geometry}
        material={materials.AvatarTeethUpper}
        skeleton={nodes.AvatarTeethUpper.skeleton}
      />
      <skinnedMesh
        geometry={nodes.glasses.geometry}
        material={materials.glasses}
        skeleton={nodes.glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.haircut.geometry}
        material={materials.haircut}
        skeleton={nodes.haircut.skeleton}
      />
      <skinnedMesh
        geometry={nodes.outfit_bottom.geometry}
        material={materials.outfit_bottom}
        skeleton={nodes.outfit_bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.outfit_shoes.geometry}
        material={materials.outfit_shoes}
        skeleton={nodes.outfit_shoes.skeleton}
      />
      <skinnedMesh
        geometry={nodes.outfit_top.geometry}
        material={materials.outfit_top}
        skeleton={nodes.outfit_top.skeleton}
      />
    </group>
  )
}

export default Developer