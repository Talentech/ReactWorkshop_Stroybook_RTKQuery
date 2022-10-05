import { Box, Grid, PageTitle, Row, Typography } from "@talentech/components";
import React from "react";
import { useParams } from "react-router";

interface IPeopleProps {}

const People: React.FC<IPeopleProps> = (props) => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <PageTitle title={id} />
      <Grid container className="mt-4">
        <Row>
          <Grid>
            <Box paper>
              <Typography variant="h1">{id}</Typography>
            </Box>
          </Grid>
        </Row>
      </Grid>
    </>
  );
};

export default People;
