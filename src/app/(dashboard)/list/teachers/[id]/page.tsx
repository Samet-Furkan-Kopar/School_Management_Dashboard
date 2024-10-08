import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleTeacherPage = () => {
    return (
        <div className="flex-1 flex flex-col xl:flex-row gap-4">
            <div className="w-full xl:w-2/3">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="bg-colorSky py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3 ">
                            <Image
                                src="/icons/avatar.png"
                                width={144}
                                height={144}
                                className="w-36 h-36 rounded-full object-cover"
                                alt=""
                            />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <h1 className="text-xl font-semibold">SAMET FURKAN</h1>
                            <FormModal table="teacher" type="update" 
                            data={{
                                id: 1,
                                username : "sametfurkan",
                                email : "awd@gmail.com",
                                password : "123456",
                                phone : "5446552711",
                                firstName : "Samet",
                                lastName : "Furkan",
                                bloodType : "0+",
                                dateOfBirth : "2000-01-01",
                                sex : "male",
                                img : "/icons/avatar.png",
                                address :  "İstanbul / Türkiye",
                            }}
                            />
                            <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/icons/blood.png" width={14} height={14} alt="" />
                                    <span>0+</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/icons/date.png" width={14} height={14} alt="" />
                                    <span>january 2024</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/icons/mail.png" width={14} height={14} alt="" />
                                    <span>sametkopar465@gmail.com</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/icons/phone.png" width={14} height={14} alt="" />
                                    <span>5446552711</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/icons/singleAttendance.png"
                                width={24}
                                height={24}
                                alt=""
                                className="w-6 h-6"
                            />
                            <div>
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/icons/singleBranch.png"
                                width={24}
                                height={24}
                                alt=""
                                className="w-6 h-6"
                            />
                            <div>
                                <h1 className="text-xl font-semibold">2</h1>
                                <span className="text-sm text-gray-400">Branches</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/icons/singleLesson.png"
                                width={24}
                                height={24}
                                alt=""
                                className="w-6 h-6"
                            />
                            <div>
                                <h1 className="text-xl font-semibold">6</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/icons/singleClass.png"
                                width={24}
                                height={24}
                                alt=""
                                className="w-6 h-6"
                            />
                            <div>
                                <h1 className="text-xl font-semibold">6</h1>
                                <span className="text-sm text-gray-400">Classes</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                    <h1>Teacher&apos;s Schedule</h1>
                    <BigCalendar />
                </div>
            </div>

            <div className="w-full xl:w-1/3">
                <div className="bg-white p-4 rounded-md">
                    <h1 className="text-xl font-semibold">Shortcuts</h1>
                    <div className="mt-4 flex gap-4  flex-wrap text-xs text-gray-500">
                        <Link className="p-3 rounded-md bg-colorSkyLight" href="/">Teacher&apos;s Classes </Link>
                        <Link className="p-3 rounded-md bg-colorPurpleLight" href="/">Teacher&apos;s Students </Link>
                        <Link className="p-3 rounded-md bg-colorYellowLight" href="/">Teacher&apos;s Lessons </Link>
                        <Link className="p-3 rounded-md bg-pink-50" href="/">Teacher&apos;s Exams </Link>
                        <Link className="p-3 rounded-md bg-colorSkyLight" href="/">Teacher&apos;s Assignments </Link>
                    </div>
                </div>
                <Performance />
                <Announcements />
            </div>
        </div>
    );
};

export default SingleTeacherPage;
