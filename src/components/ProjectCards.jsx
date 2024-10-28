function ProjectCards({ img, title, description, date, language, viewOn, darkMode }) {
    return (
        <div className={`proj-cards ${darkMode ? 'darkProjCards' : 'lightProjCards'}`}>
            <div className="projCards-top">
                <img src={img} alt="" className="projCover" />
                <div className="projCards-title-desc">
                    <p className="projTitle">{title}</p>
                    <div className="title-desc-separator">&nbsp;</div>
                    <p className="projDesc">{description}</p>
                    <button className="viewProj" onClick={viewOn}>View Project</button>
                </div>
            </div>
            
            <div className="projCards-bot">
                {/* Add darkTextColor class conditionally */}
                <p className={`proj-info ${darkMode ? 'darkTextColor' : ''}`}>{date}</p>
                <p className={`proj-info ${darkMode ? 'darkTextColor' : ''}`}>{language}</p>
            </div>
        </div>
    )
}

export default ProjectCards;
