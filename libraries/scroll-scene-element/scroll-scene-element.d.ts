declare class ScrollSceneElement extends HTMLElement {
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(attribute: string, oldValue: string): void;
    static get observedAttributes(): string[];
    get offset(): number;
    set offset(value: number);
    get progress(): boolean;
    set progress(value: boolean);
}
declare global {
    interface Window {
        ScrollSceneElement: typeof ScrollSceneElement;
    }
}
export default ScrollSceneElement;
