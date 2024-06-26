'use client';

import { useState, useEffect, useCallback } from "react";
import { IoMdClose } from 'react-icons/io';


interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    disabled?: boolean;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    disabled,
    title,
    body,
    footer
}) => {

    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);
    
    const handleClose = useCallback(() => {
        if(disabled) {
            return;
        }

        setShowModal(false);

        setTimeout(() => {
            onClose();
        }, 300)

    }, [disabled, onClose]);

    return (
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-black/70 dark:bg-gray-700/20"
        >

            <div
                className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto"
            >

                {/* CONTENT */}

                <div
                    className={`${showModal ? 'translate-y-0' : 'translate-y-full'} ${showModal ? 'opacity-100' : 'opacity-0'} translate duration-300 h-full`}
                >

                    <div
                        className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-background outline-none focus:outline-none"
                    >

                        {/* HEADER */}

                        <div
                            className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]"
                        >
                            
                            <button
                                onClick={handleClose}
                                className="p-1 border-0 hover:opacity-70 transition absolute right-9"
                            >
                                <IoMdClose size={18}/>
                            </button>

                            <div
                                className="text-lg font-semibold"
                            >
                                {title}
                            </div>

                        </div>

                        {/* BODY */}

                        <div
                            className="relative p-6 flex-auto"
                        >
                            {body}
                        </div>

                        {/* FOOTER */}

                        {footer && (
                            <div
                                className="flex flex-col gap-2 p-6"
                            >

                                <div
                                    className="flex flex-row items-center gap-4 w-full"
                                >

                                </div>

                            </div>
                        )}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Modal;