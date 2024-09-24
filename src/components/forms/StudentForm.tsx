"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputFied from "../InputFied";
import Image from "next/image";

const schema = z.object({
    username: z
        .string()
        .min(3, { message: "UserName must be at least 3 characters long!" })
        .max(20, { message: "Must be less than 20 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long!" }),
    firstName: z
        .string()
        .min(3, { message: "First Name must be at least 3 characters long!" })
        .max(20, { message: "Must be less than 20 characters" }),
    lastName: z
        .string()
        .min(3, { message: "Last Name must be at least 3 characters long!" })
        .max(20, { message: "Must be less than 20 characters" }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 characters long!" }),
    address: z.string().min(10, { message: "Address must be at least 10 characters long!" }),
    bloodType: z.string().min(1, { message: "Blood Type is required!" }),
    birthday: z.date({ message: "Birthday must be at least 10 characters long!" }),
    sex: z.enum(["male", "female"], { message: "Sex is required" }),
    img: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;
const StudetForm = ({ type, data }: { type: "create" | "update"; data?: any }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">{ type === "update" ?  "Update Student" : "Create a new Student"}</h1>
            <span className="text-xs text-gray-400 font-semibold">Authentication Information</span>
            {/* <div className="flex flex-col gap-2 w-full md:w-1/4">
                <label className="text-xstext-gray-500">Username</label>
                <input
                    type="text"
                    placeholder="Kullanıcı Adı"
                    {...register("userName")}
                    className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                />
                {errors.userName?.message && (
                    <p className="text-xs text-red-400">{errors.userName?.message.toString()}</p>
                )}
            </div> */}
            <div className="flex justify-between flex-wrap gap-4">
                <InputFied
                    label="Username"
                    name="Username"
                    defaultValue={data?.username}
                    register={register}
                    error={errors?.username}
                />
                <InputFied
                    label="Email"
                    name="email"
                    type="email"
                    defaultValue={data?.email}
                    register={register}
                    error={errors?.email}
                />
                <InputFied
                    label="Password"
                    name="password"
                    defaultValue={data?.password}
                    register={register}
                    error={errors?.password}
                />
            </div>
            <span className="text-xs text-gray-400 font-semibold">Personal Information</span>
            <div className="flex justify-between flex-wrap gap-4">
                <InputFied
                    label="Last Name"
                    name="lastName"
                    defaultValue={data?.lastName}
                    register={register}
                    error={errors?.lastName}
                />
                <InputFied
                    label="Phone"
                    name="phone"
                    defaultValue={data?.phone}
                    register={register}
                    error={errors?.phone}
                />

                <InputFied
                    label="Address"
                    name="address"
                    defaultValue={data?.address}
                    register={register}
                    error={errors?.address}
                />

                <InputFied
                    label="Blood Type"
                    name="bloodType"
                    defaultValue={data?.bloodType}
                    register={register}
                    error={errors?.bloodType}
                />

                <InputFied
                    label="Birthday"
                    name="birthday"
                    defaultValue={data?.birthday}
                    register={register}
                    error={errors?.birthday}
                    type="date"
                />
                <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label className="text-xstext-gray-500">Sex</label>
                    <select
                        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                        {...register("sex")}
                        defaultValue={data?.sex}
                    >
                        <option value="male" className="text-sm">
                            {" "}
                            Male
                        </option>
                        <option value="female" className="text-sm">
                            {" "}
                            Female
                        </option>
                    </select>

                    {errors.sex?.message && (
                        <p className="text-xs text-red-400">{errors.sex?.message.toString()}</p>
                    )}
                </div>

                <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
                    <label
                        className="text-xstext-gray-500 flex items-center gap-2 cursor-pointer"
                        htmlFor="img"
                    >
                        <Image src="/icons/upload.png" alt="" width={28} height={28} />
                        <span>Upload a Photo</span>
                    </label>
                    <input type="file" id="img" className="hidden" {...register("img")} />

                    {errors.sex?.message && (
                        <p className="text-xs text-red-400">{errors.sex?.message.toString()}</p>
                    )}
                </div>
            </div>

            <button className="bg-blue-400 text-white p-2 rounded-md">
                {type === "create" ? "Create" : "Update"}
            </button>
        </form>
    );
};

export default StudetForm;
