import { ReactNode } from "react";
import { Toaster } from 'react-hot-toast';
const RootLayout = ({children}:{children:ReactNode})=>{
    return (
        <html lang="en"  suppressHydrationWarning={true} data-lt-installed="true">
            <body className="font-popins antialiased">
                <Toaster />
                {children}
            </body>
        </html>
    )
}

export default RootLayout