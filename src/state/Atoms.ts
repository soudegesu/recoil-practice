import { atom } from "recoil";

export type Page = {
  title: string;
}

export const pageState = atom<Page>({
  key: 'pageState',
  default: {
    title: 'Recoil Sample'
  }
})

export type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
})
