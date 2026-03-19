import React from 'react'
import { useWindowSize } from './useWindowResize';

const HookWindow_App = () => {
    const size = useWindowSize()
    return (
        <div>width :  {size.width} - height : {size.height}</div>
    )
}

export default HookWindow_App