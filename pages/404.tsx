import SEO from "../components/util/seo"
import { Flex, Heading, Link } from "@chakra-ui/react"

export default function Error() {
    return (
        <>
            <SEO
                title="Error"
                description="Hmm... Something went wrong! Lets get you back on track :D"
                keywords={[
                    "Vox",
                    "Vox Bardot",
                    "Aspiring Developer",
                    "Developer",
                    "Portfolio",
                    "Resume",
                ]}

            />
            <Flex direction="column" height="100vh" alignItems="center" justifyContent="center">
                <Heading mb={6}>Hey, it seems something went wrong</Heading>
                <br></br>
                <Link href="/">
                    <Heading as="h3" size="lg">Lets get you back home :)</Heading>
                </Link>
            </Flex>
        </>
    )
}