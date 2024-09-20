import React, { useState } from 'react'

type Props = {
    params: {id: string};
};

const Projects = ({params}: Props) => {
  const {id} = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModelNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  
    return (
    <div>Projects</div>
  )
}

export default Projects