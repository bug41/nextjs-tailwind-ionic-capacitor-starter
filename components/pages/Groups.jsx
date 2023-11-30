import { Map, MapMarker } from "react-kakao-maps-sdk";
import Card from '../ui/Card';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
  IonModal,
} from '@ionic/react';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';
import Navbar from '../ui/Navbar';

const MapCard = ({ title, type, text, author, authorAvatar, image }) => (
  <Card className="my-4 mx-auto">
    <div className="h-32 w-full relative">
      <img className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full" src={image} alt="" />
    </div>
    <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
      <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">{type}</h4>
      <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2>
      <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">{text}</p>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 relative">
          <img src={authorAvatar} className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full" alt="" />
        </div>
        <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">{author}</h3>
      </div>
    </div>
  </Card>
);

const Groups = () => {

  const homeItems = Store.useState(getHomeItems);    

  return (
    <IonPage>

      <Navbar/>
      <IonContent className="ion-padding" fullscreen>        
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">그룹 목록</IonTitle>
          </IonToolbar>
        </IonHeader>        
        
        {homeItems.map((i, index) => (
          <MapCard {...i} key={index} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Groups;
