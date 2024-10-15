function ProjectCards(props){
    return(
        <div className="proj-cards">
            <div className="projCards-top">
                <img src={props.img} alt="" className="projCover" />

                <div className="projCards-title-desc">
                    <p className="projTitle">{props.title}</p>
                    <div className="title-desc-separator">&nbsp;</div>
                    <p className="projDesc">{props.description}</p>
                    <button className="viewProj" onClick={props.viewOn}>View Project</button>
                </div>
            </div>

            <div className="projCards-bot">
                <p className="proj-info">{props.date}</p>
                <p className="proj-info">{props.language}</p>
            </div>
        </div>
    )
}

export default ProjectCards