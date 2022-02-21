import type { NextPage } from 'next' 
import SEO from '../components/util/seo'
import FooterSection from '../components/layout/section/footer'
import HeaderSection from '../components/layout/section/header'

const Home: NextPage = () => {
    return (
        <>
            <SEO
                title='Home'
                description=''
                keywords={[
                    "Vox",
                    "Vox Bardot",
                    "Aspiring Developer",
                    "Developer",
                    "Resume",

                ]}
            />
            <FooterSection />
            <HeaderSection />
        </>
    );
}

export default Home