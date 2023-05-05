export enum LevelEnum {
    LEVEL_1="level-1",
    LEVEL_2="level-2",
    LEVEL_3="level-3",
    LEVEL_4="level-4"
}

export interface ICourse{
    id: string,
    code?: string,
    name?: string,
    description?: string,
    image?: string,
    category?: string,
}