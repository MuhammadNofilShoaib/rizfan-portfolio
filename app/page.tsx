import Image from "next/image";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import Link from "next/link";



export default function Home() {
  return (
    <div className="px-[20px] md:px-[46.5px] lg:px-[50.5px] overflow-hidden  mx-7 md:mt-0">

      <div className="bg-[#EBFEFF] -mx-[146.5px] px-[20px] md:px-[46.5px] lg:px-[50.5px] largest:px-[350px] py-[20px]">
        <div className=" flex flex-col-reverse lg:flex-row justify-between items-center gap-[46px] lg:gap-[10px] lg:mx-[40px] h-[709px] my-[70px] lg:mt-0">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center lg:items-start gap-[5px]">
              <p className="font-[400] text-2xl lg:text-[24px] lg:mx-[42px] text-[#457B9D] leading-[30.24px]">Hi Everyone, I am</p>
              <p className="font-[700] text-[35px] lg:mx-[40px] md:text-[40px] lg:text-[48px] leading-[60.48px] ">Rizfan Herlaya</p>
              <p className="font-[400] mx-[100px] lg:mx-[30px] text-center lg:text-left text-[18px] px-3 md:text-[20px] leading-[25.2px] text-black/80">Lorem ipsum dolor sit amet consectetur. Vitae maecenas pellentesque tellus tempus purus integer nisi cras fermentum.</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-[50px] lg:mx-[45px]">
                <button className="flex items-center justify-center gap-[20px] font-[400] text-[20px] leading-[25.2px] text-white bg-[#457B9D] w-[200px] h-[50px] md:w-[274px] lg:w-[200px] lg:h-[50px] md:h-[64px] rounded-[5px] shadow-[0px_4px_4px_#00000040] hover:saturate-200 duration-200 ease-in-out">Download CV <IoCloudDownloadOutline className="size-[30px]" />
                </button>
                <button className="font-[400] text-[20px] leading-[25.2px] text-[#457B9D] bg-[#457B9D]/10 border border-[#457B9D]  w-[200px] h-[50px] md:w-[274px] md:h-[64px] lg:w-[200px] lg:h-[50px] rounded-[5px] shadow-[0px_4px_4px_#00000040] hover:saturate-200 duration-200 ease-in-out">Explore More</button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center lg:mr-[30px]">
            <div className="bg-[#457B9D] text-[#457B9D] md:w-[479px] md:h-[390px] rounded-[40px] shadow-[0px_4px_4px_#00000040]">
              <Image src="/mainImage.png" alt="image" width={405} height={524.76} className="relative w-[250px] md:w-[405px] top-[5px] md:-top-[123.3px] md:left-[35px] "></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white -mx-[146.5px] px-[20px] md:px-[46.5px] lg:px-[146.5px] largest:px-[350px] my-[30px] lg:my-0">
        <div className="lg:h-[616px] flex flex-col lg:flex-row justify-between items-center gap-[89px]">
          <Image src="/secondImage.png" alt="image" width={500} height={500} className="size-[300px] md:size-[500px] "></Image>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center lg:items-start gap-[5px] -mt-[60px] lg:-mt-0">
              <p className="font-[400] text-[24px] text-[#457B9D] leading-[30.24px]">About</p>
              <p className="font-[700] text-[48px] leading-[60.48px]">About Me?</p>
              <p className="font-[400] text-[20px] leading-[25.2px] text-black/80 text-center lg:text-left mx-[100px] lg:mx-0">Lorem ipsum dolor sit amet consectetur. Iaculis diam augue a adipiscing non aliquet. Leo semper lacus fringilla consectetur cras ac ullamcorper ut. Risus nunc diam accumsan feugiat. Tristique diam consectetur aliquam vitae suspendisse vel leo. Nec quisque senectus laoreet id pulvinar id vulputate. Montes consectetur diam non aliquam nunc maecenas non. Molestie pretium amet id dictum vitae nam vel sit. Rhoncus massa velit ut amet massa morbi eget. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebfeff] -mx-[146.5px] px-[20px] md:px-[46.5px] lg:px-[146.5px] flex flex-col justify-center items-center py-[87px] largest:px-[350px]">
        <p className="font-[600] text-[32px] text-[#457B9D] leading-[40.24px]">Skills</p>
        <p className="font-[700] text-[25px] md:text-[48px] leading-[60.48px] pt-[20px]">What I am capable of?</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] lg:gap-[30px] pt-[20px]">
          <IoLogoHtml5 className="size-[80px] lg:size-[105px] text-orange-500 hover:saturate-200 duration-200 ease-in-out" />
          <IoLogoCss3 className="size-[80px] lg:size-[105px] text-blue-700 hover:saturate-200 duration-200 ease-in-out" />
          <BsBootstrapFill className="w-[75px] h-[75px] lg:w-[94px] lg:h-[94px] text-purple-950 hover:saturate-200 duration-200 ease-in-out" />
          <RiTailwindCssFill className="size-[100px] lg:size-[130px] text-cyan-500 hover:saturate-200 duration-200 ease-in-out" />
          <SiPhp className="size-[120px] lg:size-[150px] hover:saturate-200 duration-200 ease-in-out" />
          <FaLaravel className="size-[80px] g:size-[110px] text-orange-500 hover:saturate-200 duration-200 ease-in-out" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-[87px] largest:px-[250px]">
        <p className="font-[600] text-[32px] text-[#457B9D] leading-[40.24px]">Projects</p>
        <p className="font-[700] text-[25px] md:text-[48px] leading-[60.48px] pt-[20px]">What I have made?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-[50px] xl:gap-x-[150px] gap-y-[70px] pt-[50px] justify-center justify-items-center items-center px-0 md:px-[18px]">
          <div className=" bg-white rounded-[10px] shadow-[0px_4px_4px_#00000020] overflow-hidden size-[250px] xl:w-[363px] xl:h-[310px] hover:saturate-200 duration-200 ease-in-out">
            <Image src="/image 1.png" alt="projects_1" width={363} height={198}></Image>
            <div className="p-2">
              <h2 className="capitalize text-[20px] font-[600] leading-[25.2px]">portfolio website design</h2>
              <p className="text-black/70 text-[14px] font-[400] leading-[17.64px] mt-1">
                Lorem ipsum dolor sit amet consectetur.</p>
              <Link href="https://www.figma.com" target="_blank" className="text-[#457B9D] text-[14px] font-[400] leading-[17.64px] mt-1">Figma</Link>
            </div>
          </div>
          <div className=" bg-white rounded-[10px] shadow-[0px_4px_4px_#00000020] overflow-hidden size-[250px] xl:w-[363px] xl:h-[310px] hover:saturate-200 duration-200 ease-in-out">
            <Image src="/image 1 (1).png" alt="projects_2" width={363} height={198}></Image>
            <div className="p-4">
              <h2 className="capitalize text-[20px] font-[600] leading-[25.2px]">LitterCycle Exchange</h2>
              <p className="text-black/70 text-[14px] font-[400] leading-[17.64px] mt-1">
                Lorem ipsum dolor sit amet consectetur. </p>
              <Link href="https://www.figma.com" target="_blank" className="text-[#457B9D] text-[14px] font-[400] leading-[17.64px] mt-1">Figma</Link>
            </div>
          </div>
          <div className=" bg-white rounded-[10px] shadow-[0px_4px_4px_#00000020] overflow-hidden size-[250px] xl:w-[363px] xl:h-[310px] hover:saturate-200 duration-200 ease-in-out">
            <Image src="/image 1 (2).png" alt="projects_2" width={363} height={198}></Image>
            <div className="p-4">
              <h2 className="capitalize text-[20px] font-[600] leading-[25.2px]">Edubix</h2>
              <p className="text-black/70 text-[14px] font-[400] leading-[17.64px] mt-1">
                Lorem ipsum dolor sit amet consectetur. </p>
              <Link href="https://www.figma.com" target="_blank" className="text-[#457B9D] text-[14px] font-[400] leading-[17.64px] mt-1">Figma</Link>
            </div>
          </div>
          <div className=" bg-white rounded-[10px] shadow-[0px_4px_4px_#00000020] overflow-hidden size-[250px] xl:w-[363px] xl:h-[310px] hover:saturate-200 duration-200 ease-in-out">
            <Image src="/image 1 (3).png" alt="projects_2" width={363} height={198}></Image>
            <div className="p-4">
              <h2 className="capitalize text-[20px] font-[600] leading-[25.2px]">PPDB SMK Telesandi Bekasi</h2>
              <p className="text-black/70 text-[14px] font-[400] leading-[17.64px] mt-1">
                Lorem ipsum dolor sit amet consectetur. </p>
              <Link href="https://www.figma.com" target="_blank" className="text-[#457B9D] text-[14px] font-[400] leading-[17.64px] mt-1">Live View</Link>
            </div>
          </div>
          <div className=" bg-white rounded-[10px] shadow-[0px_4px_4px_#00000020] overflow-hidden size-[250px] xl:w-[363px] xl:h-[310px] hover:saturate-200 duration-200 ease-in-out">
            <Image src="/image 1 (3).png" alt="projects_2" width={363} height={198}></Image>
            <div className="p-4">
              <h2 className="capitalize text-[20px] font-[600] leading-[25.2px]">PPDB SMK Telesandi Bekasi</h2>
              <p className="text-black/70 text-[14px] font-[400] leading-[17.64px] mt-1">
                Lorem ipsum dolor sit amet consectetur. </p>
              <Link href="https://www.figma.com" target="_blank" className="text-[#457B9D] text-[14px] font-[400] leading-[17.64px] mt-1">Live View</Link>
            </div>
          </div>
          <div className=" bg-white rounded-[10px] shadow-[0px_4px_4px_#00000020] overflow-hidden size-[250px] xl:w-[363px] xl:h-[310px] hover:saturate-200 duration-200 ease-in-out">
            <Image src="/image 1 (3).png" alt="projects_2" width={363} height={198}></Image>
            <div className="p-4">
              <h2 className="capitalize text-[20px] font-[600] leading-[25.2px]">PPDB SMK Telesandi Bekasi</h2>
              <p className="text-black/70 text-[14px] font-[400] leading-[17.64px] mt-1">
                Lorem ipsum dolor sit amet consectetur. </p>
              <Link href="https://www.figma.com" target="_blank" className="text-[#457B9D] text-[14px] font-[400] leading-[17.64px] mt-1">Live View</Link>
            </div>
          </div>  

        </div>


      </div>

    </div>
  );
}
