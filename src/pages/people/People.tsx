import {
  fetchPeopleById,
  singlePeopleSelector,
} from "@store/features/starwars/starWarsSlice";
import { Box, Grid, PageTitle, Row, Typography } from "@talentech/components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

interface IPeopleProps {}

const People: React.FC<IPeopleProps> = (props) => {
  const { id } = useParams<{ id: string }>();

  const people = useSelector((store) => singlePeopleSelector(store as any, id));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!people) {
      dispatch(fetchPeopleById(id));
    }
  }, []);

  if (!people) {
    return <>Loading....</>;
  }

  return (
    <>
      <PageTitle title={id} />
      <Grid container className="mt-4">
        <Row>
          <Grid>
            <Box paper>
              <Typography variant="h1">{people.name}</Typography>
            </Box>
          </Grid>
        </Row>
      </Grid>
    </>
  );
};

export default People;
