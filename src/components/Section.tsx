import { ReactNode } from "react";

type PropTypes = {
    children: ReactNode | ReactNode[];
    title: string;
    paragraph: string;
    id: string;
};

const Section = ({ children, title, paragraph, id }: PropTypes) => {
    return (
        <section
            className="section-min-height text-center flex flex-col items-center gap-5 pt-10 scroll-m-8"
            id={id}
        >
            <h2 className="text-xl font-titles">{title}</h2>
            {paragraph && (
                <p className="text-center text-sm md:text-lg mb-3">
                    {paragraph}
                </p>
            )}
            {children}
        </section>
    );
};
export default Section;
