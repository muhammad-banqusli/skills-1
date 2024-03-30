
export type Id = string | number;

export type Column = {
    id: Id;
    title: string;
};

export interface Tech {
    id: Id;
    title: string;
    src: string;
    columnId: Id;
}

export const columns: Column[] = [
    {
        id: 90001,
        title: "Techs I've learned and can work with comfortabally",
    },
    {
        id: 90002,
        title: "Techs I'm familiar with",
    },
    {
        id: 90003,
        title: "Techs I look forward to learn in the near future",
    },
];

