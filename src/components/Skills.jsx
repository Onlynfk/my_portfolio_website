import React from 'react'

function Skills() {
    return (
        <div className="skills  mt-5 " id="skills">
        <div className="experience_header p-3">
            <h5 className="text-center " id="skills"> My Experience </h5>
        <h6 className="text-center  text-sm"> <small>Specialist in need. Generalist at heart.</small> </h6>
        </div>
        <div className="skills__box text-md-center ">

            <div className="row row-cols-1 row-cols-md-3 g-4 p-5 ">
               
                <div className="skills_set text-center  p-2 p-3r ">
                    <i className=" fas fa-laptop  fs-2 "></i>
                    <h6 className="text-sm  mb-3 mt-2">Frontend</h6>
                        <span> Html5,</span>
                        <span> CSS3,</span> <br/>
                        <span> Javscript,</span>
                        <span> Bootstrap5,</span> <br/>
                        <span> Reactjs</span>


                </div>
                <div className="skills_set text-center p-2  p-3">
                    <i className=" fas fa-database fs-2  "></i>
                    <h6 className="text-sm  mb-3 mt-2">Backend</h6>
                        <span> Python,</span>
                        <span> Nodejs,</span> <br/>
                        <span> Django,</span>
                        <span> Postgresql</span>



        
                </div>
                <div className="skills_set text-center p-2  p-3 ">
                    <i className=" fas fa-tools  fs-2 "></i>
                    <h6 className="text-sm  mb-3 mt-2">Tools</h6>

                        <span>Vscode, </span>
                        <span> Pycharm,</span> <br/>
                        <span> Github,</span>
                        <span> Heruko,</span> <br/>
                        <span> Firebase</span>





                </div>
                
            </div>

          

        </div>

    </div>
    )
}

export default Skills
