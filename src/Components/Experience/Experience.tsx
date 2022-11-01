import "./Experience.css";

function Experience(): JSX.Element {

    const exp = new Map<string, string[]>([ 
        ["java", ["Java 11", "Spring 5 (Core/Boot/Data/Web)", "Spring Cloud Microservices"]],
        ["front", ["Frontend", "HTML (5)", "CSS(3)", "Javascript (JS)", "Typescript (TS)", "REACT.js (18)", "Redux"]],
        ["orm", ["ORM", "JPA", "(Hibernate)"]],
        ["dbms", ["DBMS", "MySQL", "(+Workbench)"]],
        ["package", ["Package Management tools", "maven", "npm"]],
        ["ides", ["IDEs", "IntelliJ", "VS Code"]],
        ["arch", ["Architectural", "REST", "MVC"]],
        ["http", ["HTTP Clients", "Postman", "Swagger", "RestTemplate"]],
        ["more", ["More", "GitHub", "Docker", "GCP", ".."]]
    ]);
    const keys = Array.from( exp.keys() );
    
    return (
        <div className="experience">

            {(
                keys.map(k =>
                            <div id={"exp-" + k}>
                                {
                                    exp.get(k)?.map(s => 
                                                        <p>
                                                            <span>{s}</span>
                                                            <img src="#"/>
                                                        </p>
                                                    )
                                }
                            </div>
                        )
            )}            
                
        </div>
    );
}

export default Experience;
