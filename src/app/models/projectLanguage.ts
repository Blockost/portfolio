export class ProjectLanguage {
  // This property is used to apply a css class based on its name
  // It has to be another property because programming languages have
  // special characters or space in their name (e.g C++ or C#)
  public cssName: string;
  // This property holds the percentage of total code written in this
  // language troughout the entire project. It is computed and assigned
  // at the project-level
  public percentage: number;

  constructor(public name: string, public bytesOfCode: number) {
    this.cssName = this.translateNametoCssName(name);
    this.percentage = 0;
  }

  private translateNametoCssName(name: string): string {
    const lowerCaseName = name.toLowerCase();
    switch (lowerCaseName) {
      case 'c++':
        return 'cpp';
      case 'c#':
        return 'csharp';
      case 'jupyter notebook':
        return 'jupyter-notebook';
      default:
        return lowerCaseName;
    }
  }
}
