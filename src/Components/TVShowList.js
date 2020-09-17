import React from "react";
import { Grid } from "semantic-ui-react";
import TVShow from "./TVShow";

function TVShowList(props) {
  const mapAllShows = (props) => {
    if (!!props.searchTerm) {
      return props.shows.map((s) => {
        if (s.name.toLowerCase().includes(props.searchTerm)) {
          return <TVShow show={s} key={s.id} selectShow={props.selectShow} />;
        }
      });
    }
    return props.shows.map((s) => (
      <TVShow show={s} key={s.id} selectShow={props.selectShow} />
    ));
  };

  return (
    <div className="TVShowList">
      <Grid>{mapAllShows(props)}</Grid>
    </div>
  );
}

export default TVShowList;
