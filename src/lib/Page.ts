export class Button {
  public title: string = "";
  public protocol: Function = () => null;
  public dom: HTMLElement = document.createElement("button");
  constructor() {}
  public onClick = (f: Function, params?: any) => {
    this.dom.addEventListener("click", () => {});
  };
  public setTitle = (name: string) => {
    this.title = name;
    this.dom.innerText = this.title;
  };
  public reset = () => {
    this.dom.removeEventListener("click", this.protocol);
  };
}

export class Page {
  public title: string = "";
  public dom: HTMLElement = document.createElement("div");
  constructor(parent: HTMLElement = document.body) {
    parent.append(this.dom);
  }
}
