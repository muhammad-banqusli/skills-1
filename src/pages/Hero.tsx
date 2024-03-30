import image from "../assets/image.jpeg";
import reactLogo from "../assets/react.svg";
import tsLogo from "../assets/typescript-official-svgrepo-com.svg";
import tailwindLogo from "../assets/tailwind-svgrepo-com.svg";

const Hero = () => {
    return (
        <section
            id="hero"
            className="section-min-height flex items-center justify-center flex-col lg:flex-row p-4"
        >
            <h1 className="font-titles hello-world text-nowrap p-4">
                Hello World!
            </h1>
            <div className="flex items-center flex-col p-4 gap-6">
                <img
                    src={image}
                    alt="Mohammad Nour"
                    className="rounded-full h-52 image-border"
                />
                <h2 className="flex-1 text-2xl">Hello and Welcome</h2>

                <p className="text-2xl">
                    I&apos;m Mohammad Nour and this website is designated to
                    demonstrate some of my skills as a front-end web developer.
                </p>
                <div className="flex items-center flex-col text-2xl gap-3">
                    <p>Techonlogies Used:</p>
                    <div className="flex gap-3">
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
                    </div>
                </div>
                <p>
                    Any other third-party librarie I may use I will mention it in the
                    component I used it in.
                </p>
            </div>
        </section>
    );
};
export default Hero;
