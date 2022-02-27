import React from "react";
import { Icon } from "../styles/icons";

export interface ContactData {
    icon: React.ReactNode;
    iconColor?: string;
    label: string;
    url: string;
    tooltip?: string;
}

const fake = {
    icon: Icon.Book,
    label: 'northja@get.com',
    url: 'https://www.agoda.com',
    tooltip: 'test',
    iconColor: '#3b5998',
}

const socialfake = {
    icon: Icon.FacebookF,
    label: 'northja@get.com',
    url: 'https://www.agoda.com',
    tooltip: 'test',
    iconColor: '#3b5998',
}

export const locationContact = 'Bangkok, Thailand'

export const mainContact = {
    name: 'Chanchana Wicha',
    phone: '+66 88 261 0421',
    email: 'wic.chanchana@gmail.com',
    location: 'Bangkok, Thailand, 10110',
}

export const contacts: ContactData[] = [
    fake, fake, fake
]

export const socialContacts: ContactData[] = [
    socialfake, socialfake, socialfake
]