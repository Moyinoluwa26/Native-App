'use client';
import { usePathname } from "next/navigation";
function AboutMe() {
    console.log(usePathname());
    return (
        <div className="min-h-screen ">
            <h1 className="text-4xl font-bold text-center">About Me</h1>
            <p className="text-center">I am a software developer with a passion for creating innovative solutions to complex problems. I am a quick learner and a team player. I am always looking to learn new things and improve my skills.</p>
        </div>
    );
}

export default AboutMe;