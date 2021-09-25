import { RepositoryItem } from "./RepositoryItem";

const repo = {
    name: "unform",
    description: "a repository for unform",
    "link": "https://localhost/github-explorer/unform"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>List of Repositories</h1>

            <ul>
                <RepositoryItem repository="unform"/>
                <RepositoryItem repository="unform"/>
                <RepositoryItem repository="unform"/>
                <RepositoryItem repository="unform"/>
            </ul>
        </section>
    );
}