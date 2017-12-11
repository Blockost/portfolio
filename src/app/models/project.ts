export class Project {
    name: string;
    description: string;
    websiteUrl: string;
    githubUrl: string;

    constructor(
        name: string,
        description: string,
        websiteUrl: string,
        githubUrl: string) {

        this.name = name;
        this.description = description;
        this.websiteUrl = websiteUrl;
        this.githubUrl = githubUrl;
    }
}
