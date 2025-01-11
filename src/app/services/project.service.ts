import { Injectable } from "@angular/core";
import { Project } from "../models/project";

@Injectable({
    providedIn: "root"
})

export class ProjectService
{
    private projects: Project[] =
    [
        new Project(
            "Curriculum Vitae",
            "Mon CV en ligne, réalisé pour montrer mes talents et permettre de pleinement me présenter.",
            [
                "HTML", "CSS", "TypeScript", "Angular"
            ],
            "/assets/images/projects/CV.png",
            "",
            "https://github.com/derveydylan/dd",
            "Personnel"
        ),

        new Project(
            "Togglight",
            "Un jeu de puzzle Lights Out en Angular, créé pour apprendre le framework. \
            Le jeu de base fonctionne et peut être largement enrichi.",
            [
                "HTML", "CSS", "TypeScript", "Angular"
            ],
            "/assets/images/projects/Togglight.png",
            "",
            "https://github.com/derveydylan/Togglight",
            "Personnel"
        ),
        new Project(
            "Helpdesk",
            "Un site web créé presque de zéro par mes soins pour automatiser \
            la gestion du planning des techniciens du helpdesk de l'ORIF de Pomy.",
            [
                "HTML", "CSS", "JavaScript", "PHP", "CodeIgniter", "MySQL"
            ],
            "/assets/images/projects/Helpdesk.png",
            "",
            "https://github.com/Orifinformatique/helpdesk",
            "Professionnel"
        ),
        new Project(
            "Plafor",
            "Un site web créé par l'ORIF de Pomy pour suivre l'avancée du plan de formation \
            de ses apprentis. J'ai travaillé sur une nouvelle fonctionnalité majeure : \
            les bulletins de notes.",
            [
                "HTML", "CSS", "JavaScript", "PHP", "CodeIgniter", "MySQL"
            ],
            "/assets/images/projects/Plafor.png",
            "",
            "https://github.com/Orifinformatique/plafor",
            "Professionnel"
        ),
        new Project(
            "Refonte du site Plafor (frontend)",
            "Cette application vise à refaire le site Plafor, en utilisant des technologies \
            modernes, en séparant le frontend du backend.",
            [
                "HTML", "CSS", "JavaScript", "React"
            ],
            "/assets/images/projects/Plafor.png",
            "",
            "https://github.com/Orifinformatique/plafor-frontback",
            "Professionnel"
        ),
    ]

    getProjects(): Project[]
    {
        return this.projects;
    }
}