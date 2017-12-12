export class Project {
    name: string;
    description: string;
    websiteUrl: string;
    githubUrl: string;
    imgUrl: string;

    constructor(
        name: string,
        description: string,
        websiteUrl: string,
        githubUrl: string,
        imgUrl: string) {

        this.name = name;
        this.description = description;
        this.websiteUrl = websiteUrl;
        this.githubUrl = githubUrl;
        this.imgUrl = imgUrl;
    }
}
