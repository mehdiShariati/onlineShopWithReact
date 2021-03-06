import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config={
    apiKey: "AIzaSyCL7t2QBsIOT5UQDcj1GauQpgdtwq_58JI",
    authDomain: "onlineshop-9b22d.firebaseapp.com",
    databaseURL: "https://onlineshop-9b22d.firebaseio.com",
    projectId: "onlineshop-9b22d",
    storageBucket: "onlineshop-9b22d.appspot.com",
    messagingSenderId: "1043553902044",
    appId: "1:1043553902044:web:c6d0e229c94b16cdbd4319"
  };


  


  firebase.initializeApp(config);

  export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`); 
    const snapshot=await userRef.get();
   
    if(!snapshot.exists){

        const {displayName,email}=userAuth;
        const createdAt=new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log(error.message);
        }

     
    }
    return userRef;
 
}

    export const addCollectionAndDocuments=async (collectionKey,objectsToadd)=>{
        const collectionRef=firestore.collection(collectionKey);
        
        const batch=firestore.batch();
        objectsToadd.forEach(obj=>{
            const newDocRef=collectionRef.doc();
            batch.set(newDocRef,obj)
        })
      return await  batch.commit();


    }

    export const converCollectionsSnapshotToMap=snapshot=>{
     const transformedCollection= snapshot.docs.map(col=>{
         const {title,items}=col.data();

         return {
             routeName:encodeURI(title.toLowerCase()),
             id:col.id,
             title,
             items
         }

     })

     return transformedCollection.reduce((accumulator,collection)=>{

        accumulator[collection.title.toLowerCase()]=collection;

        return accumulator;

     },{})

    }

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  
  const provider=new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

    export const getCurrentUser=()=>{
        return new Promise((resolve,reject)=>{
            const unSubscribe=auth.onAuthStateChanged(userAuth=>{
                unSubscribe();
                resolve(userAuth)
            },reject)
        })
    }

  export default firebase;