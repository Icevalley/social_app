import { observer } from "mobx-react-lite";
import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import Navbar from "../../../app/layout/navbar";
import { useStore } from "../../../app/stores/store";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

export default observer (function ActivityDetails() {

  const {activityStore} = useStore();
  const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
  const {id} = useParams()

  useEffect(() => {
    if (id) loadActivity(id)
  }, [id, loadActivity])

  if (loadingInitial || !activity) return <LoadingComponent/>;

    return (
      <Fragment>
        <Navbar />
        <Container style={{ marginTop: '7em'}}>
       <Grid>
        <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity}/>
        <ActivityDetailedChat />
        </Grid.Column>
        <Grid.Column width={6}>
          <ActivityDetailedSidebar />
        </Grid.Column>
       </Grid>
       </Container>
       </Fragment>
)})