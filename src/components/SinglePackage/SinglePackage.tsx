'use client';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Section from '../ui/feature/Section';
import Container from '../ui/feature/Container';
import Image from 'next/image';
import { MdAccessTimeFilled } from "react-icons/md";

interface Package {
    _id: string;
    title: string;
    description: string;
    nights: number;
    days: number;
    regularPrice: number;
    discount: number;
    location: string;
    imageUrls: string;
    daysActivities: [];
}

const SinglePackage = () => {
    const params = useParams();
    const [singlePack, setSinglePack] = useState<Package | null>(null);

    useEffect(() => {
        const fetchPackage = async () => {
            try {
                const res = await fetch(`/api/package/${params.id}`);
                const data = await res.json();
                if (data.success === false) {
                    console.log("Cannot get the data");
                    return;
                }
                setSinglePack(data);
            } catch (error) {
                console.log("error in getting package");
            }
        };
        fetchPackage();
    }, [params.id]);

    console.log(singlePack);

    return (
        <Section classes=' ' >
            <img
                className='w-screen h-[50vh] object-cover'
                src={singlePack?.imageUrls}
                alt=''
            />
            <Container classes='mt-10 flex flex-col gap-5'>
                <h1 className='text-3xl font-semibold'>
                    {singlePack?.title}
                </h1>
                <span className='flex gap-3 items-center font-medium '>
                    <MdAccessTimeFilled />
                    <span>
                        {singlePack?.nights} nights / {singlePack?.days} days
                    </span>
                </span>
                <span className='text-2xl'>
                    {singlePack?.description}
                </span>
            </Container>
        </Section>
    );
};

export default SinglePackage;