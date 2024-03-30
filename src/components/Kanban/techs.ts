import htmlLogo from "../../assets/html.png";
import cssLogo from "../../assets/css-3.png";
import jsLogo from "../../assets/Unofficial_JavaScript_logo_2.svg.png";
import tsLogo from "../../assets/typescript-official-svgrepo-com.svg";
import tailwindLogo from "../../assets/tailwind-svgrepo-com.svg";
import reactLogo from "../../assets/react.svg";
import nextLogo from "../../assets/next-js.svg";
import nestLogo from "../../assets/file_type_nestjs_icon_130355.svg";
import nodeLogo from "../../assets/file-type-node.svg";
import mongodbLogo from "../../assets/file-type-mongo.svg";
import prismaLogo from "../../assets/file-type-light-prisma.svg";
import mysqlLogo from "../../assets/mysql-original-wordmark.svg";
import dndLogo from "../../assets/dnd-kit-logo.svg";
import reduxtkLogo from "../../assets/redux-icon.svg";
import axiosLogo from "../../assets/axios.svg";
import muiLogo from "../../assets/icons8-material-ui-144.svg";
import socketIOLogo from "../../assets/socketio-icon.svg";
import githubLogo from "../../assets/github.png";
import zodLogo from "../../assets/zod.svg";
import gruntLogo from "../../assets/grunt-icon.svg";
import gulpLogo from "../../assets/gulp-js-icon.svg";
import jestLogo from "../../assets/jest-js-icon.svg";

import { Tech } from "../../types/Kanban";

interface Techs {
    html: Tech;
    css: Tech;
    javascript: Tech;
    typescript: Tech;
    react: Tech;
    next: Tech;
    tailwind: Tech;
    nodejs: Tech;
    mongodb: Tech;
    mysql: Tech;
    socket: Tech;
    prisma: Tech;
    nest: Tech;
    mui: Tech;
    reduxtk: Tech;
    github: Tech;
    axios: Tech;
    dndkit: Tech;
    zod: Tech;
    jest: Tech;
    gulp: Tech;
    grunt: Tech;
}

export const techs: Techs = {
    html: {
        id: 1,
        title: "HTML",
        src: htmlLogo,
        columnId: 90001,
    },
    css: {
        id: 2,
        title: "CSS",
        src: cssLogo,
        columnId: 90001,
    },
    javascript: {
        id: 3,
        title: "Javascript",
        src: jsLogo,
        columnId: 90001,
    },
    typescript: {
        id: 4,
        title: "Typescript",
        src: tsLogo,
        columnId: 90001,
    },
    react: {
        id: 5,
        title: "React Js",
        src: reactLogo,
        columnId: 90001,
    },
    next: {
        id: 6,
        title: "Next Js",
        src: nextLogo,
        columnId: 90001,
    },
    tailwind: {
        id: 7,
        title: "Tailwind",
        src: tailwindLogo,
        columnId: 90001,
    },
    nodejs: {
        id: 8,
        title: "Node Js",
        src: nodeLogo,
        columnId: 90001,
    },
    mongodb: {
        id: 9,
        title: "Mongo DB",
        src: mongodbLogo,
        columnId: 90001,
    },
    mysql: {
        id: 10,
        title: "Mysql DB",
        src: mysqlLogo,
        columnId: 90001,
    },
    socket: {
        id: 11,
        title: "Socket IO",
        src: socketIOLogo,
        columnId: 90002,
    },
    prisma: {
        id: 12,
        title: "Prisma",
        src: prismaLogo,
        columnId: 90002,
    },
    nest: {
        id: 13,
        title: "Nest Js",
        src: nestLogo,
        columnId: 90003,
    },
    mui: {
        id: 14,
        title: "Material UI",
        src: muiLogo,
        columnId: 90001,
    },
    reduxtk: {
        id: 15,
        title: "Redux Toolkit",
        src: reduxtkLogo,
        columnId: 90002,
    },
    github: {
        id: 16,
        title: "Github",
        src: githubLogo,
        columnId: 90001,
    },

    dndkit: {
        id: 17,
        title: "DND Kit",
        src: dndLogo,
        columnId: 90002,
    },
    jest: {
        id: 18,
        title: "Jest Js",
        src: jestLogo,
        columnId: 90003,
    },
    grunt: {
        id: 19,
        title: "Grunt Js",
        src: gruntLogo,
        columnId: 90003,
    },
    gulp: {
        id: 20,
        title: "Gulp Js",
        src: gulpLogo,
        columnId: 90003,
    },
    zod: {
        id: 21,
        title: "Zod",
        src: zodLogo,
        columnId: 90002,
    },
    axios: {
        id: 22,
        title: "Axios",
        src: axiosLogo,
        columnId: 90002,
    },
};

export const initTechs: Tech[] = [
    techs.html,
    techs.css,
    techs.javascript,
    techs.react,
    techs.typescript,
    techs.tailwind,
    techs.next,
    techs.nodejs,
    techs.mongodb,
    techs.mysql,
    techs.mui,
    techs.github,
    techs.axios,
    techs.dndkit,
    techs.socket,
    techs.prisma,
    techs.reduxtk,
    techs.zod,
    techs.nest,
    techs.gulp,
    techs.jest,
    techs.grunt,
];
