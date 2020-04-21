import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (value) => {
    const [someValue, setSomeValue] = useLocalStorage('darkmode', value);
    
    useEffect(() => {
        if (someValue === true) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [someValue])

    return [someValue, setSomeValue]
}