import SampleFace from '../assets/reviews/sample.png';
import { people, People } from './people';

export interface ReviewData {
    people: People,
    role: string,
    message: string,
}

const fake: ReviewData = {
    people: people.sample,
    role: 'Pordeetorjai\'s Client',
    message: 'l ldsr gluhrg sdurghusdl rghulsd gulrdshglu sdrlugrshrdlu glurdhglusd glddrg dsrlughlruds guldrshgulsdrg ulrdshgdsr guhdrgulr ulgshdlug',
}

export const reviews: ReviewData[] = [fake, fake, fake, fake, fake, fake, fake, fake]