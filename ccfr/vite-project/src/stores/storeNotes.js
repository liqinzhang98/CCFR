import { defineStore } from 'pinia'
import {collection,getDocs,doc,setDoc,addDoc,getDoc,updateDoc} from 'firebase/firestore'
import { db } from '../firebase'

export const useStoreNotes = defineStore('storeNotes',{
    state: () => {
        return {
            notes: []
        }
    },
    getters: {

    },
    actions:{
    async getFire(){
             const query = await getDocs(collection(db,'notes'))
             query.forEach((doc)=>{
                let note = doc.data().name
                console.log(note)
             })
        },
    async getNotess(id){
        const docRef = doc(db, 'application',id);
        const docSnap =  await getDoc(docRef);
        console.log(docSnap.id);
        console.log(docSnap.data().name)
    },
    async submitApp(id){
        const docRef = doc(db, 'application',id);
        const docSnap =  await getDoc(docRef);
        await addDoc(collection(db, "submitApp"),docSnap.data());
    },
    async inputNoteFour(id,condition1,condition2,condition3,condition4){
        await updateDoc(doc(db,'application',id),{
            condition1:condition1,
            condition2:condition2,
            condition3:condition3,
            condition4:condition4
        },{ ignoreUndefinedProperties: true },{ capital: true }, { merge: true })
    },
    async inputNoteThree(id,abstract,specificAims,backgroundAndSignificance,preliminaryData,studyDesign,selectionCriteria){
        let date = new Date();
        date.setDate(date.getDate() + 3 * 7)
        console.log(date.getTime());
        await updateDoc(doc(db,'application',id),{
            dueDate: date.getTime(),
            abstract:abstract,
            specificAims:specificAims,
            backgroundAndSignificance:backgroundAndSignificance,
            preliminaryData:preliminaryData,
            studyDesign:studyDesign,
            selectionCriteria:selectionCriteria
        },{ ignoreUndefinedProperties: true },{ capital: true }, { merge: true })
    },
    async inputNoteTwo(id,con1,con2,con3,con4,con5,con6,con7,con8,Name,Affiliation){
        await updateDoc(doc(db,'application',id),{
            con1:con1,
            con2:con2,
            con3:con3,
            con4:con4,
            con5:con5,
            con6:con6,
            con7:con7,
            con8:con8,
            Name:Name,
            Affiliation:Affiliation
        },{ ignoreUndefinedProperties: true },{ capital: true }, { merge: true })
    },
    async inputNote(id,name,job,institution,department,address,city,zip,country,title){
            // let currenDate = new Date().getTime();
            //  let appid = currenDate.toString()
            console.log(id)
            await updateDoc(doc(db,'application',id),{
                name: name,
                job:job,
                userId:id,
                institution:institution,
                department:department,
                address:address,
                city:city,
                zip:zip,
                country:country,
                title:title,
                status:"pending",
                voteAccept:0,
                voteReject:0
            },{ ignoreUndefinedProperties: true },{ capital: true }, { merge: true },)
        },
        async newNote(id,name,job,institution,department,address,city,zip,country,title){
            // let currenDate = new Date().getTime();
            //  let appid = currenDate.toString()
            console.log(id)
            await setDoc(doc(db,'application',id),{
                name: name,
                job:job,
                userId:id,
                institution:institution,
                department:department,
                address:address,
                city:city,
                zip:zip,
                country:country,
                title:title,
                status:"pending",
                voteAccept:0,
                voteReject:0

            },{ ignoreUndefinedProperties: true },{ capital: true }, { merge: true },)
        }

    }
})