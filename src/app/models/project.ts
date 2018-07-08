import { ProjectLanguage } from './projectLanguage';

/**
 * This class represents a Github repository in this portfolio.
 */
export class Project {
  constructor(
    public name: string,
    public description: string,
    public languages: ProjectLanguage[],
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
   * @param languages the list of languages for this githubRepo
   */
  static fromGithub(githubRepo: any, languages: ProjectLanguage[]): Project {
    const thumbnail = `https://github.com/Blockost/${
      githubRepo.name
    }/raw/master/thumbnail.jpg`;

    return new Project(
      githubRepo.name,
      githubRepo.description,
      languages,
      githubRepo.homepage,
      githubRepo.html_url,
      thumbnail,
      githubRepo.topics
    );
  }

  /**
   * Returns true if the project contains (substring matching) the given string in either
   *  its name, description, language or list of topics. This method is *NOT* case-sensitive
   *
   * @param str the string to search for
   */
  contains(str: string): boolean {
    str = str.toLowerCase();

    return (
      this.nameContains(str) ||
      this.descriptionContains(str) ||
      this.languagesContains(str) ||
      this.topicsContains(str)
    );
  }

  private nameContains(str: string): boolean {
    return this.name != null && this.name.toLowerCase().includes(str);
  }

  private descriptionContains(str: string): boolean {
    return (
      this.description != null && this.description.toLowerCase().includes(str)
    );
  }

  private languagesContains(str: string): boolean {
    return (
      this.languages != null &&
      this.languages.some(language => language.name.toLowerCase().includes(str))
    );
  }

  private topicsContains(str: string): boolean {
    return (
      this.topics != null &&
      this.topics.some(topic => topic.toLowerCase().includes(str))
    );
  }
}
