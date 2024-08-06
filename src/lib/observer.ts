export function observerAddClasses(isIntersecting: boolean, testBlock: Element | null, animations: string[] = []) {

    document.addEventListener('DOMContentLoaded', function () {

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isIntersecting = entries[0].isIntersecting;
                    testBlock?.classList.add(...animations);
                } 
            });
        }, options);

        if (testBlock) {
            observer.observe(testBlock);
        }

        return () => observer.disconnect();
    });
}