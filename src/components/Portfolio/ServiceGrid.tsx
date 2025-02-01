import React, { useState } from "react";

interface Project {
  name: string;
  link: string | null;
}


interface Client {
  name: string;
  projects: Project[];
}

interface Service {
  service: string;
  genres: {
    Fiction: Client[];
    Nonfiction: Client[];
  };
}

interface ServiceGridProps {
  isVisible: boolean;
  service: Service;
  close: () => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ isVisible, service, close }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Fiction' | 'Nonfiction'>('All');
  const [activeScreen, setActiveScreen] = useState<'service' | 'client'>('service');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const handleFilterClick = (filter: 'All' | 'Fiction' | 'Nonfiction') => {
    setActiveFilter(filter);
  };

  const handleClientClick = (client: Client) => {
    setSelectedClient(client);
    setActiveScreen('client');
  }

  const closeService = () => {
    setActiveScreen('service');
    setSelectedClient(null);
    close();
  }

  if (!isVisible) return null;

  const filteredGenres =
    activeFilter === 'All'
      ? [...service.genres.Fiction, ...service.genres.Nonfiction]
      : activeFilter === 'Fiction'
      ? service.genres.Fiction
      : service.genres.Nonfiction;

  return (
    <div className="past-wrapper">
      <div className="past-heading">
        <h3 className="s-heading">{activeScreen == 'service' ? service.service : selectedClient?.name}</h3>
        <div className="past-close">
          <button
            onClick={() => {closeService()}}
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding:"1.5rem"
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                width: "100%",
                height: "4px",
                backgroundColor: "black",
                transform: "rotate(45deg) translateY(-50%)",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                width: "100%",
                height: "4px",
                backgroundColor: "black",
                transform: "rotate(-45deg) translateY(-50%)",
              }}
            />
          </button>
        </div>
      </div>

      {/* Filter Buttons */}
      {activeScreen == 'service' && (
        <div className="filter-buttons">
          <button
            className={activeFilter === 'All' ? 'filter-button active' : 'filter-button'}
            onClick={() => handleFilterClick('All')}
          >
            All
          </button>
          <button
            className={activeFilter === 'Fiction' ? 'filter-button active' : 'filter-button'}
            onClick={() => handleFilterClick('Fiction')}
          >
            Fiction
          </button>
          <button
            className={activeFilter === 'Nonfiction' ? 'filter-button active' : 'filter-button'}
            onClick={() => handleFilterClick('Nonfiction')}
          >
            Nonfiction
          </button>
        </div>
      )}
      

      {/* Display filtered genres and projects */}
      {activeScreen == 'service' && (
        <div className="past-work">
          {filteredGenres.map((client) => (
            <button 
              key={client.name} 
              className="past-card"
              onClick={() => {handleClientClick(client)}}
            >
              <h4>{client.name}</h4>
              <div>Projects: {client.projects.length}</div>
              {/* <ServProject genre={client} /> */}
            </button>
          ))}
        </div>
      )}

      {activeScreen == 'client' && selectedClient && (
        <div className="past-work">
          {selectedClient.projects.map((project) => (
            <div className="past-card">
              <div>{project.name}</div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  go to link
                </a>
              )}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default ServiceGrid;
