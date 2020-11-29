import { Box, Grid } from "@material-ui/core";
import React, { FC, Suspense } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import TodoList from "../components/todo/TodoList";
import { Page, pageState } from "../state/Atoms";

const TopPage: FC = () => {
  const numOfTodoList = 4;
  const { title } = useRecoilValue<Page>(pageState);

  return (
    <Box marginTop={10}>
      <Suspense fallback={null}>
        <Box>{title}</Box>
        <Grid container spacing={2}>
        { [...Array(numOfTodoList)].map((_, i) => <RecoilRoot key={i}><Grid ><TodoList/></Grid></RecoilRoot>)}
        </Grid>
      </Suspense>
    </Box>
  );
}

export default TopPage;