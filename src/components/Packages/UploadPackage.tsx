'use client';

import Container from "@/components/ui/feature/Container";
import Section from "@/components/ui/feature/Section";


const UploadPackage = () => {
  return (
    <Section>
        <Container classes="mt-24">
            <div className="text-2xl">
                Upload Packages
            </div>
            <form method="post" encType="multipart/form-data" autoComplete="off"
                className="mt-10 flex flex-col gap-10"
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className="text-xl">Title :</label>
                    <input type="text" id="title" name="title" className="bg-transparent border-2 rounded p-2"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="description" className="text-xl">Description :</label>
                    <textarea id="description" name="description" className="bg-transparent border-2 rounded p-2 h-40 resize-none"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="image" className="text-xl">Upload Images :</label>
                    <input type="file" id="image" name="image" className="bg-transparent border-2 rounded p-2"/>
                </div>
            </form>
        </Container>
    </Section>
  )
}

export default UploadPackage;