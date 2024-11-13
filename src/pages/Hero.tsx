import image from "../assets/image.jpeg";
import reactLogo from "../assets/react.svg";
import tsLogo from "../assets/typescript-official-svgrepo-com.svg";
import tailwindLogo from "../assets/tailwind-svgrepo-com.svg";
import dndLogo from "../assets/dnd-kit-logo.svg"
import { AnimatedText } from "../components";

const Hero = () => {
    return (
        <section
            id="hero"
            className="section-min-height flex items-center justify-center flex-col p-4 scroll-m-10"
        >
            {/* <h1 className="font-titles hello-world text-nowrap p-4">
                Hello World!
            </h1> */}
            <AnimatedText />
            <div className="flex flex-col md:flex-row-reverse items-center p-4 gap-6">
                <div className="lg:w-1/4">
                    <img
                        src={image}
                        alt="Mohammad Nour"
                        className="rounded-full h-52 w-52 image-border"
                    />
                </div>
                <div className="flex flex-col md:w-2/3 w-3/4 gap-6">
                    <h2 className="flex-1 text-2xl text-center md:text-left">Hello and Welcome</h2>

                    <p className="text-2xl text-center md:text-left">
                        I&apos;m Mohammad Nour and this website is designated to
                        demonstrate some of my skills as a front-end web
                        developer.
                    </p>
                    <div className="flex flex-col lg:flex-row text-2xl gap-6 text-center md:text-left">
                        <p>Techonlogies Used:</p>
                        <div className="flex flex-col md:flex-row gap-6">
                            <img
                                src={reactLogo}
                                alt="React"
                                className="h-10"
                                title="React"
                            />
                            <img
                                src={tsLogo}
                                alt="Typescript"
                                className="h-10"
                                title="Typescript"
                            />
                            <img
                                src={tailwindLogo}
                                alt="tailwind"
                                className="h-10"
                                title="Tailwind"
                            />
                            <img
                                src={dndLogo}
                                alt="dnd kit"
                                className="h-10"
                                title="dnd kit"
                            />
                        </div>
                    </div>
                    <p className="text-center md:text-left">
                        No other third-party components or libraries used in this website.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Hero;
