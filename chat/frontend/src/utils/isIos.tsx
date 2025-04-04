declare global {
    interface Window {
      MSStream?: unknown;
    }
  }
  
  export const isIOS = (): boolean => {
    const userAgent = window.navigator.userAgent;
    return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    
  };