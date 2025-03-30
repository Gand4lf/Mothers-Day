'use client';

export default function InteractiveCard() {
    return (
        <div className="max-w-2xl w-full mx-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transform hover:scale-102 transition-all duration-500 border border-pink-100">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-pink-200 to-pink-300 p-8 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h1 className="text-5xl font-bold text-pink-800 mb-3 animate-fade-in">
                            Happy Mother&apos;s Day
                        </h1>
                        <p className="text-pink-700 italic text-lg font-medium">
                            To the most amazing mum in the world
                        </p>
                    </div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9InJnYmEoMjU1LCAxOTIsIDIwMywgMC4yKSIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
                </div>

                {/* Card Content */}
                <div className="p-10 space-y-8">
                    {/* Decorative Elements */}
                    <div className="flex justify-center">
                        <div className="relative w-48 h-48">
                            <svg
                                className="w-full h-full animate-float"
                                viewBox="0 0 512 512"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 71.374 17.742 93.6 45.647C278.226 81.742 313.201 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.347-177.836 241.694L256 448z"
                                    className="fill-pink-400"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="text-center space-y-6 max-w-xl mx-auto">
                        <p className="text-2xl text-gray-700 font-medium leading-relaxed">
                            Dear Mum,
                        </p>
                        <p className="text-gray-600 text-lg leading-loose">
                            Thank you for your endless love, patience, and support.
                            You make every day brighter and your strength inspires me every day.
                        </p>
                        <p className="text-xl text-pink-600 font-semibold mt-6">
                            With all my love ❤️
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 