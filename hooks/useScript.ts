import { useEffect} from 'react'

export const useScript = (url: string, token: string) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute("src", url)
   // script.setAttribute("data-client-token", token)
    script.async = true
    script.onloadeddata = () => {
     // paypal?.Buttons?.({})
       // .render("#paypal-button-container")
      
    }
    
    document.head.appendChild(script)
    //document.body.insertBefore(script, document.getElementById("root"))
    return () => {
      document.head.removeChild(script)
    }
  }, [url, token])

  return [url, token]
}
