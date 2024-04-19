'use client'

import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import {useForm, SubmitHandler} from "react-hook-form"

interface IFormInput {
    username: string
    email: string
}

function LoginDialog() {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    const {register, handleSubmit, formState: {errors},} = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
        console.log(errors)
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25"/>
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className={'flex justify-between'}>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        简逸
                                    </Dialog.Title>
                                    <p onClick={closeModal}>X</p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <p>username:</p>
                                    <input {...register("username", {required: true, maxLength: 20})}
                                           className={'jy-input'}/>
                                    {errors.username?.type === "required" && (
                                        <p role="alert">First name is required</p>
                                    )}
                                    <p>email:</p>
                                    <input {...register("email", {pattern: /^[A-Za-z]+$/i})} className={'jy-input'}/>
                                    {errors.email?.type === "pattern" && (
                                        <p role="alert">格式不对</p>
                                    )}
                                    {/*<select*/}
                                    {/*        {...register("gender")}*/}
                                    {/*        onChange={e => console.log(e.target.value)}*/}
                                    {/*>*/}
                                    {/*    <option value="female">female</option>*/}
                                    {/*    <option value="male">male</option>*/}
                                    {/*    <option value="other">other</option>*/}
                                    {/*</select>*/}
                                    <input type="submit" value={'登录'} accessKey={'enter'}/>
                                    <p>还没账号？</p>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default LoginDialog;