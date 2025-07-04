import React from 'react'

function ProjectCards({ title, projCardStyle, titleStyle, description, projDescStyle, stacks, projCover, viewProj }) {

    return (
        <div className={projCardStyle} onClick={viewProj}>
            <img src={projCover} alt="" className={`w-full object-cover max-h-2/4 shadow-md mb-3`} />

            <p className={titleStyle}>{title}</p>
            <p className={projDescStyle}>{description}</p>

            <div className='flex flex-wrap gap-2'>
                {stacks.map((stack, index) => (
                    <p className='py-1 px-2 bg-darkBrown font-roboto text-lightBG text-sm m-0 rounded-xs' key={index}>{stack.name}</p>
                ))}
            </div>
        </div>
    )
}

export default ProjectCards