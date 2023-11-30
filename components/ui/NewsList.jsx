import React from 'react';
import { IonButton, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';


const NewsList = () => {
  return (
    <div className='mx-2'>        
        <IonList>
            <IonListHeader className='pl-0'>
                <IonLabel className="font-bold text-xl text-gray-800 dark:text-gray-100">
                    새 소식
                </IonLabel>
                <IonButton>전체보기</IonButton>
            </IonListHeader>
            <IonItem>
                <IonLabel>Pokémon Yellow</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Mega Man X</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>The Legend of Zelda</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Pac-Man</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Super Mario World</IonLabel>
            </IonItem>
        </IonList>              
    </div>
  )
};

export default NewsList;
