import { useState, useEffect } from 'react';

// Extend WindowEventMap to support the `beforeinstallprompt` event
declare global {
  interface WindowEventMap {
    'beforeinstallprompt': BeforeInstallPromptEvent;
  }

  interface BeforeInstallPromptEvent extends Event {
    prompt(): void;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
  }
}

const InstallAppButton: React.FC = () => {
  const [isInstallable, setIsInstallable] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  // Check if the app is already installed
  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstallable(false); // Don't show the install button if already installed
    }

    const handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
      console.log('beforeinstallprompt event triggered');  // Debugging line
      event.preventDefault(); // Prevent the default prompt
      setDeferredPrompt(event); // Save the event so we can trigger it later
      setIsInstallable(true); // Show the install button
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Handle the install button click
  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the install prompt
      const { outcome } = await deferredPrompt.userChoice; // Wait for user to make a choice
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      setDeferredPrompt(null); // Reset the deferred prompt
      setIsInstallable(true); // Hide the button
    }
  };
  console.log("is installable", isInstallable);
  

  return (
    <>
      {isInstallable && (
        <button
          onClick={handleInstallClick}
          className="install-button"
        >
          Install App
        </button>
      )}
    </>
  );
};

export default InstallAppButton;
