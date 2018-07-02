/**
 * This class represents a Github repository in this portfolio.
 */
export class Project {
  constructor(
    public name: string,
    public description: string,
    public language: string,
    public websiteUrl: string,
    public githubUrl: string,
    public imgUrl: string,
    public topics: string[]
  ) {}

  /**
   * Returns a Project initialized using the given Github repo
   * JSON object.
   *
   * @param githubRepo the Github repo object to Projectify
   */
  static fromGithub(githubRepo: any): Project {
    const thumbnail = `https://github.com/Blockost/${
      githubRepo.name
    }/raw/master/thumbnail.jpg`;

    return new Project(
      githubRepo.name,
      githubRepo.description,
      githubRepo.language,
      githubRepo.homepage,
      githubRepo.html_url,
      thumbnail,
      githubRepo.topics
    );
  }

  /**
   * Returns true if the project contains (substring matching) the given string in either
   *  its name, description, language or list of topics.
   *
   * @param str the string to search for
   */
  contains(str: string): boolean {
    return (
      (this.name != null && this.name.includes(str)) ||
      (this.description != null && this.description.includes(str)) ||
      (this.language != null && this.language.includes(str)) ||
      (this.topics != null && this.topics.some(topic => topic.includes(str)))
    );
  }
}
