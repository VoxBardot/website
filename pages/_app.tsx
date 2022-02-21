import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"

export default function App({ Component, PageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Component {...PageProps} />
        </ChakraProvider>
    )
}