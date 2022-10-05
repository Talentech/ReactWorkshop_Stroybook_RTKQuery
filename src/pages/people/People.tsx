import {
  useGetAllPeopleQuery,
  useGetPeopleByIdQuery,
} from "@store/features/starwars/starWarsSlice";
import { Box, Grid, PageTitle, Row, Typography } from "@talentech/components";
import React, { useEffect } from "react";
import { useParams } from "react-router";

interface IPeopleProps {}

const People: React.FC<IPeopleProps> = () => {
  const { id } = useParams<{ id: string }>();

  const { people } = useGetAllPeopleQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      people: (data || []).find((i) => i.id === id),
      ...rest,
    }),
  });

  const { data, isFetching } = useGetPeopleByIdQuery(id, {
    skip: Boolean(people),
  });

  const singlePeople = people || data;

  /*
  const people = useSelector((store) => singlePeopleSelector(store as any, id));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!people) {
      dispatch(fetchPeopleById(id));
    }
  }, []); */

  if (isFetching) {
    return <>Loading....</>;
  }

  return (
    <>
      <PageTitle title={id} />
      <Grid container className="mt-4">
        <Row>
          <Grid>
            <Box paper>
              <Typography variant="h1">{singlePeople.name}</Typography>
            </Box>
          </Grid>
        </Row>
      </Grid>
    </>
  );
};

export default People;
