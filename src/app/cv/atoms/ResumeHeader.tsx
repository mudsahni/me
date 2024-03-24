import React from "react";
import { DevicePhoneMobileIcon, HomeIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

type Contact = {
    linkedIn: string;
    phone: string;
    location: string;
    email: string;
    github?: string;
};

type HeaderProps = {
    name: string;
    profile: string;
    contact: Contact;
};

type ContactInfoProps = {
    contact: Contact;
}
const ContactInfo: React.FC<ContactInfoProps> = ({ contact }) => {
    return (
        <div className="flex flex-col space-y-2 text-sm text-neutral-500">
            <div className="flex items-center space-x-2">
                <DevicePhoneMobileIcon className="h-5 w-5 text-sky-600" title="Mobile Phone" />
                <span>{contact.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-sky-600" title="Email Address" />
                <span>{contact.email}</span>
            </div>
            <div className="flex items-center space-x-2">
                <Image src="/linkedin.svg" className="h-5 w-5 text-sky-600" title="LinkedIn Address" alt="linkedin" />
                <a href={`https://www.linkedin.com/in/${contact.linkedIn}`} target="_blank" className="text-blue-500 hover:underline">{`linkedin.com/in/${contact.linkedIn}`}</a>
            </div>
            {
                contact.github &&
                <div className="flex items-center space-x-2">
                    <Image src="/github-mark.svg" className="h-5 w-5 text-sky-600" title="Github Address" alt="github" />
                    <a href={`https://www.github.com/${contact.github}`} target="_blank"
                       className="text-blue-500 hover:underline">{`github.com/${contact.github}`}</a>
                </div>
            }
            <div className="flex items-center space-x-2">
                <HomeIcon className="h-5 w-5 text-sky-600" title="Location" />
                <span>{contact.location}</span>
            </div>
        </div>
    )
}


export const ResumeHeader: React.FC<HeaderProps> = ({name, contact, profile }) => {

    return (
        <div className="md:flex md:items-center md:justify-between min-w-0 sm:pt-10 pt-5">
            <div className="min-w-0 flex-1">
                <div className="md:flex">
                    <h1 className="text-4xl font-light sm:leading-10 text-neutral-700 sm:text-5xl sm:tracking-normal">
                        {name}
                    </h1>
                </div>
                <div>
                    <h2 className="text-base font-light sm:leading-10 text-neutral-600 sm:tracking-widest tracking-widest sm:text-xl">
                        {profile}
                    </h2>
                </div>
            </div>
            <div className="mt-4 flex md:ml-4 md:mt-0">
                <ContactInfo contact={contact} />
            </div>
        </div>
    )
}