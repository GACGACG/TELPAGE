export const metadata = {
    title: 'WebTel'
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <link rel="icon" href="/favicon.ico" />
            <body suppressHydrationWarning={true}>
                {children}
            </body>
        </html>
    );
}