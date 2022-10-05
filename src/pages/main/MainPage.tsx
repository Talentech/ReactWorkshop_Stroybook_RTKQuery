import React, { useEffect } from "react";
import {
  Badge,
  Button,
  Grid,
  PageTitle,
  Row,
  Table,
} from "@talentech/components";
import { useDispatch, useSelector } from "react-redux";
import { getOidcLanguage } from "@store/selectors/oidc";
import i18n from "../../i18n";
import { ITableData } from "src/@types/common";
import { IPeople } from "src/@types/star-wars";
import { useHistory } from "react-router";
import { AppRoutes } from "@utils/enums";
import {
  peopleApi,
  useAddPeopleMutation,
  useGetAllPeopleQuery,
} from "@store/features/starwars/starWarsSlice";

const MainPage: React.FC = () => {
  const oidcLang = useSelector(getOidcLanguage);
  const { push } = useHistory();

  const dispatch = useDispatch();

  const { people } = useGetAllPeopleQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      people: data || [],
      ...rest,
    }),
  });

  const [addPeople] = useAddPeopleMutation();

  const onAddPeople = () => {
    addPeople({})
      .unwrap()
      .then((r) => {
        dispatch(
          peopleApi.util.updateQueryData(
            "getAllPeople",
            undefined,
            (draftPosts) => {
              console.log(draftPosts);
              draftPosts.push(r as any);
            }
          )
        );
      });
  };

  /*
  const dispatch = useDispatch();

  const peopleState = useSelector(allPeopleSelector);
  const peopleLoadingState = useSelector(peopleLoadingStateSelector);

  console.log(peopleLoadingState);

  useEffect(() => {
    dispatch(fetchAllPeople());
  }, []);
  */

  useEffect(() => {
    i18n.changeLanguage(oidcLang);
  }, [oidcLang]);

  const columns = [
    {
      Header: "name",
      accessor: "name",
    },
    {
      Header: "height",
      accessor: "height",
    },
    {
      Header: "mass",
      accessor: "mass",
    },
    {
      Header: "films",
      accessor: "films",
      Cell: ({ value }: ITableData<string[], IPeople>) => {
        return value.map((v, index) => <Badge label={index} key={index} />);
      },
    },
  ];

  const onRowClick = (data: IPeople & { id: string }) => {
    push(AppRoutes.People.replace(":id", data.id));
  };

  return (
    <>
      <PageTitle title="React Workshop" />
      <Button onClick={onAddPeople} label="ADD" />
      <Grid container className="mt-4">
        <Row>
          <Grid>
            <Table
              onRowClick={onRowClick}
              striped
              defaultColumnWidth={200}
              columns={columns}
              data={people}
            />
          </Grid>
        </Row>
      </Grid>
    </>
  );
};

export default MainPage;
