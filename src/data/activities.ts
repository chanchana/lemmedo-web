import { Image } from "./image";
import Sample from '../assets/activities/sample.jpg'
import Sample2 from '../assets/showcases/sample.jpg'

const fake: Image = {
    imageUrl: Sample,
    label: 'Sample label naja',
    year: '2021',
}

const fake2: Image = {
    imageUrl: Sample2,
    label: 'Sample label naja skaglkag akuehgkluaseg ase g',
    year: '2026',
}

export const fakeImage: Image = {
    imageUrl: Sample,
    label: 'Sample label naja',
}

export const activityImages: Image[] = [
    fake, fake2, fake, fake,fake, fake2, fake, fake,fake, fake, fake,fake, fake, fake,fake, fake, fake,fake, fake, fake,fake, fake, fake,fake, fake, fake,fake, fake, fake,
]