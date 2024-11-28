import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'

//Scroll to the top when path changes
const ScrollReset = () => {

    const pathName = useLocation().pathname;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathName]);
}

export default ScrollReset