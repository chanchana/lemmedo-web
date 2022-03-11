import React from "react";
import { Icon } from "../styles/icons";

export interface ContactData {
    icon: React.ReactNode;
    iconColor?: string;
    name: string;
    label: string;
    url: string;
}

export const locationContact = 'Bangkok, Thailand'

export const mainContact = {
    name: 'Chanchana Wicha',
    email: 'wic.chanchana@gmail.com',
    location: `${locationContact}, 10110`,
}

export const contacts: ContactData[] = [
    {
        name: 'Email',
        icon: Icon.Envelope,
        label: mainContact.email,
        url: `mailto:${mainContact.email}`,
    },
    {
        name: 'iMessage',
        icon: Icon.Comment,
        label: 'north1602@gmail.com',
        url: 'sms:north1602@gmail.com',
    },
    {
        name: 'Skype',
        icon: Icon.Skype,
        label: mainContact.name,
        url: 'https://join.skype.com/invite/sh0rA7w7CClg',
    },
    {
        name: 'Whatsapp',
        icon: Icon.Whatsapp,
        label: 'Whatsapp',
        url: 'https://api.whatsapp.com/qr/W4AW6BSYGCSWH1?autoload=1&app_absent=0',
    },
]

export const socialContacts: ContactData[] = [
    {
        name: 'LinkedIn',
        icon: Icon.Linkedin,
        label: '',
        url: 'https://www.linkedin.com/in/chanchanawicha/',
        iconColor: '#158ec8',
    },
    {
        name: 'Github',
        icon: Icon.Github,
        label: '',
        url: 'https://www.github.com/chanchana',
        iconColor: '#bb27d0',
    },
    {
        name: 'Line',
        icon: Icon.Line,
        label: '',
        url: 'https://line.me/ti/p/sDjgNvcNf3',
        iconColor: '#00B900',
    },
    {
        name: 'Instagram',
        icon: Icon.Instagram,
        label: '',
        url: 'https://www.instagram.com/nr.th/',
        iconColor: '#c21362',
    },
]