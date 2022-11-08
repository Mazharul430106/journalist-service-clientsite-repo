import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Jornalist Services `;
    },[title])
}

export default useTitle;