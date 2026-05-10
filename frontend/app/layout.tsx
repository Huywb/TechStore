import { ReactNode } from "react";

const RootLayout = ({children}:{children:ReactNode})=>{
    return (
        <html lang="en"  suppressHydrationWarning={true} data-lt-installed="true">
            <body className="font-popins antialiased">
                {children}
            </body>
        </html>
    )
}

export default RootLayout