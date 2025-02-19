import {IonBackButton,IonButtons,IonCheckbox,IonContent,IonHeader,IonItem,IonLabel,IonList,IonPage,IonTitle,IonToolbar} from '@ionic/react';
import { useParams } from 'react-router-dom';

import Store from '../../store';
import * as actions from '../../store/actions';
import * as selectors from '../../store/selectors';
  
  const ListItems = ({ list }) => {
    return (
      <IonList>
        {(list?.items || []).map((item, key) => (
          <ListItemEntry list={list} item={item} key={key} />
        ))}
      </IonList>
    );
  };
  
  const ListItemEntry = ({ list, item }) => (
    <IonItem onClick={() => actions.setDone(list, item, !item.done)}>
      <IonLabel>{item.name}</IonLabel>
      <IonCheckbox checked={item.done || false} slot="end" />
    </IonItem>
  );
  
  const MapsDetail = ({ match }) => {
    const lists = Store.useState(selectors.getLists);
    const params = useParams();
    const { listId } = params;
    const loadedList = lists.find(l => l.id === listId);
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/tabs/maps" />
            </IonButtons>
            <IonTitle>지도상세</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            내용이 들어갑니다.
        </IonContent>
      </IonPage>
    );
  };
  
  export default MapsDetail;
  