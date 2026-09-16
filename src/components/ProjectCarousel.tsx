"use client";

import { useEffect, useState } from "react";

import { projects } from "../app/data/projects_data";

export default function ProjectCarousel() {
    const [currentProject, setCurrentProject] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isHovered) {
            setCurrentProject((current) =>
                current === projects.length - 1
                ? 0
                : current + 1
            );
            }
        }, 8000);

        return () => {
            clearTimeout(timeout);
        };
        }, [currentProject, isHovered]);

    return (
        <div
            className="project-carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
            className="carousel-button carousel-button-left"
            onClick={() =>
                setCurrentProject(
                currentProject === 0
                    ? projects.length - 1
                    : currentProject - 1
                )
            }
            aria-label="Projet précédent"
            >
            ←
            </button>

            <div className="project-preview">
            <div className="browser-bar">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="preview-window">
                <img
                key={currentProject}
                className={`preview-image ${
                    isHovered ? "is-paused" : ""
                }`}
                src={projects[currentProject].image}
                alt={`Aperçu de ${projects[currentProject].name}`}
                />
            </div>
            </div>

            <button
            className="carousel-button carousel-button-right"
            onClick={() =>
                setCurrentProject(
                currentProject === projects.length - 1
                    ? 0
                    : currentProject + 1
                )
            }
            aria-label="Projet suivant"
            >
            →
            </button>

            <div className="project-meta">
            <strong>{projects[currentProject].name}</strong>
            <span>{projects[currentProject].type}</span>
            </div>
        </div>
        );
}