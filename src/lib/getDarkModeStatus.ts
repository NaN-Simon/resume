const getDarkModeStatus = (setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>) => {

  const config: MutationObserverInit = { attributes: true, childList: false, subtree: false };
  const targetElement = document.querySelector("html");

  function mutationCallback(mutationsList: MutationRecord[]) {
    let elementHasDarkClass = false;
    for (const mutation of mutationsList) {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        if (targetElement) {
          elementHasDarkClass = targetElement.classList.contains("dark");
        }
      }
    }
    setIsDarkMode(elementHasDarkClass);
    return elementHasDarkClass
  }

  const observer = new MutationObserver(mutationCallback);

  targetElement && observer.observe(targetElement, config);
}

export default getDarkModeStatus