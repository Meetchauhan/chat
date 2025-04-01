import { useState, useEffect } from "react";

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }

  interface BeforeInstallPromptEvent extends Event {
    prompt(): void;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
  }
}

const InstallAppButton: React.FC = () => {
  const [isInstallable, setIsInstallable] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
      console.log("✅ `beforeinstallprompt` event fired!");
      event.preventDefault();
      setDeferredPrompt(event);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  useEffect(() => {
    const handleInstallClick = async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User chose: ${outcome}`);
        setDeferredPrompt(null);
        setIsInstallable(false);
      }
    };
    if (isInstallable) {
      handleInstallClick();
    }
  }, [deferredPrompt, isInstallable]);

  return;
};

export default InstallAppButton;
