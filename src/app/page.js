"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaSleigh, FaWhatsapp } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { sendEmail } from "@/lib/resend.js";
import { SiC, SiCss, SiExpress, SiGit, SiHtml5, SiJavascript, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPostman, SiPrisma, SiPython, SiTailwindcss, SiVercel } from 'react-icons/si';
import Comp from "@/components/3d.js";
import Nav from "@/components/MobileNavBar.js";
import { z } from "zod";


export default function HOME() {
  const [user, displayname] = useState("");
  const [sendf, settext] = useState("");
  const [sub, subject] = useState("");
  const texting = useRef(null);
  const [error, seterror] = useState(null);

  const schema = z.object({
    user: z.string().min(4, "name must be at least 4 characters"),
    email: z.string().min(1, "email is required").email('email form is invalid'),
    subject: z.string().min(1, "subject is required"),
  });
  //handle submition
  const handleSubmit = (e) => {
    e.preventDefault();

    const result = schema.safeParse({
      user: user,
      email: sendf,
      subject: sub,
    });
    if (!result.success) {
      seterror(result.error.flatten().fieldErrors);
      console.log(typeof messa);

      return;
    }
    seterror(null);
    send();
  }
  //send email function
  const send = async () => {
    const userMessage = texting.current.textContent;
    await sendEmail(sendf, sub, userMessage, user);
    settext("");
    subject("");
    displayname("");
    texting.current.style.color = "#22C55E";
    texting.current.textContent = "thanks for making some time to fill this form :)";
  }/**/

  const number = '+212700409034';
  const message = encodeURIComponent('Hello! I saw your portfolio and wanted to talk tech.');
  const whatsappURL = `https://wa.me/${number}?text=${message}`;
  const linkedinURL = `https://www.linkedin.com/in/badr-eddine-habbach-726861378/`;
  const githubURL = `https://github.com/badr-HB`;


  return (
    <div className="min-h-screen max-w-screen bg-[#111827] text-white">
      <nav className="w-full h-40 fixed top-0 z-1">
        <div className="w-full flex items-center justify-between px-15 py-8 bg-[#111827] relative">
          <div>
            <p className="font-poppins xl:text-4xl md:text-3xl font-medium text-[#4FC1FF]">print<span className="text-[blue]">(</span><span className="text-orange-300">"Badr"</span><span className="text-[blue]">)</span></p>
          </div>
          <ul className="font-syne xl:text-[25px] md:text-[18px] font-semibold  xl:gap-15 md:gap-9 lg:flex hidden">
            <li id="text" className=""><a href="#about">ABOUT</a></li>
            <li id="text"><a href="#education">EDUCATION</a></li>
            <li id="text"><a href="#skills">SKILLS</a></li>
            <li id="text"><a href="#contact">CONTACT</a></li>
          </ul>
          <div className="font-poppins xl:text-3xl md:text-2xl border w-fit h-fit p-4 px-9 rounded-3xl duration-300 ease-in hover:bg-blue-700 cursor-pointer hover:border-transparent lg:block hidden">
            <Link className="cursor-pointer" href={`${githubURL}`} target="_blank">Github</Link>
          </div>
          <Nav />
        </div>
      </nav>
      <main className="w-full h-full">
        {/*about*/}
        <div className="w-full md:mt-30 mt-20 overflow-hidden relative p-5 md:px-20" id="about">
          <Comp />
          <div className="w-full absolute md:top-45 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-0 md:translate-0">
            <div className="w-full flex flex-col-reverse gap-20 md:flex-row justify-around items-center px-5 md:px-0">
              <div className="md:w-5/10 w-full space-y-4">
                <h1 className="whitespace-nowrap overflow-visible xl:text-7xl md:text-5xl text-3xl font-syne font-semibold bg-linear-to-r from-[#FF00FF] via-[#007BFF] to-[#32FF7E] bg-clip-text inline-block text-transparent">Badr Eddine Habbach</h1>
                <h2 className="xl:text-3xl md:text-2xl text-[20px] font-syne font-normal text-gray-500">Full stuck web developer</h2>
                <p className="xl:text-[22px] md:text-[18px] text-[18px] font-poppins">Passionate Full Stack Developer with a love for building clean, functional, and user-centered web applications. I thrive on bridging the gap between sleek design and robust logic, and I am driven by a genuine excitement for solving problems through code.</p>
                <button className="duration-500 pointer-events-auto border p-3 px-5 rounded-2xl hover:bg-gray-400 hover:border-gray-400 hover:cursor-pointer font-semibold font-syne"><a download="Badr_Eddine_Habbach_CV .pdf" href="/MyResume.pdf">Download cv</a></button>
              </div>
              <div className={`relative pointer-events-auto md:w-3/10 w-5/10 aspect-square object-cover`}>
                <Image src={'/badr.png'} fill alt="" className="border rounded-[120px] hover:shadow-[0px_5px_90px_red] shadow-cyan-600 duration-300 ease-out hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
        {/*education*/}
        <div className="w-full mt-40 md:px-20 px-5 space-y-15 flex flex-col items-center md:block" id="education">
          <h2 className="" id="title">Education</h2>
          <div className="w-full h-50 border border-cyan-600 rounded-2xl space-y-7 flex flex-col items-center justify-center hover:shadow-[0px_5px_90px_red] shadow-cyan-600 duration-300 ease-out hover:scale-110 bg-[#1F2937]">
            <div className="md:w-8/10 xl:w-7/10 flex items-center gap-17">
              <p className="font-poppins font-bold md:text-[25px]">eWA</p>
              <p className="font-poppins font-semibold text-[19px]">2024-2026</p>
            </div>
            <p className="font-poppins font-semibold xl:text-[20px] md:text-[18px] flex flex-col items-center md:block pl-3 md:pl-0">Associate Degree in Computer Science (BAC +2) <span className="text-[#9CA3AF] text-[18px]">(Expected June 2026)</span></p>
          </div>
        </div>
        {/*skills*/}
        <div className="basis-full md:px-20 px-5 my-60 space-y-14 md:block flex flex-col items-center" id="skills">
          <h2 id="title">Skills</h2>
          <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 gap-10">
            <div className="w-full bg-gray-700 h-55 flex flex-col justify-center space-y-10 rounded-2xl">
              <p className="font-manrope font-black text-2xl text-center">Languages</p>
              <div className="w-full flex items-center justify-evenly">
                <SiHtml5 className="w-13 h-13 text-orange-600 cursor-pointer" title="HTML" />
                <div className="w-fit h-fit bg-white rounded-r-[10px] rounded-bl-[10px] cursor-pointer" title="CSS"><SiCss className="w-13 h-13 text-blue-500" /></div>
                <div className="w-fit h-fit bg-white cursor-pointer" title="javascript"><SiJavascript className="w-13 h-13 text-yellow-500" /></div>
                <SiPython className="w-13 h-13 text-blue-500 cursor-pointer" title="python" />
                <SiC className="w-13 h-13 text-blue-500 cursor-pointer" title="C" />
              </div>
            </div>
            <div className="w-full bg-gray-700 h-55 flex flex-col justify-center space-y-10 rounded-2xl">
              <p className="font-manrope font-black text-2xl text-center">Frameworks</p>
              <div className="w-full flex items-center justify-evenly">
                <SiNodedotjs className="w-13 h-13 text-green-600 cursor-pointer" title="node.js" />
                <SiExpress className="w-13 h-13 cursor-pointer" title="express.js" />
                <SiNextdotjs className="w-13 h-13 cursor-pointer" title="next.js" />
                <SiTailwindcss className="w-13 h-13 text-[#06B6D4] cursor-pointer" title="tailwindcss" />
              </div>
            </div>
            <div className="w-full bg-gray-700 h-55 flex flex-col justify-center space-y-10 rounded-2xl">
              <p className="font-manrope font-black text-2xl text-center">Database management</p>
              <div className="w-full flex items-center justify-evenly">
                <SiPrisma className="w-13 h-13 cursor-pointer" color="#2D3748" title="prisma ORM" />
                <SiPostgresql className="w-13 h-13 cursor-pointer" color="#336791" title="postgresql" />
                <SiMysql className="w-13 h-13 cursor-pointer" color="#00758F" title="Mysql" />
              </div>
            </div>
            <div className="xl:grid xl:col-span-5 xl:grid-cols-subgrid md:block">
              <div className="w-full bg-gray-700 h-55 flex flex-col justify-center space-y-10 rounded-2xl col-start-2">
                <p className="font-manrope font-black text-2xl text-center">Tools</p>
                <div className="w-full flex items-center justify-evenly">
                  <SiGit className="w-13 h-13 cursor-pointer" color="#F05032" title="git" />
                  <ImGithub className="w-13 h-13 cursor-pointer" color="#181717" title="github" />
                  <SiPostman className="w-13 h-13 cursor-pointer text-orange-600" title="Postman" />
                  <SiVercel className="w-13 h-13 cursor-pointer" title="Vercel" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*contact*/}
        <div className="w-full mt-40 md:px-20 px-5 flex flex-col md:flex-row gap-5 justify-center" id="contact">
          <div className="md:w-5/10 w-full space-y-6">
            <div className="w-full">
              <h2 id="title" className="">Let's build</h2>
              <h2 id="title" className=""><span className="font-poppins bg-linear-to-r from-[#FF00FF] via-[#007BFF] to-[#32FF7E] bg-clip-text inline-block text-transparent">together.</span></h2>
              <p className="xl:text-[20px] md:text-[18px]">I'm currently available for freelance, Development challenges and<br className="hidden xl:block" /> full-time software engineering roles.Let's talk tech <br /> [ <span className="text-[#4ADE80]">Available</span> for Internship ].</p>
            </div>
            <div className="md:w-8/10 xl:w-6/10 w-full space-y-8">
              {/*whatsapp*/}
              <div className="w-full xl:w-8/10 rounded-2xl flex items-center justify-center py-5 gap-6 bg-gray-800">
                <div className="border border-transparent rounded-2xl p-2.5 bg-gray-700">
                  <FaWhatsapp className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <p className="font-manrope font-semibold text-[16px] text-gray-400">Whatsapp</p>
                  <Link className="cursor-pointer hover:text-blue-300 font-manrope font-medium xl:text-[18px] md:text-[16px] " href={`${whatsappURL}`} target="_blank">{`${number}`}</Link>
                </div>
              </div>
              {/*linkedin*/}
              <div className="w-full xl:w-8/10 rounded-2xl flex items-center justify-center py-5 gap-6 bg-gray-800">
                <div className="border border-transparent rounded-2xl p-2.5 bg-gray-700">
                  <div className="w-fit bg-white rounded-[3px]"><GrLinkedin className="w-9 h-9 text-blue-600" /></div>
                </div>
                <div>
                  <p className="font-manrope font-semibold text-[16px] text-gray-400">Linkedin</p>
                  <Link className="cursor-pointer hover:text-blue-300 font-manrope font-medium xl:text-[18px] md:text-[16px]" href={`${linkedinURL}`} target="_blank">linkedin.com/Badr</Link>
                </div>
              </div>
              {/*github*/}
              <div className="w-full xl:w-8/10 rounded-2xl flex items-center justify-center py-5 gap-6 bg-gray-800">
                <div className="border border-transparent rounded-2xl p-2.5 bg-gray-700">
                  <ImGithub className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-manrope font-semibold text-[16px] text-gray-400">Github</p>
                  <Link className="cursor-pointer hover:text-blue-300 font-manrope font-medium xl:text-[18px] md:text-[16px]" href={`${githubURL}`} target="_blank">github.com/Badr</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-5/10 w-full md:h-175 h-auto bg-gray-800 rounded-4xl flex flex-col xl:justify-center md:pt-10 xl:pt-0 items-center relative">
            <form onSubmit={handleSubmit} className="w-7/10 h-fit flex flex-col items-center space-y-8 py-20 md:py-0 relative">
              <div className="w-full flex flex-col md:flex-col xl:flex-row justify-center gap-5">
                <div className="xl:w-5/10 md:w-full space-y-2">
                  <p className="font-manrope text-gray-200">FULL_NAME</p>
                  <input type="text" name="text" placeholder="Badr Eddine" className="" id="input" value={user} onChange={(e) => displayname(e.target.value)} />
                  <div className="w-full h-3">
                    {error?.user && <p className="text-red-500 text-[13px]">{`${error?.user}`}</p>}
                  </div>
                </div>
                <div className="xl:w-5/10 md:w-full space-y-2">
                  <p className="font-manrope text-gray-200">EMAIL_ADDRESS</p>
                  <input type="email" name="email" placeholder="badr@example.com" className="" id="input" value={sendf} onChange={(e) => settext(e.target.value)} />
                  <div className="w-full h-3">
                    {error?.email && <p className="text-red-500 text-[13px]">{`${error?.email}`}</p>}
                  </div>
                </div>
              </div>
              <div className="w-full space-y-2">
                <p className="font-manrope text-gray-200">SUBJECT</p>
                <input type="text" name="subject" placeholder="Just saying hi" id="input" value={sub} onChange={(b) => subject(b.target.value)} />
                <div className="w-full h-3">
                  {error?.subject && <p className="text-red-500 text-[13px]">{`${error?.subject}`}</p>}
                </div>
              </div>
              <div className="w-full h-40 space-y-2">
                <p>MESSAGE</p>
                <div id="input" className={`text-gray-400 w-full h-full overflow-y-auto`} contentEditable="true" ref={texting}></div>
              </div>
              <button type="submit" className={`absolute -bottom-3 md:-bottom-24 xl:-bottom-20 -right-10 border py-3 px-3 rounded-xl duration-500 ease-out cursor-pointer hover:border-transparent hover:text-black hover:bg-green-500 font-manrope font-bold left-1/2 md:-right-20 xl:right-0 -translate-x-1/2 -translate-y-1/2 xl:translate-0`}>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </main>
      <footer className="w-full h-40 flex justify-center items-end mt-10 pb-8">
        <p className="text-gray-400 text-[13px]">© 2026 Digital Architect | Built with Next.js & Tailwind CSS</p>
      </footer>
    </div>
  )
}
