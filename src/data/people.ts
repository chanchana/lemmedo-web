import Sample from '../assets/avatars/sample.png'

export interface People {
    name: string,
    avatarImageUrl: string
}

export const people = {
    chanchana: {
        name: 'Chanchana Wicha',
        avatarImageUrl: Sample,
    },
    sample: {
        name: 'Kokkai Kokkok',
        avatarImageUrl: Sample,
    },
}