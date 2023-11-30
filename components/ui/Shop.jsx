import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonLabel, IonListHeader, IonRow } from '@ionic/react';

import styles from '../../styles/shop.module.css'

const Group = () => {
  return (
    <div className='mx-2'>        
        <IonListHeader className='pl-0'>
            <IonLabel className="font-bold text-xl text-gray-800 dark:text-gray-100">
                샵
            </IonLabel>
            <IonButton routerLink={`/tabs/maps`}>전체보기</IonButton>
        </IonListHeader>
        <IonGrid>
            <IonRow>
                <IonCol className={styles.myIonCol}>1</IonCol>
                <IonCol className={styles.myIonCol}>2</IonCol>
                <IonCol className={styles.myIonCol}>3</IonCol>
            </IonRow>
            <IonRow>
                <IonCol className={styles.myIonCol}>1</IonCol>
                <IonCol className={styles.myIonCol}>2</IonCol>
                <IonCol className={styles.myIonCol}>3</IonCol>
            </IonRow>
            <IonRow>
                <IonCol className={styles.myIonCol}>1</IonCol>
                <IonCol className={styles.myIonCol}>2</IonCol>
                <IonCol className={styles.myIonCol}>3</IonCol>
            </IonRow>
        </IonGrid>                
    </div>
  )
};

export default Group;
