import Card from '../ui/Card';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,  
  IonContent,  
} from '@ionic/react';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';
import Navbar from '../ui/Navbar';

import Slides from '../ui/Slides';
import Group from '../ui/Group';
import Shop from '../ui/Shop';
import News from '../ui/NewsList';
import NewsList from '../ui/NewsList';
import NewsSlides from '../ui/NewsSlides';

const HomeCard = ({ title, type, text, author, authorAvatar, image }) => (
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

const Home = () => {
  const homeItems = Store.useState(getHomeItems);    

  return (
    <IonPage>
      <Navbar/>      
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {/* 메인 상단 슬라이드 */}
        <Slides/>

        {/* 내 그룹 */}
        <Group/>

        {/* 신생샵 */}
        <Shop/>

        {/* 새 소식 && 커뮤니티 */}
        {/* <NewsSlides/> */}        
        <NewsList/>

      </IonContent>
    </IonPage>
  );
};

export default Home;
