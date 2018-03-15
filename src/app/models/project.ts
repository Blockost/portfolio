export class Project {
    name: string;
    description: string;
    language: string;
    websiteUrl: string;
    githubUrl: string;
    imgUrl: string;
    topics: string[];

    static fromGithub(githubRepo: any): Project {
        return new Project(
            githubRepo.name,
            githubRepo.description,
            githubRepo.language,
            githubRepo.homepage,
            githubRepo.html_url,
            '/assets/img/fake.jpg',
            githubRepo.topics);
    }

    constructor(
        name: string,
        description: string,
        language: string,
        websiteUrl: string,
        githubUrl: string,
        imgUrl: string,
        topics: string[]) {

        this.name = name;
        this.description = description;
        this.language = language;
        this.websiteUrl = websiteUrl;
        this.githubUrl = githubUrl;
        this.imgUrl = imgUrl;
        this.topics = topics;
    }
}
