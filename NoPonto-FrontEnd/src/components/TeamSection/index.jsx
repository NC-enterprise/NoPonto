import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";


const TeamSection = () => {
    const teamMembers = [
        {
            name: 'Carolina Silva',
            role: 'Desenvolvedor web',
            image: 'https://avatars.githubusercontent.com/u/65463404?v=4', 
            socialLinks: {
                linkedin: 'https://www.linkedin.com/in/carolina-nascimento-silva/',
                github: 'https://github.com/Carolina-Silva'
            }
        },
        {
            name: 'Nicoly Avelino',
            role: 'Desenvolvedor web',
            image: 'https://avatars.githubusercontent.com/u/65463907?v=4',
            socialLinks: {
                linkedin: 'https://www.linkedin.com/in/nicolyavelino/',
                github: 'https://github.com/NicolyAvelino'
            }
        },
    ];
    return (
        <section className="bg-white dark:bg-gray-900">

            <div className="container px-6 py-10 mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center dark:text-white">Nosso Time</h2>

                <p className="max-w-2xl mx-auto my-6 text-center  dark:text-gray-300">
                Aqui você encontra quem fez parte e contribuiu com o nosso projeto interdisciplinar na faculdade. Conheça-nos e saiba mais sobre nossas áreas de atuação e as contribuições que oferecemos para o desenvolvimento deste projeto.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center p-16 transition-colors duration-300 transform cursor-pointer group hover:bg-colorMidGreen rounded-xl">
                            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={member.image} alt={member.name} />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{member.name}</h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{member.role}</p>

                            <div className="flex mt-3 -mx-2">
                                <a target="_blank" rel="noopener noreferrer" href={member.socialLinks.linkedin} className="mx-2 text-colorDarkGreen dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Linkedin">
                                    <FaLinkedin className="w-5 h-5 rounded-md" />
                                </a>

                                <a target="_blank" rel="noopener noreferrer" href={member.socialLinks.github} className="mx-2 text-colorDarkGreen dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                                    <FaGithubSquare className="w-5 h-5 rounded-md" />
                                </a>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}
export default TeamSection;