import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title : string;
    containerStyles?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}
export interface HighlighterProps {
    title : string;
    containerStyles?:string;
}
export interface CourseContainerProps {
    image : string;
    title : string;
}
export interface HomePageProps {
    image : string;
    title : string;
    subtext : string;
}
export interface CardProps {
    image : string;
    title : string;
    subtext : string;
}