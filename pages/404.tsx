import SEO from "../components/util/seo"

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
            <div>Hey, something went wrong, lets go back to the main page</div>
        </>
    )
}