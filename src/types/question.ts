export interface IAnswer {
    id: string;
    text: string;
    isTrue: boolean;
}

export interface IQuestion {
    id: string;
    name: string;
    answers: IAnswer[];
}

export interface IQuiz {
    name: string;
    questions: IQuestion[];
}
