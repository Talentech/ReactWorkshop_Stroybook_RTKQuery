import React, { useEffect } from "react";
import { Badge, Grid, PageTitle, Row, Table } from "@talentech/components";
import { useSelector } from "react-redux";
import { getOidcLanguage } from "@store/selectors/oidc";
import i18n from "../../i18n";
import { ITableData } from "src/@types/common";
import { IPeople } from "src/@types/star-wars";
import mockedData from "./data";

const MainPage: React.FC = () => {
  const oidcLang = useSelector(getOidcLanguage);
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

  const onRowClick = (data: IPeople) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <PageTitle title="React Workshop" />
      <Grid container>
        <Row>
          <Grid>
            <Table
              onRowClick={onRowClick}
              striped
              defaultColumnWidth={200}
              columns={columns}
              data={mockedData.results}
            />
          </Grid>
        </Row>
      </Grid>
    </>
  );
};

export default MainPage;
