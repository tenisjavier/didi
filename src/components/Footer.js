import React from 'react'
import FooterLink from './FooterLink.js'
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const links = [{title:'Passajero', link: 'https://chile.didiglobal.com/'}, {title:'Socio Conductor', link: 'https://chile.didiglobal.com/'} ,{title:'Ciudades', link: 'https://chile.didiglobal.com/'},
    {title:'DIDI Taxi', link: 'https://chile.didiglobal.com/'}, {title:'Seguridad', link: 'https://chile.didiglobal.com/'}]

    const countries = [{name: "Argentina", link: 'https://chile.didiglobal.com/'}, {name: "Australia", link: 'https://chile.didiglobal.com/'},
                        {name: "Brasil", link: 'https://chile.didiglobal.com/'}, {name: "Chile", link: 'https://chile.didiglobal.com/'}, {name: "Columbia", link: 'https://chile.didiglobal.com/'},
                        {name: "Ecuador", link: 'https://chile.didiglobal.com/'}, {name: "Japon", link: 'https://chile.didiglobal.com/'}, {name: "Ecuador", link: 'https://chile.didiglobal.com/'},{name: "Ecuador", link: 'https://chile.didiglobal.com/'},
                        {name: "Ecuador", link: 'https://chile.didiglobal.com/'},{name: "Ecuador", link: 'https://chile.didiglobal.com/'}]
    return (
        <footer>
            <div className="bg-grey-333 h-32 border-b-2  border-white text-white ">
               <div className="container h-full">
                   <FooterLink links={links}></FooterLink>
               </div>
            </div>
            
            <div className="bg-grey-333 h-96 lg:h-80">
                <div className="container h-full flex flex-wrap">
                    <div className="flex-initial flex flex-col justify-center items-start w-full h-1/2 lg:h-full lg:w-1/2 ">
                        <Link to="/cl">
                            <StaticImage
                            src="../images/didi-logo.png"
                            alt="didi logo"
                            width={180}
                            />
                        </Link>

                        <div className="h-auto w-full pr-52">
                             {countries.map( (c, index) => {
                                if(index === 0){
                                    return <a href={c.link} className="text-sm text-yellow-500 hover:text-yellow-300">{c.name}</a>
                                }
                                else{
                                    return <span className="text-white"> • <a href={c.link} className="text-sm text-yellow-500 hover:text-yellow-300">{c.name}</a></span>
                                }
                            })}
                        </div>
                    </div>

                    <div className="flex-initial w-full flex justify-center items-center px-32 h-1/2 lg:h-full lg:w-1/2 ">
                        <p className="flex-auto text-white text-3xl">Siguenos</p>
                        <div className="flex-auto text-white text-5xl"><FontAwesomeIcon icon={faFacebookSquare} /></div>
                        <div className="flex-auto text-white text-5xl"><FontAwesomeIcon icon={faInstagramSquare} /></div>
                        <div className="flex-auto text-white text-5xl"><FontAwesomeIcon icon={faTwitterSquare} /></div>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer
