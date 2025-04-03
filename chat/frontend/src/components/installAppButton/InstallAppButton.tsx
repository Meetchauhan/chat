import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  closeInstallAppModal,
  openInstallAppModal,
} from "../../features/InstallAppSlice";

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
  const dispatch = useDispatch<AppDispatch>();
  const isInstallAppModalOpen = useSelector(
    (item: RootState) => item?.installAppModal?.value
  );
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

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User chose: ${outcome}`);
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  useEffect(() => {
    dispatch(openInstallAppModal());
  }, [dispatch]);

  return isInstallable && isInstallAppModalOpen ? (
    <div className="block md:hidden min-h-[100dvh] h-full w-full absolute z-40 bg-[#0000004a]">
      <div className="flex justify-center items-center h-full">
        <div className="px-10 py-5 bg-white border-orange-600 border-2 text-center">
          <button className="" onClick={() => dispatch(closeInstallAppModal())}>
            Close
          </button>
          <div className="text-black  font-bold text-xl mb-5">
            Want to install as App?
          </div>
          <button
            onClick={handleInstallClick}
            className="install-button bg-orange-600 text-white cursor-pointer py-2 px-5 text-[18px] rounded-sm"
          >
            Install App
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default InstallAppButton;
