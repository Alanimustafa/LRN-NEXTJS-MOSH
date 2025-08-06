import React from "react";

export default function Help() {
    return (
        <main className="p-[34] font-light">
            <h1 className="text-3xl text-amber-500">HELP PAGE</h1>
            <div className="flex items-center justify-center h-screen">
               
                <pre className="text-amber-500 text-lg font-light">
                    <code className="text-amber-500 text-lg font-light">
                        This is a simple help page for the Next.js application. It provides assistance and guidance on how to use the application effectively.
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
    );
}