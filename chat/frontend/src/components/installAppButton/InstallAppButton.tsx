import { useState, useEffect } from "react";

declare global {
  interface BeforeInstallPromptEvent extends Event {
    prompt: () => void;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
  }

  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }

  interface Navigator {
    standalone?: boolean;
  }
}

const InstallAppButton: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      console.log("📲 beforeinstallprompt event fired");

      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent); // 👈 Type assertion
      setIsInstallable(true);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt as EventListener
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt as EventListener
      );
    };
  }, []);

  useEffect(() => {
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as Navigator).standalone
    ) {
      console.log("📲 Running in standalone mode");
      setIsInstallable(true);
    }
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(outcome === "accepted" ? "✅ Installed" : "❌ Dismissed");
      setDeferredPrompt(null);
      setIsInstallable(true);
    }
  };

  return isInstallable ? (
    <button onClick={handleInstallClick} className="install-button">
      Install App
    </button>
  ) : null;
};

export default InstallAppButton;
