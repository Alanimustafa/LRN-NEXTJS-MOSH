import React from "react"

export default function about () {
    return (
        <main className="p-[34] font-light">
            <h1 className="text-3xl text-amber-500">ABOUT PAGE</h1>
            <div className="flex items-center justify-center h-screen">
                <div
                    className="w-[640px] h-[480px] bg-cover bg-center rounded-lg shadow-lg">
                </div>
                <pre className="text-amber-500 text-lg font-light">
                    <code className="text-amber-500 text-lg font-light">
                        This is a simple about page for the Next.js application. It provides information about the application and its features.
                        <br />
                        <br />
                        The page is styled using Tailwind CSS classes to create a visually appealing layout.
                        <br />
                        <br />
                        You can customize this page further by adding more content, images, or links as needed.
                    </code>
                </pre>
            </div>
        </main>
    )
}