import SampleFace from '../assets/reviews/sample.png';

export interface ReviewData {
    name: string,
    role: string,
    message: string,
    image: string,
}

const fake: ReviewData = {
    name: 'Dr, Gadewadee',
    role: 'Pordeetorjai\'s Client',
    message: 'l ldsr gluhrg sdurghusdl rghulsd gulrdshglu sdrlugrshrdlu glurdhglusd glddrg dsrlughlruds guldrshgulsdrg ulrdshgdsr guhdrgulr ulgshdlug',
    image: SampleFace,
}

export const reviews: ReviewData[] = [fake, fake, fake, fake, fake, fake, fake, fake]