export const Style = {
    Color: {
        Dark100: '#0A0A0C',
        Dark75: '#1A1923',
        Dark50: '#28243E',
        Dark25: '#423C66',

        Light100: '#E9E9EC',
        Light75: '#C9C8CF',
        Light50: '#A9A7B2',
        Light25: '#797979',

        Cyan: '#0BB2CB',
        Yellow: '#FFC761',
        Red: '#FF1F00',
        Purple: '#C838EC',
        Green: '#00E24A',
        Orange: '#F8781D',
    },
    Typography: {
        FontFamily: `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-sarif`,
        Desktop: {
            RootFontSize: '16px',
            Heading1: 'font-style: normal;font-weight: bold;font-size: 38px;line-height: 110%;',
            Heading2: 'font-style: normal;font-weight: bold;font-size: 24px;line-height: 150%;',
            Heading3: 'font-style: normal;font-weight: bold;font-size: 18px;line-height: 150%;',
            Heading4: 'font-style: normal;font-weight: bold;font-size: 16px;line-height: 150%;',
            Caption: 'font-style: normal;font-weight: normal;font-size: 16px;line-height: 150%;',
            Body1: 'font-style: normal;font-weight: normal;font-size: 16px;line-height: 150%;',
            Body2: 'font-style: normal;font-weight: normal;font-size: 14px;line-height: 140%;',
            Body3: 'font-style: normal;font-weight: normal;font-size: 12px;line-height: 130%;',
            Label: 'font-style: normal;font-weight: bold;font-size: 14px;line-height: 110%;',
            Button1: 'font-style: normal;font-weight: bold;font-size: 18px;line-height: 110%;',
            Button2: 'font-style: normal;font-weight: bold;font-size: 16px;line-height: 110%;',
        },
        Mobile: {
            RootFontSize: '12px',
        }
    },
    Gradient: {
        YellowToRed: 'linear-gradient(264.59deg, #FF3C7C -3.99%, #FFC761 101.34%)',
        PurpleToPink: 'linear-gradient(267.21deg, #EC38E2 -8.81%, #7C24AF 104.44%)',
        GreenToCyan: 'linear-gradient(267.21deg, #0BB2CB -8.81%, #00C240 104.44%)',

        FadeBlackBottom: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 56.42%, rgba(0, 0, 0, 0.3) 100%)',
        FadeDarkRight: 'linear-gradient(270deg, #1A1923 0%, rgba(26, 25, 35, 0) 100%)',
        FadeDarkLeft: 'linear-gradient(90deg, #1A1923 0%, rgba(26, 25, 35, 0) 100%)',
    },
    Spacing: {
        XS: '0.5rem', // 8px
        S: '0.75rem', // 12px
        M: '1rem', // 16px
        L: '1.5rem', // 24px
        XL: '2rem', // 32px
        XXL: '3rem', // 48px
        XXXL: '4rem',
    },
    Css: {
        MaxContainerWidth: '1270px',
        BorderRadius: '8px',
        BoxShadow: {
            S: '0px 8px 16px rgba(0, 0, 0, 0.25)',
            M: '0px 8px 32px rgba(0, 0, 0, 0.65)',
            L: '0px 8px 72px rgba(0, 0, 0, 0.90)',
        },
        HoverOutlineBoxShadow: '0 0 0 4px #797979',
    },
};