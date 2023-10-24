export class TextTransformer {
  public text: string;

  constructor(initialText: string) {
    this.text = initialText;
  }
  convertUndToSpace = () => {
    this.text = this.text.replaceAll("_", " ") ?? "";
    return this;
  };

  capitalize = () => {
    this.text = this.text
      .split(" ")
      .reduce(
        (newText, word) =>
          newText.concat(" ", word.charAt(0).toUpperCase() + word.slice(1)),
        "",
      );
    return this;
  };
}
